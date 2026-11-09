import { getMockups, getSiteSettings } from "@/lib/content/site";
import type { MockStatus, Mockups, VisualName } from "@/lib/types";
import Icon from "@/components/ui/Icon";

/** Product views built in JSX. All names and figures are fictional sample data. */

function Pill({ status, children }: { status: MockStatus; children: string }) {
  return <span className={`mock-pill mock-pill-${status}`}>{children}</span>;
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-blue-pale text-[0.65rem] font-extrabold text-blue">
      {initials}
    </span>
  );
}

function Dashboard({ data }: { data: Mockups["dashboard"] }) {
  return (
    <div className="relative">
      <div className="mock-window">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div>
            <p className="text-sm font-bold text-navy">{data.workspace}</p>
            <p className="text-xs text-muted">{data.title}</p>
          </div>
          <span className="flex items-center gap-2 text-xs font-bold text-success">
            <span className="h-2 w-2 rounded-pill bg-success" />
            {data.live}
          </span>
        </div>
        <div className="grid grid-cols-[84px_1fr] sm:grid-cols-[116px_1fr]">
          <div className="flex flex-col gap-2 bg-navy px-2.5 py-4 text-white">
            {data.menu.map((item, index) => (
              <span
                key={item}
                className={`rounded-small px-2 py-1.5 text-[0.68rem] font-semibold sm:text-xs ${
                  index === 0 ? "bg-white/15" : "text-white/70"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="min-w-0 bg-paper p-3.5 sm:p-5">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {data.stats.map((stat) => (
                <div key={stat.label} className="rounded-small border border-line bg-white p-2 sm:p-3">
                  <p className="truncate text-[0.65rem] font-medium text-muted sm:text-xs">{stat.label}</p>
                  <p className="font-display text-lg font-extrabold text-navy sm:text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-small border border-line bg-white p-3 sm:mt-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-bold text-navy">{data.chartTitle}</p>
                <span className="text-[0.65rem] text-muted">{data.chartCaption}</span>
              </div>
              <div className="mt-3 flex h-14 items-end gap-1 sm:h-20 sm:gap-1.5">
                {data.bars.map((height, index) => (
                  <span
                    key={index}
                    className={`flex-1 rounded-t-[3px] ${index === 5 || index === 10 ? "bg-blue" : "bg-blue-soft"}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs font-bold text-navy sm:mt-4">{data.listTitle}</p>
            {data.visitors.map((visitor) => (
              <div key={visitor.name} className="mt-2 flex items-center gap-2 border-t border-line pt-2">
                <Avatar initials={visitor.initials} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-navy">{visitor.name}</p>
                  <p className="truncate text-[0.68rem] text-muted">{visitor.detail}</p>
                </div>
                <Pill status={visitor.status}>{visitor.statusLabel}</Pill>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 left-3 flex items-center gap-2 rounded-button border border-line bg-white px-3.5 py-2.5 text-xs font-bold text-navy shadow-card sm:-left-5">
        <Icon name="userCheck" className="h-4 w-4 text-success" />
        {data.toast}
      </div>
    </div>
  );
}

function FrontDesk({ data }: { data: Mockups["frontDesk"] }) {
  return (
    <div className="mock-window">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <p className="text-sm font-bold text-navy">{data.title}</p>
        <span className="text-xs text-muted">{data.caption}</span>
      </div>
      <div className="px-5 pb-3">
        <div className="grid grid-cols-[1.5fr_1fr_auto] gap-3 border-b border-line py-2.5 text-[0.68rem] font-bold uppercase tracking-wider text-muted sm:grid-cols-[1.6fr_1fr_0.5fr_auto]">
          {data.columns.map((column, index) => (
            <span key={column} className={index === 2 ? "hidden sm:block" : ""}>
              {column}
            </span>
          ))}
        </div>
        {data.rows.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-[1.5fr_1fr_auto] items-center gap-3 border-b border-line py-2.5 last:border-b-0 sm:grid-cols-[1.6fr_1fr_0.5fr_auto]"
          >
            <span className="flex min-w-0 items-center gap-2">
              <Avatar initials={row.initials} />
              <span className="truncate text-xs font-bold text-navy">{row.name}</span>
            </span>
            <span className="truncate text-xs text-muted">{row.host}</span>
            <span className="hidden text-xs text-muted sm:block">{row.time}</span>
            <Pill status={row.status}>{row.statusLabel}</Pill>
          </div>
        ))}
      </div>
    </div>
  );
}

function Kiosk({ data }: { data: Mockups["kiosk"] }) {
  return (
    <div className="mx-auto grid max-w-lg grid-cols-[1.25fr_1fr] items-center gap-4 sm:gap-6">
      <div className="rounded-panel bg-navy p-3 shadow-lift">
        <div className="rounded-card bg-white p-4 text-center sm:p-6">
          <p className="font-display text-xl font-extrabold text-navy sm:text-2xl">{data.greeting}</p>
          <p className="mt-1 text-xs text-muted">{data.subtitle}</p>
          <div className="mt-4 space-y-2">
            {data.actions.map((action, index) => (
              <div
                key={action}
                className={`rounded-small px-2 py-2.5 text-xs font-bold ${
                  index === 0 ? "bg-blue text-white" : "bg-sky text-navy"
                }`}
              >
                {action}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-card border border-line bg-white p-4 shadow-lift">
        <p className="eyebrow">{data.badge.label}</p>
        <p className="mt-2 font-display text-base font-extrabold text-navy sm:text-lg">{data.badge.name}</p>
        <p className="text-xs text-muted">{data.badge.company}</p>
        <div className="mt-3 border-t border-line pt-3 text-xs text-muted">
          <p>{data.badge.host}</p>
          <p>{data.badge.valid}</p>
        </div>
      </div>
    </div>
  );
}

function Approvals({ data }: { data: Mockups["approvals"] }) {
  return (
    <div className="mock-window mx-auto max-w-sm p-6">
      <p className="eyebrow">{data.eyebrow}</p>
      <p className="mt-3 font-display text-xl font-extrabold text-navy">{data.name}</p>
      <p className="text-sm text-muted">{data.company}</p>
      <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-muted">
        {data.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <p className="mt-4 flex items-center gap-2 rounded-small bg-success-soft px-3 py-2 text-xs font-bold text-success">
        <Icon name="check" className="h-4 w-4" />
        {data.acknowledged}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 text-center text-sm font-bold">
        <span className="rounded-small bg-blue px-3 py-2.5 text-white">{data.approve}</span>
        <span className="rounded-small border border-line px-3 py-2.5 text-navy">{data.decline}</span>
      </div>
    </div>
  );
}

function MultiSite({ data }: { data: Mockups["multiSite"] }) {
  return (
    <div className="mock-window">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <p className="text-sm font-bold text-navy">{data.title}</p>
        <span className="flex items-center gap-2 text-xs font-bold text-success">
          <span className="h-2 w-2 rounded-pill bg-success" />
          {data.live}
        </span>
      </div>
      <ul className="space-y-4 p-5">
        {data.sites.map((site) => (
          <li key={site.name}>
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-bold text-navy">{site.name}</span>
              <span className="text-muted">
                {site.onSite} {data.onSiteLabel}
              </span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-pill bg-blue-soft">
              <div className="h-full rounded-pill bg-blue" style={{ width: `${site.load}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Visual({ name }: { name: VisualName }) {
  if (name === "none") return null;
  const mockups = getMockups();
  const { mockupNote } = getSiteSettings().ui;
  const views = {
    dashboard: <Dashboard data={mockups.dashboard} />,
    frontDesk: <FrontDesk data={mockups.frontDesk} />,
    kiosk: <Kiosk data={mockups.kiosk} />,
    approvals: <Approvals data={mockups.approvals} />,
    multiSite: <MultiSite data={mockups.multiSite} />,
  };

  return (
    <figure role="img" aria-label={`${mockups[name].label} ${mockupNote}`}>
      <div aria-hidden="true">{views[name]}</div>
    </figure>
  );
}
