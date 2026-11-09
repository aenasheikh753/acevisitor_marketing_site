import type { Page } from "@/lib/types";

const page: Page = {
  "slug": "contact",
  "eyebrow": "Contact",
  "title": "Let's talk about a better welcome.",
  "subtitle": "Share a little about your organization and visitor program. Our team will help you explore what a good next step could look like.",
  "heroVisual": "none",
  "sections": [
    {
      "type": "form",
      "title": "Tell us what you’re looking for",
      "description": "A few details will help us make the conversation useful for your team.",
      "asideEyebrow": "A good place to start",
      "asideTitle": "Bring us your questions.",
      "asideDescription": "Whether you manage one busy reception or a distributed enterprise program, we’re ready to listen.",
      "form": {
        "requiredHint": "Fields marked with * are required.",
        "fields": {
          "name": {
            "label": "Full name",
            "placeholder": "Your name",
            "error": "Please enter your name."
          },
          "email": {
            "label": "Work email",
            "placeholder": "you@company.com",
            "error": "Please enter your work email.",
            "invalid": "Please enter a valid email address."
          },
          "company": {
            "label": "Company",
            "placeholder": "Your organization",
            "error": "Please enter your company."
          },
          "interest": {
            "label": "I would like to",
            "options": [
              "Request a demo",
              "Ask a general question",
              "Discuss security and governance"
            ]
          },
          "message": {
            "label": "What would you like to improve?",
            "placeholder": "Tell us about your sites, visitor workflows or goals.",
            "error": "Please tell us a little about your needs."
          },
          "honeypot": {
            "label": "Leave this field empty"
          }
        },
        "submit": "Send inquiry",
        "submitting": "Sending...",
        "privacyNote": "How we use your details",
        "errorSummary": "Please fix the highlighted fields.",
        "success": {
          "title": "Thanks for reaching out.",
          "description": "Our team will be in touch shortly."
        },
        "failure": {
          "title": "We couldn't send your inquiry.",
          "description": "Please try again."
        },
        "note": "Our team will follow up using the work email you provided."
      }
    }
  ],
  "seo": {
    "title": "Contact & Request a Demo | AceVisitor",
    "description": "Talk with the AceVisitor team or request a product demo for your visitor program.",
    "image": "/images/og-default.jpg",
    "canonical": "/contact"
  }
};

export default page;
