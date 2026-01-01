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

type HomeProps = {
  params: Promise<{ lang: string }>;
};
export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "pt-BR" | "en-US");

  return (
    <div className="w-full h-full flex flex-col md:pb-0">
      <HeroSection dict={dict} lang={lang} />
      <AboutSection dict={dict} lang={lang} />
      <ProjectSection dict={dict} lang={lang} />
      <ContactPage dict={dict} />

      <Footer />
    </div>
  );
}
