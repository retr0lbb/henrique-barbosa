"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type requiredProps = {
  type: "image" | "video";
  src: StaticImageData;
  alt: string;
  poster?: string;
};

interface CarouselProps {
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
    <div className="w-full px-2 pt-2 pb-6 md:px-6 flex flex-col items-center justify-center gap-2">
      {/* Main Image Carousel */}
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {props.imgs.map((image, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <no other data>
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="relative w-full ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-hidden items-center justify-center flex-wrap pb-2">
        {props.imgs.map((image, index) => (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: <No other type of key>
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={`relative shrink-0 w-16 h-8 rounded-md overflow-hidden transition-all ${
              selectedIndex === index
                ? "ring-2 ring-blue-500 opacity-100"
                : "opacity-50 hover:opacity-75"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
