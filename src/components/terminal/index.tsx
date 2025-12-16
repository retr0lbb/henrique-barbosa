"use client";
import { motion } from "framer-motion";
import { TerminalHeader } from "./header";
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isVisible || isReady || !dragConstrain.current || !terminalRef.current)
      return;

    const canvas = dragConstrain.current;
    const terminal = terminalRef.current;

    // Espera múltiplos frames e usa um timeout para garantir que o conteúdo foi renderizado
    const calculatePosition = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const canvasRect = canvas.getBoundingClientRect();
            const terminalRect = terminal.getBoundingClientRect();

            console.log(
              "Canvas - Width:",
              canvasRect.width,
              "Height:",
              canvasRect.height,
            );
            console.log(
              "Terminal - Width:",
              terminalRect.width,
              "Height:",
              terminalRect.height,
            );

            // Garante que temos dimensões válidas
            if (terminalRect.width === 0 || terminalRect.height === 0) {
              console.warn("Terminal dimensions are 0, retrying...");
              calculatePosition(); // Tenta novamente
              return;
            }

            const maxX = Math.max(0, canvasRect.width - terminalRect.width);
            const maxY = Math.max(0, canvasRect.height - terminalRect.height);

            const randomX = Math.max(0, Math.floor(Math.random() * maxX));
            const randomY = Math.max(0, Math.floor(Math.random() * maxY));

            console.log("Spawn position - X:", randomX, "Y:", randomY);

            setSpawnPosition({ x: randomX, y: randomY });
            setIsReady(true);
          }, 100); // Pequeno delay para garantir renderização completa
        });
      });
    };

    calculatePosition();
  }, [isVisible, isReady, dragConstrain]);

  useEffect(() => {
    if (!isVisible) {
      setIsReady(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={terminalRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isReady ? 1 : 0,
        scale: isReady ? 1 : 0.9,
      }}
      transition={{ duration: 0.2 }}
      drag
      dragMomentum={false}
      dragConstraints={dragConstrain}
      dragElastic={0}
      style={{
        x: spawnPosition.x,
        y: spawnPosition.y,
        visibility: isReady ? "visible" : "hidden",
      }}
      className="flex flex-col border border-zinc-200/40 rounded-lg absolute cursor-move z-50"
    >
      <TerminalHeader onCloseButtonClick={onCloseClick} />
      <div className="bg-zinc-950 flex justify-center gap-8 p-2 rounded-b-lg">
        {children}
      </div>
    </motion.div>
  );
}
