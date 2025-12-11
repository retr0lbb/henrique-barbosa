interface TerminalLinkProps {
  href: string;
  icon: string;
  text: string;
}

export function TerminalLink(props: TerminalLinkProps) {
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
