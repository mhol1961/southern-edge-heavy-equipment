import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conveyor Belting | Chevron, Cleated & Heavy-Duty Belts | Southern Edge",
  description:
    "Conveyor belt supply, splicing, and installation for aggregate and mining operations. Chevron, cleated, heavy-duty, and specialty belts. 24/7 emergency service.",
  openGraph: {
    title: "Conveyor Belting | Southern Edge",
    description: "Conveyor belt supply, splicing, and installation.",
  },
};

export default function BeltingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
