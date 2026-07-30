"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
}

export default function ImageCarousel({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="relative min-w-full h-[350px] lg:h-[600px]">
              <Image src={image} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg hover:bg-white">
        <ChevronLeft />
      </button>

      <button onClick={() => emblaApi?.scrollNext()} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg hover:bg-white">
        <ChevronRight />
      </button>
    </div>
  );
}