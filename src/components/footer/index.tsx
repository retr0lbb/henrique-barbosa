import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="hidden md:flex w-full bg-zinc-900 min-h-20 border-t border-zinc-200/10 items-center justify-between px-12 z-20">
      <p className="text-zinc-300">2025© made by retr0lbb</p>

      <div className="flex clear-both items-center justify-center gap-5">
        <a
          href="https://github.com/retr0lbb"
          className="text-zinc-400 cursor-pointer hover:text-zinc-200 transition-all"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/henrique-barbosa-sampaio/"
          className="text-zinc-400 cursor-pointer hover:text-zinc-200 transition-all"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  );
}
