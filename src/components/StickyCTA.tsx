"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-brand-black-light/95 backdrop-blur-md border-t border-purple/30 px-4 py-3 flex gap-3">
        <Link
          href="/contact"
          className="flex-1 text-center font-heading font-bold uppercase text-sm tracking-wide text-white rounded-lg bg-gradient-to-r from-purple to-purple-dark py-3 hover:shadow-[0_0_20px_rgba(123,45,142,0.4)] transition-all"
        >
          Get a Quote
        </Link>
        <a
          href="tel:1-800-234-7890"
          className="flex-1 text-center font-heading font-bold uppercase text-sm tracking-wide text-white rounded-lg border border-brand-gray/30 py-3 hover:border-purple-accent transition-colors"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
