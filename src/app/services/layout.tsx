import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Screen Media, Belt Install, Crusher Parts | Southern Edge",
  description:
    "Full-service support for aggregate and mining operations. Screen media solutions, conveyor belt splicing, crusher wear parts, equipment brokerage, on-site service, and custom fabrication.",
  openGraph: {
    title: "Services | Southern Edge",
    description: "Screen media, belt install, crusher parts, equipment sales, on-site service.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
