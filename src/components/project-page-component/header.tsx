import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

interface HeaderProps {
  title: string;
  subtitle?: string;
}
export function Header(props: HeaderProps) {
  return (
    <div className="flex items-center gap-5 px-8">
      <Link
        href={"/#projects"}
        className="text-4xl text-zinc-200 p-2 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
      >
        <BiChevronLeft />
      </Link>
      <div className="flex flex-col gap-4 px-6">
        <h1 className="text-zinc-200 text-6xl font-bold">{props.title}</h1>
        {props.subtitle ? (
          <p className="text-xl text-zinc-400">{props.subtitle}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
