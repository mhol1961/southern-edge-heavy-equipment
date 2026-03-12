import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Maintenance Tips, Product Guides & Industry News | Southern Edge",
  description:
    "Industry insights, maintenance guides, and product knowledge for aggregate, mining, and recycling operations. Screen media, crusher parts, conveyor belts, and equipment.",
  openGraph: {
    title: "Blog | Southern Edge",
    description: "Industry insights and maintenance guides for aggregate operations.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
