import { AsciiImage } from "@/components/asciiAnimation/ascii-image";
import type { GithubData } from "@/components/terminal/types";

export function GithubTerminal(props: { data: GithubData }) {
  return (
    <div className="flex items-center justify-center gap-6 p-2">
      <AsciiImage imageName="github" className="text-xs! text-zinc-300!" />

      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-center gap-2">
          <p className="text-blue-500 text-2xl font-code">[Link]</p>
          <a
            href="https://github.com/retr0lbb"
            className="text-zinc-300 text-2xl hover:text-cyan-500 font-code hover:underline transition-all"
          >
            retr0lbb
          </a>
        </div>

        <div className="flex items-center justify-center gap-2">
          <p className="text-blue-500 text-2xl font-code">[repos]</p>
          <p className="text-zinc-300 text-2xl font-code">
            {props.data.public_repos}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <p className="text-blue-500 text-2xl font-code">[followers]</p>
          <p className="text-zinc-300 text-2xl font-code">
            {props.data.followers}
          </p>
        </div>
      </div>
    </div>
  );
}
