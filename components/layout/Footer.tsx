import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { SiteSettings } from "@/lib/types";

export default function Footer({ site }: { site: SiteSettings }) {
  const { footer, contact, social, ui } = site;
  const hasContact = contact.email || contact.phone || contact.address;

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <Link href="/" className="flex w-fit items-center gap-2.5 rounded-small" aria-label={ui.homeLabel}>
            <Image src={site.logo.src} alt="" width={38} height={44} loading="lazy" className="h-11 w-auto" />
            <span className="font-display text-xl font-extrabold tracking-tight">{site.brandName}</span>
          </Link>
          <p className="on-dark-muted mt-4 text-sm leading-6">{footer.summary}</p>
          <p className="on-dark-muted mt-4 text-sm leading-6">{footer.companyLine}</p>
          {hasContact ? (
            <address className="on-dark-muted mt-4 space-y-2 text-sm not-italic">
              {contact.email ? (
                <a className="footer-link flex items-center gap-2" href={`mailto:${contact.email}`}>
                  <Icon name="mail" className="h-4 w-4" />
                  {contact.email}
                </a>
              ) : null}
              {contact.phone ? (
                <a className="footer-link flex items-center gap-2" href={`tel:${contact.phone}`}>
                  <Icon name="phone" className="h-4 w-4" />
                  {contact.phone}
                </a>
              ) : null}
              {contact.address ? (
                <p className="flex items-start gap-2">
                  <Icon name="map" className="mt-0.5 h-4 w-4 shrink-0" />
                  {contact.address}
                </p>
              ) : null}
            </address>
          ) : null}
        </div>

        {footer.groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="font-display text-sm font-bold">{group.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="footer-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-3 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="on-dark-muted">{footer.copyright}</p>
          <nav aria-label={ui.footerNavLabel}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {[...footer.legalLinks, ...social].map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a className="footer-link" href={link.href} rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link className="footer-link" href={link.href}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
