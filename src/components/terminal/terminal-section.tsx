"use client";
import { useRef, useState, useEffect } from "react";
import { WritingText } from "../writting-text";
import { useGithubData } from "@/hooks/use-github-data";
import { VisibleTerminals } from "./types";
import { TerminalWrapper } from "./terminal-wrapper";
import { GithubTerminal } from "./terminals/github-terminal";
import { EmailTerminal } from "./terminals/email-terminal";
import { ASCIIAnimation } from "../asciiAnimation";
import { LinkedInTerminal } from "./terminals/linkedin-terminal";
import { Button } from "../button";

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

        <TerminalWrapper
          terminalType={VisibleTerminals.LINKEDIN}
          currentVisible={terminalVisible}
          dragConstrain={terminalCanvasRef}
          spawnArea={divSpawnArea}
          onClose={handleCloseTerminal}
        >
          <LinkedInTerminal />
        </TerminalWrapper>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="w-full grid place-items-center z-20">
          <WritingText text="Contact Me" />
        </div>

        <div className="flex flex-1 items-center justify-center flex-col lg:flex-row gap-0 md:gap-8 lg:gap-10">
          <div
            className="w-full h-full absolute inset-0 mt-10"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 30%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 30%, transparent 70%)",
            }}
          >
            <ASCIIAnimation
              textColor="text-zinc-500"
              hFull
              fps={30}
              frameCount={247}
              frameFolder="pink_rain"
            />
          </div>
          <div className="w-96 h-96 flex items-center justify-center">
            <p className="text-zinc-200 text-3xl md:text-2xl lg:text-4xl font-code z-20">
              Available to work
            </p>
          </div>
          <div className="flex items-center md:justify-start justify-center flex-row flex-wrap md:flex-col gap-2">
            <Button
              style={{ zIndex: 20 }}
              variant="terminal"
              onClick={() => setTerminalVisible(VisibleTerminals.GITHUB)}
              type="button"
            >
              Github
            </Button>

            <Button
              style={{ zIndex: 20 }}
              variant="terminal"
              onClick={() => setTerminalVisible(VisibleTerminals.GMAIL)}
              type="button"
            >
              Gmail
            </Button>

            <Button
              style={{ zIndex: 20 }}
              variant="terminal"
              onClick={() => setTerminalVisible(VisibleTerminals.LINKEDIN)}
              type="button"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
