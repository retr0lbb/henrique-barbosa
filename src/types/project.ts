import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

export type ProjectStatus = "DONE" | "IN_PROGRESS" | "JUST PITCH IDEA" | "LOW CODE";
export type TagColor = "red" | "blue" | "green" | "yellow" | "magenta" | "pink" | "white" | "black";


export interface ProjectMedia {
  src: string | StaticImageData;
  alt: string;
  type: "image" | "video";
  poster?: string | StaticImageData;
}

export interface ProjectTechnology {
  name: string;
  icon: IconType;
  color: "blue" | "red" | "yellow" | "lime" | "emerald" | "purple" | "green" | "gray";
}

export interface ProjectMetadata {
  id: string;
  title: string;
  mainImage: string | StaticImageData;
  mainImageAlt: string;
  status?: ProjectStatus;
  statusColor?: TagColor;
  githubLink?: string;

  deploymentLink?: string;
  technologies: ProjectTechnology[];
  images: ProjectMedia[];
}

export interface ProjectTranslation {
  shortDesc: string;
  subtitle: string;
  whatIs?: {
    title: string;
    text: string;
  };
  projectDevelopment: {
    title: string;
    text: string;
  };
  usedTech: string;
  repository: string;
}
