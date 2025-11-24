function TerminalHeader() {
  return (
    <div className="min-h-8 bg-zinc-400 flex items-center justify-between px-5 py-1 gap-8">
      <p></p>
      <div className="flex flex-1">
        <p className="text-zinc-950 text-lg font-medium w-full text-center">
          henrique@root: ~
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="size-6 border border-red-600 bg-red-600/50 cursor-pointer hover:bg-red-600/10 transition-all flex items-center justify-center">
          X
        </div>
      </div>
    </div>
  );
}

interface TerminalLinkProps {
  href: string;
  icon: string;
  text: string;
}

function TerminalLink(props: TerminalLinkProps) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-xl text-blue-500">[{props.icon}]:</p>{" "}
      <a
        href={props.href}
        className="text-zinc-300 px-4 hover:underline text-xl"
      >
        {props.text}
      </a>
    </div>
  );
}

export function Terminal() {
  return (
    <div className="flex flex-col gap-2 border-4 border-zinc-400">
      <TerminalHeader />

      <div className="bg-zinc-950 flex justify-center gap-10 p-5">
        <div className="size-72 bg-amber-400">PixelArt</div>

        <div className="flex flex-1 flex-col h-full w-full">
          <div className="text-cyan-400 text-2xl border-b border-dashed border-zinc-400">
            retr0lbb<span className="text-zinc-500">@</span>henriqueBarbosa
          </div>

          <div className="mt-3 space-y-2">
            <TerminalLink
              href="https://localhost:4444"
              icon="Email"
              text="retr0lbb@gmail.com"
            />

            <TerminalLink
              href="https://github.com/retr0lbb"
              icon="Github"
              text="github.com/retr0lbb"
            />

            <TerminalLink
              href="https://www.linkedin.com/in/henrique-barbosa-sampaio/"
              icon="In"
              text="in/henrique-barbosa-sampaio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
