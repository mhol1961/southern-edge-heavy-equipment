"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ParallaxImage from "@/components/ParallaxImage";

interface ProductCategory {
  title: string;
  href: string;
  image: string;
  description: string;
  features: string[];
}

const categoryLabels = ["Screens & Media", "Belting", "Wear Parts"];

export default function ProductCategoryCards({ categories }: { categories: ProductCategory[] }) {
  return (
    <div className="space-y-8">
      {categories.map((cat, i) => (
        <FadeIn key={cat.href} delay={i * 0.1}>
          <Link href={cat.href} className="group block">
            <div className="relative rounded-xl overflow-hidden border border-purple/20 card-hover">
              {/* Large image with parallax */}
              <div className="relative h-[300px] sm:h-[360px]">
                <ParallaxImage
                  src={cat.image}
                  alt={cat.title}
                  sizes="100vw"
                  rate={0.1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent z-[1]" />
              </div>

              {/* Content overlaid on image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-[2]">
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-purple-accent">
                  {categoryLabels[i] || "Products"}
                </span>
                <h3 className="font-heading font-bold text-3xl sm:text-4xl uppercase text-white mt-2 group-hover:text-purple-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[15px] text-brand-gray-light mt-3 max-w-2xl leading-relaxed">
                  {cat.description}
                </p>
                {/* Feature chips */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {cat.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs font-sans font-medium text-brand-gray-light bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 mt-6 text-sm font-heading font-bold uppercase tracking-wide text-purple-accent group-hover:text-purple-light group-hover:translate-x-1 transition-all">
                  View Products <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
