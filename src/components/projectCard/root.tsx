"use client";
import { motion, useInView } from "framer-motion";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRef } from "react";
import TEMPLATE from "@/assets/images/cs.webp";
import Link from "next/link";
interface RootProps {
  title: string;
  description: string;
  to?: string;
  children?: React.ReactNode;
  src?: StaticImport;
  srcAlt?: string;
}

export function Root(props: RootProps) {
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: false, margin: "-50px" });

  const cardSrc = props.src ? props.src : TEMPLATE;

  return (
    <Link href={props.to ?? ""}>
      <motion.div
        ref={rootRef}
        initial={{
          opacity: 0,
          y: 100,
          scale: 0.8,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                y: 100,
                scale: 0.8,
              }
        }
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        className="flex h-full flex-col gap-1 cursor-pointer break-inside-avoid pb-6 md:pb-10 group"
      >
        <div className="relative w-full aspect-video">
          <Image
            src={cardSrc}
            alt={props.srcAlt ?? "Default Alt Value"}
            fill
            className="object-cover rounded-2xl bg-gray-600"
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
      </motion.div>
    </Link>
  );
}
