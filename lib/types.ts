/**
 * The website's content model. Every type here is what the admin API must
 * return, so anything the site displays can be edited, added or removed there.
 */

export type LinkItem = { label: string; href: string };

/**
 * An icon name from components/ui/Icon, or the URL of an uploaded icon image.
 * An empty string shows no icon.
 */
export type IconValue = string;

export type Seo = {
  title: string;
  description: string;
  /** Social preview image. Empty uses the site default. */
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
    companyLink?: LinkItem;
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

/* ---------- Mockups (text inside the built-in product visuals) ---------- */

export type VisualName = "none" | "dashboard" | "frontDesk" | "kiosk" | "approvals" | "multiSite";

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
  icon: IconValue;
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
  icon: IconValue;
  scenario: string;
  benefits: string[];
  image?: string;
  imageAlt?: string;
  sortOrder: number;
};

export type MediaItem = {
  slug: string;
  image: string;
  alt: string;
  caption: string;
  description?: string;
  category: string;
  /** Where the image is used, e.g. "gallery". */
  usage: string;
  sortOrder: number;
};

export type GalleryItem = MediaItem;

export type Author = { slug: string; name: string; role: string; bio: string };
export type Category = { slug: string; name: string; description: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  status: "draft" | "published";
  summary: string;
  coverImage: string;
  coverAlt: string;
  category: string;
  author: string;
  seo: Seo;
  /** Markdown. */
  body: string;
};

/* ---------- Pages and modular sections ---------- */

export type CardItem = {
  icon: IconValue;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  benefits?: string[];
};

type Heading = { eyebrow?: string; title: string; description?: string };

export type ProofPointsSection = Heading & {
  type: "proofPoints";
  items: { value: string; label: string }[];
};

export type CardsSection = Heading & {
  type: "cards";
  columns?: 2 | 3 | 4;
  items: CardItem[];
  action?: LinkItem;
};

export type FeaturesSection = Heading & { type: "features"; showBenefits?: boolean; limit?: number };
export type SolutionsSection = Heading & { type: "solutions" };
export type IndustriesSection = Heading & { type: "industries"; limit?: number; action?: LinkItem };

export type SplitSection = Heading & {
  type: "split";
  body?: string[];
  checklistTitle?: string;
  checklist?: string[];
  cards?: CardItem[];
  stats?: { value: string; label: string }[];
  visual?: VisualName;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  action?: LinkItem;
};

export type WorkflowSection = Heading & { type: "workflow"; steps: CardItem[] };
export type GallerySection = Heading & { type: "gallery" };
export type GalleryPreviewSection = Heading & { type: "galleryPreview"; limit: number; action: LinkItem };
export type LatestPostsSection = Heading & { type: "latestPosts"; limit: number; action: LinkItem };
export type FaqSection = Heading & { type: "faqs"; items: { question: string; answer: string }[] };
export type SiteIndexSection = Heading & { type: "siteIndex"; postsTitle: string; legalTitle: string };
/** Long-form Markdown, used for legal pages. */
export type RichTextSection = Heading & { type: "richText"; body: string };

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  width?: "half" | "full";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  error?: string;
  invalid?: string;
};

export type FormCopy = {
  requiredHint: string;
  fields: FormField[];
  honeypotLabel: string;
  submit: string;
  submitting: string;
  note: string;
  privacyNote: string;
  privacyHref: string;
  errorSummary: string;
  success: { title: string; description: string };
  failure: { title: string; description: string };
};

export type FormSection = Heading & {
  type: "form";
  /** Sent with each submission so the backend can tell forms apart. */
  formName: string;
  asideEyebrow?: string;
  asideTitle: string;
  asideDescription?: string;
  asideItems?: CardItem[];
  asideChecklist?: string[];
  asideAction?: LinkItem;
  form: FormCopy;
};

export type CtaSection = Heading & { type: "cta"; primary: LinkItem; secondary?: LinkItem };

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
  | FaqSection
  | SiteIndexSection
  | RichTextSection
  | FormSection
  | CtaSection;

export type Page = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroVisual: VisualName;
  /** An uploaded image that replaces the built-in hero visual. */
  heroImage?: string;
  heroImageAlt?: string;
  primaryAction?: LinkItem;
  secondaryAction?: LinkItem;
  proofLine?: string;
  heroProofs?: { label: string; detail: string }[];
  /** Shown as a "last revised" date, for legal pages. */
  revised?: string;
  sections: Section[];
  seo: Seo;
};
