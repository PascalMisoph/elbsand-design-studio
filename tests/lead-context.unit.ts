import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeLeadContext, safePath, safeReferrer } from "../src/lib/lead-context";

test("lead context retains bounded commercial attribution without URL queries", () => {
  const result = normalizeLeadContext({ offer_type: "geo_audit", source_page: "/geo-audit/", landing_page: "/", referrer: "https://example.org/story?email=private#fragment", utm_source: "partner", utm_campaign: "revenue_sprint", cta_id: "audit_hero", funnel_path: ["/", "/geo-audit/"], attribution_mode: "consented_session" });
  assert.equal(result.offer_type, "geo_audit");
  assert.equal(result.referrer, "https://example.org");
  assert.equal(result.utm_campaign, "revenue_sprint");
  assert.deepEqual(result.funnel_path, ["/", "/geo-audit/"]);
});
test("untrusted labels, paths, protocols and arbitrary payload keys are excluded", () => {
  const result = normalizeLeadContext({ offer_type: "fake", source_page: "/?email=private@example.org", landing_page: "//evil.org/", utm_campaign: "private@example.org", cta_id: "<script>", email: "private@example.org", funnel_path: Array(20).fill("/geo-audit/") });
  assert.equal(result.offer_type, "general");
  assert.equal(result.source_page, "");
  assert.equal(result.landing_page, "");
  assert.equal(result.utm_campaign, "");
  assert.equal(result.cta_id, "");
  assert.equal(result.funnel_path.length, 8);
  assert.equal("email" in result, false);
  assert.equal(safeReferrer("javascript:alert(1)"), "");
  assert.equal(safeReferrer("https://user:secret@example.org"), "");
  assert.equal(safePath("/en/geo-audit/"), "/en/geo-audit/");
});
