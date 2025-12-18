"use client";
import { useRef, useState, useEffect } from "react";
import { WritingText } from "../writting-text";
import { useGithubData } from "@/hooks/use-github-data";
import { VisibleTerminals } from "./types";
import { TerminalWrapper } from "./terminal-wrapper";
import { GithubTerminal } from "./terminals/github-terminal";
import { EmailTerminal } from "./terminals/email-terminal";

export function TerminalSection() {
  const [terminalVisible, setTerminalVisible] = useState<VisibleTerminals>(
    VisibleTerminals.NONE,
  );
  const [divSpawnArea, setDivSpawnArea] = useState<{
    width: number;
    height: number;
  }>({ height: 0, width: 0 });
  const terminalCanvasRef = useRef<HTMLDivElement>(null);

  const { data: GithubData } = useGithubData(
    terminalVisible === VisibleTerminals.GITHUB,
  );

  useEffect(() => {
    if (!terminalCanvasRef.current) {
      return;
    }

    const { offsetHeight, offsetWidth } = terminalCanvasRef.current;

    setDivSpawnArea({ height: offsetHeight, width: offsetWidth });
  }, []);

  const handleCloseTerminal = () => {
    setTerminalVisible(VisibleTerminals.NONE);
  };

  return (
    <div className="flex relative flex-1 w-full h-full">
      <div
        ref={terminalCanvasRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <TerminalWrapper
          terminalType={VisibleTerminals.GITHUB}
          currentVisible={terminalVisible}
          dragConstrain={terminalCanvasRef}
          spawnArea={divSpawnArea}
          onClose={handleCloseTerminal}
        >
          <GithubTerminal data={GithubData} />
        </TerminalWrapper>

        <TerminalWrapper
          terminalType={VisibleTerminals.GMAIL}
          currentVisible={terminalVisible}
          dragConstrain={terminalCanvasRef}
          spawnArea={divSpawnArea}
          onClose={handleCloseTerminal}
        >
          <EmailTerminal />
        </TerminalWrapper>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="w-full grid place-items-center">
          <WritingText text="Contact Me" />
        </div>

        <div className="flex flex-1 items-center justify-center gap-6">
          <div className="w-full bg-red-400">a</div>
          <div className="flex items-start justify-center flex-col gap-2">
            <button
              className="text-zinc-200 flex items-center gap-3 font-code text-4xl underline hover:text-cyan-400 transition-all z-10"
              onClick={() => setTerminalVisible(VisibleTerminals.GITHUB)}
              type="button"
            >
              <span>{">"}</span> Github
            </button>

            <button
              className="text-zinc-200 flex items-center gap-3 font-code text-4xl underline hover:text-cyan-400 transition-all z-10"
              onClick={() => setTerminalVisible(VisibleTerminals.GMAIL)}
              type="button"
            >
              <span>{">"}</span> Gmail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
