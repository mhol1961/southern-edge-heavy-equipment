import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import QuoteButton from "@/components/QuoteButton";

const screenTypes = [
  {
    title: "Woven Wire Screens",
    description:
      "Heavy-duty woven wire screen panels available in pre-crimp, lock crimp, and flat-top patterns. High-carbon steel, stainless steel, and specialty alloys. Custom sizes for any screen deck.",
    image: "/images/southernedgescreen1.JPG",
    features: ["Pre-crimped for consistent apertures", "Highest open area available", "Custom sizes in 5-7 days"],
  },
  {
    title: "Polyurethane & Rubber Screens",
    description:
      "Molded polyurethane and rubber screen panels for maximum wear life. Modular designs for quick installation. Up to 50% noise reduction compared to wire.",
    image: "/images/southernedgescreen4.JPG",
    features: ["3-5x longer wear life", "Modular quick-change design", "Noise reduction up to 50%"],
  },
  {
    title: "Perforated Plate",
    description:
      "Heavy-gauge perforated plate screens for the most demanding scalping and classification applications. Round, square, and slotted openings in AR400 and manganese steel.",
    image: "/images/southernedgescreen6.jpeg",
    features: ["Maximum durability", "AR400 and manganese options", "Impact zone rated"],
  },
  {
    title: "Self-Cleaning / Wavy Wire",
    description:
      "Self-cleaning wavy wire screen panels that eliminate blinding in wet, sticky, or clay-bearing materials. The wave pattern creates continuous micro-vibration.",
    image: "/images/southernedgescreen5.jpeg",
    features: ["Eliminates blinding", "Ideal for wet/sticky materials", "Stainless steel available"],
  },
  {
    title: "Expanded Metal",
    description:
      "Expanded metal screen panels with diamond pattern openings. Maximum open area for scalping applications with superior resistance to plugging.",
    image: "/images/southernedgescreen6.jpeg",
    features: ["Up to 80% open area", "Anti-blinding design", "Heavy-duty construction"],
  },
];

const applications = [
  { name: "Quarry & Aggregate", description: "Limestone, granite, basalt, sand & gravel sizing" },
  { name: "Mining", description: "Ore classification, scalping, and dewatering" },
  { name: "Recycling", description: "C&D waste, asphalt, concrete, and glass sorting" },
  { name: "Sand & Gravel", description: "Washed and dry sand classification, oversize removal" },
];

export default function ScreensPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/southernedgescreen2.JPG"
            alt="Screening media installed on screen deck"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
          <div className="absolute inset-0 purple-radial-gradient opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray mb-6">
            <Link href="/" className="hover:text-purple-accent transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-white">Screening Media</span>
          </nav>
          <SectionLabel text="Products" />
          <h1 className="font-heading font-bold text-[clamp(36px,5vw,56px)] uppercase tracking-tight text-white mb-4">
            Screening Media
          </h1>
          <p className="text-lg text-brand-gray max-w-2xl leading-relaxed">
            Complete range of screening media solutions for every application. From woven
            wire to polyurethane, we supply and install the right media to maximize your
            screening efficiency.
          </p>
        </div>
      </section>

      {/* Product sub-categories */}
      <section className="py-24 bg-brand-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Our Screen Media" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-12">
              Screen Media Types
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {screenTypes.map((screen, i) => (
              <FadeIn key={screen.title} delay={i * 0.08}>
                <div className={`group grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={`relative h-[300px] rounded-xl overflow-hidden border border-purple/20 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="font-heading font-bold text-2xl uppercase text-white mb-4">
                      {screen.title}
                    </h3>
                    <p className="text-brand-gray leading-relaxed mb-6">
                      {screen.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {screen.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-brand-gray-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <QuoteButton text="Request Quote" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application guide */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel text="Application Guide" />
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,44px)] uppercase tracking-tight text-white mb-12">
              Which Screen Media for Your Application?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, i) => (
              <FadeIn key={app.name} delay={i * 0.08}>
                <div className="bg-brand-gray-dark rounded-lg border-l-4 border-purple p-6">
                  <h3 className="font-heading font-bold text-lg uppercase text-white mb-2">
                    {app.name}
                  </h3>
                  <p className="text-sm text-brand-gray">{app.description}</p>
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
              Not Sure Which Screen Media You Need?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our team can evaluate your application and recommend the optimal media type. Call
              us or request a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <QuoteButton text="Free Consultation" className="bg-white text-purple-dark hover:bg-brand-gray-light from-white to-white" />
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
