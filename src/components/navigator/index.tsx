import type { ReactNode } from "react";
import { Nav } from "./nav";
import { SectionLink } from "./sectionLink";

interface TopSideNavigationProps {
  children: ReactNode;
}

function Root(props: TopSideNavigationProps) {
  return (
    <div className="fixed z-30 w-full -top-1 md:top-0 py-0 md:py-6 flex items-center justify-center">
      {props.children}
    </div>
  );
}

const TopSideNavigation = {
  Root,
  Nav,
  SectionLink,
};

export { TopSideNavigation };
