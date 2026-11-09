import type { Page } from "@/lib/types";

const page: Page = {
  "slug": "solutions",
  "eyebrow": "Solutions",
  "title": "Visitor operations that fit the way your sites work.",
  "subtitle": "Create a consistent welcome while giving each team the workflows and visibility their environment needs.",
  "heroVisual": "multiSite",
  "primaryAction": {
    "label": "Discuss your program",
    "href": "/contact"
  },
  "sections": [
    {
      "type": "solutions",
      "title": ""
    },
    {
      "type": "features",
      "eyebrow": "A connected toolkit",
      "title": "The essentials, thoughtfully connected.",
      "description": "Give every team the tools to welcome, verify, and understand visitors without adding complexity at the front door."
    },
    {
      "type": "cards",
      "eyebrow": "Better outcomes",
      "title": "More confidence at the door. More clarity everywhere else.",
      "columns": 3,
      "items": [
        {
          "icon": "sparkles",
          "title": "A consistent welcome",
          "description": "Visitors know what to expect at every location and entrance."
        },
        {
          "icon": "clock",
          "title": "Less front desk friction",
          "description": "Teams spend less time chasing details and more time helping people."
        },
        {
          "icon": "map",
          "title": "A clearer operating picture",
          "description": "Leaders and local teams can work from better visitor context."
        }
      ]
    },
    {
      "type": "cta",
      "title": "Build a visitor program that works across your sites.",
      "description": "Talk with our team about the workflows your locations need.",
      "primary": {
        "label": "Request a demo",
        "href": "/contact#request-demo"
      },
      "secondary": {
        "label": "View the platform",
        "href": "/platform"
      }
    }
  ],
  "seo": {
    "title": "Solutions | AceVisitor",
    "description": "Visitor-management solutions for multi-site programs, contractor and vendor visits, and busy front desk teams.",
    "image": "/images/og-default.jpg",
    "canonical": "/solutions"
  }
};

export default page;
