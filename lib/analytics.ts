/**
 * Consent-ready analytics placeholder. Nothing is collected and no third-party
 * script is loaded. See "Analytics" in docs/README.md before enabling anything:
 * adding a provider needs a consent banner, a privacy policy update and a CSP
 * change in security-headers.json.
 */
export function hasAnalyticsConsent(): boolean {
  return false;
}

export function trackEvent(name: string): void {
  if (!hasAnalyticsConsent()) return;
  void name;
}
