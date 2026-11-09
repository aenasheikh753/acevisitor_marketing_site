import type { Page } from "@/lib/types";

const page: Page = {
  "slug": "platform",
  "eyebrow": "The AceVisitor platform",
  "title": "A connected system for every visitor touchpoint.",
  "subtitle": "Bring invitations, arrivals, approvals, badges, and reporting into one calm, consistent operating experience.",
  "heroVisual": "dashboard",
  "primaryAction": {
    "label": "Talk to our team",
    "href": "/contact"
  },
  "sections": [
    {
      "type": "features",
      "eyebrow": "A connected toolkit",
      "title": "The essentials, thoughtfully connected.",
      "description": "Give every team the tools to welcome, verify, and understand visitors without adding complexity at the front door."
    },
    {
      "type": "split",
      "eyebrow": "For the front desk",
      "title": "A live view that helps the day run smoothly.",
      "description": "See who is expected, who has arrived, which hosts need to respond, and what needs attention — all in one practical workspace.",
      "cards": [
        {
          "icon": "clock",
          "title": "Know what is next",
          "description": "Prepare for scheduled arrivals before they reach reception."
        },
        {
          "icon": "message",
          "title": "Keep people connected",
          "description": "Make guest and host communication part of the same workflow."
        },
        {
          "icon": "search",
          "title": "Find the right context",
          "description": "Bring key visit details into view when the team needs them."
        }
      ],
      "visual": "frontDesk"
    },
    {
      "type": "split",
      "eyebrow": "For the entrance",
      "title": "Self-service that still feels personal.",
      "description": "A clear kiosk experience helps visitors check in confidently, while your team stays informed and in control.",
      "visual": "kiosk",
      "reverse": true
    },
    {
      "type": "workflow",
      "eyebrow": "One connected experience",
      "title": "A better visit, from first invite to final sign-out.",
      "description": "Every step is clear for guests and accountable for your team. AceVisitor connects the details without adding friction.",
      "steps": [
        {
          "icon": "message",
          "title": "Invite",
          "description": "Send a polished invitation with the details guests need."
        },
        {
          "icon": "calendar",
          "title": "Pre-register",
          "description": "Collect visit details and agreements before arrival."
        },
        {
          "icon": "door",
          "title": "Arrive",
          "description": "Offer a welcoming, guided check-in at any entrance."
        },
        {
          "icon": "id",
          "title": "Verify",
          "description": "Confirm identity and visit details with confidence."
        },
        {
          "icon": "check",
          "title": "Agree",
          "description": "Capture policies and acknowledgements digitally."
        },
        {
          "icon": "badge",
          "title": "Badge",
          "description": "Issue a clear, professional visitor badge."
        },
        {
          "icon": "userCheck",
          "title": "Host approval",
          "description": "Keep hosts informed and route approvals promptly."
        },
        {
          "icon": "logout",
          "title": "Check out",
          "description": "Close each visit and keep occupancy current."
        },
        {
          "icon": "clipboardList",
          "title": "Review",
          "description": "Retain a dependable record of site activity."
        }
      ]
    },
    {
      "type": "galleryPreview",
      "eyebrow": "See it in action",
      "title": "Designed for the moments that matter.",
      "description": "Explore the touchpoints that make visitor operations feel effortless.",
      "limit": 3,
      "action": {
        "label": "Explore the gallery",
        "href": "/gallery"
      }
    },
    {
      "type": "cards",
      "eyebrow": "For administrators",
      "title": "Consistent governance without slowing teams down.",
      "description": "Set shared standards and understand activity across locations with tools that support accountable operations.",
      "columns": 2,
      "items": [
        {
          "icon": "layers",
          "title": "Organization structure",
          "description": "Model sites and teams in a way that reflects how your organization works."
        },
        {
          "icon": "clipboardList",
          "title": "Activity records",
          "description": "Review meaningful activity across visitor workflows and administration."
        }
      ]
    },
    {
      "type": "cta",
      "title": "Bring every visitor workflow together.",
      "description": "Let’s map the right platform experience for your people, sites, and arrival points.",
      "primary": {
        "label": "Request a demo",
        "href": "/contact#request-demo"
      },
      "secondary": {
        "label": "Explore solutions",
        "href": "/solutions"
      }
    }
  ],
  "seo": {
    "title": "Platform | AceVisitor",
    "description": "Pre-registration, guided check-in, host notifications, visitor badges and reporting in one connected visitor-management platform.",
    "image": "/images/og-default.jpg",
    "canonical": "/platform"
  }
};

export default page;
