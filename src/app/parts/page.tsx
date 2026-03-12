import { Phone, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import QuoteButton from "@/components/QuoteButton";

const partTypes = [
  {
    title: "Jaw Plates",
    description:
      "Fixed and swing jaw crusher plates in 14% and 18% manganese steel. Optimized tooth profiles for maximum throughput and wear life. Available for all major jaw crusher makes.",
    manufacturers: ["Pegson", "Metso", "Terex", "Sandvik", "McCloskey"],
  },
  {
    title: "Blow Bars",
    description:
      "Impact crusher blow bars in chrome iron, martensitic steel, and ceramic-composite materials. Balanced for smooth operation and consistent product shape.",
    manufacturers: ["Metso", "Terex", "McCloskey", "Hazemag"],
  },
  {
    title: "Mantles & Concaves",
    description:
      "Cone crusher mantle and bowl liner sets in premium manganese steel. Precision-cast profiles for optimal crushing chamber geometry and production.",
    manufacturers: ["Metso HP Series", "Sandvik CH/CS", "Terex/Cedarapids"],
  },
  {
    title: "Cheek Plates",
    description:
      "Jaw crusher side plates (cheek plates) in manganese and chrome-moly alloys. Protect the crusher frame from wear and maintain chamber geometry.",
    manufacturers: ["All major brands"],
  },
  {
    title: "Toggle Plates",
    description:
      "Jaw crusher toggle plates designed to fail safely under overload conditions, protecting the crusher frame and bearings from damage.",
    manufacturers: ["All major brands"],
  },
  {
    title: "Wear Liners",
    description:
      "Chute liners, hopper liners, and feed box liners in AR400, AR500, chromium carbide overlay, and ceramic tile. Protect your equipment from abrasive wear.",
    manufacturers: ["Custom fabrication available"],
  },
];

const supportedBrands = [
  "Pegson",
  "Metso",
  "Terex",
  "Sandvik",
  "McCloskey",
  "Cedarapids",
  "Hazemag",
  "Kleemann",
];

export default function PartsPage() {
  return (
    <>
      <PageHero
        image="/images/southernedgescreen4.JPG"
        imageAlt="Jaw crusher interior with manganese wear plates"
        label="Products"
        title="Crusher Parts"
        subtitle="Premium replacement wear parts for all major crusher brands — jaw plates, blow bars, mantles, and concaves."
        compact
      />

      {/* Part types */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Wear Parts" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-12">
              Crusher Wear Parts
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partTypes.map((part, i) => (
              <FadeIn key={part.title} delay={i * 0.08}>
                <div className="bg-brand-gray-dark rounded-lg border border-purple/20 p-6 h-full hover:border-purple/50 transition-colors">
                  <h3 className="font-heading font-bold text-xl uppercase text-white mb-3">
                    {part.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed mb-4 text-sm">
                    {part.description}
                  </p>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-purple-accent">
                      Fits:
                    </span>
                    <p className="text-xs text-brand-gray-light mt-1">
                      {part.manufacturers.join(" • ")}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Supported brands */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Compatibility" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-12">
              Manufacturers Supported
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportedBrands.map((brand, i) => (
              <FadeIn key={brand} delay={i * 0.06}>
                <div className="bg-brand-gray-dark rounded-lg border border-purple/20 p-6 text-center hover:border-purple/50 transition-colors">
                  <span className="font-heading font-bold text-lg uppercase text-brand-white">
                    {brand}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-dark to-purple">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,40px)] uppercase text-white mb-4">
              Need Crusher Parts?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Tell us your crusher make and model — we&apos;ll cross-reference and quote the
              right parts. Common sizes in stock for same-day shipping.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <QuoteButton text="Get Parts Quote" className="bg-white text-purple-dark hover:bg-brand-gray-light from-white to-white" />
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
    </>
  );
}
