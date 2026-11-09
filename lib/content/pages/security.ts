import type { Page } from "@/lib/types";

const page: Page = {
  "slug": "security",
  "eyebrow": "Security & governance",
  "title": "Accountable visitor operations, by design.",
  "subtitle": "Every organization has its own governance requirements. Talk with our team about the controls and operating practices your program needs.",
  "heroVisual": "none",
  "primaryAction": {
    "label": "Talk security with us",
    "href": "/contact"
  },
  "sections": [
    {
      "type": "split",
      "eyebrow": "Responsible by design",
      "title": "Make good operating practices easier to follow.",
      "description": "AceVisitor helps teams apply consistent visitor processes while giving administrators a clearer view of how those processes are used."
    },
    {
      "type": "cards",
      "eyebrow": "A useful conversation",
      "title": "Bring your requirements to the table.",
      "description": "We can walk through your visitor workflows, administration needs, and review questions together.",
      "columns": 3,
      "items": [
        {
          "icon": "users",
          "title": "Identity and access",
          "description": "Discuss how user access and responsibilities should fit your organization."
        },
        {
          "icon": "file",
          "title": "Visitor information",
          "description": "Review the visitor information involved in your intended workflows."
        },
        {
          "icon": "clipboard",
          "title": "Governance questions",
          "description": "Bring your review criteria so the right product and policy details can be confirmed."
        }
      ]
    },
    {
      "type": "cta",
      "title": "Have specific governance requirements?",
      "description": "Talk with our team about the controls and operating practices your program needs.",
      "primary": {
        "label": "Contact our team",
        "href": "/contact"
      },
      "secondary": {
        "label": "Explore the platform",
        "href": "/platform"
      }
    }
  ],
  "seo": {
    "title": "Security & Governance | AceVisitor",
    "description": "How AceVisitor approaches security and governance conversations, and where verified control information is published.",
    "image": "/images/og-default.jpg",
    "canonical": "/security"
  }
};

export default page;
