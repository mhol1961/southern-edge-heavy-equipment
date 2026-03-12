"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, User, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import QuoteButton from "@/components/QuoteButton";
import { blogPosts } from "@/data/blogPosts";

function extractHeadings(content: string) {
  const headings: { level: number; text: string; id: string }[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)/);
    if (match) {
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ level: match[1].length, text, id });
    }
  }
  return headings;
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-2 mb-6 ml-4">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-brand-gray leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      flushList();
      const text = line.replace("## ", "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      elements.push(
        <h2 key={`h2-${i}`} id={id} className="font-heading font-bold text-2xl uppercase text-white mt-10 mb-4 scroll-mt-24">
          {text}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      const text = line.replace("### ", "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      elements.push(
        <h3 key={`h3-${i}`} id={id} className="font-heading font-bold text-lg uppercase text-brand-gray-light mt-8 mb-3 scroll-mt-24">
          {text}
        </h3>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      listItems.push(line.replace(/^[-*]\s+/, ""));
    } else if (line.trim() === "") {
      flushList();
    } else if (line.startsWith("**") && line.endsWith("**")) {
      flushList();
      elements.push(
        <p key={`bold-${i}`} className="font-semibold text-brand-gray-light mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.trim()) {
      flushList();
      // Render text with bold segments safely using React nodes
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={`p-${i}`} className="text-brand-gray leading-relaxed mb-4">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={j} className="text-brand-gray-light">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    }
  }
  flushList();
  return elements;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold uppercase text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-purple-accent hover:text-purple-light">&larr; Back to Blog</Link>
        </div>
      </div>
    );
  }

  const headings = extractHeadings(post.content);
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Featured image */}
      <section className="relative pt-20">
        <div className="relative h-[400px] w-full">
          <Image src={post.featuredImage} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>
      </section>

      <section className="relative -mt-32 z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Main content */}
            <article className="lg:col-span-3">
              <FadeIn>
                <nav className="flex items-center gap-2 text-sm text-brand-gray mb-6 flex-wrap">
                  <Link href="/" className="hover:text-purple-accent transition-colors">Home</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <Link href="/blog" className="hover:text-purple-accent transition-colors">Blog</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-brand-white line-clamp-1">{post.title}</span>
                </nav>

                <Badge className="bg-purple/80 text-white border-0 text-xs mb-4">{post.category}</Badge>
                <h1 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray mb-10">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
                </div>

                <div className="max-w-none">{renderMarkdown(post.content)}</div>
              </FadeIn>

              {/* CTA Banner */}
              <FadeIn>
                <div className="mt-16 rounded-xl bg-gradient-to-r from-purple-dark to-purple p-8 text-center">
                  <h2 className="font-heading font-bold text-2xl uppercase text-white mb-3">Need Equipment or Parts?</h2>
                  <p className="text-white/80 mb-6">Get a free quote from our team. We stock screen media, belting, and crusher parts for immediate delivery.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="inline-flex items-center px-8 py-4 font-heading font-bold uppercase tracking-wide text-purple-dark rounded-lg bg-white hover:bg-brand-gray-light transition-all hover:shadow-lg">Get a Free Quote</Link>
                    <a href="tel:1-800-234-789" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold uppercase text-sm text-white rounded-lg border-2 border-white/30 hover:border-white transition-colors">
                      <Phone className="w-4 h-4" />Call Us
                    </a>
                  </div>
                </div>
              </FadeIn>
            </article>

            {/* Sidebar — TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <FadeIn delay={0.1}>
                  <div className="bg-brand-gray-dark rounded-xl border border-purple/20 p-6">
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-brand-white mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className={`block text-sm hover:text-purple-accent transition-colors ${
                            h.level === 2 ? "text-brand-gray-light" : "text-brand-gray pl-3"
                          }`}
                        >
                          {h.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </FadeIn>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-20">
              <FadeIn>
                <SectionLabel text="Keep Reading" />
                <h2 className="font-heading font-bold text-2xl uppercase text-white mb-8">Related Posts</h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r, i) => (
                  <FadeIn key={r.id} delay={i * 0.08}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group block bg-brand-gray-dark rounded-lg border border-purple/20 overflow-hidden hover:border-purple/50 transition-all"
                    >
                      <div className="relative h-[160px] overflow-hidden">
                        <Image src={r.featuredImage} alt={r.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading font-bold text-sm uppercase text-white group-hover:text-purple-accent transition-colors leading-tight">{r.title}</h3>
                        <span className="text-xs text-brand-gray mt-2 block">{r.readTime}</span>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
