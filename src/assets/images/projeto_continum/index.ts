import MAIN from "./main.png";
import FOCUSED from "./detailed Tray .png";
import EMPTY_WORKSPACE from "./Empty wk.png";
import NOTES from "./project-notes.png";
import SUMMARY from "./project-summary.png";
import TASKS from "./project-tasks.png";
import type { ProjectMedia } from "@/types/project";

const continumImages: ProjectMedia[] = [
  { src: MAIN, type: "image", alt: "Continum main workspace" },
  { src: FOCUSED, type: "image", alt: "Continum detailed tray view" },
  { src: EMPTY_WORKSPACE, type: "image", alt: "Continum empty workspace" },
  { src: NOTES, type: "image", alt: "Continum project notes" },
  { src: SUMMARY, type: "image", alt: "Continum project summary" },
  { src: TASKS, type: "image", alt: "Continum project tasks" },
];

export default continumImages;

export { MAIN, FOCUSED, EMPTY_WORKSPACE, NOTES, SUMMARY, TASKS };
