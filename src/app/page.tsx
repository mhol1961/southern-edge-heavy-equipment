"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Star, MapPin, Mail, Clock, Check, ChevronDown } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import EquipmentCard from "@/components/EquipmentCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { equipment } from "@/data/equipment";
import { categories } from "@/data/categories";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const featuredEquipment = equipment.filter((e) => e.featured).slice(0, 6);

const statConfig = [
  { target: 500, suffix: "+", label: "Products In Stock", duration: 2000 },
  { target: 48, suffix: "hr", label: "Turnaround", duration: 1500 },
  { target: 15, suffix: "+", label: "Years Experience", duration: 1000 },
];

const testimonialImages = [
  "/images/southernedgescreen2.JPG",
  "/images/southernedgeheavyequipment3.JPG",
  "/images/southernedgebelt1.JPG",
];

export default function Home() {
  // Hero parallax
  const heroRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const isTouch = "ontouchstart" in window;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reducedMotion) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setParallaxY(window.scrollY * 0.3);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== CINEMATIC HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed background image with parallax */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <Image
            src="/images/southernedgeheavyequipment2.jpeg"
            alt="Pegson XA400S Mobile Jaw Crusher — Southern Edge Heavy Equipment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Multi-layer overlay */}
        <div className="hero-overlay" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 z-[2] grid-pattern opacity-30" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            {/* Status pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple/40 bg-black/40 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-sans font-medium text-brand-gray-light">
                Now Serving the Southeast
              </span>
            </div>

            {/* MASSIVE heading with text reveal */}
            <h1 className="mt-6 font-heading font-bold text-[clamp(42px,7vw,80px)] uppercase leading-[0.95] tracking-[-0.02em] text-white">
              <span className="block text-reveal" style={{ animationDelay: "0.2s" }}>
                Screens. Belting.
              </span>
              <span className="block text-reveal" style={{ animationDelay: "0.35s" }}>
                Parts.{" "}
                <span className="text-purple-accent text-reveal inline-block" style={{ animationDelay: "0.55s" }}>
                  Machines.
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="mt-6 text-[17px] text-brand-gray-light/80 max-w-[480px] leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Southern Edge supplies screening media, conveyor belting, crusher wear
              parts, and material processing machines to aggregate, mining, and
              recycling operations across the Southeast.
            </p>

            {/* Dual CTAs */}
            <div
              className="mt-8 flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "0.65s" }}
            >
              <Link
                href="/equipment"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
              >
                Browse Equipment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:1-800-234-7890"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
              >
                <Phone className="w-4 h-4" />
                Call 1-800-234-7890
              </a>
            </div>

            {/* Animated Stats bar */}
            <div
              className="mt-10 flex flex-wrap items-center gap-6 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              {statConfig.map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div>
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      duration={stat.duration}
                      className="font-heading font-bold text-2xl text-white leading-none"
                    />
                    <div className="text-[11px] uppercase tracking-[0.12em] text-brand-gray mt-1">
                      {stat.label}
                    </div>
                  </div>
                  {i < statConfig.length - 1 && (
                    <div className="hidden sm:block w-px h-10 bg-brand-gray/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Floating featured card */}
          <div
            className="hidden lg:block absolute bottom-24 right-8 xl:right-16 z-20 animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="bg-black/60 backdrop-blur-xl rounded-xl border border-purple/30 p-5 min-w-[280px] shadow-2xl">
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-purple-accent">
                Featured Equipment
              </span>
              <h3 className="font-heading font-bold text-lg text-white mt-1">
                Pegson XA400S
              </h3>
              <p className="text-sm text-brand-gray mt-0.5">
                Mobile Jaw Crusher &middot; In Stock
              </p>
              <Link
                href="/equipment/pegson-xa400s-jaw-crusher"
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-purple-accent mt-3 hover:text-purple-light transition-colors"
              >
                View Details <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce" aria-hidden="true">
            <ChevronDown className="w-6 h-6 text-white/40" />
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="What We Supply" />
            <h2 className="font-heading font-bold text-[clamp(32px,4.5vw,56px)] uppercase tracking-tight text-white mb-12">
              Product Categories
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <FadeIn key={cat.slug} delay={i * 0.08}>
                <Link
                  href={
                    cat.slug === "screening-media"
                      ? "/screens"
                      : cat.slug === "conveyor-belting"
                        ? "/belting"
                        : cat.slug === "crushers-jaw-plates" ||
                            cat.slug === "wear-parts"
                          ? "/parts"
                          : "/equipment"
                  }
                  className="group block rounded-lg overflow-hidden card-hover border border-purple/20 cursor-pointer"
                >
                  {/* Tall image with zoom + purple overlay on hover */}
                  <div className="relative h-[280px] img-zoom">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
                    {/* Purple tint overlay on hover */}
                    <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/15 transition-colors duration-500" />
                  </div>
                  {/* Title overlapping image */}
                  <div className="relative -mt-8 z-10 px-5 pb-5">
                    <h3 className="font-heading font-bold text-xl uppercase text-white group-hover:text-purple-accent transition-colors leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-brand-gray-light/60 mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-purple-accent mt-4 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                      View Products <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED EQUIPMENT ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <SectionLabel text="Browse Our Inventory" />
                <h2 className="font-heading font-bold text-[clamp(32px,4.5vw,56px)] uppercase tracking-tight text-white">
                  Featured Equipment
                </h2>
              </div>
              <Link
                href="/equipment"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-purple-accent hover:text-purple-light transition-colors"
              >
                View All Equipment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEquipment.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08}>
                <TiltCard>
                  <EquipmentCard equipment={item} />
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="How We Help" />
            <h2 className="font-heading font-bold text-[clamp(32px,4.5vw,56px)] uppercase tracking-tight text-white mb-16">
              Our Services
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.06}>
                <div className="group relative bg-brand-gray-dark rounded-xl border border-purple/20 p-8 md:p-10 hover:border-purple/50 transition-all overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="shrink-0">
                      <span
                        className="font-heading font-bold text-[72px] md:text-[80px] leading-none text-purple-accent/30 group-hover:text-purple-accent/50 transition-colors number-glow"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-2xl uppercase text-white group-hover:text-purple-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[15px] text-brand-gray-light/70 mt-3 leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                      {service.details && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-5">
                          {service.details.map((detail, j) => (
                            <div key={j} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-purple-accent shrink-0" />
                              <span className="text-sm text-brand-gray-light">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm mt-6"
                      >
                        Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="What Our Clients Say" />
            <h2 className="font-heading font-bold text-[clamp(32px,4.5vw,56px)] uppercase tracking-tight text-white mb-12">
              Trusted Across the Southeast
            </h2>
          </FadeIn>

          <TestimonialCarousel testimonials={testimonials} images={testimonialImages} />
        </div>
      </section>

      {/* ===== CTA BANNER — Animated Gradient ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cta-gradient-animated" />
        <div className="absolute inset-0 stripe-texture" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-[clamp(32px,4.5vw,48px)] uppercase text-white mb-6">
              Need Screens, Belting, or Parts?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get a fast quote from our team. We stock a wide range of screen media,
              conveyor belting, and crusher wear parts for immediate delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 font-heading font-bold uppercase tracking-wide text-purple-dark rounded-lg bg-white hover:bg-brand-gray-light transition-all hover:shadow-lg cursor-pointer"
              >
                Request a Quote
              </Link>
              <a
                href="tel:1-800-234-7890"
                className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold uppercase tracking-wide text-white rounded-lg border-2 border-white/30 hover:border-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call 1-800-234-7890
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CONTACT PREVIEW ===== */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <SectionLabel text="Get In Touch" />
              <h2 className="font-heading font-bold text-[clamp(32px,4.5vw,48px)] uppercase tracking-tight text-white mb-8">
                Contact Us
              </h2>
              <div className="space-y-5">
                <a href="tel:1-800-234-7890" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center group-hover:bg-purple/40 group-hover:shadow-[0_0_15px_rgba(123,45,142,0.3)] transition-all">
                    <Phone className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray">Phone</p>
                    <p className="font-heading font-bold text-white">1-800-234-7890</p>
                  </div>
                </a>
                <a href="mailto:info@southernedgescreens.com" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center group-hover:bg-purple/40 group-hover:shadow-[0_0_15px_rgba(123,45,142,0.3)] transition-all">
                    <Mail className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray">Email</p>
                    <p className="font-heading font-bold text-white">info@southernedgescreens.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray">Service Area</p>
                    <p className="font-heading font-bold text-white">Southeast United States</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray">Hours</p>
                    <p className="font-heading font-bold text-white">Mon–Fri 7AM – 5PM EST</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-brand-gray-dark rounded-xl border border-purple/20 p-8">
                <h3 className="font-heading font-bold text-xl uppercase text-white mb-6">
                  Quick Quote Request
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-[#333] text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-[#333] text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-[#333] text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-[#333] text-brand-gray focus:outline-none focus:border-purple transition-colors cursor-pointer">
                    <option value="">What type of equipment or parts do you need?</option>
                    <option value="screens">Screening Media</option>
                    <option value="belting">Conveyor Belting</option>
                    <option value="parts">Crusher Parts</option>
                    <option value="equipment">Equipment</option>
                    <option value="service">Service / Installation</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    placeholder="Tell us what you need — include sizes, quantities, or equipment model if known..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-[#333] text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center w-full py-4 rounded-lg text-base cursor-pointer"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
