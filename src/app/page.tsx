"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Quote, MapPin, Mail, Clock } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import EquipmentCard from "@/components/EquipmentCard";
import QuoteButton from "@/components/QuoteButton";
import { equipment } from "@/data/equipment";
import { categories } from "@/data/categories";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const featuredEquipment = equipment.filter((e) => e.featured).slice(0, 6);

const stats = [
  { value: "500+", label: "Screen Panels In Stock" },
  { value: "48hr", label: "Average Turnaround" },
  { value: "15+", label: "Years Experience" },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 purple-radial-gradient" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left column — text */}
            <div className="lg:col-span-3 space-y-8">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple/40 bg-purple/10 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-brand-gray-light">
                  Now Serving the Southeast
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-heading font-bold text-[clamp(36px,5vw,64px)] uppercase leading-[1.05] tracking-tight text-white animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Screens. Belting.
                <br />
                Parts.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-purple-accent">
                  Built for
                  <br />
                  Production.
                </span>
              </h1>

              {/* Subtext */}
              <p
                className="text-lg text-brand-gray max-w-xl leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.35s" }}
              >
                Southern Edge supplies screening media, conveyor belting, crusher wear
                parts, and material processing machines to aggregate, mining, and
                recycling operations across the Southeast United States.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-4 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <Link
                  href="/equipment"
                  className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple transition-all hover:shadow-[0_0_30px_rgba(123,45,142,0.4)]"
                >
                  Browse Equipment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:1-800-234-789"
                  className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold uppercase tracking-wide text-white rounded-lg border border-brand-gray/30 hover:border-purple-accent transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call 1-800-234-789
                </a>
              </div>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-8 pt-4 animate-fade-in"
                style={{ animationDelay: "0.65s" }}
              >
                {stats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="font-heading font-bold text-2xl text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-[0.12em] text-brand-gray mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — equipment image card */}
            <div
              className="lg:col-span-2 relative hidden lg:block animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-purple/20 shadow-2xl shadow-purple/10">
                <Image
                  src="/images/southernedgeheavyequipment2.jpeg"
                  alt="Pegson XA400S Jaw Crusher - Featured Equipment at Southern Edge"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                {/* Floating tag bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-black/80 backdrop-blur-md rounded-lg p-4 border border-purple/30">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-purple-accent">
                    Featured Equipment
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-1">
                    Pegson XA400S
                  </h3>
                  <p className="text-sm text-brand-gray">
                    Mobile Jaw Crusher &middot; In Stock
                  </p>
                </div>

                {/* Floating brands card top-right */}
                <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-md rounded-lg px-4 py-3 border border-purple/20">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-purple-accent block mb-1">
                    Brands We Supply
                  </span>
                  <span className="text-xs text-brand-gray-light">
                    Pegson &middot; Metso &middot; Terex &middot; Sandvik &middot;
                    McCloskey
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="What We Supply" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,48px)] uppercase tracking-tight text-white mb-12">
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
                  className="group block bg-brand-gray-dark rounded-lg border border-purple/20 overflow-hidden transition-all duration-300 hover:border-purple/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(123,45,142,0.15)]"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg uppercase text-white group-hover:text-purple-accent transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-brand-gray mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-purple-accent mt-4 group-hover:translate-x-1 transition-transform">
                      View Products <ArrowRight className="w-3.5 h-3.5" />
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
                <h2 className="font-heading font-bold text-[clamp(28px,4vw,48px)] uppercase tracking-tight text-white">
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
                <EquipmentCard equipment={item} />
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
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,48px)] uppercase tracking-tight text-white mb-12">
              Our Services
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.06}>
                <div className="group bg-brand-gray-dark rounded-lg border-l-4 border-purple p-6 hover:bg-brand-gray-dark/80 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="font-heading font-bold text-2xl text-purple/40 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-lg uppercase text-white group-hover:text-purple-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-brand-gray mt-2 leading-relaxed">
                        {service.description}
                      </p>
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
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,48px)] uppercase tracking-tight text-white mb-12">
              Trusted by Operations Across the Southeast
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <div className="bg-brand-gray-dark rounded-lg border border-purple/20 p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-purple/30 mb-4 shrink-0" />
                  <p className="text-brand-gray-light italic leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-purple/10">
                    <p className="font-heading font-bold text-sm uppercase text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-brand-gray mt-1">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-dark to-purple" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 22px)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase text-white mb-6">
              Need Screens, Belting, or Parts?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get a fast quote from our team. We stock a wide range of screen media,
              conveyor belting, and crusher wear parts for immediate delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 font-heading font-bold uppercase tracking-wide text-purple-dark rounded-lg bg-white hover:bg-brand-gray-light transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:1-800-234-789"
                className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold uppercase tracking-wide text-white rounded-lg border-2 border-white/30 hover:border-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call 1-800-234-789
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CONTACT PREVIEW ===== */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — contact info */}
            <FadeIn>
              <SectionLabel text="Get In Touch" />
              <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-8">
                Contact Us
              </h2>
              <div className="space-y-5">
                <a
                  href="tel:1-800-234-789"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center group-hover:bg-purple/40 transition-colors">
                    <Phone className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray">Phone</p>
                    <p className="font-heading font-bold text-white">
                      1-800-234-789
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@southernedgescreens.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center group-hover:bg-purple/40 transition-colors">
                    <Mail className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray">Email</p>
                    <p className="font-heading font-bold text-white">
                      info@southernedgescreens.com
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray">Service Area</p>
                    <p className="font-heading font-bold text-white">
                      Southeast United States
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray">Hours</p>
                    <p className="font-heading font-bold text-white">
                      Mon–Fri 7AM – 5PM EST
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right — quick form */}
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
                      className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-brand-gray focus:outline-none focus:border-purple transition-colors">
                    <option value="">What do you need?</option>
                    <option value="screens">Screening Media</option>
                    <option value="belting">Conveyor Belting</option>
                    <option value="parts">Crusher Parts</option>
                    <option value="equipment">Equipment</option>
                    <option value="service">Service / Installation</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors resize-none"
                  />
                  <QuoteButton text="Send Request" className="w-full justify-center" size="lg" />
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
