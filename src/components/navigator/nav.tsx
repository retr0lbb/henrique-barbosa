import type { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}
export function Nav(props: NavProps) {
  return (
    <nav className="flex flex-col w-full md:w-auto items-center justify-center border border-zinc-200/20 md:rounded-full md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:backdrop-blur-sm z-30">
      <ul className="w-full h-full bg-zinc-900 md:bg-zinc-100/10 px-4 py-3 md:py-0 flex items-center justify-center md:rounded-full group">
        {props.children}
      </ul>
    </nav>
  );
}
