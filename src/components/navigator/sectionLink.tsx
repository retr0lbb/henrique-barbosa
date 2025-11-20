import Link from "next/link";
import type { IconType } from "react-icons";

interface SectionLinkProps {
  to: string;
  text: string;
  Icon: IconType;
  isSelected?: boolean;
}

export function SectionLink(props: SectionLinkProps) {
  return (
    <li className="group-hover:opacity-50 hover:opacity-100! transition-all text-zinc-200 px-3 py-4">
      <Link
        className="flex items-center justify-center gap-1 text-lg"
        href={props.to}
      >
        <props.Icon className="hidden md:block" size={18} />
        <p className="text-xl md:text-md text-zinc-200">{props.text}</p>
      </Link>
    </li>
  );
}
