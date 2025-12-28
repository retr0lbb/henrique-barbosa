import { Footer } from "@/components/footer";
import { TopSideNavigation, VerticalDivider } from "@/components/navigator";
import { AboutSection } from "@/sections/about-section";
import { ContactPage } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectSection } from "@/sections/projects-section";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { getDictionary } from "./dictionaries";
import { Locale } from "./i18n-config";

type HomeProps = {
  params: Promise<{ lang: string }>;
};
export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const dict = getDictionary(lang as "pt-BR" | "en-US");

  return (
    <div className="w-full h-full flex flex-col md:pb-0">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactPage />

      <TopSideNavigation.Root>
        <TopSideNavigation.LocaleButton />
        <VerticalDivider />
        <TopSideNavigation.Nav>
          <TopSideNavigation.SectionLink
            Icon={FaHouse}
            text="Home"
            to={`/${lang}/`}
          />
          <TopSideNavigation.SectionLink
            Icon={FaUser}
            text="About"
            to={`/${lang}/#about`}
          />
          <TopSideNavigation.SectionLink
            Icon={IoGrid}
            text="Projects"
            to={`/${lang}/#projects`}
          />
          <TopSideNavigation.SectionLink
            Icon={MdEmail}
            text="Contact"
            to={`/${lang}/#contact`}
          />
        </TopSideNavigation.Nav>
      </TopSideNavigation.Root>
      <Footer />
    </div>
  );
}
