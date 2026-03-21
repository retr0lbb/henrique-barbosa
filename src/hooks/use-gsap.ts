"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface UseGSAPOptions {
  scope?: React.RefObject<HTMLElement | null>;
}

export function useGSAP(options: UseGSAPOptions = {}) {
  const [isReady, setIsReady] = useState(false);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      setIsReady(true);
    }, options.scope?.current ?? undefined);

    return () => {
      ctxRef.current?.revert();
    };
  }, [options.scope]);

  return { gsap, ScrollTrigger, context: ctxRef.current, isReady };
}
