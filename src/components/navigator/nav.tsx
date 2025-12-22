"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavProps {
  children: ReactNode;
}

export function Nav(props: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-center">
      {/* Desktop */}
      <ul className="hidden md:flex items-center justify-center rounded-full group">
        {props.children}
      </ul>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="md:hidden text-zinc-200 text-2xl p-2"
        aria-label="Abrir menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu */}
      {open && (
        <ul
          className="
            absolute top-14
            flex flex-col items-center gap-2
            rounded-2xl
            border border-zinc-200/20
            bg-zinc-900/90 backdrop-blur
            px-4 py-3
          "
        >
          {props.children}
        </ul>
      )}
    </nav>
  );
}
