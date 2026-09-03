import { spawn } from "node:child_process";

const npmCli = process.env.npm_execpath;
if (!npmCli) throw new Error("npm_execpath is unavailable; run verification through npm run verify");
const origin = "http://127.0.0.1:4399";

const run = (command, args) => new Promise((resolve, reject) => {
  const child = spawn(command, args, { stdio: "inherit", env: process.env });
  child.once("error", reject);
  child.once("exit", (code, signal) => {
    if (code === 0) resolve();
    else reject(new Error(`${command} ${args.join(" ")} exited with ${signal ?? code}`));
  });
});
const runNpm = (args) => run(process.execPath, [npmCli, ...args]);

const waitForServer = async (server) => {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (server.exitCode !== null) throw new Error("Production server exited before validation started");
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // The standalone server may still be binding its port.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Production server did not become ready at ${origin}`);
};

await runNpm(["run", "static:check"]);
await runNpm(["run", "crawler:check"]);
await runNpm(["run", "security:check"]);
await runNpm(["run", "build"]);

try {
  await fetch(origin);
  throw new Error(`Verification port is already in use: ${origin}`);
} catch (error) {
  if (error instanceof Error && error.message.startsWith("Verification port")) throw error;
}

const server = spawn(process.execPath, ["dist/server/entry.mjs"], {
  stdio: "inherit",
  env: { ...process.env, HOST: "127.0.0.1", PORT: "4399" },
});

const stopServer = () => {
  if (server.exitCode === null) server.kill();
};

process.once("SIGINT", () => {
  stopServer();
  process.exit(130);
});
process.once("SIGTERM", () => {
  stopServer();
  process.exit(143);
});

try {
  await waitForServer(server);
  await run(process.execPath, ["scripts/validate-seo.mjs", origin]);
  process.env.TEST_ORIGIN = origin;
  // These browser tests include network and animation timing assertions; keep
  // the release verification deterministic while the ad-hoc suite stays parallel.
  await runNpm(["run", "test:visual", "--", "--workers=1"]);
  console.log("Production verification passed.");
} finally {
  stopServer();
}
