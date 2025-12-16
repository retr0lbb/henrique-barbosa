"use client";

import { useEffect, useState } from "react";

interface AsciiImageProps {
  imageName: string;
  className?: string;
  colorOverlay?: boolean;
  imageFolder?: string;
}

export function AsciiImage(props: AsciiImageProps) {
  const [imageContent, setImageContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const folder = props.imageFolder || "ascii-images";
        const fileName = props.imageName.endsWith(".txt")
          ? props.imageName
          : `${props.imageName}.txt`;

        const response = await fetch(`/${folder}/${fileName}`);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch ASCII image: ${fileName} from /${folder}/`,
          );
        }

        const content = await response.text();
        setImageContent(content);
      } catch (err) {
        console.error("Failed to load ASCII image:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [props.imageName, props.imageFolder]);

  if (isLoading) {
    return (
      <div
        className={`flex items-center justify-center font-mono whitespace-pre leading-0 text-zinc-200 ${props.className}`}
      >
        Loading ASCII image...
      </div>
    );
  }

  if (error || !imageContent) {
    return (
      <div
        className={`flex items-center justify-center font-mono whitespace-pre text-red-500 ${props.className}`}
      >
        {error || "No image loaded"}
      </div>
    );
  }

  return (
    <div className={`relative inline-block ${props.className}`}>
      <pre className="text-zinc-700 select-none">{imageContent}</pre>

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
  );
}
