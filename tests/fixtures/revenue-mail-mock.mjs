import { appendFile } from "node:fs/promises";

// Loaded only by the isolated contract test, never imported by production code.
globalThis.fetch = async (input, options) => {
  if (String(input) !== "https://api.resend.com/emails") throw new Error("Unexpected network request in isolated mail test");
  const message = JSON.parse(options.body);
  if (!message.to.every((address) => address.endsWith("@example.invalid"))) throw new Error("Non-fixture recipient blocked");
  if (message.reply_to === "fail@example.invalid") return new Response("mock delivery failure", { status: 503 });
  await appendFile(process.env.REVENUE_MAIL_LOG, `${JSON.stringify(message)}\n`, "utf8");
  return Response.json({ id: "mock-mail-only" });
};
