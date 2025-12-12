import type { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}
export function Nav(props: NavProps) {
  return (
    <nav className="flex flex-col w-auto items-center justify-center z-30">
      <ul className="w-full h-full flex items-center justify-center rounded-full group">
        {props.children}
      </ul>
    </nav>
  );
}
