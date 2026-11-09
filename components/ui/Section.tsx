import type { ReactNode } from "react";

export type Tone = "white" | "tint" | "dark" | "brand";

type SectionProps = {
  tone?: Tone;
  eyebrow?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered,
}: Pick<SectionProps, "eyebrow" | "title" | "description" | "centered">) {
  return (
    <div className={`reveal max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className={`heading-section text-navy ${eyebrow ? "mt-3" : ""}`}>{title}</h2> : null}
      {description ? <p className="lead mt-4 text-muted">{description}</p> : null}
    </div>
  );
}

export default function Section({ tone = "white", eyebrow, title, description, centered, children }: SectionProps) {
  return (
    <section className={`section-pad tone-${tone}`}>
      <div className="container-page">
        {title ? (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} centered={centered} />
        ) : null}
        {children ? <div className={title ? "mt-10 lg:mt-12" : ""}>{children}</div> : null}
      </div>
    </section>
  );
}
