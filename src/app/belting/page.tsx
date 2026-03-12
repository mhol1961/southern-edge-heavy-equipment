import { Phone, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import QuoteButton from "@/components/QuoteButton";

const beltTypes = [
  {
    title: "Chevron Conveyor Belts",
    description:
      "V-pattern cleated belts for inclined conveying of bulk materials. Prevents material rollback on steep inclines up to 35 degrees. Available in multiple cleat heights and patterns.",
    specs: ["Incline up to 35°", "Cleat heights: 1\" to 2\"", "Widths: 18\" to 72\""],
  },
  {
    title: "Cleated Conveyor Belts",
    description:
      "Molded or welded cleats for positive material control on inclined conveyors. T-cleats, L-cleats, and U-shaped cleats for various applications.",
    specs: ["Multiple cleat profiles", "Custom cleat spacing", "Abrasion-resistant compounds"],
  },
  {
    title: "Heavy-Duty Flat Belts",
    description:
      "Multi-ply EP belts for demanding aggregate and mining applications. Premium rubber compounds offer exceptional cut, gouge, and abrasion resistance.",
    specs: ["2-ply to 6-ply construction", "Grade 1 & Grade 2 covers", "Tensile: 220-660 PIW"],
  },
  {
    title: "Specialty Belts",
    description:
      "Heat-resistant, oil-resistant, fire-resistant, and food-grade belts for specialized applications. Engineered for extreme operating conditions.",
    specs: ["Heat resistant to 400°F", "Oil and chemical resistant", "Fire-resistant (MSHA rated)"],
  },
];

const beltServices = [
  {
    title: "Belt Splicing",
    description: "Hot vulcanized, cold vulcanized, and mechanical fastener splicing by certified technicians.",
  },
  {
    title: "Belt Installation",
    description: "Complete belt installation including tracking, tensioning, and alignment for new and replacement belts.",
  },
  {
    title: "Emergency Replacement",
    description: "24/7 emergency belt repair and replacement to minimize your downtime. Common sizes in stock.",
  },
];

export default function BeltingPage() {
  return (
    <>
      <PageHero
        image="/images/southernedgebelt1.JPG"
        imageAlt="Chevron conveyor belt for material processing"
        label="Products"
        title="Conveyor Belting"
        subtitle="Heavy-duty conveyor belts for aggregate, mining, and material processing — chevron, cleated, and specialty belts."
        compact
      />

      {/* Belt types */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Belt Types" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-12">
              Conveyor Belt Products
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beltTypes.map((belt, i) => (
              <FadeIn key={belt.title} delay={i * 0.08}>
                <div className="bg-brand-gray-dark rounded-lg border border-purple/20 p-6 h-full hover:border-purple/50 transition-colors">
                  <h3 className="font-heading font-bold text-xl uppercase text-white mb-3">
                    {belt.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed mb-4">{belt.description}</p>
                  <ul className="space-y-2">
                    {belt.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-brand-gray-light">
                        <CheckCircle className="w-4 h-4 text-purple shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Belt specs reference */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Reference" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-12">
              Belt Specifications
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-brand-gray-dark rounded-xl border border-purple/20 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple/10">
                <div className="p-6">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-purple-accent mb-4">
                    Common Widths
                  </h3>
                  <ul className="space-y-2 text-sm text-brand-gray-light">
                    {['18"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '72"'].map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-purple-accent mb-4">
                    Ply Ratings
                  </h3>
                  <ul className="space-y-2 text-sm text-brand-gray-light">
                    <li>2-Ply EP (150 PIW)</li>
                    <li>3-Ply EP (220 PIW)</li>
                    <li>4-Ply EP (330 PIW)</li>
                    <li>5-Ply EP (440 PIW)</li>
                    <li>6-Ply EP (660 PIW)</li>
                  </ul>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-purple-accent mb-4">
                    Cover Grades
                  </h3>
                  <ul className="space-y-2 text-sm text-brand-gray-light">
                    <li>Grade 1 — Standard abrasion</li>
                    <li>Grade 2 — High abrasion</li>
                    <li>Grade HI — Heat resistant</li>
                    <li>Grade OR — Oil resistant</li>
                    <li>Grade FR — Fire resistant</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Belt Services" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-12">
              Installation & Service
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beltServices.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="bg-brand-gray-dark rounded-lg border-l-4 border-purple p-6 h-full">
                  <h3 className="font-heading font-bold text-lg uppercase text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{s.description}</p>
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
              Need a Conveyor Belt Quote?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Tell us your belt width, length, and application — we&apos;ll get you a quote
              fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <QuoteButton text="Get Belt Quote" className="bg-white text-purple-dark hover:bg-brand-gray-light from-white to-white" />
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
