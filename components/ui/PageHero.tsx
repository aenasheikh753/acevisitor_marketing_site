import Image from "next/image";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Visual from "@/components/visuals/Visual";
import type { LinkItem, VisualName } from "@/lib/types";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  visual?: VisualName;
  image?: string;
  imageAlt?: string;
  primaryAction?: LinkItem;
  secondaryAction?: LinkItem;
  proofLine?: string;
  proofs?: { label: string; detail: string }[];
  large?: boolean;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  visual = "none",
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
  proofLine,
  proofs,
  large,
  children,
}: PageHeroProps) {
  const hasMedia = Boolean(image) || visual !== "none";
  return (
    <section className="tone-dark relative overflow-hidden">
      <div aria-hidden="true" className="hero-rings" />
      <div className={`container-page relative grid items-center gap-12 py-16 lg:py-24 ${hasMedia ? "lg:grid-cols-[1fr_1.05fr]" : ""}`}>
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className={`${large ? "heading-hero" : "heading-page"} mt-5 text-white`}>{title}</h1>
          {subtitle ? <p className="lead on-dark-muted mt-6 max-w-2xl">{subtitle}</p> : null}
          {primaryAction || secondaryAction ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryAction ? (
                <Button href={primaryAction.href} variant="light">
                  {primaryAction.label}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button href={secondaryAction.href} variant="outline">
                  {secondaryAction.label}
                </Button>
              ) : null}
            </div>
          ) : null}
          {proofs?.length ? (
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {proofs.map((proof) => (
                <div key={proof.label}>
                  <dt className="font-display font-bold text-blue-light">{proof.label}</dt>
                  <dd className="on-dark-muted mt-1 text-sm leading-5">{proof.detail}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {proofLine ? (
            <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-white">
              <span aria-hidden="true" className="h-2 w-2 rounded-pill bg-blue-bright" />
              {proofLine}
            </p>
          ) : null}
          {children}
        </div>
        {hasMedia ? (
          <div className="min-w-0">
            {image ? (
              <Image
                src={image}
                alt={imageAlt ?? ""}
                width={1200}
                height={750}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[8/5] w-full rounded-panel object-cover shadow-lift"
              />
            ) : (
              <Visual name={visual} />
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
