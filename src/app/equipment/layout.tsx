import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment For Sale | Southern Edge Screens & Belting",
  description:
    "Browse our inventory of mobile crushers, screening plants, conveyor systems, and material processing equipment. New and used equipment available across the Southeast US.",
  openGraph: {
    title: "Equipment For Sale | Southern Edge",
    description: "Mobile crushers, screens, conveyors, and processing equipment.",
  },
};

export default function EquipmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
