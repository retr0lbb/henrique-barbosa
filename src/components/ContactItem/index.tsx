import Link from "next/link";
import type { IconType } from "react-icons";

type ContactItemProps = {
  name: string;
  subtext: string;
  Icon: IconType;
  hiddenText?: string;
  link?: string;
};

export function ContactItem({
  name,
  Icon,
  hiddenText,
  subtext,
  link,
}: ContactItemProps) {
  return (
    <Link
      type="button"
      className="w-full flex items-center justify-between border-2 border-zinc-50/10 
      rounded-lg p-4 group hover:bg-cyan-600/5 cursor-pointer hover:border-cyan-800/40 transition-all"
      href={link ?? ""}
      target="_blank"
    >
      <div className="flex items-center gap-6 justify-center">
        <Icon className="text-zinc-400 size-6 md:size-10 group-hover:text-cyan-400" />
        <div>
          <p className="text-zinc-400 text-lg md:text-xl font-code">
            [ {name} ]
          </p>
          <p className="text-sm text-zinc-600 group-hover:text-cyan-500">
            {subtext}
          </p>
        </div>
      </div>

      {hiddenText && (
        <div className="flex items-center justify-center">
          <span className="text-zinc-600 hidden group-hover:block">
            {hiddenText}
          </span>
        </div>
      )}
    </Link>
  );
}
