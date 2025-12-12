import type { ReactNode } from "react";
import { Nav } from "./nav";
import { SectionLink } from "./sectionLink";
import { LocaleButton } from "./locale-button";
import { VerticalDivider } from "./vertical-diveder";

interface TopSideNavigationProps {
  children: ReactNode;
}

function Root(props: TopSideNavigationProps) {
  return (
    <div
      className="fixed z-50 top-5 self-center flex flex-row items-center justify-center
      gap-2 border border-zinc-200/20 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
      backdrop-blur-sm bg-zinc-100/10 px-6"
    >
      {props.children}
    </div>
  );
}

const TopSideNavigation = {
  Root,
  Nav,
  SectionLink,
  LocaleButton,
};

export { TopSideNavigation, VerticalDivider };
