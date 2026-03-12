import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Southern Edge | Screens, Belting & Parts Supplier",
  description:
    "Southern Edge Screens & Belting serves aggregate, mining, and recycling operations across the Southeast US with 15+ years of industry experience.",
  openGraph: {
    title: "About | Southern Edge",
    description: "Your trusted partner for screening media, belting, and crusher parts.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
