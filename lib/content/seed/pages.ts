import type { CardItem, FormCopy, LinkItem, Page, Section, Seo } from "@/lib/types";

/** Sample content shown until the admin API is connected. */

const card = (icon: string, title: string, description: string): CardItem => ({ icon, title, description });
const seo = (canonical: string, title: string, description: string): Seo => ({
  title,
  description,
  image: "/images/og-default.jpg",
  canonical,
});

const demo: LinkItem = { label: "Request a Demo", href: "/request-demo" };
const sales: LinkItem = { label: "Talk to Sales", href: "/contact" };
const cta = (title: string, description: string): Section => ({ type: "cta", title, description, primary: demo, secondary: sales });
const standardCta = cta(
  "See AceVisitor running at your entrances",
  "Walk through pre-registration, kiosk check-in, host approval, badge printing and audit reporting with an enterprise specialist.",
);

const journey: Section = {
  type: "workflow",
  eyebrow: "The visitor journey",
  title: "Nine governed steps from invitation to audit record",
  description: "Each step is logged, permissioned and configurable per site, so security, reception and hosts work from the same source of truth.",
  steps: [
    card("message", "Invite", "Hosts pre-register visitors with date, purpose and site."),
    card("calendar", "Pre-register", "Visitors receive a QR invitation and complete details in advance."),
    card("door", "Arrive", "Reception or kiosk recognises the booking on arrival."),
    card("id", "Verify", "Identity, photo capture and watchlist screening."),
    card("file", "Agree", "NDAs, safety briefings and site rules signed digitally."),
    card("badge", "Badge", "Photo badge printed with zone, host and validity window."),
    card("userCheck", "Host approval", "Host is notified and approves from their phone."),
    card("logout", "Check out", "Badge scan or kiosk tap closes the visit automatically."),
    card("clipboardList", "Audit", "Every event is written to an immutable visitor record."),
  ],
};

const galleryPreview: Section = {
  type: "galleryPreview",
  eyebrow: "See it in practice",
  title: "One platform at every entrance",
  description: "From lobby kiosks to host approvals on the go — a look at AceVisitor in everyday use.",
  limit: 3,
  action: { label: "Explore the screenshot gallery", href: "/gallery" },
};

const formCopy = {
  requiredHint: "Fields marked with * are required.",
  honeypotLabel: "Leave this field empty",
  submitting: "Sending...",
  privacyNote: "Privacy Policy",
  privacyHref: "/privacy-policy",
  errorSummary: "Please fix the highlighted fields.",
  success: { title: "Thanks for reaching out.", description: "Our team will be in touch shortly." },
  failure: { title: "We couldn't send your request.", description: "Please try again." },
};

const contactForm: FormCopy = {
  ...formCopy,
  submit: "Send message",
  note: "Our team will follow up using the work email you provided.",
  fields: [
    { name: "name", label: "Full name", type: "text", width: "half", required: true, placeholder: "Your name", autoComplete: "name", error: "Please enter your name." },
    { name: "email", label: "Work email", type: "email", width: "half", required: true, placeholder: "you@company.com", autoComplete: "email", error: "Please enter your work email.", invalid: "Please enter a valid email address." },
    { name: "company", label: "Company", type: "text", width: "half", required: true, placeholder: "Your organization", autoComplete: "organization", error: "Please enter your company." },
    { name: "topic", label: "Topic", type: "select", width: "half", required: true, placeholder: "Select", options: ["Enterprise sales", "Customer support", "Security review", "Partnerships", "Other"], error: "Please choose a topic." },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us about your sites, visitor workflows or goals.", error: "Please enter a message." },
  ],
};

