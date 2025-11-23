"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollSectionProps {
  year?: string;
  children: React.ReactNode;
  isOnStart?: boolean;
  isOnEnd?: boolean;
}

export function ScrollSection(props: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: false, margin: "-400px" });

  return (
    <div ref={ref} className="w-full min-h-dvh flex px-4 gap-10">
      <div className="min-h-full min-w-60 hidden lg:flex flex-col relative items-center justify-center">
        <div
          className={`min-h-full max-w-1 bg-linear-to-b absolute hidden lg:block inset-0 left-6 
                    ${props.isOnStart ? "from-zinc-950" : "from-blue-500"} 
                    via-cyan-400 
                    ${props.isOnEnd ? "to-zinc-950" : "to-blue-500"}
                    ${props.isOnStart && "rounded-t-full"} 
                    ${props.isOnEnd && "rounded-b-full"}`}
        ></div>

        {/* ANIMAÇÃO DO ANO */}
        {props.year && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center gap-5"
          >
            <div className="h-2 max-w-10 min-w-10 bg-blue-500" />
            <h1 className="text-7xl font-bold text-zinc-200">{props.year}</h1>
          </motion.div>
        )}
      </div>

      <div className="flex flex-1 items-center justify-center">
        {props.children}
      </div>
    </div>
  );
}
