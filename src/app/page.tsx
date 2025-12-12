import { Footer } from "@/components/footer";
import { TopSideNavigation, VerticalDivider } from "@/components/navigator";
import { AboutSection } from "@/sections/about-section";
import { ContactPage } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectSection } from "@/sections/projects-section";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col pb-24 md:pb-0">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactPage />

      <TopSideNavigation.Root>
        <TopSideNavigation.LocaleButton />
        <VerticalDivider />
        <TopSideNavigation.Nav>
          <TopSideNavigation.SectionLink Icon={FaHouse} text="Home" to="/" />
          <TopSideNavigation.SectionLink
            Icon={FaUser}
            text="About"
            to="/#about"
          />
          <TopSideNavigation.SectionLink
            Icon={IoGrid}
            text="Projects"
            to="/#projects"
          />
          <TopSideNavigation.SectionLink
            Icon={MdEmail}
            text="Contact"
            to="/#contact"
          />
        </TopSideNavigation.Nav>
      </TopSideNavigation.Root>
      <Footer />
    </div>
  );
}
