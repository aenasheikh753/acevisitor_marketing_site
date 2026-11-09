import Image from "next/image";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/Section";
import { CheckList } from "@/components/sections/Cards";
import Visual from "@/components/visuals/Visual";
import type { LinkItem, VisualName } from "@/lib/types";

export function SplitMedia({
  visual,
  image,
  imageAlt,
}: {
  visual?: VisualName;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={imageAlt ?? ""}
        width={1200}
        height={750}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-[8/5] w-full rounded-panel object-cover shadow-card"
      />
    );
  }
  return visual ? <Visual name={visual} /> : null;
}

type SplitRowProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  body?: string[];
  checklist?: string[];
  stats?: { value: string; label: string }[];
  visual?: VisualName;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  action?: LinkItem;
  children?: ReactNode;
};

export function SplitRow(props: SplitRowProps) {
  const { eyebrow, title, description, body, checklist, stats, visual, image, imageAlt, reverse, action } = props;
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
        {checklist?.length ? <CheckList items={checklist} className="mt-6" /> : null}
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
          <SplitMedia visual={visual} image={image} imageAlt={imageAlt} />
        </div>
      ) : null}
    </div>
  );
}
