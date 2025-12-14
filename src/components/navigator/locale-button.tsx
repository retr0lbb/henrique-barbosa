import { GiBrazilFlag } from "react-icons/gi";

export function LocaleButton() {
  return (
    <button
      type="button"
      className="text-2xl text-zinc-200 p-2 mr-2 rounded-full bg-zinc-200/10 border border-zinc-200/20 
      cursor-pointer hover:bg-zinc-300/20 transition-all"
    >
      <GiBrazilFlag></GiBrazilFlag>
    </button>
  );
}
