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
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";

const images = [
  { src: TJ_MAIN, alt: "Page" },
  { src: TJ_ABOUT, alt: "Page" },
  { src: TJ_POD, alt: "Page" },
  { src: TJ_SERVICES, alt: "Page" },
  { src: TJ_VID, alt: "Page" },
  { src: TJ_BOOKS, alt: "Page" },
];

export default function Page() {
  return (
    <div className="w-full min-h-dvh flex flex-col gap-10">
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="Luiz Junior Astral"
          subtitle="Portfolio for Luiz Junior"
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area title="Project Development">
              <p className="text-zinc-400 max-w-2xl text-xl">
                A portfolio website developed using Wix, featuring a multi-page
                structure, an integrated CMS for content management, and a
                contact form. The site includes additional features that enhance
                usability and provide visitors with a comprehensive overview of
                Luiz Junior’s work and professional profile.
              </p>
            </ProjectComponent.Description.Area>
            <ProjectComponent.Description.Area
              className="space-y-4"
              title="Used Technologies"
            >
              <div className="flex flex-wrap items-center justify-start gap-3">
                <TechBadge Icon={SiWix} tecName="Wix" color={"purple"} />
                <TechBadge Icon={SiFigma} tecName="Figma" color={"gray"} />
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

              <Link
                target="_blank"
                href={
                  "https://www.luizjuniorastral.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnUCvN8mj0eU_cxnXSOyqlSsV_EE_Ms9qs4NYghvOPuXrxUmo9vXVUxs01gvk_aem_OzWZxD_nIQWA8y6EhVvz6A"
                }
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
