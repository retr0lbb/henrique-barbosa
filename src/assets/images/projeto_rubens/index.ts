import RB_ABOUT from "@/assets/images/projeto_rubens/rb_about.png";
import RB_CONTACT from "@/assets/images/projeto_rubens/rb_contact.png";
import RB_MAIN from "@/assets/images/projeto_rubens/rb_main.png";
import RB_PROJECTS from "@/assets/images/projeto_rubens/rb_projects.png";
import type { ProjectMedia } from "@/types/project";

const rubensImages: ProjectMedia[] = [
  { src: RB_MAIN, type: "image", alt: "Main page from portfolio" },
  { src: RB_ABOUT, type: "image", alt: "About Page from rubens portfolio" },
  {
    src: RB_PROJECTS,
    type: "image",
    alt: "Project page showing 3 projects",
  },
  { src: RB_CONTACT, type: "image", alt: "Contact Card final page" },
];

export default rubensImages;

export { RB_ABOUT, RB_CONTACT, RB_MAIN, RB_PROJECTS };
