import Link from "next/link";
import { ChevronRight, Phone, CheckCircle } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import QuoteButton from "@/components/QuoteButton";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-brand-black-light">
        <div className="absolute inset-0 purple-radial-gradient opacity-50" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray mb-6">
            <Link href="/" className="hover:text-purple-accent transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-white">Services</span>
          </nav>
          <SectionLabel text="What We Do" />
          <h1 className="font-heading font-bold text-[clamp(36px,5vw,56px)] uppercase tracking-tight text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-brand-gray max-w-2xl">
            From screen media selection to on-site installation, we provide end-to-end
            support for aggregate, mining, and recycling operations.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <FadeIn key={service.id}>
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-1">
                  <span className="font-heading font-bold text-5xl text-purple/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="font-heading font-bold text-2xl uppercase text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-brand-gray leading-relaxed mb-6 max-w-2xl">
                    {service.description}
                  </p>
                  {service.details && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-brand-gray-light">
                          <CheckCircle className="w-4 h-4 text-purple shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <QuoteButton text="Get a Quote" />
                </div>
              </div>
              {i < services.length - 1 && (
                <div className="border-b border-purple/10 mt-12" />
              )}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-dark to-purple">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-[clamp(28px,4vw,40px)] uppercase text-white mb-4">
              Need Service or Support?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our experienced team is ready to help with your screening, belting, and
              crushing needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <QuoteButton text="Request Service" className="bg-white text-purple-dark hover:bg-brand-gray-light from-white to-white" />
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
