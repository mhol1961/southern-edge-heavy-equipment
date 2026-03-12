"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
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
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-brand-black-light">
        <div className="absolute inset-0 purple-radial-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray mb-6">
            <Link href="/" className="hover:text-purple-accent transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-white">Blog</span>
          </nav>
          <SectionLabel text="Insights & Guides" />
          <h1 className="font-heading font-bold text-[clamp(36px,5vw,56px)] uppercase tracking-tight text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-brand-gray max-w-2xl">
            Industry insights, maintenance guides, and product knowledge from our team.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter tabs */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-12">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-brand-gray-dark rounded-xl border border-purple/20 overflow-hidden hover:border-purple/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(123,45,142,0.12)]"
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
