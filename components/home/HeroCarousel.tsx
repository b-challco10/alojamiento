"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroImages } from "@/data/hero";

export default function HeroCarousel() {

  const [current, setCurrent] = useState(0);

useEffect(() => {
  const timeout = setTimeout(() => {
    nextSlide();
  }, 5000);

  return () => clearTimeout(timeout);
}, [current]);

const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % heroImages.length);
};

const prevSlide = () => {
  setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
};

  return (
    <div className="absolute inset-0">

      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={image}
            alt={`Hero ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40 md:flex"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40 md:flex"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${index === current ? "w-8 bg-green-500" : "bg-white/70 hover:bg-white"}`}
          />
        ))}
      </div>

    </div>
  );
}