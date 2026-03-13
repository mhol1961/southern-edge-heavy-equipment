import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import ProductCategoryCards from "@/components/ProductCategoryCards";

export const metadata: Metadata = {
  title: "Products | Southern Edge Screens & Belting",
  description:
    "Browse our full range of screening media, conveyor belting, crusher parts, and material processing equipment for aggregate, mining, and recycling operations.",
};

const productCategories = [
  {
    title: "Screening Media",
    href: "/screens",
    image: "/images/southernedgescreen2.JPG",
    description:
      "Woven wire, polyurethane, rubber, perforated plate, self-cleaning, and expanded metal screen panels. We supply screening media for every application — from fine sand to heavy aggregate.",
    features: ["Woven Wire Cloth", "Polyurethane Panels", "Rubber Screens", "Perforated Plate", "Self-Cleaning Wire", "Expanded Metal"],
  },
  {
    title: "Conveyor Belting",
    href: "/belting",
    image: "/images/southernedgebelt1.JPG",
    description:
      "Heavy-duty conveyor belts for material processing — chevron, cleated, ribbed, and specialty belts. We stock a wide range of widths and grades for immediate delivery and on-site installation.",
    features: ["Chevron Belts", "Cleated Belts", "Heavy-Duty Rubber", "Specialty Belts", "Splicing & Repair", "Custom Widths"],
  },
  {
    title: "Crusher Parts",
    href: "/parts",
    image: "/images/southernedgescreen4.JPG",
    description:
      "Premium replacement wear parts for all major crusher brands. Jaw plates, blow bars, mantles, concaves, and cheek plates in manganese and high-chrome alloys for maximum wear life.",
    features: ["Jaw Plates", "Blow Bars", "Mantles & Concaves", "Cheek Plates", "Toggle Plates", "OEM & Aftermarket"],
  },
];

const equipmentCategories = [
  { name: "Mobile Crushers", href: "/equipment?category=mobile-crushers", image: "/images/southernedgeheavyequipment2.jpeg" },
  { name: "Screening Plants", href: "/equipment?category=screening-plants", image: "/images/southernedgescreen1.JPG" },
  { name: "Conveyor Systems", href: "/equipment?category=conveyor-systems", image: "/images/southernedgebelt1.JPG" },
  { name: "Processing Machines", href: "/equipment?category=processing-machines", image: "/images/southernedgeequip1.JPG" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        image="/images/southernedgescreen5.jpeg"
        imageAlt="Screen media panels for aggregate and mining applications"
        label="Our Products"
        title="Products"
        subtitle="Screening media, conveyor belting, crusher parts, and complete material processing equipment."
        compact
      />

      {/* Product Category Feature Cards */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Product Lines" />
            <h2 className="font-heading font-bold text-[clamp(32px,4.5vw,56px)] uppercase tracking-tight text-white mb-16">
              What We Supply
            </h2>
          </FadeIn>

          <ProductCategoryCards categories={productCategories} />
        </div>
      </section>

      {/* Equipment Quick Links */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Equipment" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,48px)] uppercase tracking-tight text-white mb-12">
              Browse Equipment by Category
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentCategories.map((cat, i) => (
              <FadeIn key={cat.name} delay={i * 0.08}>
                <Link href={cat.href} className="group block rounded-lg overflow-hidden border border-purple/20 card-hover">
                  <div className="relative h-[200px] img-zoom">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  </div>
                  <div className="relative -mt-6 z-10 px-4 pb-4">
                    <h3 className="font-heading font-bold text-base uppercase text-white group-hover:text-purple-accent transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-dark to-purple" />
        <div className="absolute inset-0 stripe-texture" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase text-white mb-6">
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our team can source any screening media, belting, crusher parts, or equipment you need.
              Contact us for a custom quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 font-heading font-bold uppercase tracking-wide text-purple-dark rounded-lg bg-white hover:bg-brand-gray-light transition-all hover:shadow-lg"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
