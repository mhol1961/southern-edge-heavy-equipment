"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blogPosts";

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        image="/images/southernedgescreen1.JPG"
        imageAlt="Woven wire screening media for aggregate processing"
        label="Industry Insights"
        title="Blog"
        subtitle="Expert articles on screening media, conveyor belting, crusher parts, and equipment maintenance."
        compact
      />

      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter tabs */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-12">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-purple text-white"
                      : "bg-brand-gray-dark text-brand-gray hover:text-white hover:bg-brand-gray-dark/80 border border-purple/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Featured post */}
          {activeCategory === "All" && filtered.length > 0 && (
            <FadeIn>
              <Link
                href={`/blog/${filtered[0].slug}`}
                className="group block bg-brand-gray-dark rounded-xl border border-purple/20 overflow-hidden hover:border-purple/50 hover:-translate-y-1 cursor-pointer transition-all duration-300 hover:shadow-[0_12px_40px_rgba(123,45,142,0.18)] mb-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={filtered[0].featuredImage}
                      alt={filtered[0].title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#2A2A2A]/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 via-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Badge className="absolute top-4 left-4 bg-purple/80 text-white border-0 text-xs">
                      {filtered[0].category}
                    </Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-purple-accent mb-3">
                      Featured Article
                    </span>
                    <h2 className="font-heading font-bold text-2xl lg:text-3xl uppercase text-white mb-4 group-hover:text-purple-accent transition-colors leading-tight">
                      {filtered[0].title}
                    </h2>
                    <p className="text-sm text-brand-gray leading-relaxed mb-6 line-clamp-3">
                      {filtered[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-brand-gray">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(filtered[0].date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {filtered[0].readTime}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-purple-accent group-hover:translate-x-1 transition-all duration-300 flex items-center gap-1 ml-auto">
                        Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(activeCategory === "All" ? filtered.slice(1) : filtered).map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-brand-gray-dark rounded-xl border border-purple/20 overflow-hidden hover:border-purple/50 hover:-translate-y-1 cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(123,45,142,0.12)]"
                >
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-purple/80 text-white border-0 text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading font-bold text-xl uppercase text-white mb-3 group-hover:text-purple-accent transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-sm text-brand-gray leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-brand-gray">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-purple-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
