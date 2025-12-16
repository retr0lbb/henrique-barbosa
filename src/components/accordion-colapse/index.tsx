"use client";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface AccordionCollapseProps {
  children: React.ReactNode;
  startColapse?: boolean;
}

export function AccordionCollapse(props: AccordionCollapseProps) {
  const [isColapse, setIsColapse] = useState(props.startColapse);
  return (
    <div className={`w-full ${isColapse ? "overflow-hidden" : "min-h-auto"}`}>
      <div className={isColapse ? "max-h-dvh overflow-hidden" : ""}>
        {props.children}
      </div>
      {isColapse ? (
        <button
          type="button"
          onClick={() => setIsColapse(false)}
          className="flex items-center justify-center flex-col gap-2 py-4 cursor-pointer group w-full"
        >
          <p className="text-zinc-400 text-2xl group-hover:text-zinc-300">
            See More
          </p>
          <BiChevronDown className="text-zinc-400 group-hover:text-zinc-300 text-4xl" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsColapse(true)}
          className="flex items-center justify-center flex-col gap-2 py-4 cursor-pointer group w-full"
        >
          <p className="text-zinc-400 text-2xl group-hover:text-zinc-300">
            See Less
          </p>
          <BiChevronUp className="text-zinc-400 group-hover:text-zinc-300 text-4xl" />
        </button>
      )}
    </div>
  );
}
