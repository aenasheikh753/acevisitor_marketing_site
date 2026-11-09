import Image from "next/image";
import { CheckList } from "@/components/sections/Cards";
import Button from "@/components/ui/Button";
import Icon, { IconTile } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/Section";
import Visual from "@/components/visuals/Visual";
import type { CardItem, LinkItem, VisualName } from "@/lib/types";

type SplitRowProps = {
  eyebrow?: string;
  title: string;
  description?: string;
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

export function SplitRow(props: SplitRowProps) {
  const { eyebrow, title, description, body, checklistTitle, checklist, cards, stats, visual, image, imageAlt, reverse, action } = props;
  const hasMedia = Boolean(image) || (visual && visual !== "none");

  return (
    <div className={`grid items-center gap-10 lg:gap-16 ${hasMedia ? "lg:grid-cols-2" : ""}`}>
      <div className={reverse ? "lg:order-2" : ""}>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        {body?.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl leading-8 text-muted">
            {paragraph}
          </p>
        ))}
        {checklistTitle ? <h3 className="heading-card mt-6 text-navy">{checklistTitle}</h3> : null}
        {checklist?.length ? <CheckList items={checklist} className={checklistTitle ? "mt-3" : "mt-6"} /> : null}
        {cards?.length ? (
          <ul className="mt-7 space-y-5">
            {cards.map((card) => (
              <li key={card.title} className="flex items-start gap-4">
                <IconTile name={card.icon} />
                <div>
                  <h3 className="heading-card text-navy">{card.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-7 text-muted">{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
        {stats?.length ? (
          <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-blue">{stat.value}</dd>
                <dd className="mt-1 text-sm leading-5 text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {action ? (
          <Button href={action.href} className="mt-8">
            {action.label}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Button>
        ) : null}
      </div>
      {hasMedia ? (
        <div className={`reveal min-w-0 ${reverse ? "lg:order-1" : ""}`}>
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? ""}
              width={1200}
              height={750}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[8/5] w-full rounded-panel object-cover shadow-card"
            />
          ) : visual ? (
            <Visual name={visual} />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
