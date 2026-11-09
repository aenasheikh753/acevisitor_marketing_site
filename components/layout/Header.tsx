"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import type { SiteSettings } from "@/lib/types";

type HeaderProps = Pick<SiteSettings, "brandName" | "logo" | "menu" | "loginLabel" | "cta" | "ui">;

export default function Header({ brandName, logo, menu, loginLabel, cta, ui }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const current = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`) ? ("page" as const) : undefined;
  const close = () => setOpen(false);

  const login = loginUrl ? (
    <Button href={loginUrl} variant="ghost">
      {loginLabel}
    </Button>
  ) : (
    <Button variant="ghost" disabled title={ui.loginUnavailable}>
      {loginLabel}
    </Button>
  );

  return (
    <header className="site-header">
      <div className="container-page grid h-(--header-height) grid-cols-[1fr_auto] items-center gap-4 xl:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="flex w-fit items-center gap-2.5 rounded-small" aria-label={ui.homeLabel} onClick={close}>
          <Image src={logo.src} alt="" width={38} height={44} priority className="h-11 w-auto" />
          <span className="font-display text-xl font-extrabold tracking-tight text-navy">{brandName}</span>
        </Link>

        <nav aria-label={ui.navLabel} className="hidden items-center gap-0.5 xl:flex">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link" aria-current={current(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-2 xl:flex">
          {login}
          <Button href={cta.href}>{cta.label}</Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-button border border-line text-navy xl:hidden"
          aria-label={open ? ui.menuClose : ui.menuOpen}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-line bg-white shadow-card xl:hidden"
      >
        <nav aria-label={ui.navLabel} className="container-page flex flex-col gap-1 py-4">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-link" aria-current={current(item.href)} onClick={close}>
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-line pt-4" onClick={close}>
            {login}
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
