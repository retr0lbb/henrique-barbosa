import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

interface HeaderProps {
  title: string;
  subtitle?: string;
}
export function Header(props: HeaderProps) {
  return (
    <div className="flex relative items-center gap-5 px-8 pt-12 md:pt-0">
      <Link
        href="/#projects"
        className="absolute top-0 left-0 md:static md:top-auto md:left-auto text-2xl md:text-4xl text-zinc-200 p-2 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
      >
        <BiChevronLeft />
      </Link>
      <div className="flex flex-col gap-1 md:gap-4 px-6">
        <h1 className="text-zinc-200 text-3xl text-center md:text-left md:text-4xl lg:text-6xl font-bold">
          {props.title}
        </h1>
        {props.subtitle ? (
          <p className="text-sm text-center md:text-left md:text-lg lg:text-xl text-zinc-400">
            {props.subtitle}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
