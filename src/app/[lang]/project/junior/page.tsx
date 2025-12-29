"use client";
import { ProjectComponent } from "@/components/project-page-component";

import {
  TJ_ABOUT,
  TJ_BOOKS,
  TJ_MAIN,
  TJ_POD,
  TJ_SERVICES,
  TJ_VID,
} from "@/assets/images/projeto_junior";

import { Button } from "@/components/button";
import { TechBadge } from "@/components/project-page-component/shared/technologies-badge";
import { SiWix, SiFigma } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";
import type { requiredProps } from "@/components/project-page-component/carousel";
import { useDictionary } from "@/hooks/use-dictionary-context";

const images: requiredProps[] = [
  { src: TJ_MAIN, type: "image", alt: "Page" },
  { src: TJ_ABOUT, type: "image", alt: "Page" },
  { src: TJ_POD, type: "image", alt: "Page" },
  { src: TJ_SERVICES, type: "image", alt: "Page" },
  { src: TJ_VID, type: "image", alt: "Page" },
  { src: TJ_BOOKS, type: "image", alt: "Page" },
];

export default function Page() {
  const dict = useDictionary();

  return (
    <>
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="Luiz Junior Astral"
          subtitle={dict.projectsSection.projects.jlj.subtitle}
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area
              title={dict.projectsSection.projects.jlj.projectDevelopment.title}
            >
              <p className="text-zinc-400 max-w-2xl text-justify text-sm md:text-lg lg:text-xl md:text-left">
                {dict.projectsSection.projects.jlj.projectDevelopment.text}
              </p>
            </ProjectComponent.Description.Area>
            <ProjectComponent.Description.Area
              className="space-y-4"
              title={dict.projectsSection.projects.jlj.usedTech}
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <TechBadge Icon={SiWix} tecName="Wix" color={"purple"} />
                <TechBadge Icon={SiFigma} tecName="Figma" color={"gray"} />
              </div>
            </ProjectComponent.Description.Area>
            <div className="mt-5 w-full flex items-center justify-center md:justify-start flex-col md:flex-row gap-6">
              <Link
                target="_blank"
                href={
                  "https://www.luizjuniorastral.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnUCvN8mj0eU_cxnXSOyqlSsV_EE_Ms9qs4NYghvOPuXrxUmo9vXVUxs01gvk_aem_OzWZxD_nIQWA8y6EhVvz6A"
                }
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
    </>
  );
}
