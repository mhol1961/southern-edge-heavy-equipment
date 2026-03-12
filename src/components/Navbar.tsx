"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Equipment", href: "/equipment" },
  {
    label: "Products",
    href: "#",
    children: [
      { label: "Screens & Media", href: "/screens" },
      { label: "Conveyor Belting", href: "/belting" },
      { label: "Crusher Parts", href: "/parts" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "List With Us", href: "/list-with-us" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-purple/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/southernedgebusinessnameandlogo.png"
              alt="Southern Edge Screens & Belting"
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-brand-gray-light hover:text-purple-accent transition-colors">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-brand-black-light/95 backdrop-blur-md border border-purple/20 rounded-lg py-2 min-w-[200px] shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[13px] font-medium text-brand-gray-light hover:text-purple-accent hover:bg-purple/10 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-[13px] font-medium text-brand-gray-light hover:text-purple-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark hover:from-purple-light hover:to-purple transition-all hover:shadow-[0_0_20px_rgba(123,45,142,0.3)]"
            >
              Get a Quote
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-brand-gray-light hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-[#0A0A0A] border-l border-purple/20 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-purple/20">
            <Image
              src="/images/southernedgebusinessnameandlogo.png"
              alt="Southern Edge"
              width={160}
              height={32}
              className="h-8 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-brand-gray hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 py-4 overflow-y-auto">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <span className="block px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-purple-accent">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-8 py-3 text-base font-medium text-brand-gray-light hover:text-purple-accent hover:bg-purple/10 transition-colors min-h-[44px]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-6 py-3 text-base font-medium text-brand-gray-light hover:text-purple-accent hover:bg-purple/10 transition-colors min-h-[44px]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="p-4 border-t border-purple/20">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark py-3 hover:shadow-[0_0_20px_rgba(123,45,142,0.3)] transition-all"
            >
              Get a Quote
            </Link>
            <a
              href="tel:1-800-234-789"
              className="block w-full text-center font-heading font-bold uppercase tracking-wide text-brand-gray-light border border-brand-gray/30 rounded-lg py-3 mt-3 hover:border-purple-accent transition-colors"
            >
              Call 1-800-234-789
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
