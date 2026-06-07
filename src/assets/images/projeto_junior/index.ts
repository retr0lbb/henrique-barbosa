import TJ_BOOKS from "./TJ_books.png";
import TJ_MAIN from "./TJ_main.png";
import TJ_POD from "./TJ_pod.png";
import TJ_SERVICES from "./TJ_services.png";
import TJ_ABOUT from "./TJ_sobre.png";
import TJ_VID from "./TJ_vid.png";
import type { ProjectMedia } from "@/types/project";

const juniorImages: ProjectMedia[] = [
  { src: TJ_MAIN, type: "image", alt: "Jose Luiz Junior Portfolio" },
  { src: TJ_ABOUT, type: "image", alt: "Jose Luiz Junior Portfolio" },
  { src: TJ_BOOKS, type: "image", alt: "Jose Luiz Junior Portfolio" },
  { src: TJ_POD, type: "image", alt: "Jose Luiz Junior Portfolio" },
  { src: TJ_SERVICES, type: "image", alt: "Jose Luiz Junior Portfolio" },
  { src: TJ_VID, type: "image", alt: "Jose Luiz Junior Portfolio" },
];

export default juniorImages;

export { TJ_ABOUT, TJ_BOOKS, TJ_MAIN, TJ_POD, TJ_SERVICES, TJ_VID };
