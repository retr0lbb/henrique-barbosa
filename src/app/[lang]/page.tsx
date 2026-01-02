import { Footer } from "@/components/footer";
import { AboutSection } from "@/sections/about-section";
import { ContactPage } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectSection } from "@/sections/projects-section";
import { getDictionary } from "./dictionaries";
import type { ColorOfDivision } from "@/components/divider";

type HomeProps = {
  params: Promise<{ lang: string }>;
};
export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "pt-BR" | "en-US");

  const color = "CYAN" as ColorOfDivision;

  return (
    <div className="w-full h-full flex flex-col md:pb-0">
      <HeroSection dict={dict} color={color} />
      <AboutSection dict={dict} lang={lang} color={color} />
      <ProjectSection dict={dict} lang={lang} color={color} />
      <ContactPage dict={dict} color={color} />

      <Footer />
    </div>
  );
}
