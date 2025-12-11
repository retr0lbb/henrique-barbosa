interface TerminalHeaderProps {
  text?: string;
  onCloseButtonClick: () => void;
}

export function TerminalHeader(props: TerminalHeaderProps) {
  return (
    <div className="min-h-8 bg-zinc-200/20 flex items-center justify-between px-5 py-1 gap-8">
      <p></p>
      <div className="flex flex-1">
        {props.text && (
          <p className="text-zinc-950 text-lg font-medium w-full text-center">
            {props.text}
          </p>
        )}
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={props.onCloseButtonClick}
          type="button"
          className="size-6 border bg-red-500/30 border-red-500/20 cursor-pointer hover:bg-red-400/10 transition-all flex items-center justify-center"
        >
          X
        </button>
      </div>
    </div>
  );
}
