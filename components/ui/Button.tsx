import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "light" | "outline" | "secondary" | "ghost";

type Shared = { children: ReactNode; variant?: Variant; className?: string };
type AsLink = Shared & { href: string };
type AsButton = Shared & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = AsLink | AsButton;

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

/** The one button in the site; the 10px radius comes from --radius-button. */
export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `btn btn-${variant} ${className}`.trim();

  if (props.href !== undefined) {
    return isExternal(props.href) ? (
      <a href={props.href} className={classes}>
        {children}
      </a>
    ) : (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const nativeProps = { ...props, variant: undefined, href: undefined };
  return (
    <button {...nativeProps} className={classes}>
      {children}
    </button>
  );
}
