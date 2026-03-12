import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const productLinks = [
  { label: "Screening Media", href: "/screens" },
  { label: "Conveyor Belting", href: "/belting" },
  { label: "Crusher Parts", href: "/parts" },
  { label: "All Products", href: "/products" },
  { label: "Browse Equipment", href: "/equipment" },
  { label: "List Your Equipment", href: "/list-with-us" },
];

const serviceLinks = [
  { label: "Screen Media Solutions", href: "/services" },
  { label: "Belt Supply & Install", href: "/services" },
  { label: "Crusher Wear Parts", href: "/services" },
  { label: "Equipment Brokerage", href: "/services" },
  { label: "On-Site Service", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-purple/20">
      {/* Subtle purple glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Image
              src="/images/southernedgebusinessnameandlogo.png"
              alt="Southern Edge Screens & Belting"
              width={400}
              height={80}
              className="h-[150px] w-auto mb-2"
            />
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.12em] text-brand-gray mb-4">
              Screens, Belting, Parts &amp; Material Processing Machines
            </p>
            <p className="text-[15px] text-brand-gray leading-relaxed mb-6">
              Your trusted source for screening media, conveyor belting, crusher parts,
              and material processing equipment across the Southeast United States.
            </p>
            <div className="space-y-3">
              <a
                href="tel:1-800-234-7890"
                className="flex items-center gap-3 text-sm text-brand-gray-light hover:text-purple-accent transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple/15 group-hover:bg-purple/25 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-purple-accent" />
                </span>
                1-800-234-7890
              </a>
              <a
                href="mailto:info@southernedgescreens.com"
                className="flex items-center gap-3 text-sm text-brand-gray-light hover:text-purple-accent transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple/15 group-hover:bg-purple/25 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-purple-accent" />
                </span>
                info@southernedgescreens.com
              </a>
              <div className="flex items-center gap-3 text-sm text-brand-gray">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple/15">
                  <MapPin className="w-3.5 h-3.5 text-purple-accent" />
                </span>
                Southeast United States
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-gray">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple/15">
                  <Clock className="w-3.5 h-3.5 text-purple-accent" />
                </span>
                Mon–Fri 7AM – 5PM EST
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-base uppercase tracking-wide text-brand-white mb-5">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-brand-gray hover:text-purple-accent transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-accent" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-base uppercase tracking-wide text-brand-white mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-brand-gray hover:text-purple-accent transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-accent" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-base uppercase tracking-wide text-brand-white mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-brand-gray hover:text-purple-accent transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-accent" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="mt-8">
              <h3 className="font-heading font-bold text-base uppercase tracking-wide text-brand-white mb-4">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gray-dark border border-purple/20 text-brand-gray hover:text-purple-accent hover:border-purple/60 hover:shadow-[0_0_15px_rgba(123,45,142,0.2)] transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gray-dark border border-purple/20 text-brand-gray hover:text-purple-accent hover:border-purple/60 hover:shadow-[0_0_15px_rgba(123,45,142,0.2)] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gray-dark border border-purple/20 text-brand-gray hover:text-purple-accent hover:border-purple/60 hover:shadow-[0_0_15px_rgba(123,45,142,0.2)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray">
            &copy; {new Date().getFullYear()} Southern Edge Screens and Belting, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-brand-gray">
            <Link href="/contact" className="hover:text-purple-accent transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-purple-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
