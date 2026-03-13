"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  rate?: number;
}

export default function ParallaxImage({ src, alt, className = "", sizes = "100vw", rate = 0.15 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isTouch = "ontouchstart" in window;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!isTouch && !reducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = ref.current;
          if (el) {
            const rect = el.getBoundingClientRect();
            const viewH = window.innerHeight;
            // Only compute when element is in view
            if (rect.bottom > 0 && rect.top < viewH) {
              const center = rect.top + rect.height / 2;
              const fromCenter = center - viewH / 2;
              setOffset(fromCenter * rate);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial position
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled, rate]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-[-20%] will-change-transform"
        style={enabled ? { transform: `translateY(${offset}px)` } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          sizes={sizes}
        />
      </div>
    </div>
  );
}
