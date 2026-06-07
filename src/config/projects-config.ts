import type { ProjectMetadata } from "@/types/project";

// Images
import COMING_SOON from "@/assets/images/cs.webp";
import nerdImages, { NERD_MAIN } from "@/assets/images/projeto_nerd";
import hyperbolicImages, { MAIN } from "@/assets/images/projeto_hyperbolic";
import devRoastImages, { HOME_IMAGE } from "@/assets/images/projeto_devRoast";
import rubensImages, { RB_MAIN } from "@/assets/images/projeto_rubens/";
import continumImages, {
  FOCUSED as CONTINUM_MAIN,
} from "@/assets/images/projeto_continum";
import PLAY from "@/assets/images/play.webp";
import { defineProject } from "@/utils/project-factory";
import {
  Arduino,
  claude,
  drizzle,
  express,
  fastify,
  framer,
  nextjs,
  nodejs,
  prisma,
  react,
  rust,
  swagger,
  tailwind,
  tauri,
  trpc,
  typescript,
  zod,
} from "@/utils/tech-presets";

export const projectsConfig = [
  defineProject("ruben", {
    title: "Rubens Araujo Filho",
    mainImage: RB_MAIN,
    mainImageAlt: "Portfolio of Rubens",
  })
    .withImages(rubensImages)
    .withTech(nextjs, typescript, framer, tailwind)
    .withLinks({
      github: "https://github.com/retr0lbb/portifolio-rubens",
      deploy: "https://portifolio-rubens-fawn.vercel.app/",
    }),

  defineProject("nerd", {
    title: "N.E.R.D",
    mainImage: NERD_MAIN,
    mainImageAlt: "Image of an nerd emoji with glasses",
  })
    .withImages(nerdImages)
    .withTech(typescript, react, nodejs, express, tailwind)
    .withLinks({
      github: "https://github.com/retr0lbb/NERD-Project",
    }),

  defineProject("fatecard", {
    title: "Fatecard",
    mainImage: COMING_SOON,
    mainImageAlt: "Fatecard preview",
  })
    .withImages([
      {
        src: "/videos/fatecard_proj.mp4",
        alt: "Video of Fatecard",
        type: "video",
        poster: PLAY,
      },
    ])
    .withTech(react, typescript, Arduino, nodejs, express)
    .withLinks({
      github: "https://github.com/retr0lbb/fatecard-front",
    }),

  defineProject("devroast", {
    title: "DevRoast",
    mainImage: HOME_IMAGE,
    status: "DONE",
    statusColor: "green",
    mainImageAlt: "DevRoast home page",
  })
    .withImages(devRoastImages)
    .withTech(nextjs, typescript, trpc, zod, drizzle, claude)
    .withLinks({
      github: "https://github.com/retr0lbb/dev-roast",
      deploy: "https://devroast-alpha.vercel.app",
    }),

  defineProject("continum", {
    title: "The Continuum",
    mainImage: CONTINUM_MAIN,
    status: "IN_PROGRESS",
    statusColor: "lime",
    mainImageAlt: "The continum Ouroboros logo",
  })
    .withImages(continumImages)
    .withTech(react, typescript, rust, tauri, claude)
    .withLinks({
      github: "https://github.com/retr0lbb/continum",
    }),

  defineProject("hyperbolic", {
    title: "Hyperbolic Tasks",
    mainImage: MAIN,
    mainImageAlt: "Hyperbolic Logo",
  })
    .withImages(hyperbolicImages)
    .withTech(nodejs, zod, nextjs, prisma, swagger, fastify, claude)
    .withLinks({
      github: "https://github.com/retr0lbb/sub-tasks",
    }),
] as const satisfies ProjectMetadata[];

export type ProjectId = (typeof projectsConfig)[number]["id"];
