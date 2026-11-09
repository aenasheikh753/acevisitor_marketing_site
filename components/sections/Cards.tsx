import Icon from "@/components/ui/Icon";
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

export function CardGrid({
  items,
  columns = 3,
}: {
  items: (CardItem & { benefits?: string[] })[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div className={`grid gap-5 ${columnClasses[columns]}`}>
      {items.map((item) => (
        <article key={item.title} className="card card-hover reveal p-6">
          <span className="icon-tile">
            <Icon name={item.icon} className="h-[22px] w-[22px]" />
          </span>
          <h3 className="heading-card mt-4 text-navy">{item.title}</h3>
          <p className="mt-2 text-[0.95rem] leading-7 text-muted">{item.description}</p>
          {item.benefits?.length ? <CheckList items={item.benefits} className="mt-4" /> : null}
        </article>
      ))}
    </div>
  );
}
