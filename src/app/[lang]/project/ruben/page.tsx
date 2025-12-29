"use client";
import { ProjectComponent } from "@/components/project-page-component";

import RB_MAIN from "@/assets/images/projeto_rubens/rb_main.png";
import RB_ABOUT from "@/assets/images/projeto_rubens/rb_about.png";
import RB_PROJECTS from "@/assets/images/projeto_rubens/rb_projects.png";
import RB_CONTACT from "@/assets/images/projeto_rubens/rb_contact.png";

import { Button } from "@/components/button";
import { TechBadge } from "@/components/project-page-component/shared/technologies-badge";
import { SiFramer, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { RiNextjsFill } from "react-icons/ri";
import type { requiredProps } from "@/components/project-page-component/carousel";
import { useDictionary } from "@/hooks/use-dictionary-context";

const images: requiredProps[] = [
  { src: RB_MAIN, type: "image", alt: "Main page from portfolio" },
  { src: RB_ABOUT, type: "image", alt: "About Page from rubens portfolio" },
  { src: RB_PROJECTS, type: "image", alt: "Project page showing 3 projects" },
  { src: RB_CONTACT, type: "image", alt: "Contact Card final page" },
];

export default function Page() {
  const dict = useDictionary();

  return (
    <div className="w-full min-h-dvh flex flex-col gap-10">
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="Rubens Araujo"
          subtitle={dict.projectsSection.projects.rubens.subtitle}
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area
              title={
                dict.projectsSection.projects.rubens.projectDevelopment.title
              }
            >
              <p className="text-zinc-400 max-w-2xl text-justify text-sm md:text-lg lg:text-xl md:text-left">
                {dict.projectsSection.projects.rubens.projectDevelopment.text}
              </p>
            </ProjectComponent.Description.Area>
            <ProjectComponent.Description.Area
              className="space-y-4"
              title={dict.projectsSection.projects.rubens.usedTech}
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <TechBadge
                  Icon={RiNextjsFill}
                  tecName="Nextjs"
                  color={"purple"}
                />
                <TechBadge
                  Icon={SiTypescript}
                  tecName="Typescript"
                  color={"blue"}
                />
                <TechBadge
                  Icon={SiFramer}
                  tecName="Framer Motion"
                  color={"yellow"}
                />
                <TechBadge
                  Icon={SiTailwindcss}
                  tecName="Tailwindcss"
                  color={"blue"}
                />
              </div>
            </ProjectComponent.Description.Area>
            <div className="mt-5 w-full flex items-center justify-center md:justify-start flex-col md:flex-row gap-6">
              <Link
                target="_blank"
                href={"https://github.com/retr0lbb/portifolio-rubens"}
              >
                <Button>
                  <div className="flex items-center justify-center gap-2 text-zinc-300 text-xl font-semibold">
                    <FaGithub />
                    {dict.projectsSection.projects.rubens.repository}
                  </div>
                </Button>
              </Link>

              <Link
                target="_blank"
                href={"https://portifolio-rubens-fawn.vercel.app/"}
              >
                <Button>
                  <div className="flex items-center justify-center gap-2 text-zinc-300 text-xl font-semibold">
                    <FaGlobe />
                    Website
                  </div>
                </Button>
              </Link>
            </div>
          </ProjectComponent.Description.Root>
        </ProjectComponent.Body>
      </ProjectComponent.Root>
      <Footer />
    </div>
  );
}
