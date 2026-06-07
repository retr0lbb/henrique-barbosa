import HOME_IMAGE from "@/assets/images/projeto_devRoast/home.png";
import CODE_ROAST from "@/assets/images/projeto_devRoast/code_roast.png";
import MAIN_LEADERBOARD from "@/assets/images/projeto_devRoast/main_leaderboard.png";
import OPENGRAPHROAST from "@/assets/images/projeto_devRoast/opengraph_roast.png";
import SHAMELEADERBOARD from "@/assets/images/projeto_devRoast/shame_leaderboard.png";
import type { ProjectMedia } from "@/types/project";

const devRoastImages: ProjectMedia[] = [
  { src: HOME_IMAGE, type: "image", alt: "DevRoast" },
  { src: CODE_ROAST, type: "image", alt: "DevRoast" },
  { src: MAIN_LEADERBOARD, type: "image", alt: "DevRoast" },
  { src: OPENGRAPHROAST, type: "image", alt: "DevRoast" },
  { src: SHAMELEADERBOARD, type: "image", alt: "DevRoast" },
];

export default devRoastImages;

export {
  HOME_IMAGE,
  CODE_ROAST,
  MAIN_LEADERBOARD,
  OPENGRAPHROAST,
  SHAMELEADERBOARD,
};
