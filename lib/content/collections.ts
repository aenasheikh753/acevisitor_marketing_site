import type { Feature, GalleryItem, Industry } from "@/lib/types";

const features: Feature[] = [
  {
    "slug": "contractor-vendor-access",
    "kind": "solution",
    "eyebrow": "Third-party access",
    "name": "Contractor and vendor access",
    "icon": "contractor",
    "description": "Bring recurring partners into a more organized arrival process with visit context, host coordination, and policy acknowledgement.",
    "benefits": [
      "Structured visit details",
      "Clear host and approval steps",
      "Digital policy acknowledgement"
    ],
    "image": "",
    "imageAlt": "",
    "visual": "approvals",
    "sortOrder": 2
  },
  {
    "slug": "front-desk-operations",
    "kind": "solution",
    "eyebrow": "Daily welcome",
    "name": "Front desk operations",
    "icon": "monitor",
    "description": "Reduce repetitive tasks and help reception teams deliver a thoughtful, professional welcome throughout the day.",
    "benefits": [
      "Fast assisted check-in",
      "Live arrivals and notifications",
      "Clear visitor badges and records"
    ],
    "image": "",
    "imageAlt": "",
    "visual": "frontDesk",
    "sortOrder": 3
  },
  {
    "slug": "host-notifications",
    "kind": "feature",
    "name": "Host approvals",
    "icon": "userCheck",
    "description": "Notify hosts and route the decisions that keep visits moving.",
    "benefits": [
      "Arrival alerts",
      "Straightforward responses"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 4
  },
  {
    "slug": "multi-site-programs",
    "kind": "solution",
    "eyebrow": "Distributed operations",
    "name": "Multi-site programs",
    "icon": "map",
    "description": "Standardize the essential visitor experience across locations, while keeping site-level operations clear and practical.",
    "benefits": [
      "Shared operating standards",
      "Site-level visitor visibility",
      "Consistent reporting and oversight"
    ],
    "image": "",
    "imageAlt": "",
    "visual": "multiSite",
    "sortOrder": 1
  },
  {
    "slug": "operational-reporting",
    "kind": "feature",
    "name": "Operational reporting",
    "icon": "clipboardList",
    "description": "Review site activity and maintain a dependable record of events.",
    "benefits": [
      "Daily site activity",
      "Multi-site overview"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 8
  },
  {
    "slug": "partner-visits",
    "kind": "feature",
    "name": "Partner visits",
    "icon": "contractor",
    "description": "Apply consistent arrival workflows to contractors and vendors.",
    "benefits": [
      "Recurring partner visits",
      "Visit context for hosts"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 7
  },
  {
    "slug": "policy-workflows",
    "kind": "feature",
    "name": "Policy workflows",
    "icon": "file",
    "description": "Present agreements and retain confirmation as part of the visit record.",
    "benefits": [
      "Right policy per visit",
      "Acknowledgement recorded"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 6
  },
  {
    "slug": "pre-registration",
    "kind": "feature",
    "name": "Pre-registration",
    "icon": "calendar",
    "description": "Capture visit details in advance and help guests arrive prepared.",
    "benefits": [
      "Simple invitations",
      "Clear arrival details"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 1
  },
  {
    "slug": "reception-check-in",
    "kind": "feature",
    "name": "Reception check-in",
    "icon": "monitor",
    "description": "Keep a real-time guest list and make assisted check-in simple.",
    "benefits": [
      "Today’s expected guests",
      "Quick assisted arrival"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 2
  },
  {
    "slug": "self-service-kiosk",
    "kind": "feature",
    "name": "Self-service kiosk",
    "icon": "door",
    "description": "Guide visitors through an accessible, step-by-step arrival flow.",
    "benefits": [
      "Guided check-in",
      "Consistent at each entrance"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 3
  },
  {
    "slug": "visitor-badges",
    "kind": "feature",
    "name": "Badge management",
    "icon": "badge",
    "description": "Create clear visitor credentials that support your on-site process.",
    "benefits": [
      "Professional layout",
      "Host and visit details"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 5
  }
];

const industries: Industry[] = [
  {
    "slug": "construction",
    "name": "Construction & industrial",
    "icon": "hardHat",
    "scenario": "Coordinate contractors and guests across active, changing sites.",
    "benefits": [
      "Contractor visit details",
      "Site-specific check-in",
      "Consistent visitor identification"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 6
  },
  {
    "slug": "corporate-offices",
    "name": "Corporate offices",
    "icon": "building",
    "scenario": "Keep everyday visits professional, predictable, and easy to manage.",
    "benefits": [
      "Client and guest arrivals",
      "Host notifications",
      "Multi-office visibility"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 1
  },
  {
    "slug": "data-centers",
    "name": "Data centers",
    "icon": "server",
    "scenario": "Give teams clear context for planned visits to controlled facilities.",
    "benefits": [
      "Visitor and host context",
      "Policy acknowledgement",
      "Central activity records"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 5
  },
  {
    "slug": "education",
    "name": "Education",
    "icon": "education",
    "scenario": "Help campus teams coordinate guests, vendors, and scheduled visits.",
    "benefits": [
      "Campus visitor registration",
      "Host and staff coordination",
      "Entrance-level visibility"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 3
  },
  {
    "slug": "finance",
    "name": "Finance",
    "icon": "finance",
    "scenario": "Coordinate guest arrivals with clear host context and consistent procedures.",
    "benefits": [
      "Professional client arrivals",
      "Host notifications",
      "Consistent procedures"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 7
  },
  {
    "slug": "government",
    "name": "Government",
    "icon": "government",
    "scenario": "Bring structure and accountability to public-sector visitor operations.",
    "benefits": [
      "Defined arrival workflows",
      "Clear responsibilities",
      "Reviewable site activity"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 4
  },
  {
    "slug": "healthcare",
    "name": "Healthcare",
    "icon": "health",
    "scenario": "Support a considerate welcome in environments with sensitive operations.",
    "benefits": [
      "Clear visitor records",
      "Consistent check-in steps",
      "Considered staff workflows"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 2
  },
  {
    "slug": "other-enterprise-sites",
    "name": "Other enterprise sites",
    "icon": "globe",
    "scenario": "Explore workflows that reflect the people and places your organization supports.",
    "benefits": [
      "Adapted arrival flows",
      "Shared standards",
      "Local context"
    ],
    "image": "",
    "imageAlt": "",
    "sortOrder": 8
  }
];

const galleryItems: GalleryItem[] = [
  {
    "slug": "front-desk-check-in",
    "image": "/images/gallery/front-desk-check-in.webp",
    "alt": "Illustrative visitor check-in kiosk, front desk console and phone in a reception area",
    "caption": "Front desk & check-in",
    "category": "Front desk",
    "sortOrder": 1,
    "description": "A live, practical view for welcoming and managing expected guests."
  },
  {
    "slug": "host-approvals",
    "image": "/images/gallery/host-approvals.webp",
    "alt": "Illustrative phone showing a visitor approval request in a lobby",
    "caption": "Host approvals",
    "category": "Front desk",
    "sortOrder": 3,
    "description": "Keep hosts informed and make pending decisions easier to see."
  },
  {
    "slug": "management-console",
    "image": "/images/gallery/management-console.webp",
    "alt": "Illustrative AceVisitor console on a laptop with a phone beside it",
    "caption": "Management console",
    "category": "Administration",
    "sortOrder": 5,
    "description": "Manage users, roles, sites, and visitor program settings in one place."
  },
  {
    "slug": "multi-site-operations",
    "image": "/images/gallery/multi-site-operations.webp",
    "alt": "Illustrative laptop showing a multi-site overview surrounded by office, school and data center sites",
    "caption": "Multi-site operations",
    "category": "Administration",
    "sortOrder": 4,
    "description": "See activity across locations while preserving local context."
  },
  {
    "slug": "visitor-badge",
    "image": "/images/gallery/visitor-badge.webp",
    "alt": "Illustrative receptionist handing a visitor badge across a desk",
    "caption": "Visitor badges",
    "category": "Visitor experience",
    "sortOrder": 2,
    "description": "Clear, professional identification that supports your arrival workflow."
  }
];

const bySortOrder = <T extends { sortOrder: number }>(items: T[]): T[] =>
  [...items].sort((a, b) => a.sortOrder - b.sortOrder);

export function getFeatures(kind: Feature["kind"]): Feature[] {
  return bySortOrder(features.filter((item) => item.kind === kind));
}

export function getIndustries(): Industry[] {
  return bySortOrder(industries);
}

export function getGalleryItems(): GalleryItem[] {
  return bySortOrder(galleryItems);
}
