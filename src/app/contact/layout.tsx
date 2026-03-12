import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote | Southern Edge Screens & Belting",
  description:
    "Contact Southern Edge for screening media, conveyor belting, crusher parts, or equipment quotes. Call 1-800-234-789 or fill out our online form. Mon-Fri 7AM-5PM EST.",
  openGraph: {
    title: "Contact | Southern Edge",
    description: "Get a quote for screens, belting, parts, or equipment.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
