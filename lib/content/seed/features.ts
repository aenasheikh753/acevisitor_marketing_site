import type { Feature } from "@/lib/types";

const module_ = (sortOrder: number, slug: string, name: string, icon: string, description: string): Feature => ({
  slug,
  kind: "feature",
  name,
  icon,
  description,
  benefits: [],
  sortOrder,
});

const solution = (
  sortOrder: number,
  slug: string,
  eyebrow: string,
  name: string,
  description: string,
  benefits: string[],
  image: string,
  imageAlt: string,
): Feature => ({ slug, kind: "solution", eyebrow, name, icon: "", description, benefits, image, imageAlt, sortOrder });

export const features: Feature[] = [
  module_(1, "pre-registration", "Pre-registration", "calendar", "Hosts schedule visits in advance with purpose, site, duration and required documents."),
  module_(2, "kiosk-check-in", "Kiosk check-in", "monitor", "Guided self-service arrival on tablets, with photo capture and digital signatures."),
  module_(3, "identity-verification", "Identity verification", "id", "Confirm visitor identity, capture a photo and apply internal screening rules."),
  module_(4, "badge-issuance", "Badge issuance", "badge", "Print photo badges carrying zone access, escort status and validity window."),
  module_(5, "host-notifications", "Host notifications", "userCheck", "Instant alerts by mobile and email with approve, decline or delegate actions."),
  module_(6, "check-out", "Check-out", "logout", "Close visits by QR scan, kiosk tap or reception action, with automatic end-of-day rules."),
  module_(7, "audit-reporting", "Audit & reporting", "clipboardList", "Searchable visitor history, evacuation lists and exportable compliance reports."),
  module_(8, "contractor-management", "Contractor management", "contractor", "Recurring access for contractors with document expiry tracking and escort rules."),
  module_(9, "configuration", "Configuration", "settings", "Visitor types, document packs, approval chains and branding, per site or globally."),
  solution(
    1,
    "multi-site-programs",
    "Distributed operations",
    "Multi-site visitor programs",
    "Standardize how every building receives visitors, while giving each site control of the details it owns.",
    ["Global visitor types, documents and approval chains", "Per-site hours, zones, escort rules and badge layouts", "Estate-wide reporting with per-building drill-down"],
    "/images/product/multi-site.webp",
    "Illustrative overview of visitors on site at six locations, connected to one shared policy. Names and figures are fictional.",
  ),
  solution(
    2,
    "contractor-vendor-access",
    "Third-party access",
    "Contractor and vendor access",
    "Give recurring workers controlled, time-bound access without losing track of inductions and insurance documents.",
    ["Recurring visit schedules with validity windows", "Document expiry tracking that blocks non-compliant arrivals", "Escort requirements and restricted zone flags on the badge"],
    "/images/product/host-approval.webp",
    "Illustrative phone showing a host approval request beside a visitor's arrival progress. Names are fictional.",
  ),
  solution(
    3,
    "front-desk-operations",
    "Daily welcome",
    "Front desk operations",
    "Reduce queueing at reception and give front desk teams a clear, auditable workflow for every arrival.",
    ["Expected-arrivals list with one-tap check-in", "Walk-in registration with immediate host notification", "Badge reprint, early check-out and no-show handling"],
    "/images/product/front-desk-console.webp",
    "Illustrative front desk console listing today's visitors, hosts, arrival times and statuses. Names are fictional.",
  ),
];
