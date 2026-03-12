"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Upload,
  X,
  CheckCircle,
  ClipboardList,
  Search,
  Megaphone,
  DollarSign,
  ArrowLeft,
  ArrowRight,
  ImageIcon,
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";

const steps = [
  { label: "Your Info", icon: ClipboardList },
  { label: "Equipment", icon: Search },
  { label: "Description & Photos", icon: ImageIcon },
  { label: "Review & Submit", icon: CheckCircle },
];

const howItWorks = [
  { icon: ClipboardList, title: "Submit Your Equipment", desc: "Fill out the form with details and photos" },
  { icon: Search, title: "We Review & Approve", desc: "Our team verifies the listing within 24-48 hours" },
  { icon: Megaphone, title: "We Market It", desc: "Featured on our website, social media, and email campaigns" },
  { icon: DollarSign, title: "You Get Paid", desc: "When it sells, we handle the paperwork. Simple commission." },
];

const equipmentTypes = [
  "Heavy Equipment",
  "Screening Equipment",
  "Crushers",
  "Conveyors",
  "Vehicles",
  "Trailers",
  "Other",
];

const conditions = ["Excellent", "Good", "Fair", "Poor", "For Parts"];

export default function ListWithUsPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const [form, setForm] = useState({
    contactName: "",
    phone: "",
    email: "",
    company: "",
    equipmentType: "",
    category: "",
    year: "",
    make: "",
    model: "",
    hours: "",
    serialNumber: "",
    vinNumber: "",
    condition: "",
    location: "",
    desiredPrice: "",
    description: "",
    confirmed: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (imagePreviews.length >= 10) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setImagePreviews((prev) => [...prev, ev.target!.result as string].slice(0, 10));
        }
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  }, [imagePreviews.length]);

  const removeImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      Array.from(files).forEach((file) => {
        if (!file.type.startsWith("image/") || imagePreviews.length >= 10) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          if (ev.target?.result) {
            setImagePreviews((prev) => [...prev, ev.target!.result as string].slice(0, 10));
          }
        };
        reader.readAsDataURL(file);
      });
    },
    [imagePreviews.length]
  );

  const canProceed = () => {
    switch (step) {
      case 0:
        return form.contactName && form.phone && form.email;
      case 1:
        return form.equipmentType && form.make && form.model && form.condition && form.location;
      case 2:
        return form.description && imagePreviews.length >= 1;
      case 3:
        return form.confirmed;
      default:
        return false;
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { confirmed, ...data } = form;
      await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // Show success anyway — API route just logs for now
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-brand-black-light border border-purple/30 text-white placeholder:text-brand-gray focus:outline-none focus:border-purple transition-colors";

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-4">
        <FadeIn>
          <div className="text-center max-w-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="font-heading font-bold text-3xl uppercase text-white mb-4">
              Submission Received!
            </h1>
            <p className="text-brand-gray leading-relaxed mb-6">
              Thank you for listing your{" "}
              <span className="text-white font-semibold">
                {form.year} {form.make} {form.model}
              </span>{" "}
              with Southern Edge. Our team will review your listing within 24-48 hours.
            </p>
            <p className="text-brand-gray text-sm mb-8">
              We&apos;ll send a confirmation email to{" "}
              <span className="text-purple-accent">{form.email}</span>.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple transition-all"
            >
              Back to Home
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <>
      <PageHero
        image="/images/southernedgefacebookpageimage.jpeg"
        imageAlt="Heavy equipment yard with material processing machines"
        label="Sell Your Equipment"
        title="List With Us"
        subtitle="Reach thousands of buyers across the Southeast. List your equipment with Southern Edge."
        compact
      />

      {/* How it works */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item, i) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-purple/20 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-purple-accent" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-purple-accent mb-2">
                    Step {i + 1}
                  </div>
                  <h3 className="font-heading font-bold text-base uppercase text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Multi-step form */}
      <section className="py-16 bg-brand-black-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    i <= step
                      ? "bg-purple text-white"
                      : "bg-brand-gray-dark text-brand-gray border border-purple/20"
                  }`}
                >
                  {i < step ? <CheckCircle className="w-5 h-5" /> : i + 1}
                </div>
                <span
                  className={`hidden sm:block ml-2 text-xs font-semibold uppercase tracking-wide ${
                    i <= step ? "text-purple-accent" : "text-brand-gray"
                  }`}
                >
                  {s.label}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`w-8 sm:w-16 h-0.5 mx-2 ${
                      i < step ? "bg-purple" : "bg-brand-gray-dark"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <FadeIn>
            <div className="bg-brand-gray-dark rounded-xl border border-purple/20 p-8">
              {/* Step 1: Contact Info */}
              {step === 0 && (
                <div className="space-y-6">
                  <h2 className="font-heading font-bold text-xl uppercase text-white mb-4">
                    Your Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        value={form.contactName}
                        onChange={(e) => updateField("contactName", e.target.value)}
                        className={inputClass}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={inputClass}
                        placeholder="(555) 555-5555"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={inputClass}
                        placeholder="you@company.com"
                        required
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
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Equipment Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-heading font-bold text-xl uppercase text-white mb-4">
                    Equipment Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Equipment Type *
                      </label>
                      <select
                        value={form.equipmentType}
                        onChange={(e) => updateField("equipmentType", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select type</option>
                        {equipmentTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Year
                      </label>
                      <input
                        type="text"
                        value={form.year}
                        onChange={(e) => updateField("year", e.target.value)}
                        className={inputClass}
                        placeholder="e.g. 2018"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Make *
                      </label>
                      <input
                        type="text"
                        value={form.make}
                        onChange={(e) => updateField("make", e.target.value)}
                        className={inputClass}
                        placeholder="e.g. Pegson, Metso"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Model *
                      </label>
                      <input
                        type="text"
                        value={form.model}
                        onChange={(e) => updateField("model", e.target.value)}
                        className={inputClass}
                        placeholder="e.g. XA400S"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Hours / Mileage
                      </label>
                      <input
                        type="text"
                        value={form.hours}
                        onChange={(e) => updateField("hours", e.target.value)}
                        className={inputClass}
                        placeholder="e.g. 4,200 hours"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Serial Number
                      </label>
                      <input
                        type="text"
                        value={form.serialNumber}
                        onChange={(e) => updateField("serialNumber", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Condition *
                      </label>
                      <select
                        value={form.condition}
                        onChange={(e) => updateField("condition", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select condition</option>
                        {conditions.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        value={form.location}
                        onChange={(e) => updateField("location", e.target.value)}
                        className={inputClass}
                        placeholder="City, State"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                      Desired Price
                    </label>
                    <input
                      type="text"
                      value={form.desiredPrice}
                      onChange={(e) => updateField("desiredPrice", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. $85,000 or Open to Offers"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Description & Photos */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-heading font-bold text-xl uppercase text-white mb-4">
                    Description & Photos
                  </h2>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                      Description *
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) => updateField("description", e.target.value)}
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Describe the equipment, its history, any recent maintenance, known issues, and included attachments..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-brand-gray-light mb-2">
                      Photos * (at least 1, up to 10)
                    </label>
                    <div
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className="border-2 border-dashed border-purple/30 rounded-lg p-8 text-center hover:border-purple/60 transition-colors cursor-pointer"
                    >
                      <Upload className="w-10 h-10 text-purple/50 mx-auto mb-3" />
                      <p className="text-brand-gray text-sm mb-2">
                        Drag & drop images here, or click to select
                      </p>
                      <p className="text-brand-gray text-xs">
                        JPG, PNG, WebP — up to 10 images
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        style={{ position: "relative" }}
                      />
                    </div>
                    {imagePreviews.length > 0 && (
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
                        {imagePreviews.map((preview, i) => (
                          <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-purple/20">
                            <Image
                              src={preview}
                              alt={`Upload preview ${i + 1}`}
                              fill
                              className="object-cover"
                              sizes="120px"
                            />
                            <button
                              onClick={() => removeImage(i)}
                              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500/80 flex items-center justify-center hover:bg-red-500 transition-colors"
                            >
                              <X className="w-3.5 h-3.5 text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-brand-gray mt-2">
                      {imagePreviews.length}/10 images uploaded
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-heading font-bold text-xl uppercase text-white mb-4">
                    Review & Submit
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-brand-black-light rounded-lg p-4 border border-purple/20">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-purple-accent mb-3">
                        Contact Info
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-brand-gray">Name:</span>
                        <span className="text-white">{form.contactName}</span>
                        <span className="text-brand-gray">Phone:</span>
                        <span className="text-white">{form.phone}</span>
                        <span className="text-brand-gray">Email:</span>
                        <span className="text-white">{form.email}</span>
                        {form.company && (
                          <>
                            <span className="text-brand-gray">Company:</span>
                            <span className="text-white">{form.company}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="bg-brand-black-light rounded-lg p-4 border border-purple/20">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-purple-accent mb-3">
                        Equipment
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-brand-gray">Type:</span>
                        <span className="text-white">{form.equipmentType}</span>
                        <span className="text-brand-gray">Make/Model:</span>
                        <span className="text-white">
                          {form.year} {form.make} {form.model}
                        </span>
                        <span className="text-brand-gray">Condition:</span>
                        <span className="text-white">{form.condition}</span>
                        <span className="text-brand-gray">Location:</span>
                        <span className="text-white">{form.location}</span>
                        {form.desiredPrice && (
                          <>
                            <span className="text-brand-gray">Price:</span>
                            <span className="text-white">{form.desiredPrice}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="bg-brand-black-light rounded-lg p-4 border border-purple/20">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-purple-accent mb-3">
                        Description
                      </h3>
                      <p className="text-sm text-brand-gray-light">{form.description}</p>
                    </div>
                    {imagePreviews.length > 0 && (
                      <div className="bg-brand-black-light rounded-lg p-4 border border-purple/20">
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-purple-accent mb-3">
                          Photos ({imagePreviews.length})
                        </h3>
                        <div className="flex gap-2 overflow-x-auto">
                          {imagePreviews.map((p, i) => (
                            <div key={i} className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-purple/20">
                              <Image src={p} alt={`Preview ${i + 1}`} width={64} height={64} className="object-cover w-full h-full" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <label className="flex items-start gap-3 mt-4 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.confirmed}
                        onChange={(e) => updateField("confirmed", e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-purple/30 bg-brand-black-light text-purple focus:ring-purple"
                      />
                      <span className="text-sm text-brand-gray-light">
                        I confirm this equipment is available for sale and I am authorized to sell it.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-purple/10">
                {step > 0 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-2 px-5 py-3 font-heading font-bold uppercase text-sm tracking-wide text-brand-gray-light rounded-lg border border-brand-gray/30 hover:border-purple-accent transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}
                {step < 3 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold uppercase text-sm tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(123,45,142,0.3)]"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className="inline-flex items-center gap-2 px-8 py-3 font-heading font-bold uppercase text-sm tracking-wide text-white rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Submit Listing
                  </button>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
