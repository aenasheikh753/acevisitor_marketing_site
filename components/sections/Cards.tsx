import Image from "next/image";
import Icon, { IconTile } from "@/components/ui/Icon";
import type { CardItem } from "@/lib/types";

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-ink">
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CardGrid({ items, columns = 3 }: { items: CardItem[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={`grid gap-5 ${columnClasses[columns]}`}>
      {items.map((item) => (
        <article key={item.title} className="card card-hover reveal overflow-hidden">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.imageAlt ?? ""}
              width={800}
              height={500}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-[8/5] w-full object-cover"
            />
          ) : null}
          <div className="p-6">
            <IconTile name={item.icon} className="h-[22px] w-[22px]" />
            <h3 className={`heading-card text-navy ${item.icon ? "mt-4" : ""}`}>{item.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-7 text-muted">{item.description}</p>
            {item.benefits?.length ? <CheckList items={item.benefits} className="mt-4" /> : null}
          </div>
        </article>
      ))}
    </div>
  );
}
