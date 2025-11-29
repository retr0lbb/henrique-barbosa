"use client"

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import NERD_GAME from "@/assets/images/projeto_nerd/NERD_game.png"
import NERD_LIB from "@/assets/images/projeto_nerd/NERD_games.png"
import NERD_MAIN from "@/assets/images/projeto_nerd/NERD_main.png"
import NERD_PROFILE from "@/assets/images/projeto_nerd/NERD_profile.png"
import NERD_CAPTURE from "@/assets/images/projeto_nerd/Nerd_capture.png"

const images = [
    { src: NERD_MAIN, alt: "game page" },
    { src: NERD_GAME, alt: "library page" },
    { src: NERD_LIB, alt: "game page 2" },
    { src: NERD_PROFILE, alt: "library page 2" },
    { src: NERD_CAPTURE, alt: "game page 3" },
]

export default function Page(){
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 10000, stopOnInteraction: false })
    ])

    const scrollTo = useCallback((index: number) => {
        emblaApi?.scrollTo(index)
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi, onSelect])

    return(
        <div className="min-h-dvh bg-zinc-950 flex flex-col gap-2 p-2">
            <div className="flex flex-col gap-4 p-6">
                <h1 className="text-zinc-200 text-6xl font-bold">N.E.R.D</h1>
                <p className="text-xl text-zinc-400">The game plataform from Brazil to Brazil.</p>
            </div>

            <div className="w-full px-6 flex flex-col gap-4">
                {/* Main Image Carousel */}
                <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex">
                        {images.map((image, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0">
                                <div className="relative w-full h-[500px]">
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
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`relative shrink-0 w-16 h-8 rounded-md overflow-hidden transition-all ${
                                selectedIndex === index 
                                    ? 'ring-2 ring-blue-500 opacity-100' 
                                    : 'opacity-50 hover:opacity-75'
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
        </div>
    )
}