"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RootProps {
  title: string;
  description: string;
  to?: string;
  children?: React.ReactNode;
}

export function Root(props: RootProps) {
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: false, margin: "-50px" });

  return (
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
      className="flex h-full flex-col gap-1 cursor-pointer break-inside-avoid pb-10"
    >
      <div className="bg-gray-600 rounded-2xl aspect-square">Imagem</div>

      <div className="w-full flex items-center justify-start pt-3 px-2">
        <h1 className="text-2xl text-zinc-200 font-medium">{props.title}</h1>
      </div>

      <div className="w-full flex flex-col gap-3">
        <p className="text-zinc-400 px-2">{props.description}</p>

        <div className="flex items-center gap-2 flex-nowrap">
          {props.children}
        </div>
      </div>
    </motion.div>
  );
}
