import type { ProjectMetadata } from "@/types/project";

// Images
import COMING_SOON from "@/assets/images/cs.webp";
import {
  CAPTURE,
  GAME,
  GAMES,
  NERD_MAIN,
  PROFILE,
} from "@/assets/images/projeto_nerd";
import {
  LOGIN,
  MAIN,
  REGISTER,
  SECONDARY,
} from "@/assets/images/projeto_hyperbolic";
import {
  HOME_IMAGE,
  CODE_ROAST,
  MAIN_LEADERBOARD,
  OPENGRAPHROAST,
  SHAMELEADERBOARD,
} from "@/assets/images/projeto_devRoast";
import {
  RB_ABOUT,
  RB_CONTACT,
  RB_MAIN,
  RB_PROJECTS,
} from "@/assets/images/projeto_rubens/";
import {
  TJ_ABOUT,
  TJ_BOOKS,
  TJ_MAIN,
  TJ_POD,
  TJ_SERVICES,
  TJ_VID,
} from "@/assets/images/projeto_junior/";
import PLAY from "@/assets/images/play.webp";

// Icons
import {
  SiFramer,
  SiTailwindcss,
  SiTypescript,
  SiArduino,
  SiExpress,
  SiVitest,
  SiSwagger,
  SiZod,
  SiGithubactions,
  SiDrizzle,
  SiWix,
} from "react-icons/si";
import { BiBot } from "react-icons/bi";
import { FaNodeJs, FaReact, FaBoxes } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const projectsConfig: ProjectMetadata[] = [
  {
    id: "ruben",
    title: "Rubens Araujo Filho",
    mainImage: RB_MAIN,
    mainImageAlt: "Portfolio of Rubens",
    status: "DONE",
    statusColor: "green",
    githubLink: "https://github.com/retr0lbb/portifolio-rubens",
    deploymentLink: "https://portifolio-rubens-fawn.vercel.app/",
    technologies: [
      { name: "Nextjs", icon: RiNextjsFill, color: "purple" },
      { name: "Typescript", icon: SiTypescript, color: "blue" },
      { name: "Framer Motion", icon: SiFramer, color: "yellow" },
      { name: "Tailwindcss", icon: SiTailwindcss, color: "blue" },
    ],
    images: [
      { src: RB_MAIN, type: "image", alt: "Main page from portfolio" },
      { src: RB_ABOUT, type: "image", alt: "About Page from rubens portfolio" },
      {
        src: RB_PROJECTS,
        type: "image",
        alt: "Project page showing 3 projects",
      },
      { src: RB_CONTACT, type: "image", alt: "Contact Card final page" },
    ],
  },

  {
    id: "nerd",
    title: "N.E.R.D",
    mainImage: NERD_MAIN,
    mainImageAlt: "Image of an nerd emoji with glasses",
    githubLink: "https://github.com/retr0lbb/NERD-Project",
    technologies: [
      { name: "Typescript", icon: SiTypescript, color: "blue" },
      { name: "React", icon: FaReact, color: "blue" },
      { name: "Nodejs", icon: FaNodeJs, color: "lime" },
      { name: "Express", icon: SiExpress, color: "yellow" },
      { name: "Tailwindcss", icon: SiTailwindcss, color: "blue" },
    ],
    images: [
      { src: NERD_MAIN, type: "image", alt: "N.E.R.D Platform" },
      { src: GAMES, type: "image", alt: "N.E.R.D games" },
      { src: GAME, type: "image", alt: "N.E.R.D game" },
      { src: PROFILE, type: "image", alt: "N.E.R.D Profile" },
      { src: CAPTURE, type: "image", alt: "N.E.R.D Profile" },
    ],
  },
  {
    id: "fatecard",
    title: "Fatecard",
    mainImage: COMING_SOON,
    mainImageAlt: "Fatecard preview",
    githubLink: "https://github.com/retr0lbb/fatecard-front",
    technologies: [
      { name: "React", icon: FaReact, color: "blue" },
      { name: "Typescript", icon: SiTypescript, color: "blue" },
      { name: "Nodejs", icon: FaNodeJs, color: "lime" },
      { name: "Express", icon: SiExpress, color: "yellow" },
      { name: "Arduino", icon: SiArduino, color: "blue" },
    ],
    images: [
      {
        src: "/videos/fatecard_proj.mp4",
        alt: "Video of Fatecard",
        type: "video",
        poster: PLAY,
      },
    ],
  },
  {
    id: "junior",
    title: "Jose Luiz Junior",
    mainImage: TJ_MAIN,
    mainImageAlt: "Homen com turbante vermelho",
    status: "LOW CODE",
    statusColor: "yellow",
    technologies: [{ name: "Wix", color: "purple", icon: SiWix }],
    images: [
      { src: TJ_MAIN, type: "image", alt: "Jose Luiz Junior Portfolio" },
      { src: TJ_ABOUT, type: "image", alt: "Jose Luiz Junior Portfolio" },
      { src: TJ_BOOKS, type: "image", alt: "Jose Luiz Junior Portfolio" },
      { src: TJ_POD, type: "image", alt: "Jose Luiz Junior Portfolio" },
      { src: TJ_SERVICES, type: "image", alt: "Jose Luiz Junior Portfolio" },
      { src: TJ_VID, type: "image", alt: "Jose Luiz Junior Portfolio" },
    ],
  },
  {
    id: "hyperbolic",
    title: "Hyperbolic Tasks",
    mainImage: MAIN,
    mainImageAlt: "Image of an text showing the text Hyperbolic Tasks in white",
    githubLink: "https://github.com/retr0lbb/HT-backend",
    technologies: [
      { name: "Typescript", icon: SiTypescript, color: "blue" },
      { name: "Nodejs", icon: FaNodeJs, color: "lime" },
      { name: "Vitest", icon: SiVitest, color: "emerald" },
      { name: "Swagger", icon: SiSwagger, color: "green" },
      { name: "Zod", icon: SiZod, color: "blue" },
      { name: "Github Actions", icon: SiGithubactions, color: "blue" },
    ],
    images: [
      { src: MAIN, type: "image", alt: "Hyperbolic Tasks" },
      { src: LOGIN, type: "image", alt: "Hyperbolic Tasks" },
      { src: REGISTER, type: "image", alt: "Hyperbolic Tasks" },
      { src: SECONDARY, type: "image", alt: "Hyperbolic Tasks" },
    ],
  },
  {
    id: "devroast",
    title: "DevRoast",
    mainImage: HOME_IMAGE,
    status: "DONE",
    statusColor: "green",
    mainImageAlt: "DevRoast home page",
    githubLink: "https://github.com/retr0lbb/dev-roast",
    deploymentLink: "https://devroast-alpha.vercel.app",
    technologies: [
      { name: "Nextjs", icon: RiNextjsFill, color: "purple" },
      { name: "Typescript", icon: SiTypescript, color: "blue" },
      { name: "tRPC", icon: FaBoxes, color: "blue" },
      { name: "Zod", icon: SiZod, color: "blue" },
      { name: "Agents", icon: BiBot, color: "purple" },
      { name: "Drizzle", icon: SiDrizzle, color: "lime" },
    ],
    images: [
      { src: HOME_IMAGE, type: "image", alt: "DevRoast" },
      { src: CODE_ROAST, type: "image", alt: "DevRoast" },
      { src: MAIN_LEADERBOARD, type: "image", alt: "DevRoast" },
      { src: OPENGRAPHROAST, type: "image", alt: "DevRoast" },
      { src: SHAMELEADERBOARD, type: "image", alt: "DevRoast" },
    ],
  },
];
