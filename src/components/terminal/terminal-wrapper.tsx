"use client";

import type { RefObject } from "react";
import { Terminal } from ".";
import type { VisibleTerminals } from "./types";

interface TerminalWrapperProps {
  terminalType: VisibleTerminals;
  currentVisible: VisibleTerminals;
  dragConstrain: RefObject<HTMLDivElement | null>;
  spawnArea: { width: number; height: number };
  onClose: () => void;
  children: React.ReactNode;
}

export function TerminalWrapper(props: TerminalWrapperProps) {
  return (
    <Terminal
      numberOfOpenTerminals={1}
      onCloseClick={() => props.onClose()}
      isVisible={props.currentVisible === props.terminalType}
      dragConstrain={props.dragConstrain}
      spawnArea={props.spawnArea}
    >
      {props.children}
    </Terminal>
  );
}
