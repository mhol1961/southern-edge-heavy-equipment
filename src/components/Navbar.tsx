"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Equipment", href: "/equipment" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Screening Media", href: "/screens" },
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (href: string, children?: { href: string }[]) => {
    if (href === "/") return pathname === "/";
    if (pathname.startsWith(href)) return true;
    if (children?.some((c) => pathname.startsWith(c.href))) return true;
    return false;
  };

  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Compact mode when scrolled past the hero area
      setCompact(y > 300);
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-purple/20 shadow-lg shadow-black/30"
          : "bg-[#0A0A0A]/60 backdrop-blur-sm"
      }`}
    >
      <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${compact ? "h-[100px]" : "h-[160px]"}`}>
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/southernedgebusinessnameandlogo.png"
            alt="Southern Edge Screens & Belting"
            width={500}
            height={100}
            className={`w-auto transition-all duration-300 ${compact ? "h-[90px]" : "h-[150px]"}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-sans font-semibold uppercase tracking-[0.04em] hover:text-purple-accent transition-colors whitespace-nowrap ${isActive(link.href, link.children) ? "text-purple-accent" : "text-brand-gray-light"}`}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </Link>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-[#0A0A0A]/95 backdrop-blur-xl border border-purple/30 rounded-lg py-2 min-w-[220px] shadow-2xl shadow-purple/10">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 px-5 py-3 text-[13px] font-sans font-medium text-brand-gray-light hover:text-white hover:bg-purple/10 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-accent/50" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[13px] font-sans font-semibold uppercase tracking-[0.04em] hover:text-purple-accent transition-colors whitespace-nowrap ${isActive(link.href) ? "text-purple-accent" : "text-brand-gray-light"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Phone + CTA */}
        <div className="flex items-center gap-6 shrink-0">
          <a
            href="tel:1-800-234-7890"
            className="hidden xl:inline-flex items-center gap-2.5 px-5 py-2.5 text-[16px] font-sans font-semibold text-white rounded-lg border border-brand-gray/30 hover:border-purple-accent hover:text-purple-accent transition-all whitespace-nowrap"
          >
            <Phone className="w-5 h-5 text-purple-accent" />
            1-800-234-7890
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-8 py-3 text-[16px] font-heading font-bold uppercase tracking-[0.05em] text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark border border-white/15 hover:from-purple-light hover:to-purple transition-all hover:shadow-[0_0_20px_rgba(123,45,142,0.4)] whitespace-nowrap"
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
              width={300}
              height={60}
              className="h-10 w-auto"
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
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-purple-accent"
                  >
                    {link.label}
                  </Link>
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
                  className={`flex items-center px-6 py-3 text-base font-medium hover:text-purple-accent hover:bg-purple/10 transition-colors min-h-[44px] ${isActive(link.href) ? "text-purple-accent bg-purple/5" : "text-brand-gray-light"}`}
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
              className="block w-full text-center font-heading font-bold uppercase tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark border border-white/15 py-3 hover:shadow-[0_0_20px_rgba(123,45,142,0.4)] transition-all"
            >
              Get a Quote
            </Link>
            <a
              href="tel:1-800-234-7890"
              className="flex items-center justify-center gap-2 w-full text-center font-heading font-bold uppercase tracking-wide text-brand-gray-light border border-brand-gray/30 rounded-lg py-3 mt-3 hover:border-purple-accent hover:text-purple-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call 1-800-234-7890
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
