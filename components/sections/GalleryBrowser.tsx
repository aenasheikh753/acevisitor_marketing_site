"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import type { GalleryItem, UiCopy } from "@/lib/types";

const CARD_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

export default function GalleryBrowser({ items, ui }: { items: GalleryItem[]; ui: UiCopy["gallery"] }) {
  const categories = [...new Set(items.map((item) => item.category))];
  const [category, setCategory] = useState<string | null>(null);
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = category ? items.filter((item) => item.category === category) : items;
  const selected = index === null ? null : visible[index];

  const open = (next: number) => {
    setIndex(next);
    dialogRef.current?.showModal();
  };
  const step = (delta: number) =>
    setIndex((current) => (current === null ? null : (current + delta + visible.length) % visible.length));

  return (
    <>
      <div role="group" aria-label={ui.filterLabel} className="flex flex-wrap gap-2">
        {[null, ...categories].map((value) => (
          <button
            key={value ?? "all"}
            type="button"
            className="chip cursor-pointer"
            aria-pressed={category === value}
            onClick={() => setCategory(value)}
          >
            {value ?? ui.allCategories}
          </button>
        ))}
      </div>

      {visible.length === 0 ? <p className="mt-8 text-muted">{ui.empty}</p> : null}

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, position) => (
          <li key={item.slug}>
            <button
              type="button"
              className="card card-hover block h-full w-full cursor-pointer overflow-hidden text-left"
              aria-label={`${ui.open}: ${item.caption}`}
              aria-haspopup="dialog"
              onClick={() => open(position)}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={800}
                height={500}
                sizes={CARD_SIZES}
                className="aspect-[8/5] w-full object-cover"
              />
              <span className="block p-5">
                <span className="block font-bold text-navy">{item.caption}</span>
                <span className="mt-1 block text-sm text-muted">{item.category}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">{ui.note}</p>

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-label={selected?.caption}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        {selected ? (
          <div>
            <Image
              key={selected.slug}
              src={selected.image}
              alt={selected.alt}
              width={1600}
              height={1000}
              sizes="(min-width: 1072px) 1040px, 100vw"
              className="max-h-[72dvh] w-full bg-navy-deep object-contain"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <p className="font-bold text-navy">{selected.caption}</p>
                <p className="text-sm text-muted">{selected.category}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" aria-label={ui.previous} onClick={() => step(-1)}>
                  <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                </Button>
                <Button variant="secondary" aria-label={ui.next} onClick={() => step(1)}>
                  <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </Button>
                <Button autoFocus onClick={() => dialogRef.current?.close()}>
                  <X aria-hidden="true" className="h-4 w-4" />
                  {ui.close}
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
