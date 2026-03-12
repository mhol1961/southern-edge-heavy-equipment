"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";

const inquiryTypes = [
  { value: "quote", label: "Quote Request", desc: "General pricing inquiry" },
  { value: "screens", label: "Screen Media", desc: "Woven wire, poly, rubber panels" },
  { value: "belting", label: "Conveyor Belting", desc: "Belt supply, splicing, install" },
  { value: "equipment", label: "Equipment Sales", desc: "Buy or sell equipment" },
  { value: "parts", label: "Crusher Parts", desc: "Jaw plates, blow bars, mantles" },
  { value: "service", label: "Service / Installation", desc: "On-site service and repairs" },
];

const hearAboutOptions = [
  "Google Search",
  "Referral",
  "Social Media",
  "Trade Show",
  "Industry Publication",
  "Other",
];

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageInner />
    </Suspense>
  );
}

function ContactPageInner() {
  const searchParams = useSearchParams();
  const prefilledEquipment = searchParams.get("equipment") || "";

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    inquiryType: prefilledEquipment ? "equipment" : "",
    details: prefilledEquipment ? `Inquiring about: ${prefilledEquipment}` : "",
    name: "",
    email: "",
    phone: "",
    company: "",
    hearAbout: "",
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return form.inquiryType;
      case 1:
        return true;
      case 2:
        return form.name && form.email;
      default:
        return false;
    }
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors";

  return (
    <>
      <PageHero
        image="/images/southernedgeequip1.JPG"
        imageAlt="Material processing equipment at Southern Edge"
        label="Get In Touch"
        title="Contact Us"
        subtitle="Request a quote, ask a question, or schedule a consultation with our team."
        compact
      />

      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — contact info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="space-y-6">
                  <a href="tel:1-800-234-7890" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-xl bg-purple/20 flex items-center justify-center group-hover:bg-purple/40 transition-colors shrink-0">
                      <Phone className="w-6 h-6 text-purple-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">Phone</p>
                      <p className="font-heading font-bold text-xl text-white">1-800-234-7890</p>
                    </div>
                  </a>
                  <a href="mailto:info@southernedgescreens.com" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-xl bg-purple/20 flex items-center justify-center group-hover:bg-purple/40 transition-colors shrink-0">
                      <Mail className="w-6 h-6 text-purple-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">Email</p>
                      <p className="font-heading font-bold text-lg text-white">info@southernedgescreens.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-purple/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-purple-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">Service Area</p>
                      <p className="font-heading font-bold text-lg text-white">Southeast United States</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-purple/20 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-purple-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">Hours</p>
                      <p className="font-heading font-bold text-lg text-white">Mon–Fri 7AM – 5PM EST</p>
                    </div>
                  </div>

                  {/* Service Area Map */}
                  <div className="mt-8 rounded-xl bg-brand-gray-dark border border-purple/20 p-6">
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-purple-accent mb-4">
                      Southeast US Service Area
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Alabama", "Georgia", "Tennessee", "Mississippi", "Florida", "South Carolina", "North Carolina", "Louisiana", "Arkansas", "Kentucky"].map((state) => (
                        <span key={state} className="px-3 py-1.5 text-xs font-sans font-medium text-brand-gray-light bg-purple/10 border border-purple/20 rounded-full">
                          {state}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-brand-gray mt-4">
                      We serve operations throughout the Southeast United States with on-site service available.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — multi-step form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-brand-gray-dark rounded-xl border border-purple/20 p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                      <h2 className="font-heading font-bold text-2xl uppercase text-white mb-4">
                        Message Sent!
                      </h2>
                      <p className="text-brand-gray max-w-md mx-auto mb-2">
                        We typically respond within 24 hours during business days.
                      </p>
                      <p className="text-brand-gray text-sm">
                        For urgent needs, call us directly at{" "}
                        <a href="tel:1-800-234-7890" className="text-purple-accent">
                          1-800-234-7890
                        </a>
                        .
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Step indicator */}
                      <div className="flex items-center gap-2 mb-8">
                        {[0, 1, 2, 3].map((s) => (
                          <div key={s} className="flex items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                                s <= step
                                  ? "bg-purple text-white"
                                  : "bg-brand-black-light text-brand-gray border border-purple/20"
                              }`}
                            >
                              {s < step ? <CheckCircle className="w-4 h-4" /> : s + 1}
                            </div>
                            {s < 3 && (
                              <div
                                className={`w-8 h-0.5 mx-1 ${
                                  s < step ? "bg-purple" : "bg-brand-black-light"
                                }`}
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Step 0: Inquiry type */}
                      {step === 0 && (
                        <div>
                          <h2 className="font-heading font-bold text-xl uppercase text-white mb-6">
                            What can we help with?
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {inquiryTypes.map((type) => (
                              <button
                                key={type.value}
                                onClick={() => updateField("inquiryType", type.value)}
                                className={`text-left p-4 rounded-lg border transition-all ${
                                  form.inquiryType === type.value
                                    ? "border-purple bg-purple/10"
                                    : "border-purple/20 hover:border-purple/50 bg-brand-black-light"
                                }`}
                              >
                                <span className="font-heading font-bold text-sm uppercase text-white block">
                                  {type.label}
                                </span>
                                <span className="text-xs text-brand-gray mt-1 block">
                                  {type.desc}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 1: Details */}
                      {step === 1 && (
                        <div>
                          <h2 className="font-heading font-bold text-xl uppercase text-white mb-6">
                            Tell us more
                          </h2>
                          <textarea
                            value={form.details}
                            onChange={(e) => updateField("details", e.target.value)}
                            rows={6}
                            className={`${inputClass} resize-none`}
                            placeholder={
                              form.inquiryType === "screens"
                                ? "Screen size, mesh opening, wire diameter, material preference, quantity..."
                                : form.inquiryType === "belting"
                                  ? "Belt width, length, profile type (chevron/cleated/flat), ply count..."
                                  : form.inquiryType === "equipment"
                                    ? "Equipment type, condition preference, budget range..."
                                    : form.inquiryType === "parts"
                                      ? "Equipment make/model, part needed, urgency level..."
                                      : "Please describe what you need..."
                            }
                          />
                        </div>
                      )}

                      {/* Step 2: Contact info */}
                      {step === 2 && (
                        <div className="space-y-4">
                          <h2 className="font-heading font-bold text-xl uppercase text-white mb-6">
                            Your Contact Info
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                                Name *
                              </label>
                              <input
                                type="text"
                                value={form.name}
                                onChange={(e) => updateField("name", e.target.value)}
                                className={inputClass}
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                                Email *
                              </label>
                              <input
                                type="email"
                                value={form.email}
                                onChange={(e) => updateField("email", e.target.value)}
                                className={inputClass}
                                required
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                                Phone
                              </label>
                              <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) => updateField("phone", e.target.value)}
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                                Company
                              </label>
                              <input
                                type="text"
                                value={form.company}
                                onChange={(e) => updateField("company", e.target.value)}
                                className={inputClass}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                              How did you hear about us?
                            </label>
                            <select
                              value={form.hearAbout}
                              onChange={(e) => updateField("hearAbout", e.target.value)}
                              className={inputClass}
                            >
                              <option value="">Select...</option>
                              {hearAboutOptions.map((o) => (
                                <option key={o} value={o}>{o}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Confirmation */}
                      {step === 3 && (
                        <div className="space-y-4">
                          <h2 className="font-heading font-bold text-xl uppercase text-white mb-6">
                            Confirm & Send
                          </h2>
                          <div className="bg-brand-black-light rounded-lg p-4 border border-purple/20 space-y-3 text-sm">
                            <div className="flex gap-2">
                              <span className="text-brand-gray min-w-[80px]">Type:</span>
                              <span className="text-white capitalize">{form.inquiryType.replace("-", " ")}</span>
                            </div>
                            {form.details && (
                              <div className="flex gap-2">
                                <span className="text-brand-gray min-w-[80px]">Details:</span>
                                <span className="text-brand-gray-light">{form.details}</span>
                              </div>
                            )}
                            <div className="flex gap-2">
                              <span className="text-brand-gray min-w-[80px]">Name:</span>
                              <span className="text-white">{form.name}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-brand-gray min-w-[80px]">Email:</span>
                              <span className="text-white">{form.email}</span>
                            </div>
                            {form.phone && (
                              <div className="flex gap-2">
                                <span className="text-brand-gray min-w-[80px]">Phone:</span>
                                <span className="text-white">{form.phone}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-brand-gray">
                            We typically respond within 24 hours during business days.
                          </p>
                        </div>
                      )}

                      {/* Navigation */}
                      <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-purple/10">
                        {step > 0 && (
                          <button
                            onClick={() => setStep(step - 1)}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 font-heading font-bold uppercase text-sm text-brand-gray-light rounded-lg border border-brand-gray/30 hover:border-purple-accent transition-colors"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                          </button>
                        )}
                        {step < 3 ? (
                          <button
                            onClick={() => setStep(step + 1)}
                            disabled={!canProceed()}
                            className="w-full inline-flex items-center justify-center gap-2 py-4 font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple hover:shadow-[0_0_20px_rgba(123,45,142,0.3)] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            Continue
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full inline-flex items-center justify-center gap-2 py-4 font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple hover:shadow-[0_0_20px_rgba(123,45,142,0.3)] transition-all disabled:opacity-50"
                          >
                            <Mail className="w-4 h-4" />
                            {loading ? "Sending..." : "Send Message"}
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
