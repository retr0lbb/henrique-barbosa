"use client";
import { useRef, useState, useEffect } from "react";
import { Terminal } from ".";
import { WritingText } from "../writting-text";
import { AsciiImage } from "../asciiAnimation/ascii-image";

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
  const [githubData, setGithubData] = useState<{
    followers: number;
    last_update: string;
    public_repos: number;
  }>({ followers: 0, last_update: "", public_repos: 0 });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <needles>
  useEffect(() => {
    fetch("/api/github_data")
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
      });
    if (!terminalCanvasRef.current) {
      return;
    }

    const { offsetHeight, offsetWidth } = terminalCanvasRef.current;

    setDivSpawnArea({ height: offsetHeight, width: offsetWidth });

    console.log("Div spawn area: ", divSpawnArea);
    console.log(githubData);
  }, []);

  return (
    <div className="flex relative flex-1 w-full h-full">
      {/* Terminal Spawn canvas*/}
      <div
        ref={terminalCanvasRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <Terminal
          dragConstrain={terminalCanvasRef}
          spawnArea={{
            height: divSpawnArea.height,
            width: divSpawnArea.width,
          }}
          numberOfOpenTerminals={1}
          onCloseClick={() => setTerminaVisible(VisibleTerminals.NONE)}
          isVisible={terminalVisible === VisibleTerminals.GITHUB}
        >
          <div className="flex items-center justify-center gap-6 p-2">
            <AsciiImage
              imageName="github"
              className="text-xs! text-zinc-300!"
            />

            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center gap-2">
                <p className="text-blue-500 text-2xl">[Link]</p>
                <a
                  href="https://github.com/retr0lbb"
                  className="text-zinc-300 text-2xl hover:text-cyan-500 hover:underline transition-all"
                >
                  retr0lbb
                </a>
              </div>

              <div className="flex items-center justify-center gap-2">
                <p className="text-blue-500 text-2xl">[repos]</p>
                <p className="text-zinc-300 text-2xl">
                  {githubData.public_repos}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <p className="text-blue-500 text-2xl">[followers]</p>
                <p className="text-zinc-300 text-2xl">{githubData.followers}</p>
              </div>
            </div>
          </div>
        </Terminal>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="w-full grid place-items-center">
          <WritingText text="Contact Me" />
        </div>

        <div className="flex flex-1">
          <button
            className="text-zinc-200 font-mono text-4xl underline hover:text-cyan-400 transition-all z-10"
            onClick={() => setTerminaVisible(VisibleTerminals.GITHUB)}
            type="button"
          >
            {">"} Github
          </button>
        </div>
      </div>
    </div>
  );
}
