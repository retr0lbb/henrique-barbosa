"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type requiredProps = {
  type: "image" | "video";
  src: StaticImageData | string;
  alt: string;
  poster?: StaticImageData | string;
};

interface CarouselProps {
  className?: string;
  imgs: requiredProps[];
}

export function Carousel(props: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  ]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className={`w-full px-2 pt-2 pb-6 md:px-6 flex flex-col items-center justify-center gap-2 ${props.className || ""}`}
    >
      {/* Main Image Carousel */}
      <div
        className="overflow-hidden w-[80%] mx-auto border border-white/20"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {props.imgs.map((image, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <no other data>
            <div key={index} className="flex-[0_0_100%] min-w-0">
              {image.type === "image" ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              ) : (
                // biome-ignore lint/a11y/useMediaCaption: <i dont know what are this>
                <video
                  src={image.src as string}
                  poster={image.poster as string}
                  controls
                  playsInline
                  className="w-full h-full object-cover aspect-video"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-hidden items-center justify-center flex-wrap p-2">
        {props.imgs.map((image, index) => (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: <yep>
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={`relative shrink-0 w-16 h-8 rounded-md overflow-hidden transition-all border border-zinc-200/25 ${
              selectedIndex === index
                ? "ring-2 ring-white opacity-100"
                : "opacity-50 hover:opacity-75"
            }`}
          >
            {image.type === "image" && (
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            )}

            {image.type === "video" && image.poster && (
              <>
                <Image
                  src={image.poster}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/40">
                  <span className="text-white text-xs">▶</span>
                </div>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
