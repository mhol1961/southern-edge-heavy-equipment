"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  images: string[];
}

export default function TestimonialCarousel({ testimonials, images }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  const goTo = useCallback((index: number, dir?: "left" | "right") => {
    setDirection(dir || (index > current ? "right" : "left"));
    setCurrent((index + total) % total);
  }, [current, total]);

  const next = useCallback(() => goTo(current + 1, "right"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "left"), [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || paused) return;

    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, paused]);

  // Touch/swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Carousel viewport */}
      <div className="relative overflow-hidden rounded-xl min-h-[320px] sm:min-h-[280px]">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              i === current
                ? "opacity-100 translate-x-0"
                : direction === "right"
                  ? i === (current - 1 + total) % total
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                  : i === (current + 1) % total
                    ? "opacity-0 translate-x-full"
                    : "opacity-0 -translate-x-full"
            }`}
            aria-hidden={i !== current}
          >
            <div className="relative bg-brand-gray-dark rounded-xl border border-purple/20 overflow-hidden h-full">
              <div className="absolute inset-0">
                <Image
                  src={images[i % images.length]}
                  alt=""
                  fill
                  className="object-cover opacity-15"
                  sizes="100vw"
                />
              </div>
              <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full">
                <span className="absolute top-4 left-6 font-heading text-[120px] leading-none text-purple-accent/20 select-none">
                  &ldquo;
                </span>
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-brand-gray-light italic leading-relaxed flex-1 relative z-10 text-[15px] sm:text-base max-w-3xl">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-purple/10 relative z-10">
                  <p className="font-heading font-bold text-sm uppercase text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-purple-accent mt-1">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-purple/30 flex items-center justify-center text-white hover:bg-purple/30 hover:border-purple transition-all cursor-pointer"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-purple/30 flex items-center justify-center text-white hover:bg-purple/30 hover:border-purple transition-all cursor-pointer"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "bg-purple-accent w-8"
                : "bg-brand-gray/40 hover:bg-brand-gray/60"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
