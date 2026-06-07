import SECONDARY from "@/assets/images/projeto_hyperbolic/HT_SEC.png";
import LOGIN from "@/assets/images/projeto_hyperbolic/HT_login.png";
import MAIN from "@/assets/images/projeto_hyperbolic/HT_main.png";
import REGISTER from "@/assets/images/projeto_hyperbolic/HT_register.png";
import type { ProjectMedia } from "@/types/project";

const hyperbolicImages: ProjectMedia[] = [
  { src: MAIN, type: "image", alt: "Hyperbolic Tasks" },
  { src: LOGIN, type: "image", alt: "Hyperbolic Tasks" },
  { src: REGISTER, type: "image", alt: "Hyperbolic Tasks" },
  { src: SECONDARY, type: "image", alt: "Hyperbolic Tasks" },
];

export default hyperbolicImages;

export { LOGIN, MAIN, REGISTER, SECONDARY };
