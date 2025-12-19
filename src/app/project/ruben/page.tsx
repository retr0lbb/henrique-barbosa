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

const images = [
  { src: RB_MAIN, alt: "Main page from portfolio" },
  { src: RB_ABOUT, alt: "About Page from rubens portfolio" },
  { src: RB_PROJECTS, alt: "Project page showing 3 projects" },
  { src: RB_CONTACT, alt: "Contact Card final page" },
];

export default function Page() {
  return (
    <div className="w-full min-h-dvh flex flex-col gap-10">
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="Rubens Araujo"
          subtitle="Graphics designer interactive portfolio"
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area title="Project Development">
              <p className="text-zinc-400 max-w-2xl text-xl">
                An interactive portfolio developed for a graphic designer named
                Rubens. The project is built with Next.js and leverages Framer
                Motion to deliver seamless animations and advanced visual
                effects, ensuring a smooth and engaging user experience. The
                website is deployed on Vercel, benefiting from optimized
                performance, scalability, and continuous deployment.
              </p>
            </ProjectComponent.Description.Area>
            <ProjectComponent.Description.Area
              className="space-y-4"
              title="Used Technologies"
            >
              <div className="flex flex-wrap items-center justify-start gap-3">
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
            <div className="mt-5 w-full flex items-center justify-start gap-10">
              <Link
                target="_blank"
                href={"https://github.com/retr0lbb/portifolio-rubens"}
              >
                <Button variant="terminal">
                  <FaGithub />
                  Repository
                </Button>
              </Link>

              <Link
                target="_blank"
                href={"https://portifolio-rubens-fawn.vercel.app/"}
              >
                <Button variant="terminal">
                  <FaGlobe />
                  Website
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
