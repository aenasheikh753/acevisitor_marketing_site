import type { IconName } from "@/components/ui/Icon";

export type { IconName };

export type LinkItem = { label: string; href: string };

export type Seo = {
  title: string;
  description: string;
  /** Social preview image path, e.g. /images/og-default.jpg */
  image: string;
  /** Path or absolute URL. */
  canonical: string;
};

/* ---------- Site settings ---------- */

export type SiteSettings = {
  brandName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  legalEntity: string;
  logo: { src: string; alt: string };
  defaultSocialImage: string;
  menu: LinkItem[];
  loginLabel: string;
  cta: LinkItem;
  footer: {
    summary: string;
    companyLine: string;
    groups: { title: string; links: LinkItem[] }[];
    legalLinks: LinkItem[];
    copyright: string;
  };
  contact: { heading: string; email: string; phone: string; address: string };
  social: LinkItem[];
  ui: UiCopy;
};

export type UiCopy = {
  skipLink: string;
  homeLabel: string;
  navLabel: string;
  menuOpen: string;
  menuClose: string;
  loginUnavailable: string;
  footerNavLabel: string;
  mockupNote: string;
  blog: {
    categoriesLabel: string;
    allCategories: string;
    readMore: string;
    backToAll: string;
    writtenBy: string;
    categoryEyebrow: string;
    authorEyebrow: string;
    empty: string;
    rssLabel: string;
  };
  gallery: {
    allCategories: string;
    filterLabel: string;
    open: string;
    close: string;
    previous: string;
    next: string;
    note: string;
    empty: string;
  };
  legal: { revisedLabel: string };
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    primary: LinkItem;
    secondary: LinkItem;
  };
};

/* ---------- Mockups (fictional sample data for JSX product visuals) ---------- */

export type VisualName =
  | "none"
  | "dashboard"
  | "frontDesk"
  | "kiosk"
  | "approvals"
  | "multiSite";

export type MockStatus = "success" | "info" | "waiting";

export type Mockups = {
  dashboard: {
    label: string;
    workspace: string;
    title: string;
    live: string;
    stats: { label: string; value: string }[];
    chartTitle: string;
    chartCaption: string;
    bars: number[];
    listTitle: string;
    visitors: { initials: string; name: string; detail: string; status: MockStatus; statusLabel: string }[];
    toast: string;
    menu: string[];
  };
  frontDesk: {
    label: string;
    title: string;
    caption: string;
    columns: string[];
    rows: { initials: string; name: string; host: string; time: string; status: MockStatus; statusLabel: string }[];
  };
  kiosk: {
    label: string;
    greeting: string;
    subtitle: string;
    actions: string[];
    badge: { label: string; name: string; company: string; host: string; valid: string };
  };
  approvals: {
    label: string;
    eyebrow: string;
    name: string;
    company: string;
    details: string[];
    acknowledged: string;
    approve: string;
    decline: string;
  };
  multiSite: {
    label: string;
    title: string;
    live: string;
    onSiteLabel: string;
    sites: { name: string; onSite: string; load: number }[];
  };
};

/* ---------- Collections ---------- */

export type Feature = {
  slug: string;
  kind: "feature" | "solution";
  name: string;
  eyebrow?: string;
  icon: IconName;
  description: string;
  benefits: string[];
  image?: string;
  imageAlt?: string;
  visual?: VisualName;
  sortOrder: number;
};

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  scenario: string;
  benefits: string[];
  image?: string;
  imageAlt?: string;
  sortOrder: number;
};

export type GalleryItem = {
  slug: string;
  image: string;
  alt: string;
  caption: string;
  category: string;
  sortOrder: number;
};

export type SecurityControl = {
  slug: string;
  name: string;
  description: string;
  icon: IconName;
  verificationStatus: "internal" | "unverified" | "verified";
  owner: string;
  reviewDate: string;
  sortOrder: number;
};

/** The only control fields allowed to reach the public page. */
export type PublicSecurityControl = Pick<SecurityControl, "slug" | "name" | "description" | "icon">;

export type Author = { slug: string; name: string; role: string; bio: string };
export type Category = { slug: string; name: string; description: string };

export type BlogStatus = "draft" | "published";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  status: BlogStatus;
  summary: string;
  coverImage: string;
  coverAlt: string;
  category: string;
  author: string;
  seo: Seo;
  body: string;
};

export type LegalPage = {
  slug: string;
  title: string;
  subtitle: string;
  revised: string;
  notice?: string;
  seo: Seo;
  body: string;
};

/* ---------- Pages and modular sections ---------- */

export type CardItem = { icon: IconName; title: string; description: string };

type Heading = { eyebrow?: string; title: string; description?: string };

export type ProofPointsSection = Heading & {
  type: "proofPoints";
  items: { value: string; label: string }[];
};

export type CardsSection = Heading & {
  type: "cards";
  columns?: 2 | 3 | 4;
  items: CardItem[];
};

export type FeaturesSection = Heading & { type: "features"; showBenefits?: boolean };
export type SolutionsSection = Heading & { type: "solutions" };
export type IndustriesSection = Heading & { type: "industries"; limit?: number; action?: LinkItem };

export type SplitSection = Heading & {
  type: "split";
  body?: string[];
  checklist?: string[];
  stats?: { value: string; label: string }[];
  visual?: VisualName;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  action?: LinkItem;
};

export type WorkflowSection = Heading & {
  type: "workflow";
  steps: { icon: IconName; title: string; description: string }[];
};

export type GallerySection = Heading & { type: "gallery" };
export type GalleryPreviewSection = Heading & { type: "galleryPreview"; limit: number; action: LinkItem };
export type LatestPostsSection = Heading & { type: "latestPosts"; limit: number; action: LinkItem };

export type SecuritySection = Heading & {
  type: "security";
  emptyTitle: string;
  emptyDescription: string;
  emptyItems: CardItem[];
  emptyAction: LinkItem;
};

export type FaqSection = Heading & {
  type: "faqs";
  items: { question: string; answer: string }[];
};

export type SiteIndexSection = Heading & { type: "siteIndex"; postsTitle: string; legalTitle: string };

export type FormCopy = {
  requiredHint: string;
  fields: {
    name: { label: string; placeholder: string; error: string };
    email: { label: string; placeholder: string; error: string; invalid: string };
    company: { label: string; placeholder: string; error: string };
    interest: { label: string; options: string[] };
    message: { label: string; placeholder: string; error: string };
    honeypot: { label: string };
  };
  submit: string;
  submitting: string;
  privacyNote: string;
  errorSummary: string;
  success: { title: string; description: string };
  failure: { title: string; description: string };
};

export type FormSection = Heading & {
  type: "form";
  asideTitle: string;
  asideItems: CardItem[];
  form: FormCopy;
};

export type CtaSection = Heading & {
  type: "cta";
  primary: LinkItem;
  secondary?: LinkItem;
};

export type Section =
  | ProofPointsSection
  | CardsSection
  | FeaturesSection
  | SolutionsSection
  | IndustriesSection
  | SplitSection
  | WorkflowSection
  | GallerySection
  | GalleryPreviewSection
  | LatestPostsSection
  | SecuritySection
  | FaqSection
  | SiteIndexSection
  | FormSection
  | CtaSection;

export type Page = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroVisual: VisualName;
  primaryAction?: LinkItem;
  secondaryAction?: LinkItem;
  proofLine?: string;
  sections: Section[];
  seo: Seo;
};
