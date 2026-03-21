import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import TEMPLATE from "@/assets/images/cs.webp";

interface RootProps {
  title: string;
  description: string;
  to?: string;
  children?: React.ReactNode;
  src?: StaticImport;
  srcAlt?: string;
}

export function Root(props: RootProps) {
  const cardSrc = props.src ? props.src : TEMPLATE;

  return (
    <Link href={props.to ?? ""}>
      <div className="flex h-full flex-col gap-1 cursor-pointer break-inside-avoid pb-6 md:pb-10 group">
        <div className="relative w-full aspect-video">
          <Image
            src={cardSrc}
            alt={props.srcAlt ?? "Default Alt Value"}
            className="object-cover border border-zinc-800 rounded-2xl bg-gray-600 group-hover:scale-101 transition-all ease-in-out"
          />
        </div>

        <div className="w-full flex items-center justify-start pt-3 px-2">
          <h1 className="text-xl md:text-2xl text-zinc-200 font-medium group-hover:underline">
            {props.title}
          </h1>
        </div>

        <div className="w-full flex flex-col gap-3">
          <p className="text-zinc-400 text-sm md:text-lg px-2">
            {props.description}
          </p>

          <div className="flex items-center gap-2 flex-nowrap">
            {props.children}
          </div>
        </div>
      </div>
    </Link>
  );
}
