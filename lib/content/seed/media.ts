import type { MediaItem } from "@/lib/types";

export const media: MediaItem[] = [
  { slug: "front-desk-check-in", image: "/images/gallery/front-desk-check-in.webp", alt: "Illustrative visitor check-in kiosk, front desk console and phone in a reception area", caption: "Front desk & check-in", description: "A connected arrival experience, from the reception desk to the host's phone.", category: "Front desk", usage: "gallery", sortOrder: 1 },
  { slug: "visitor-badge", image: "/images/gallery/visitor-badge.webp", alt: "Illustrative receptionist handing a visitor badge across a desk", caption: "Visitor badges", description: "Clear, professional identification that supports your arrival workflow.", category: "Visitor experience", usage: "gallery", sortOrder: 2 },
  { slug: "host-approvals", image: "/images/gallery/host-approvals.webp", alt: "Illustrative phone showing a visitor approval request in a lobby", caption: "Host approvals", description: "Keep hosts informed and make pending decisions easier to see.", category: "Front desk", usage: "gallery", sortOrder: 3 },
  { slug: "multi-site-operations", image: "/images/gallery/multi-site-operations.webp", alt: "Illustrative laptop showing a multi-site overview surrounded by office, school and data center sites", caption: "Multi-site operations", description: "See activity across locations while preserving local context.", category: "Administration", usage: "gallery", sortOrder: 4 },
  { slug: "management-console", image: "/images/gallery/management-console.webp", alt: "Illustrative AceVisitor console on a laptop with a phone beside it", caption: "Management console", description: "Manage users, roles, sites, and visitor program settings in one place.", category: "Administration", usage: "gallery", sortOrder: 5 },
];
