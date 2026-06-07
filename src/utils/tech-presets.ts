// Icons
import {
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
  SiTauri,
  SiRust,
  SiFramer,
  SiTrpc,
  SiClaude,
  SiPrisma,
  SiFastify,
} from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";
import type { ProjectTechnology } from "@/types/project";

function tech(
  name: string,
  icon: ProjectTechnology["icon"],
  color: ProjectTechnology["color"],
): ProjectTechnology {
  return { name, icon, color };
}

export const typescript = tech("Typescript", SiTypescript, "blue");
export const nextjs = tech("Next.js", RiNextjsFill, "purple");
export const react = tech("React", FaReact, "blue");
export const tailwind = tech("Tailwindcss", SiTailwindcss, "blue");
export const nodejs = tech("Node.js", FaNodeJs, "lime");
export const framer = tech("Framer Motion", SiFramer, "yellow");
export const express = tech("Express", SiExpress, "yellow");
export const rust = tech("Rust", SiRust, "orange");
export const tauri = tech("Tauri", SiTauri, "orange");
export const Arduino = tech("Arduino", SiArduino, "blue");

export const vitest = tech("Vitest", SiVitest, "green");
export const swagger = tech("Swagger", SiSwagger, "green");
export const zod = tech("Zod", SiZod, "blue");
export const githubActions = tech("GitHub Actions", SiGithubactions, "blue");
export const drizzle = tech("Drizzle ORM", SiDrizzle, "lime");
export const wix = tech("Wix", SiWix, "purple");
export const trpc = tech("tRPC", SiTrpc, "purple");
export const claude = tech("Claude Code", SiClaude, "orange");

export const prisma = tech("Prisma ORM", SiPrisma, "black");
export const fastify = tech("Fastify", SiFastify, "lime");
