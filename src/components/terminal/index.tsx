"use client";
import { motion } from "framer-motion";
import { TerminalHeader } from "./header";
import { useTerminalSpawnPosition } from "./use-terminal-spawn";
import { type RefObject, useEffect, useRef, useState } from "react";

interface TerminalProps {
  spawnArea: { width: number; height: number };
  numberOfOpenTerminals: number;
  children: React.ReactNode;
  isVisible?: boolean;
  dragConstrain: RefObject<HTMLDivElement | null>;
  onCloseClick: () => void;
}

export function Terminal({
  children,
  isVisible,
  dragConstrain,
  onCloseClick,
}: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [spawnPosition, setSpawnPosition] = useState({ x: 0, y: 0 });
  const [hasSpawned, setHasSpawned] = useState(false);

  useEffect(() => {
    if (
      !isVisible ||
      hasSpawned ||
      !dragConstrain.current ||
      !terminalRef.current
    )
      return;

    const canvas = dragConstrain.current;
    const terminal = terminalRef.current;

    requestAnimationFrame(() => {
      const canvasRect = canvas.getBoundingClientRect();
      const terminalRect = terminal.getBoundingClientRect();

      const maxX = canvasRect.width - terminalRect.width;
      const maxY = canvasRect.height - terminalRect.height;

      const randomX = Math.max(0, Math.floor(Math.random() * maxX));
      const randomY = Math.max(0, Math.floor(Math.random() * maxY));

      setSpawnPosition({ x: randomX, y: randomY });
      setHasSpawned(true);
    });
  }, [isVisible, hasSpawned, dragConstrain]);

  useEffect(() => {
    if (!isVisible) {
      setHasSpawned(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={terminalRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      drag
      dragMomentum={false}
      dragConstraints={dragConstrain}
      dragElastic={0}
      style={{
        x: spawnPosition.x,
        y: spawnPosition.y,
      }}
      className="flex flex-col border border-zinc-200/40 rounded-lg absolute cursor-move z-50"
    >
      <TerminalHeader onCloseButtonClick={onCloseClick} />
      <div className="bg-zinc-950 flex justify-center gap-10 p-5 rounded-b-lg">
        {children}
      </div>
    </motion.div>
  );
}
