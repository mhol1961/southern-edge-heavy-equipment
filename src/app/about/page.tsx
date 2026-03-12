import Link from "next/link";
import { ChevronRight, MapPin, Users, Shield, Award } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import QuoteButton from "@/components/QuoteButton";
import PageHero from "@/components/PageHero";

const values = [
  {
    icon: Shield,
    title: "Quality Products",
    description:
      "We only supply products we stand behind. Every screen panel, belt, and wear part meets our rigorous quality standards.",
  },
  {
    icon: Users,
    title: "Expert Knowledge",
    description:
      "Our team brings decades of hands-on experience in aggregate and mining operations. We understand your challenges.",
  },
  {
    icon: Award,
    title: "Fast Turnaround",
    description:
      "We stock common items for same-day shipping and manufacture custom products in 5-7 business days.",
  },
  {
    icon: MapPin,
    title: "Southeast Focus",
    description:
      "We serve the Southeast US exclusively, which means faster delivery and on-site service when you need it.",
  },
];

const brands = [
  "Pegson",
  "Metso",
  "Terex",
  "Sandvik",
  "McCloskey",
  "Cedarapids",
  "Kleemann",
  "Hazemag",
];

const serviceStates = [
  "Alabama",
  "Georgia",
  "Tennessee",
  "Florida",
  "North Carolina",
  "South Carolina",
  "Mississippi",
  "Louisiana",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/southernedgeheavyequipment2.jpeg"
        imageAlt="Pegson XA400S Mobile Jaw Crusher — Southern Edge Equipment"
        label="Our Story"
        title="About Southern Edge"
        subtitle="Your trusted partner for screening media, conveyor belting, and material processing equipment in the Southeast."
        compact
      />

      {/* Story */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel text="Who We Are" />
              <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-6">
                Built on Industry Experience
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Southern Edge Screens & Belting was founded with a simple mission: provide
                  aggregate, mining, and recycling operations with the products and service
                  they need to keep running efficiently.
                </p>
                <p>
                  With over 15 years of experience in the material processing industry, our
                  team understands the challenges you face daily — from worn-out screen
                  media slowing production to emergency belt failures that cost thousands in
                  downtime.
                </p>
                <p>
                  We specialize in screening media, conveyor belting, crusher wear parts,
                  and used equipment sales. Our focus on the Southeast US means we can
                  deliver faster, respond quicker, and provide on-site support when you
                  need it most.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="bg-brand-gray-dark rounded-lg border border-purple/20 p-5 hover:border-purple/50 hover:shadow-[0_0_15px_rgba(123,45,142,0.25)] transition-all"
                  >
                    <v.icon className="w-10 h-10 text-purple-accent mb-3" />
                    <h3 className="font-heading font-bold text-sm uppercase text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-brand-gray leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Brand partnerships */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Our Partners" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-12">
              Brands We Support
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand, i) => (
              <FadeIn key={brand} delay={i * 0.06}>
                <div className="bg-brand-gray-dark rounded-lg border border-purple/20 px-8 py-7 text-center hover:border-purple/50 transition-colors">
                  <span className="font-heading font-bold text-xl uppercase text-brand-white">
                    {brand}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Where We Serve" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-4">
              Service Area
            </h2>
            <p className="text-brand-gray max-w-2xl mb-12">
              We proudly serve aggregate producers, mining operations, and recycling
              facilities across the Southeast United States.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceStates.map((state, i) => (
              <FadeIn key={state} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-brand-gray-dark rounded-lg border border-purple/20 p-4">
                  <MapPin className="w-4 h-4 text-purple shrink-0" />
                  <span className="text-sm text-brand-gray-light">{state}</span>
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
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact our team to discuss your screening, belting, parts, or equipment needs.
            </p>
            <QuoteButton text="Contact Us" className="bg-white text-purple-dark hover:bg-brand-gray-light from-white to-white" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
