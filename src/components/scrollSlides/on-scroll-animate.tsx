/** biome-ignore-all lint/correctness/useHookAtTopLevel: Needless */
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Slide } from "./Slide";

export function OnScrollAnimateGrid() {
  const containerRef = useRef(null);
  const years = [2016, 2021, 2023, 2025];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(years.length - 1) * 100],
  );

  return (
    <section
      className="relative"
      style={{ height: `${years.length * 100}dvh` }}
      ref={containerRef}
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div
          style={{ x: useTransform(x, (value) => `${value}dvw`) }}
          className="flex h-full"
        >
          <Slide
            key={2016}
            year={"About me"}
            index={1}
            totalSlides={years.length}
            scrollYProgress={scrollYProgress}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="grid grid-cols-2 grid-rows-2">
                <h1>Fist interaction with programming</h1>
                <p>
                  In the past i have a passion for creating games, i leaned most
                  of it myself, but my kind mom worked very hard and was able to
                  put me in a gaming code course
                </p>
              </div>
            </div>
          </Slide>
        </motion.div>
      </div>
    </section>
  );
}
