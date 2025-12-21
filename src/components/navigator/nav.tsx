import type { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}
export function Nav(props: NavProps) {
  return (
    <nav className="flex w-auto overflow-hidden items-center justify-center flex-col z-30">
      <ul className="w-full h-full flex items-center justify-center rounded-full flex-col md:flex-row group">
        {props.children}
      </ul>
    </nav>
  );
}
