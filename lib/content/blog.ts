import type { Author, BlogPost, Category } from "@/lib/types";

const authors: Author[] = [
  {
    "slug": "acevisitor-editorial",
    "name": "AceVisitor Editorial",
    "role": "Editorial team",
    "bio": "Practical perspectives from the team behind AceVisitor on welcoming guests and running visitor programs."
  }
];

const categories: Category[] = [
  {
    "slug": "front-desk-operations",
    "name": "Front desk operations",
    "description": "Practical ways to make a busy reception easier to run."
  },
  {
    "slug": "multi-site-programs",
    "name": "Multi-site programs",
    "description": "Balancing shared standards with the realities of each location."
  },
  {
    "slug": "visitor-experience",
    "name": "Visitor experience",
    "description": "Ideas for making every arrival clearer and more welcoming."
  }
];

const posts: BlogPost[] = [
{
  "title": "How connected workflows help front desk teams",
  "slug": "front-desk-workflows",
  "date": "2026-09-18",
  "summary": "Small improvements to arrival coordination can make a busy reception feel more manageable.",
  "coverImage": "/images/blog/front-desk-workflows.webp",
  "coverAlt": "Abstract navy cover graphic with rising outlined blocks",
  "category": "front-desk-operations",
  "author": "acevisitor-editorial",
  "seo": {
    "title": "How connected workflows help front desk teams | AceVisitor",
    "description": "Small improvements to arrival coordination can make a busy reception feel more manageable.",
    "image": "",
    "canonical": "/blog/front-desk-workflows"
  },
  body: `Reception teams balance a steady stream of arrivals with calls, deliveries and questions from across the workplace. Visitor information spread across multiple tools makes it harder to know what is happening next.

## A practical view of the day

A connected workflow gives front desk staff a view of expected visitors, arrivals and host updates. The goal is not to add another process; it is to make the existing process easier to follow.

## Where to begin

1. Map the steps your team repeats most often.
2. Identify where details go missing.
3. Choose a workflow that keeps the right context close at hand.
`,
},
{
  "title": "Balancing consistency and local context across sites",
  "slug": "multi-site-visitor-operations",
  "date": "2026-08-26",
  "summary": "Enterprise visitor programs work best when shared standards leave room for site realities.",
  "coverImage": "/images/blog/multi-site-operations.webp",
  "coverAlt": "Abstract blue cover graphic with a grid of outlined tiles",
  "category": "multi-site-programs",
  "author": "acevisitor-editorial",
  "seo": {
    "title": "Balancing consistency and local context across sites | AceVisitor",
    "description": "Enterprise visitor programs work best when shared standards leave room for site realities.",
    "image": "",
    "canonical": "/blog/multi-site-visitor-operations"
  },
  body: `A multi-site visitor program needs a dependable baseline. Guests should receive clear instructions, teams should understand their responsibilities, and administrators should be able to review how the program is operating.

## Room for local reality

A campus, a project site and a corporate office do not have identical arrival needs. Give local teams room to account for their entrances and operating rhythms while keeping shared expectations easy to understand.

## A simple starting point

Begin with a small set of common principles, paired with a regular way to learn from the people managing visits on site.
`,
},
{
  "title": "A practical checklist for a better visitor experience",
  "slug": "visitor-management-checklist",
  "date": "2026-10-12",
  "summary": "A thoughtful visitor program starts well before a guest reaches the reception desk.",
  "coverImage": "/images/blog/visitor-experience-checklist.webp",
  "coverAlt": "Abstract navy and blue cover graphic with concentric circles",
  "category": "visitor-experience",
  "author": "acevisitor-editorial",
  "seo": {
    "title": "A practical checklist for a better visitor experience | AceVisitor",
    "description": "A thoughtful visitor program starts well before a guest reaches the reception desk.",
    "image": "",
    "canonical": "/blog/visitor-management-checklist"
  },
  body: `A visitor’s first impression often starts with a simple question: do they know where to go and what to expect? A clear invitation, useful arrival details and a welcoming check-in process can make that first moment feel easier.

## Before the visit

- Make the host and location clear.
- Explain what guests should bring.
- Share parking, entrance and timing details.

## At the door

Provide a straightforward path for check-in, and keep reception and hosts informed so the visit feels connected rather than improvised.

## After the visit

Review the process regularly. Ask visitors and staff where they encounter friction, then improve the steps that matter most to your sites.
`,
},
];

/** Newest first. */
export function getPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getAuthors(): Author[] {
  return authors;
}

export function getAuthor(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}
