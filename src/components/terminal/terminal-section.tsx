"use client";
import { useRef, useState, useEffect } from "react";
import { Terminal } from ".";

enum VisibleTerminals {
  NONE = 0,
  GITHUB,
}

export function TerminalSection() {
  const [terminalVisible, setTerminaVisible] = useState<VisibleTerminals>(
    VisibleTerminals.NONE,
  );
  const [divSpawnArea, setDivSpawnArea] = useState<{
    width: number;
    height: number;
  }>({ height: 0, width: 0 });
  const terminalCanvasRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <needles>
  useEffect(() => {
    if (!terminalCanvasRef.current) {
      return;
    }

    const { offsetHeight, offsetWidth } = terminalCanvasRef.current;

    setDivSpawnArea({ height: offsetHeight, width: offsetWidth });

    console.log(divSpawnArea);
  }, []);

  return (
    <div className="flex relative flex-1 w-full items-center-safe justify-center-safe">
      {/* Terminal Spawn canvas*/}
      <div
        ref={terminalCanvasRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <Terminal
          spawnArea={{
            height: divSpawnArea.height,
            width: divSpawnArea.width,
          }}
          numberOfOpenTerminals={1}
          onCloseClick={() => setTerminaVisible(VisibleTerminals.NONE)}
          isVisible={terminalVisible === VisibleTerminals.GITHUB}
        >
          <div className="min-w-2xl min-h-96"></div>
        </Terminal>
      </div>

      <button
        className="text-zinc-200 font-mono text-4xl underline hover:text-cyan-400 transition-all z-10"
        onClick={() => setTerminaVisible(VisibleTerminals.GITHUB)}
        type="button"
      >
        {">"} Github x: {divSpawnArea.width}, y: {divSpawnArea.height}
      </button>
    </div>
  );
}
