import { createHmac, timingSafeEqual } from "node:crypto";
import { deflateRawSync, inflateRawSync } from "node:zlib";

import type { ScanSnapshot } from "../ai-readiness";

const TOKEN_VERSION = 1;
const TOKEN_TTL_SECONDS = 30 * 24 * 60 * 60;
const MAX_COMPRESSED_BYTES = 32_000;

interface TokenEnvelope {
  version: number;
  expiresAt: number;
  snapshot: ScanSnapshot;
}

const signingSecret = () => {
  const configured = process.env.SCAN_RESULT_SIGNING_SECRET?.trim();
  if (configured) return configured;
  if (process.env.NODE_ENV !== "production") return "local-ai-readiness-result-signing-key";
  throw new Error("scan_result_signing_not_configured");
};

const signatureFor = (payload: string) =>
  createHmac("sha256", signingSecret()).update(payload).digest("base64url");

export const createScanResultToken = (snapshot: ScanSnapshot) => {
  const envelope: TokenEnvelope = {
    version: TOKEN_VERSION,
    expiresAt: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
    snapshot,
  };
  const payload = deflateRawSync(Buffer.from(JSON.stringify(envelope), "utf8"), { level: 9 })
    .toString("base64url");
  return `${payload}.${signatureFor(payload)}`;
};

export const verifyScanResultToken = (token: string): ScanSnapshot => {
  if (!token || token.length > 48_000) throw new Error("invalid_scan_result_token");
  const [payload, suppliedSignature, extra] = token.split(".");
  if (!payload || !suppliedSignature || extra) throw new Error("invalid_scan_result_token");

  const expectedSignature = signatureFor(payload);
  const expectedBuffer = Buffer.from(expectedSignature);
  const suppliedBuffer = Buffer.from(suppliedSignature);
  if (
    expectedBuffer.length !== suppliedBuffer.length
    || !timingSafeEqual(expectedBuffer, suppliedBuffer)
  ) {
    throw new Error("invalid_scan_result_token");
  }

  const compressed = Buffer.from(payload, "base64url");
  if (compressed.byteLength > MAX_COMPRESSED_BYTES) throw new Error("invalid_scan_result_token");
  const envelope = JSON.parse(inflateRawSync(compressed).toString("utf8")) as TokenEnvelope;
  if (
    envelope.version !== TOKEN_VERSION
    || !Number.isFinite(envelope.expiresAt)
    || envelope.expiresAt < Math.floor(Date.now() / 1000)
    || !envelope.snapshot?.scanId
    || !envelope.snapshot?.finalUrl
    || !envelope.snapshot?.categories
    || !envelope.snapshot?.interpretation
    || !["de", "en"].includes(envelope.snapshot.locale)
  ) {
    throw new Error("invalid_or_expired_scan_result_token");
  }
  return envelope.snapshot;
};

export const scanResultPath = (locale: ScanSnapshot["locale"], token: string) => {
  const pathname = locale === "en" ? "/en/ai-readiness-result/" : "/ki-readiness-ergebnis/";
  return `${pathname}?result=${encodeURIComponent(token)}`;
};

export const scanResultTokenTtlDays = TOKEN_TTL_SECONDS / 86_400;
