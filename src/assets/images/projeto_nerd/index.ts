import GAME from "@/assets/images/projeto_nerd/NERD_game.png";
import GAMES from "@/assets/images/projeto_nerd/NERD_games.png";
import NERD_MAIN from "@/assets/images/projeto_nerd/NERD_main.png";
import PROFILE from "@/assets/images/projeto_nerd/NERD_profile.png";
import CAPTURE from "@/assets/images/projeto_nerd/Nerd_capture.png";
import type { ProjectMedia } from "@/types/project";

const nerdImages: ProjectMedia[] = [
  { src: NERD_MAIN, type: "image", alt: "N.E.R.D Platform" },
  { src: GAMES, type: "image", alt: "N.E.R.D games" },
  { src: GAME, type: "image", alt: "N.E.R.D game" },
  { src: PROFILE, type: "image", alt: "N.E.R.D Profile" },
  { src: CAPTURE, type: "image", alt: "N.E.R.D Profile" },
];

export default nerdImages;

export { CAPTURE, GAME, GAMES, NERD_MAIN, PROFILE };
