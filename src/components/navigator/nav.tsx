import type { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}
export function Nav(props: NavProps) {
  return (
    <nav className="flex flex-col items-center justify-center border border-zinc-200/20 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm">
      <ul className="w-full h-full bg-zinc-100/10 px-4 flex items-center justify-center rounded-full group">
        {props.children}
      </ul>
    </nav>
  );
}
