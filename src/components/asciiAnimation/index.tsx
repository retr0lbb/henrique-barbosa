"use client";

import { useEffect, useRef, useState } from "react";
import { AnimationController } from "@/utils/animation-controller";

interface ASCIIAnimationProps {
  frames?: [];
  className?: string;
  fps?: number;
  colorOverlay?: boolean;
  frameCount?: number;
  frameFolder?: string;
  showFrameIndex?: boolean;
}

export function ASCIIAnimation(props: ASCIIAnimationProps) {
  const [frames, setFrames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const framesRef = useRef<string[]>([]);

  const [animationManager] = useState(
    () =>
      new AnimationController(() => {
        setCurrentFrame((current) => {
          if (framesRef.current.length === 0) return current;
          return (current + 1) % framesRef.current.length;
        });
      }, props.fps),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <Don't affect nothing>
  useEffect(() => {
    const loadFrames = async () => {
      if (props.frames) {
        setFrames(props.frames);
        framesRef.current = props.frames;
        setIsLoading(false);
        return;
      }

      try {
        const frameFiles = Array.from(
          { length: props.frameCount ?? 0 },
          (_, i) => `frame_${String(i + 1).padStart(4, "0")}.txt`,
        );

        const framePromisses = frameFiles.map(async (fileName) => {
          const response = await fetch(`/${props.frameFolder}/${fileName}`);

          if (!response.ok) {
            throw new Error(
              `Failed to fetch frames from ${props.frameFolder}: ${fileName}`,
            );
          }

          return await response.text();
        });

        const loadedFrames = await Promise.all(framePromisses);
        console.log(`Loaded ${loadedFrames.length} frames`);
        setFrames(loadedFrames);
        framesRef.current = loadedFrames;
        setCurrentFrame(0);
      } catch (error) {
        console.error("Failed to load ASCII frames:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFrames();
  }, [props.frames]);

  useEffect(() => {
    if (frames.length === 0) {
      return;
    }

    const reducedMotion =
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    if (reducedMotion) {
      return;
    }

    const handleFocus = () => animationManager.start();
    const handleBlur = () => animationManager.pause();

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    if (document.visibilityState === "visible") {
      animationManager.start();
    }

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
      animationManager.pause();
    };
  }, [animationManager, frames.length]);

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex items-end justify-center font-mono whitespace-pre overflow-hidden bg-black text-white p-4 select-none">
        Loading ASCII animation...
      </div>
    );
  }

  if (!frames.length) {
    return (
      <div className="absolute inset-0 flex items-end justify-center font-mono whitespace-pre overflow-hidden bg-black text-white p-4 select-none">
        No frames loaded
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-end font-mono whitespace-pre overflow-hidden text-xl lg:text-3xl leading-none select-none ${props.className}`}
    >
      {props.showFrameIndex && (
        <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-2 rounded z-10">
          Frame: {currentFrame + 1}/{frames.length}
        </div>
      )}

      <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
        <pre className="text-zinc-700 pb-4 select-none">
          {frames[currentFrame]}
        </pre>

        {props.colorOverlay && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,255,255,0.9) 0%, rgba(0,150,255,0.7) 30%, rgba(0,50,150,0.8) 70%, rgba(0,20,80,0.6) 100%)",
              mixBlendMode: "color",
            }}
          />
        )}
      </div>
    </div>
  );
}
