import Image from "next/image";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import type { ImageItem, LinkItem } from "@/lib/types";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  images?: ImageItem[];
  primaryAction?: LinkItem;
  secondaryAction?: LinkItem;
  proofLine?: string;
  proofs?: { label: string; detail: string }[];
  large?: boolean;
  children?: ReactNode;
};

const MAX_COLLAGE_IMAGES = 3;

function HeroMedia({ images }: { images: ImageItem[] }) {
  if (images.length === 1) {
    const [image] = images;
    // Sized by the file itself, so an uploaded image of any shape shows in full.
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={750}
        preload
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="mx-auto h-auto max-h-[34rem] w-auto max-w-full rounded-panel shadow-lift"
      />
    );
  }
  return (
    <div className="hero-collage">
      {images.slice(0, MAX_COLLAGE_IMAGES).map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={800}
          height={500}
          preload
          sizes="(min-width: 1024px) 28vw, 56vw"
          className="hero-collage-item"
        />
      ))}
    </div>
  );
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  images = [],
  primaryAction,
  secondaryAction,
  proofLine,
  proofs,
  large,
  children,
}: PageHeroProps) {
  const hasMedia = images.length > 0;
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
            <HeroMedia images={images} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
