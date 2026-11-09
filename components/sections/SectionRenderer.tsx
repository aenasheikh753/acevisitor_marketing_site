import Image from "next/image";
import Link from "next/link";
import { PostGrid } from "@/components/blog/PostCard";
import ContactForm from "@/components/forms/ContactForm";
import { CardGrid, CheckList } from "@/components/sections/Cards";
import GalleryBrowser from "@/components/sections/GalleryBrowser";
import { SplitRow } from "@/components/sections/Split";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SectionShell, { type Tone } from "@/components/ui/Section";
import { getPosts } from "@/lib/content/blog";
import {
  getFeatures,
  getGalleryItems,
  getIndustries,
} from "@/lib/content/collections";
import { getSiteSettings } from "@/lib/content/site";
import type { LinkItem, Section as SectionData } from "@/lib/types";

function SectionAction({ action }: { action?: LinkItem }) {
  if (!action) return null;
  return (
    <p className="mt-8">
      <Link href={action.href} className="text-link">
        {action.label}
        <Icon name="arrowRight" className="h-4 w-4" />
      </Link>
    </p>
  );
}

function CtaBand({ section }: { section: Extract<SectionData, { type: "cta" }> }) {
  return (
    <section className="section-pad tone-brand">
      <div className="container-page flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
          <h2 className="heading-section text-white">{section.title}</h2>
          {section.description ? <p className="lead on-dark-muted mt-4">{section.description}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={section.primary.href} variant="light">
            {section.primary.label}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Button>
          {section.secondary ? (
            <Button href={section.secondary.href} variant="outline">
              {section.secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Body({ section }: { section: SectionData }) {
  switch (section.type) {
    case "proofPoints":
      return (
        <dl className="grid gap-5 md:grid-cols-3">
          {section.items.map((item) => (
            <div key={item.label} className="card reveal p-6 text-center">
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-blue">{item.value}</dd>
              <dd className="mt-1 text-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      );

    case "cards":
      return <CardGrid items={section.items} columns={section.columns} />;

    case "features":
      return (
        <CardGrid
          columns={4}
          items={getFeatures("feature").map((feature) => ({
            icon: feature.icon,
            title: feature.name,
            description: feature.description,
            benefits: section.showBenefits ? feature.benefits : undefined,
          }))}
        />
      );

    case "workflow":
      return (
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.steps.map((step, index) => (
            <li key={step.title} className="card reveal flex items-start gap-4 p-5">
              <span className="icon-tile">
                <Icon name={step.icon} />
              </span>
              <div>
                <p className="text-xs font-extrabold tracking-wider text-blue">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="heading-card text-navy">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "industries": {
      const industries = getIndustries().slice(0, section.limit);
      return (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.slug} className="card card-hover reveal overflow-hidden">
                {industry.image ? (
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt ?? ""}
                    width={800}
                    height={500}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[8/5] w-full object-cover"
                  />
                ) : null}
                <div className="p-6">
                  <span className="icon-tile">
                    <Icon name={industry.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="heading-card mt-4 text-navy">{industry.name}</h3>
                  <p className="mt-2 text-[0.95rem] leading-7 text-muted">{industry.scenario}</p>
                  {section.limit ? null : <CheckList items={industry.benefits} className="mt-4" />}
                </div>
              </article>
            ))}
          </div>
          <SectionAction action={section.action} />
        </>
      );
    }

    case "gallery":
      return <GalleryBrowser items={getGalleryItems()} ui={getSiteSettings().ui.gallery} />;

    case "galleryPreview":
      return (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getGalleryItems()
              .slice(0, section.limit)
              .map((item) => (
                <figure key={item.slug} className="card reveal overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={500}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[8/5] w-full object-cover"
                  />
                  <figcaption className="p-4 font-bold text-navy">{item.caption}</figcaption>
                </figure>
              ))}
          </div>
          <SectionAction action={section.action} />
        </>
      );

    case "latestPosts":
      return (
        <>
          <PostGrid posts={getPosts().slice(0, section.limit)} />
          <SectionAction action={section.action} />
        </>
      );

    case "faqs":
      return (
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {section.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex list-none items-center justify-between gap-5 rounded-small font-display font-bold text-navy [&::-webkit-details-marker]:hidden">
                {item.question}
                <span aria-hidden="true" className="text-xl font-normal text-blue transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-3 leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      );

    case "siteIndex": {
      const { footer } = getSiteSettings();
      const groups = [
        ...footer.groups,
        { title: section.legalTitle, links: footer.legalLinks },
        {
          title: section.postsTitle,
          links: getPosts().map((post) => ({ label: post.title, href: `/blog/${post.slug}` })),
        },
      ];
      return (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="heading-card text-navy">{group.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      );
    }

    case "form": {
      const { contact, footer } = getSiteSettings();
      const details = [
        { icon: "mail" as const, value: contact.email, href: `mailto:${contact.email}` },
        { icon: "phone" as const, value: contact.phone, href: `tel:${contact.phone}` },
        { icon: "map" as const, value: contact.address },
      ].filter((detail) => detail.value);
      return (
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div id="request-demo" className="min-w-0">
            <ContactForm copy={section.form} privacyHref={footer.legalLinks[0].href} />
          </div>
          <aside>
            {section.asideEyebrow ? <p className="eyebrow mb-2">{section.asideEyebrow}</p> : null}
            <h3 className="heading-card text-navy">{section.asideTitle}</h3>
            {section.asideDescription ? <p className="mt-2 leading-7 text-muted">{section.asideDescription}</p> : null}
            <ul className="mt-5 space-y-5">
              {section.asideItems?.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="icon-tile">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <p className="font-bold text-navy">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            {details.length ? (
              <address className="mt-8 space-y-2 border-t border-line pt-6 not-italic">
                <p className="font-bold text-navy">{contact.heading}</p>
                {details.map((detail) =>
                  detail.href ? (
                    <a key={detail.icon} href={detail.href} className="text-link">
                      <Icon name={detail.icon} className="h-4 w-4" />
                      {detail.value}
                    </a>
                  ) : (
                    <p key={detail.icon} className="flex items-start gap-2 text-muted">
                      <Icon name={detail.icon} className="mt-1 h-4 w-4 shrink-0" />
                      {detail.value}
                    </p>
                  ),
                )}
              </address>
            ) : null}
          </aside>
        </div>
      );
    }

    default:
      return null;
  }
}

/** Renders a page's modules, alternating tones so neighbours always differ. */
export default function SectionRenderer({ sections }: { sections: SectionData[] }) {
  let lightIndex = 0;
  return (
    <>
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;
        if (section.type === "cta") return <CtaBand key={key} section={section} />;
        const tone: Tone = lightIndex++ % 2 === 0 ? "white" : "tint";

        if (section.type === "split") {
          return (
            <section key={key} className={`section-pad tone-${tone}`}>
              <div className="container-page">
                <SplitRow {...section} />
              </div>
            </section>
          );
        }

        if (section.type === "solutions") {
          return (
            <SectionShell key={key} tone={tone} eyebrow={section.eyebrow} title={section.title} description={section.description}>
              <div className="space-y-16 lg:space-y-24">
                {getFeatures("solution").map((solution, position) => (
                  <SplitRow
                    key={solution.slug}
                    eyebrow={solution.eyebrow}
                    title={solution.name}
                    description={solution.description}
                    checklist={solution.benefits}
                    visual={solution.visual}
                    image={solution.image}
                    imageAlt={solution.imageAlt}
                    reverse={position % 2 === 1}
                  />
                ))}
              </div>
            </SectionShell>
          );
        }

        return (
          <SectionShell key={key} tone={tone} eyebrow={section.eyebrow} title={section.title} description={section.description}>
            <Body section={section} />
          </SectionShell>
        );
      })}
    </>
  );
}
