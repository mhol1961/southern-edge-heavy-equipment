import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const productLinks = [
  { label: "Screening Media", href: "/screens" },
  { label: "Conveyor Belting", href: "/belting" },
  { label: "Crusher Parts", href: "/parts" },
  { label: "Mobile Crushers", href: "/equipment?category=mobile-crushers" },
  { label: "Processing Machines", href: "/equipment?category=processing-machines" },
  { label: "Custom Fabrication", href: "/equipment?category=custom-fabrication" },
];

const serviceLinks = [
  { label: "Screen Media Solutions", href: "/services" },
  { label: "Belt Supply & Install", href: "/services" },
  { label: "Crusher Wear Parts", href: "/services" },
  { label: "Equipment Brokerage", href: "/services" },
  { label: "On-Site Service", href: "/services" },
  { label: "List Your Equipment", href: "/list-with-us" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Equipment", href: "/equipment" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Image
              src="/images/southernedgebusinessnameandlogo.png"
              alt="Southern Edge Screens & Belting"
              width={200}
              height={40}
              className="h-10 w-auto mb-5"
            />
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Your trusted source for screening media, conveyor belting, crusher parts,
              and material processing equipment across the Southeast United States.
            </p>
            <div className="space-y-3">
              <a
                href="tel:1-800-234-789"
                className="flex items-center gap-2.5 text-sm text-brand-gray hover:text-purple-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-purple" />
                1-800-234-789
              </a>
              <a
                href="mailto:info@southernedgescreens.com"
                className="flex items-center gap-2.5 text-sm text-brand-gray hover:text-purple-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-purple" />
                info@southernedgescreens.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-brand-gray">
                <MapPin className="w-4 h-4 text-purple" />
                Southeast United States
              </div>
              <div className="flex items-center gap-2.5 text-sm text-brand-gray">
                <Clock className="w-4 h-4 text-purple" />
                Mon–Fri 7AM – 5PM EST
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-base uppercase tracking-wide text-brand-white mb-5">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-gray hover:text-purple-accent transition-colors"
                  >
                    {link.label}
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
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-gray hover:text-purple-accent transition-colors"
                  >
                    {link.label}
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
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-gray hover:text-purple-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray">
            &copy; {new Date().getFullYear()} Southern Edge Screens and Belting, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gray hover:text-purple-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gray hover:text-purple-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gray hover:text-purple-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
