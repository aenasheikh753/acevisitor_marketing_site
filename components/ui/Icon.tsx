import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  ClipboardCheck,
  ClipboardList,
  Clock,
  DoorOpen,
  Eye,
  FileCheck2,
  Globe2,
  GraduationCap,
  HardHat,
  HeartPulse,
  IdCard,
  KeyRound,
  Landmark,
  Layers,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  Network,
  Phone,
  QrCode,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import type { IconValue } from "@/lib/types";

const icons = {
  arrowRight: ArrowRight,
  badge: BadgeCheck,
  building: Building2,
  calendar: CalendarCheck,
  check: Check,
  clipboard: ClipboardCheck,
  clipboardList: ClipboardList,
  clock: Clock,
  contractor: Wrench,
  door: DoorOpen,
  education: GraduationCap,
  eye: Eye,
  file: FileCheck2,
  finance: Wallet,
  globe: Globe2,
  government: Landmark,
  hardHat: HardHat,
  health: HeartPulse,
  id: IdCard,
  key: KeyRound,
  layers: Layers,
  lock: LockKeyhole,
  logout: LogOut,
  mail: Mail,
  map: MapPin,
  message: MessageSquare,
  monitor: Monitor,
  network: Network,
  phone: Phone,
  qr: QrCode,
  search: Search,
  server: Server,
  settings: Settings,
  shield: ShieldCheck,
  sparkles: Sparkles,
  userCheck: UserCheck,
  users: Users,
};

/** The icon names the admin panel can offer in a picker. */
export const iconNames = Object.keys(icons);

const isImage = (value: string) => /^(\/|https?:)/.test(value);

/** Renders a named icon or an uploaded icon image; an empty value renders nothing. */
export default function Icon({ name, className = "h-5 w-5" }: { name: IconValue; className?: string }) {
  if (!name) return null;
  if (isImage(name)) {
    return (
      <Image
        src={name}
        alt=""
        width={24}
        height={24}
        unoptimized={name.endsWith(".svg")}
        className={`${className} object-contain`}
      />
    );
  }
  const Glyph = icons[name as keyof typeof icons] ?? Sparkles;
  return <Glyph aria-hidden="true" className={className} strokeWidth={1.8} />;
}

export function IconTile({ name, className }: { name: IconValue; className?: string }) {
  if (!name) return null;
  return (
    <span className="icon-tile">
      <Icon name={name} className={className} />
    </span>
  );
}
