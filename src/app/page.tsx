import { BottomSideNavigation } from "@/components/navigator";
import { HeroSection } from "@/sections/hero-section";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <HeroSection />
      <BottomSideNavigation.Root>
        <BottomSideNavigation.Nav>
          <BottomSideNavigation.SectionLink Icon={FaHouse} text="Home" to="/" />
          <BottomSideNavigation.SectionLink Icon={FaUser} text="About" to="/" />
          <BottomSideNavigation.SectionLink
            Icon={IoGrid}
            text="Projects"
            to="/"
          />

          <BottomSideNavigation.SectionLink
            Icon={MdEmail}
            text="Contact"
            to="/"
          />
        </BottomSideNavigation.Nav>
      </BottomSideNavigation.Root>
    </div>
  );
}
