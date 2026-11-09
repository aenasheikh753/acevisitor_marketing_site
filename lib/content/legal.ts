import type { LegalPage } from "@/lib/types";

const legalPages: Record<"privacy-policy" | "terms", LegalPage> = {
  "privacy-policy": {
  "slug": "privacy-policy",
  "title": "Privacy Policy",
  "subtitle": "How this website handles the information you share with us.",
  "revised": "2026-11-09",
  "seo": {
    "title": "Privacy Policy | AceVisitor",
    "description": "How the AceVisitor marketing website handles information submitted through it.",
    "image": "",
    "canonical": "/privacy-policy"
  },
  body: `This policy covers the public AceVisitor marketing website, operated by Datacompute Consulting LLC. It does not cover the AceVisitor product, which is governed by separate customer agreements.

## Information we collect

When you use the Contact or Request a Demo form, we receive the details you enter: your name, work email, company and message.

This website does not set analytics or advertising cookies.

## How we use information

We use the details you submit to respond to your inquiry and to discuss AceVisitor with you.

## Sharing

Form submissions are delivered through a form-processing provider acting on our behalf. We do not sell the information you submit.

## Retention

We keep inquiry details only as long as needed to respond and maintain reasonable business records.

## Your choices

You can ask us to access, correct or delete the details you submitted by contacting us through the [Contact page](/contact).

## Changes

We may update this policy. The revision date at the top of this page shows when it last changed.
`,
},
  "terms": {
  "slug": "terms",
  "title": "Terms of Use",
  "subtitle": "The terms that apply when you use this website.",
  "revised": "2026-11-09",
  "seo": {
    "title": "Terms of Use | AceVisitor",
    "description": "The terms that apply to use of the AceVisitor marketing website.",
    "image": "",
    "canonical": "/terms"
  },
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

Questions about these terms can be sent through the [Contact page](/contact).
`,
},
};

export function getLegalPage(slug: "privacy-policy" | "terms"): LegalPage {
  return legalPages[slug];
}
