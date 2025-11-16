import type { ReactNode } from "react";
import { Nav } from "./nav";
import { SectionLink } from "./sectionLink";

interface BottomSideNavigationProps {
  children: ReactNode;
}

function Root(props: BottomSideNavigationProps) {
  return (
    <div className="fixed w-full bottom-0 py-6 flex items-center justify-center">
      {props.children}
    </div>
  );
}

const BottomSideNavigation = {
  Root,
  Nav,
  SectionLink,
};

export { BottomSideNavigation };
