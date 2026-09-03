const required = [
  "RESEND_API_KEY",
  "CONTACT_FROM_EMAIL",
  "CONTACT_TO_EMAIL",
  "CONTACT_REPLY_TO_EMAIL",
  "SCAN_RESULT_SIGNING_SECRET",
  "PUBLIC_GA_MEASUREMENT_ID",
];
const missing = required.filter((name) => !process.env[name]?.trim());

if (missing.length > 0) {
  console.error(`Production environment is incomplete: ${missing.join(", ")}`);
  console.error("Configure the missing server-only variables in Vercel before promoting the deployment.");
  process.exit(1);
}

for (const name of ["CONTACT_FROM_EMAIL", "CONTACT_TO_EMAIL", "CONTACT_REPLY_TO_EMAIL"]) {
  const value = process.env[name].trim();
  const address = value.match(/<([^>]+)>/)?.[1] ?? value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
    console.error(`${name} is not a valid email address.`);
    process.exit(1);
  }
}

if (process.env.SCAN_RESULT_SIGNING_SECRET.trim().length < 32) {
  console.error("SCAN_RESULT_SIGNING_SECRET must contain at least 32 characters.");
  process.exit(1);
}

if (Object.keys(process.env).some((name) => name.startsWith("PUBLIC_RESEND"))) {
  console.error("The Resend API key must never use Astro's PUBLIC_ prefix.");
  process.exit(1);
}

if (!/^G-[A-Z0-9]+$/.test(process.env.PUBLIC_GA_MEASUREMENT_ID.trim())) {
  console.error("PUBLIC_GA_MEASUREMENT_ID must be a valid GA4 measurement ID such as G-XXXXXXXXXX.");
  process.exit(1);
}

console.log("Production contact delivery and consent-gated GA4 are configured.");
