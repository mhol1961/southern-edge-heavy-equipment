"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  Share2,
  MapPin,
  Clock,
  Tag,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import EquipmentCard from "@/components/EquipmentCard";
import { equipment } from "@/data/equipment";

const statusColors: Record<string, string> = {
  "in-stock": "bg-green-600/80 text-white",
  available: "bg-purple/80 text-white",
  sold: "bg-brand-gray/60 text-brand-gray-light",
  "coming-soon": "bg-yellow-600/80 text-white",
};

const statusLabels: Record<string, string> = {
  "in-stock": "In Stock",
  available: "Available",
  sold: "Sold",
  "coming-soon": "Coming Soon",
};

export default function EquipmentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = equipment.find((e) => e.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold uppercase text-white mb-4">
            Equipment Not Found
          </h1>
          <Link href="/equipment" className="text-purple-accent hover:text-purple-light">
            &larr; Back to Equipment
          </Link>
        </div>
      </div>
    );
  }

  const related = equipment
    .filter((e) => e.category === item.category && e.id !== item.id)
    .slice(0, 3);

  const handleTellAFriend = () => {
    const subject = encodeURIComponent(`Check out this ${item.name} at Southern Edge`);
    const body = encodeURIComponent(
      `I found this ${item.name} listed at Southern Edge Screens & Belting.\n\nPrice: ${item.price}\nStatus: ${statusLabels[item.status]}\nStock #: ${item.stockNumber}\n\nView it here: ${typeof window !== "undefined" ? window.location.href : ""}\n\nContact Southern Edge at 1-800-234-7890`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-28 pb-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-brand-gray mb-8 flex-wrap">
            <Link href="/" className="hover:text-purple-accent transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/equipment" className="hover:text-purple-accent transition-colors">Equipment</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-gray">{item.category}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-white">{item.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Image gallery */}
            <FadeIn>
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-purple/20">
                  <Image
                    src={item.images[activeImage]}
                    alt={`${item.name} - Image ${activeImage + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {item.listingType === "consignment" && (
                    <Badge className="absolute top-3 left-3 bg-purple/80 text-white border-0 text-xs">
                      Listed by Owner
                    </Badge>
                  )}
                </div>
                {item.images.length > 1 && (
                  <div className="flex gap-3">
                    {item.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          i === activeImage ? "border-purple" : "border-purple/20 hover:border-purple/50"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${item.name} thumbnail ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Equipment info */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge className="bg-purple/20 text-purple-accent border border-purple/30 text-xs">
                      {item.category}
                    </Badge>
                    <Badge className={`${statusColors[item.status]} border-0 text-xs`}>
                      {statusLabels[item.status]}
                    </Badge>
                  </div>
                  <h1 className="font-heading font-bold text-[clamp(28px,4vw,40px)] uppercase tracking-tight text-white">
                    {item.name}
                  </h1>
                </div>

                <div className="font-heading font-bold text-3xl text-purple-light">
                  {item.price}
                </div>

                {/* Quick facts */}
                <div className="grid grid-cols-2 gap-4">
                  {item.manufacturer && (
                    <div className="flex items-center gap-2 text-sm">
                      <Tag className="w-4 h-4 text-purple" />
                      <span className="text-brand-gray">Manufacturer:</span>
                      <span className="text-white">{item.manufacturer}</span>
                    </div>
                  )}
                  {item.stockNumber && (
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple" />
                      <span className="text-brand-gray">Stock #:</span>
                      <span className="text-white">{item.stockNumber}</span>
                    </div>
                  )}
                  {item.year && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-purple" />
                      <span className="text-brand-gray">Year:</span>
                      <span className="text-white">{item.year}</span>
                    </div>
                  )}
                  {item.hours && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-purple" />
                      <span className="text-brand-gray">Hours:</span>
                      <span className="text-white">{item.hours}</span>
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-purple" />
                      <span className="text-brand-gray">Location:</span>
                      <span className="text-white">{item.location}</span>
                    </div>
                  )}
                  {item.condition && (
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple" />
                      <span className="text-brand-gray">Condition:</span>
                      <span className="text-white">{item.condition}</span>
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={`/contact?equipment=${encodeURIComponent(item.name)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple transition-all hover:shadow-[0_0_24px_rgba(123,45,142,0.4)]"
                  >
                    <Mail className="w-4 h-4" />
                    Request Quote
                  </Link>
                  <a
                    href="tel:1-800-234-7890"
                    className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold uppercase tracking-wide text-white rounded-lg border border-brand-gray/30 hover:border-purple-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call About This
                  </a>
                  <button
                    onClick={handleTellAFriend}
                    className="inline-flex items-center gap-2 px-4 py-3 text-sm text-brand-gray hover:text-purple-accent transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Tell a Friend
                  </button>
                </div>

                {/* Description */}
                <div>
                  <h2 className="font-heading font-bold text-lg uppercase text-white mb-3">
                    Description
                  </h2>
                  <p className="text-brand-gray leading-relaxed">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Specs table */}
          {item.specs.length > 0 && (
            <FadeIn>
              <div className="mt-16">
                <h2 className="font-heading font-bold text-xl uppercase text-white mb-6">
                  Specifications
                </h2>
                <div className="bg-brand-gray-dark rounded-xl border border-purple/20 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {item.specs.map((spec, i) => (
                      <div
                        key={i}
                        className={`flex justify-between px-6 py-4 ${
                          i % 2 === 0 ? "bg-brand-gray-dark" : "bg-brand-black-light"
                        } ${i < item.specs.length - 2 ? "border-b border-purple/10" : ""}`}
                      >
                        <span className="text-sm text-brand-gray font-medium">{spec.label}</span>
                        <span className="text-sm text-white font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Inquiry form */}
          <FadeIn>
            <div className="mt-16 bg-brand-gray-dark rounded-xl border border-purple/20 p-8 max-w-2xl">
              <h2 className="font-heading font-bold text-xl uppercase text-white mb-6">
                Inquire About This Equipment
              </h2>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-brand-gray">
                    We&apos;ll get back to you within 24 hours. For urgent inquiries, call{" "}
                    <a href="tel:1-800-234-7890" className="text-purple-accent">
                      1-800-234-7890
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-4">
                  <input type="hidden" value={item.name} />
                  <div className="bg-brand-black-light rounded-lg px-4 py-3 border border-purple/20 text-sm text-brand-gray">
                    Inquiring about: <span className="text-white font-semibold">{item.name}</span>{" "}
                    (Stock #{item.stockNumber})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple"
                  />
                  <textarea
                    placeholder="Questions or comments..."
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple transition-all hover:shadow-[0_0_24px_rgba(123,45,142,0.4)]"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Related equipment */}
          {related.length > 0 && (
            <div className="mt-20">
              <FadeIn>
                <SectionLabel text="Similar Equipment" />
                <h2 className="font-heading font-bold text-2xl uppercase text-white mb-8">
                  Related Equipment
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r, i) => (
                  <FadeIn key={r.id} delay={i * 0.08}>
                    <EquipmentCard equipment={r} />
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
