"use client";
import { motion } from "framer-motion";
import { TerminalHeader } from "./header";
import { useTerminalSpawnPosition } from "./use-terminal-spawn";
import { useEffect, useRef, useState } from "react";

interface TerminalProps {
  spawnArea: { width: number; height: number };
  numberOfOpenTerminals: number;
  children: React.ReactNode;
  isVisible?: boolean;
  onCloseClick: () => void;
}

export function Terminal(props: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [terminalSize, setTerminalSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!terminalRef.current) return;

    const { offsetWidth, offsetHeight } = terminalRef.current;

    setTerminalSize({ height: offsetHeight, width: offsetWidth });
  }, []);

  const { x, y, zIndex } = useTerminalSpawnPosition({
    canvasHeight: props.spawnArea.height,
    canvasWidth: props.spawnArea.width,
    expectTerminalHeight: terminalSize.height,
    expectTerminalWidth: terminalSize.width,
    numberOfChildren: props.numberOfOpenTerminals,
  });

  console.log(terminalSize);

  return (
    <motion.div
      initial={{
        top: 0,
        left: 0,
        width: "auto",
        height: "auto",
        display: "hidden",
        zIndex: 0,
      }}
      animate={{
        display: "block",
        top: y,
        left: x,
        zIndex: zIndex,
        opacity: props.isVisible ? 1 : 0,
        width: props.isVisible ? "auto" : 0,
        height: props.isVisible ? "auto" : 0,
      }}
      ref={terminalRef}
      className={`flex flex-col gap-2 border border-zinc-200/40 border-t-0 rounded-xs absolute`}
    >
      <TerminalHeader onCloseButtonClick={props.onCloseClick} />

      <div className="bg-zinc-950 flex justify-center gap-10 p-5">
        {props.children}
      </div>
    </motion.div>
  );
}
