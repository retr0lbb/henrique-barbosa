"use client";
import { ProjectComponent } from "@/components/project-page-component";

import HT_MAIN from "@/assets/images/projeto_hyperbolic/HT_main.png";
import HT_LOGIN from "@/assets/images/projeto_hyperbolic/HT_login.png";
import HT_REGISTER from "@/assets/images/projeto_hyperbolic/HT_register.png";
import HT_SEC from "@/assets/images/projeto_hyperbolic/HT_SEC.png";

import { Button } from "@/components/button";
import { TechBadge } from "@/components/project-page-component/shared/technologies-badge";
import {
  SiSwagger,
  SiTypescript,
  SiFastify,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";
import type { requiredProps } from "@/components/project-page-component/carousel";
import { useDictionary } from "@/hooks/use-dictionary-context";

const images: requiredProps[] = [
  { src: HT_MAIN, type: "image", alt: "Main page from Hyperbolic Tasks" },
  { src: HT_LOGIN, type: "image", alt: "library page" },
  { src: HT_REGISTER, type: "image", alt: "game page 2" },
  { src: HT_SEC, type: "image", alt: "library page 2" },
];

export default function Page() {
  const dict = useDictionary();

  return (
    <>
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="Hyperbolic Tasks"
          subtitle={dict.projectsSection.projects.ht.subtitle}
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area
              title={dict.projectsSection.projects.ht.whatIs.title}
            >
              <p className="text-zinc-400 max-w-2xl text-justify text-sm md:text-lg lg:text-xl md:text-left">
                {dict.projectsSection.projects.ht.whatIs.text}
              </p>
            </ProjectComponent.Description.Area>

            <ProjectComponent.Description.Area
              title={dict.projectsSection.projects.ht.projectDevelopment.title}
            >
              <p className="text-zinc-400 max-w-2xl text-justify text-sm md:text-lg lg:text-xl md:text-left">
                {dict.projectsSection.projects.ht.whatIs.text}
              </p>
            </ProjectComponent.Description.Area>
            <ProjectComponent.Description.Area
              className="space-y-4"
              title={dict.projectsSection.projects.ht.usedTech}
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

                <TechBadge Icon={FaNodeJs} tecName="Nodejs" color={"lime"} />
                <TechBadge Icon={SiFastify} tecName="Fastify" color="yellow" />
                <TechBadge Icon={SiSwagger} tecName="Swagger" color="emerald" />
                <TechBadge
                  Icon={SiPostgresql}
                  tecName="Postgres"
                  color="blue"
                />
                <TechBadge Icon={SiPrisma} tecName="Prisma" color="gray" />
              </div>
            </ProjectComponent.Description.Area>
            <div className="mt-5 w-full flex items-center justify-center md:justify-start flex-col md:flex-row gap-6">
              <Link
                target="_blank"
                href={"https://github.com/retr0lbb/sub-tasks"}
              >
                <Button>
                  <div className="flex items-center justify-center gap-2 text-zinc-300 text-xl font-semibold">
                    <FaGithub /> {dict.projectsSection.projects.ht.repository}
                  </div>
                </Button>
              </Link>
            </div>
          </ProjectComponent.Description.Root>
        </ProjectComponent.Body>
      </ProjectComponent.Root>
      <Footer />
    </>
  );
}
