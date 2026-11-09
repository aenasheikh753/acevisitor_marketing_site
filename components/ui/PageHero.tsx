import type { ReactNode } from "react";
import Visual from "@/components/visuals/Visual";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import type { LinkItem, VisualName } from "@/lib/types";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  visual?: VisualName;
  primaryAction?: LinkItem;
  secondaryAction?: LinkItem;
  proofLine?: string;
  large?: boolean;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  visual = "none",
  primaryAction,
  secondaryAction,
  proofLine,
  large,
  children,
}: PageHeroProps) {
  const hasVisual = visual !== "none";
  return (
    <section className="tone-dark relative overflow-hidden">
      <div aria-hidden="true" className="hero-rings" />
      <div
        className={`container-page relative grid items-center gap-12 py-16 lg:py-24 ${
          hasVisual ? "lg:grid-cols-[1fr_1.05fr]" : ""
        }`}
      >
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
          {proofLine ? (
            <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-white">
              <span aria-hidden="true" className="h-2 w-2 rounded-pill bg-blue-bright" />
              {proofLine}
            </p>
          ) : null}
          {children}
        </div>
        {hasVisual ? (
          <div className="min-w-0">
            <Visual name={visual} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
