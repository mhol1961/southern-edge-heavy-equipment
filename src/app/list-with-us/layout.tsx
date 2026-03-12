import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Your Equipment With Us | Southern Edge Equipment Marketplace",
  description:
    "Sell your heavy equipment through Southern Edge. Submit your crusher, screen, conveyor, or processing machine and reach thousands of buyers across the Southeast.",
  openGraph: {
    title: "List With Us | Southern Edge",
    description: "Sell your equipment through the Southern Edge marketplace.",
  },
};

export default function ListWithUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