const demoForm: FormCopy = {
  ...formCopy,
  submit: "Request a Demo",
  note: "We use your details only to respond to this request.",
  fields: [
    { name: "firstName", label: "First name", type: "text", width: "half", required: true, autoComplete: "given-name", error: "Please enter your first name." },
    { name: "lastName", label: "Last name", type: "text", width: "half", required: true, autoComplete: "family-name", error: "Please enter your last name." },
    { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email", error: "Please enter your work email.", invalid: "Please enter a valid email address." },
    { name: "company", label: "Company", type: "text", width: "half", required: true, autoComplete: "organization", error: "Please enter your company." },
    { name: "jobTitle", label: "Job title", type: "text", width: "half", autoComplete: "organization-title" },
    { name: "sites", label: "Number of sites", type: "select", width: "half", placeholder: "Select", options: ["1 - 5", "6 - 25", "26 - 100", "100+"] },
    { name: "monthlyVisitors", label: "Monthly visitors", type: "select", width: "half", placeholder: "Select", options: ["Under 500", "500 - 2,000", "2,000 - 10,000", "10,000+"] },
    { name: "country", label: "Country", type: "text", autoComplete: "country-name" },
    { name: "message", label: "What are you trying to solve?", type: "textarea" },
  ],
};

export const pages: Page[] = [
  {
    slug: "home",
    eyebrow: "Enterprise visitor management",
    title: "Control every entrance, across every site.",
    subtitle: "AceVisitor replaces paper logbooks and disconnected sign-in apps with one governed platform for pre-registration, verified check-in, host approval, badge printing and audit-ready visitor records.",
    heroVisual: "dashboard",
    primaryAction: demo,
    secondaryAction: { label: "Explore the platform", href: "/platform" },
    heroProofs: [
      { label: "Multi-site", detail: "One tenant, many buildings" },
      { label: "Role-based", detail: "Separation of duties" },
      { label: "Auditable", detail: "Every event recorded" },
    ],
    sections: [
      journey,
      {
        type: "cards",
        eyebrow: "Core capabilities",
        title: "Everything a controlled entrance needs",
        description: "Built for organizations where visitor records matter to security, compliance and operations teams alike.",
        columns: 4,
        items: [
          card("calendar", "Pre-registration & invitations", "Hosts invite visitors ahead of time with purpose, site, host and expected window, so arrival takes seconds."),
          card("monitor", "Self-service kiosk check-in", "Guided tablet flow with photo capture, document signing and multilingual prompts for unattended lobbies."),
          card("badge", "Badge printing", "Photo badges with zone permissions, escort requirements, host name and a scannable validity window."),
          card("qr", "QR check-in & check-out", "Scan at the gate, lobby or turnstile to open and close a visit without touching a keyboard."),
          card("userCheck", "Host notification & approval", "Hosts approve, decline or delegate arrivals from mobile, email or the console in real time."),
          card("clipboardList", "Audit-ready visitor logs", "Complete, exportable records of who was on site, where, with whom and for how long."),
          card("network", "Multi-site administration", "Standard policy across regions with per-site overrides for hours, zones and approval rules."),
          card("key", "Role-based access control", "Reception, security, host and administrator roles see only what their responsibilities require."),
        ],
      },
      {
        type: "split",
        eyebrow: "One platform, every touchpoint",
        title: "A polished arrival, backed by an operations console.",
        description: "Welcome guests at reception or self-service. Give teams a live view that keeps arrivals, approvals, badges, and site activity together.",
        cards: [
          card("monitor", "Front desk console", "A live view for the people who keep every arrival moving."),
          card("door", "Guided kiosk check-in", "An intuitive self-service flow for guests at the door."),
          card("badge", "On-brand badges", "Clear visitor identification with the details your team needs."),
        ],
        visual: "frontDesk",
      },
      {
        type: "cards",
        eyebrow: "Security architecture",
        title: "Designed for separation, not convenience",
        description: "AceVisitor keeps tenants, sites and roles isolated by design. Access is granted explicitly, and every administrative action is recorded.",
        columns: 4,
        action: { label: "Read the security overview", href: "/security" },
        items: [
          card("layers", "Tenant separation", "Organization data is isolated at every layer of the platform."),
          card("key", "Role-based access control", "Reception, security, hosts and administrators hold distinct permissions."),
          card("lock", "Multi-factor authentication", "Administrative accounts can require a second factor at sign-in."),
          card("clipboardList", "Immutable audit logging", "Check-ins, approvals, badge prints and configuration changes are all recorded."),
        ],
      },
      {
        type: "split",
        eyebrow: "Multi-site management",
        title: "One policy, every building, every region",
        description: "Roll out a consistent visitor standard across headquarters, plants, clinics, campuses and data centers, while letting each site adapt the details it owns.",
        cards: [
          card("settings", "Central configuration", "Define global visitor types, documents and approval rules once, then inherit them everywhere."),
          card("building", "Per-site overrides", "Adjust opening hours, zones, escort rules and badge layouts for a single location."),
          card("users", "Scoped administration", "Site administrators manage their own entrances without seeing other locations."),
          card("clipboardList", "Consolidated reporting", "Review visitor volumes and incidents across the whole estate or one building."),
        ],
        visual: "multiSite",
        reverse: true,
      },
      {
        type: "cards",
        eyebrow: "Entrance experience",
        title: "Every arrival point, handled the same way",
        description: "Attended desks, unattended lobbies and perimeter gates run on the same records and the same rules.",
        columns: 3,
        items: [
          card("users", "Reception desk", "Attended check-in where front desk staff process arrivals, print badges and manage walk-ins."),
          card("door", "Lobby kiosk", "Unattended self-service tablets for high-volume entrances and after-hours arrivals."),
          card("shield", "Security gate", "Vehicle and contractor control with QR verification, escort flags and zone permissions."),
        ],
      },
      galleryPreview,
      standardCta,
    ],
    seo: seo("/", "AceVisitor | Enterprise Visitor Management Platform", "AceVisitor secures every entrance with pre-registration, kiosk check-in, host approval, badge printing and audit-ready visitor records across all your sites."),
  },
  {
    slug: "platform",
    eyebrow: "Platform",
    title: "One platform for the entire visitor lifecycle",
    subtitle: "From the moment a host sends an invitation to the moment a visitor badge is deactivated, AceVisitor keeps a single governed record of who was on site and why.",
    heroVisual: "dashboard",
    primaryAction: demo,
    secondaryAction: sales,
    sections: [
      {
        type: "features",
        eyebrow: "Modules",
        title: "Capabilities that work together, not in silos",
        description: "Each module shares the same visitor record, permissions model and audit trail.",
      },
      {
        type: "split",
        eyebrow: "Administration console",
        title: "Front desk and security see the same live picture",
        checklist: [
          "Live view of everyone currently on site, by building and zone",
          "Expected arrivals with host, purpose and required documents",
          "Walk-in registration with immediate host notification",
          "Evacuation list generated on demand for any location",
          "Searchable history by visitor, company, host, site or date range",
        ],
        visual: "frontDesk",
      },
      {
        type: "split",
        eyebrow: "Kiosk & badge",
        title: "A controlled arrival in under a minute",
        checklist: [
          "Scan the invitation QR code or search by name and host",
          "Confirm details, capture a photo and sign required documents",
          "Safety briefings and site rules shown before access is granted",
          "Badge prints automatically with zone and escort information",
        ],
        visual: "kiosk",
        reverse: true,
      },
      journey,
      galleryPreview,
      {
        type: "cards",
        eyebrow: "Governance",
        title: "Built on access control and accountability",
        description: "Administrative capability is deliberately constrained, and nothing meaningful happens without a record.",
        columns: 3,
        items: [
          card("key", "Role-based permissions", "Reception, security, hosts and administrators each receive a scoped set of actions."),
          card("building", "Site-scoped access", "Administrators can be limited to the buildings they are responsible for."),
          card("file", "Document control", "Track NDA and induction validity, and block arrivals with expired requirements."),
        ],
      },
      standardCta,
    ],
    seo: seo("/platform", "Platform | AceVisitor Visitor Management", "Explore the AceVisitor platform: pre-registration, kiosk check-in, identity verification, badge printing, host approval, check-out and audit reporting."),
  },
  {
    slug: "solutions",
    eyebrow: "Solutions",
    title: "Built for the teams accountable for who is on site",
    subtitle: "Security leaders, facilities teams and reception staff work from one platform with one visitor record, whether you run two buildings or two hundred.",
    heroVisual: "multiSite",
    primaryAction: demo,
    secondaryAction: sales,
    sections: [
      { type: "solutions", title: "" },
      {
        type: "features",
        eyebrow: "Solution modules",
        title: "Capabilities that work together, not in silos",
        description: "Each module shares the same visitor record, permissions model and audit trail.",
      },
      {
        type: "cards",
        eyebrow: "Operational outcomes",
        title: "What changes once visitor management is governed",
        columns: 3,
        items: [
          card("userCheck", "Fewer unverified arrivals", "Every visitor is expected, identified and tied to a host before a badge is issued."),
          card("clock", "Faster lobby throughput", "Pre-registration and QR arrival reduce the time each visitor spends at the desk."),
          card("clipboard", "Evidence on demand", "Produce a defensible record of site attendance for audits and investigations."),
        ],
      },
      standardCta,
    ],
    seo: seo("/solutions", "Solutions | AceVisitor", "Multi-site visitor programs, contractor management and front desk operations, standardized on one enterprise visitor management platform."),
  },
  {
    slug: "industries",
    eyebrow: "Industries",
    title: "Entrance requirements differ. The standard shouldn't.",
    subtitle: "AceVisitor configures to the rules of each sector while keeping one consistent record of every visit across your organization.",
    heroVisual: "none",
    primaryAction: demo,
    secondaryAction: sales,
    sections: [
      { type: "industries", eyebrow: "Sectors", title: "Configured for the way your sites actually operate" },
      cta("Discuss the requirements of your sites", "An enterprise specialist will walk through your entrances, visitor types and reporting obligations."),
    ],
    seo: seo("/industries", "Industries | AceVisitor", "Visitor management for corporate offices, healthcare, education, government, data centers, finance and construction sites."),
  },
  {
    slug: "gallery",
    eyebrow: "Inside AceVisitor",
    title: "AceVisitor in focus",
    subtitle: "Explore the experiences that help visitors feel expected and help teams stay on top of the day.",
    heroVisual: "none",
    primaryAction: demo,
    sections: [{ type: "gallery", title: "" }],
    seo: seo("/gallery", "Screenshot Gallery | AceVisitor", "Explore AceVisitor check-in, badges, host approvals and multi-site visitor management in our visual gallery."),
  },
  {
    slug: "security",
    eyebrow: "Security & Governance",
    title: "Visitor data is sensitive. We treat it that way.",
    subtitle: "AceVisitor is built around least-privilege access, strict tenant isolation and a complete record of administrative activity.",
    heroVisual: "none",
    primaryAction: demo,
    secondaryAction: sales,
    sections: [
      {
        type: "cards",
        eyebrow: "Architecture",
        title: "Controls that apply at every layer",
        columns: 3,
        items: [
          card("layers", "Tenant separation", "Each organization's data is isolated, with no shared visitor records between tenants."),
          card("key", "Role-based access control", "Reception, security, host and administrator roles carry distinct, explicit permissions."),
          card("lock", "Multi-factor authentication", "Administrative sign-in can require a second factor, enforced by policy."),
          card("server", "Encryption", "Data is encrypted in transit and at rest across the platform."),
          card("clipboardList", "Immutable audit logging", "Check-ins, approvals, badge prints and configuration changes are recorded and retained."),
          card("eye", "Data minimization", "Collect only the visitor fields a site requires, with configurable retention periods."),
        ],
      },
      {
        type: "cards",
        title: "",
        columns: 2,
        items: [
          {
            ...card("users", "Least privilege by default", "Administrative control"),
            benefits: [
              "Permissions are granted explicitly, never inherited by accident",
              "Administrators can be scoped to specific sites or regions",
              "Sensitive actions require elevated roles and are always logged",
              "Account access can be revoked immediately across all sites",
            ],
          },
          {
            ...card("clipboard", "Defensible visitor history", "Records & retention"),
            benefits: [
              "Searchable visit records by visitor, host, company, site and date",
              "Evacuation and on-site reports generated for any location in real time",
              "Exportable logs for internal audit and investigation requests",
              "Retention windows configurable to your organization's policy",
            ],
          },
        ],
      },
      {
        type: "split",
        title: "",
        description: "Security questionnaires, architecture documentation and details of our current compliance posture are shared directly with prospective customers under review. Contact our team to request them.",
      },
      cta("Request a security review session", "We can walk your security and IT teams through the platform's access model, data handling and audit capabilities."),
    ],
    seo: seo("/security", "Security & Governance | AceVisitor", "AceVisitor security architecture: tenant separation, role-based access control, multi-factor authentication, encryption and immutable audit logging."),
  },
  {
    slug: "about",
    eyebrow: "About",
    title: "We build for organizations where the entrance is a control point",
    subtitle: "AceVisitor exists because large organizations still manage visitors with paper logbooks, spreadsheets and sign-in apps that were never designed for multi-site governance.",
    heroVisual: "none",
    sections: [
      {
        type: "split",
        eyebrow: "Our point of view",
        title: "Every visit is a moment that matters.",
        body: [
          "The first few minutes at a workplace shape how people feel about the organization they came to see. Yet visitor processes are often spread across paper logs, email threads, and disconnected tools.",
          "AceVisitor brings those moments into one thoughtful experience: clear for guests, useful for on-site teams, and visible to the people responsible for the wider program.",
        ],
        visual: "kiosk",
      },
      {
        type: "split",
        eyebrow: "Our mission",
        title: "Make every visit verified, permissioned and recorded",
        description: "A visitor program should answer three questions at any moment: who is on site, who approved them, and what they were allowed to access. AceVisitor is designed to answer all three without extra work for reception or security staff.",
        checklistTitle: "What we focus on",
        checklist: [
          "Enterprise deployments across multiple buildings and regions",
          "Governance: roles, approvals, retention and audit evidence",
          "Entrance operations that work for reception, security and hosts",
          "Configurability without custom development for each site",
        ],
      },
      {
        type: "cards",
        eyebrow: "How we work",
        title: "Deployment led by people who know entrances",
        description: "Every engagement starts with your sites, visitor types and reporting obligations, not a generic template.",
        columns: 3,
        items: [
          card("search", "Discovery", "We map your entrances, visitor categories, approval rules and reporting needs."),
          card("settings", "Configuration", "Global standards and per-site overrides are set up with your security and facilities teams."),
          card("network", "Rollout", "Phased launch by site, with training for reception, security and hosts."),
        ],
      },
      {
        type: "cards",
        eyebrow: "What guides us",
        title: "People first, clarity at scale, trust through design",
        columns: 3,
        items: [
          card("users", "People first", "Make the visitor experience welcoming and the staff experience practical."),
          card("layers", "Clarity at scale", "Connect local operations with an understandable organization-wide view."),
          card("shield", "Trust through design", "Build responsible processes into the way teams manage each visit."),
        ],
      },
      {
        type: "split",
        eyebrow: "A product by Datacompute Consulting LLC",
        title: "Built with a focus on practical operations.",
        body: ["AceVisitor is a visitor-management product from Datacompute Consulting LLC. The team’s focus is to help organizations welcome people well while making daily visitor operations easier to understand and coordinate."],
      },
      standardCta,
    ],
    seo: seo("/about", "About | AceVisitor", "AceVisitor builds enterprise visitor management for organizations running controlled entrances across many buildings, sites and regions."),
  },
  {
    slug: "contact",
    eyebrow: "Contact",
    title: "Talk to the AceVisitor team",
    subtitle: "Whether you're evaluating a visitor program, reviewing security requirements or already running AceVisitor, we'll point you to the right person.",
    heroVisual: "none",
    sections: [
      {
        type: "form",
        formName: "contact",
        title: "Tell us what you’re looking for",
        description: "A few details will help us make the conversation useful for your team.",
        asideEyebrow: "A good place to start",
        asideTitle: "Bring us your questions.",
        asideItems: [
          card("building", "Enterprise sales", "Evaluations, multi-site rollouts and procurement questions."),
          card("users", "Customer support", "Help for organizations already using AceVisitor at their sites."),
          card("message", "General enquiries", "Partnerships, media and anything else."),
        ],
        asideAction: { label: "Request a demo", href: "/request-demo" },
        form: contactForm,
      },
    ],
    seo: seo("/contact", "Contact | AceVisitor", "Contact the AceVisitor team about enterprise visitor management, security reviews, partnerships or existing deployments."),
  },
  {
    slug: "request-demo",
    eyebrow: "Request a demo",
    title: "See AceVisitor against your own entrance requirements",
    subtitle: "Tell us about your sites and visitor types, and we'll arrange a guided walkthrough with an enterprise specialist.",
    heroVisual: "none",
    sections: [
      {
        type: "form",
        formName: "demo",
        title: "",
        asideTitle: "What your demo covers",
        asideChecklist: [
          "Live walkthrough of the console, kiosk and host approval",
          "Badge printing and check-out demonstrated end to end",
          "Multi-site configuration mapped to your organization",
          "Security and audit questions answered directly",
        ],
        form: demoForm,
      },
    ],
    seo: seo("/request-demo", "Request a Demo | AceVisitor", "Request a guided demo of AceVisitor enterprise visitor management for your sites, entrances and visitor types."),
  },
  {
    slug: "faqs",
    eyebrow: "FAQs",
    title: "Frequently asked questions",
    subtitle: "Quick answers about AceVisitor. Can't find what you need? Request a demo.",
    heroVisual: "none",
    sections: [
      {
        type: "faqs",
        title: "",
        items: [
          { question: "What is AceVisitor?", answer: "AceVisitor is an enterprise visitor management platform for organizations that run controlled entrances across many buildings, sites and regions. It covers pre-registration, check-in, host approval, badging, watchlist screening and audit reporting." },
          { question: "Who is AceVisitor built for?", answer: "Organizations where the front entrance is a control point: corporate campuses, manufacturing and logistics sites, healthcare facilities, government offices, education and multi-tenant buildings." },
          { question: "How do visitors check in?", answer: "Visitors can be pre-registered by a host, then check in at a self-service kiosk, at the reception desk, or via a mobile link. Hosts are notified instantly and can approve or decline from their phone." },
          { question: "Can AceVisitor manage multiple sites?", answer: "Yes. AceVisitor is designed for multi-site operations, with central policies, site-level settings, and a single view of who is on site across every location." },
          { question: "Does AceVisitor print visitor badges?", answer: "Yes. Badges can be printed at check-in with visitor name, host, site, and validity window, and can be configured per site and visitor type." },
          { question: "How is visitor data protected?", answer: "Data is encrypted in transit and at rest, access is role-based, and every action is logged for audit. Retention rules let you control how long visitor records are kept. Details are covered during your demo." },
          { question: "Can visitors sign NDAs or safety documents?", answer: "Yes. You can require visitors to review and sign documents such as NDAs, safety briefings or site rules as part of check-in." },
          { question: "Does it integrate with our existing systems?", answer: "AceVisitor is built to connect with identity, access control and communication tools. Specific integrations for your environment are reviewed with our team during a demo." },
          { question: "Is there a free trial or public pricing?", answer: "AceVisitor is deployed for each organization's requirements, so we don't publish pricing or offer self-serve trials. Request a demo and we'll walk through your needs and a tailored proposal." },
          { question: "How long does deployment take?", answer: "Timelines depend on the number of sites, entrances and integrations. Our team will outline a rollout plan after understanding your environment." },
          { question: "What reports are available?", answer: "Visitor logs, on-site lists for emergencies, host activity, site traffic trends and audit trails, all exportable for compliance and security reviews." },
          { question: "How do I get started?", answer: "Click Request a Demo and tell us about your organization. A specialist will contact you to schedule a walkthrough." },
        ],
      },
      standardCta,
    ],
    seo: seo("/faqs", "FAQs | AceVisitor", "Answers to common questions about AceVisitor enterprise visitor management: check-in, badging, multi-site, security and getting started."),
  },
  {
    slug: "site-index",
    eyebrow: "Site index",
    title: "Every page, in one place",
    subtitle: "Browse product information, company details and resources.",
    heroVisual: "none",
    sections: [{ type: "siteIndex", title: "All pages", postsTitle: "Latest insights", legalTitle: "Legal" }],
    seo: seo("/site-index", "Site Index | AceVisitor", "A full index of every page on the AceVisitor website."),
  },
  {
    slug: "blog",
    eyebrow: "Insights",
    title: "Ideas for a better visitor experience.",
    subtitle: "Practical perspectives on welcoming guests, coordinating teams and running visitor programs across sites.",
    heroVisual: "none",
    sections: [],
    seo: seo("/blog", "Blog & Insights | AceVisitor", "Practical perspectives on welcoming guests, coordinating teams and running visitor programs across sites."),
  },
  {
    slug: "privacy-policy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "How this website handles the information you share with us.",
    heroVisual: "none",
    revised: "2026-11-09",
    sections: [
      {
        type: "richText",
        title: "",
        body: `## Who we are

AceVisitor is a product of Datacompute Consulting LLC. This policy covers the public AceVisitor marketing website and enquiries submitted here. It does not describe the handling of visitor records within a customer’s private AceVisitor deployment; those activities are governed by the customer’s notices and applicable agreements.

## Information you provide

When you contact us or request a demo, we collect the information you enter, such as your name, work email, company, enquiry topic and message. A demo request may also include your role, country, site count and visitor volume. Please do not include sensitive personal information or actual visitor records.

## How information is used

We use enquiry information to respond to your message, discuss your requirements and manage the requested follow-up. Website hosting providers may process technical request information needed to operate, secure and troubleshoot the website.

## Storage and access

Enquiries are not published or available for other website visitors to read. Hosting and storage providers process information to provide these services. Information may also be disclosed when required by law.

## Retention and protection

Enquiry records remain stored until removed by an authorized operator. Access controls restrict public access to these records. No method of internet transmission or storage is completely secure.

## Cookies and external services

External links lead to websites with their own privacy practices. This policy does not cover those websites.

## Your choices and privacy requests

Depending on applicable law, you may have rights to access, correct or delete personal information, or object to certain processing. To make a request, use our [contact page](/contact) and select “Other”, identifying your message as a privacy request. We may need to verify your identity before acting.

## Changes to this policy

Changes will be posted on this page with an updated revision date.

## Copyright

AceVisitor website text, branding and original materials are protected by applicable copyright laws. Third-party materials remain the property of their respective owners. Contact us for permission to reproduce website materials.`,
      },
    ],
    seo: seo("/privacy-policy", "Privacy Policy | AceVisitor", "How Datacompute Consulting LLC handles information submitted through the AceVisitor marketing website."),
  },
  {
    slug: "terms",
    eyebrow: "Legal",
    title: "Terms of Use",
    subtitle: "The terms that apply when you use this website.",
    heroVisual: "none",
    revised: "2026-11-09",
    sections: [
      {
        type: "richText",
        title: "",
        body: `This website is operated by Datacompute Consulting LLC. By using it, you agree to these terms. Use of the AceVisitor product is governed by separate customer agreements.

## Website content

Content on this website is provided for general information. Product views are illustrative, and any names or figures shown are fictional.

## Acceptable use

Do not misuse this website, interfere with its operation, or attempt to access it in unauthorized ways.

## Intellectual property

The AceVisitor name, logo and website content belong to Datacompute Consulting LLC or its licensors.

## Disclaimer

This website is provided as is, without warranties of any kind, to the extent permitted by law.

## Changes

We may update these terms. The revision date at the top of this page shows when they last changed.

## Contact

Questions about these terms can be sent through the [Contact page](/contact).`,
      },
    ],
    seo: seo("/terms", "Terms of Use | AceVisitor", "The terms that apply to use of the AceVisitor marketing website."),
  },
];
