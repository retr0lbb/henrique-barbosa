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

const images: requiredProps[] = [
  { src: HT_MAIN, type: "image", alt: "Main page from Hyperbolic Tasks" },
  { src: HT_LOGIN, type: "image", alt: "library page" },
  { src: HT_REGISTER, type: "image", alt: "game page 2" },
  { src: HT_SEC, type: "image", alt: "library page 2" },
];

export default function Page() {
  return (
    <div className="w-full min-h-dvh flex flex-col gap-10">
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="Hyperbolic Tasks"
          subtitle="Task manager that uses graphs."
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area title="What is?">
              <p className="text-zinc-400 max-w-2xl text-xl">
                This is not a conventional task manager. The project leverages a
                tree-based architecture with interconnected nodes, allowing each
                task to be expanded into an almost unlimited hierarchy of
                subtasks, providing high flexibility and granular task
                organization.
              </p>
            </ProjectComponent.Description.Area>

            <ProjectComponent.Description.Area title="Development">
              <p className="text-zinc-400 max-w-2xl text-xl">
                This project is backed by a well-architected server
                infrastructure, incorporating automated unit testing powered by
                Vitest to ensure reliability and code quality. It includes
                structured logging mechanisms and fully automated CI/CD
                pipelines implemented with GitHub Actions, enabling consistent
                integration and deployment workflows. The API is self-documented
                through Swagger, facilitating maintainability and clear
                communication between services. From a security standpoint, the
                system employs HTTP-only cookies combined with CSRF protection.
                Additionally, all inputs are strictly validated using Zod,
                ensuring data integrity and preventing malformed or unsafe
                requests.
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
            <div className="mt-5 w-full flex items-center justify-start gap-10">
              <Link
                target="_blank"
                href={"https://github.com/retr0lbb/sub-tasks"}
              >
                <Button variant="terminal">
                  <FaGithub />
                  Repository
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
