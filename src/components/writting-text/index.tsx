"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WritingTextProps {
  text: string;
}

export function WritingText({ text }: WritingTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-50px",
  });

  return (
    <div ref={ref} className="py-5 my-2 md:my-5 lg:my-10">
      <motion.div
        className="flex items-center font-code text-4xl md:text-6xl font-bold text-zinc-200"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            // biome-ignore lint/suspicious/noArrayIndexKey: <no need>
            key={index}
            className="inline-block whitespace-pre"
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: {
                opacity: 1,
                scaleX: 1,
                transition: {
                  duration: 0.1,
                  ease: "easeOut",
                },
              },
            }}
            style={{ transformOrigin: "left" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
