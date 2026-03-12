import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crusher Parts & Wear Components | Jaw Plates, Blow Bars | Southern Edge",
  description:
    "Premium crusher wear parts for Pegson, Metso, Terex, Sandvik, and McCloskey. Jaw plates, blow bars, mantles, concaves, and cheek plates in manganese and chrome alloys.",
  openGraph: {
    title: "Crusher Parts | Southern Edge",
    description: "Jaw plates, blow bars, mantles, and concaves for all major crusher brands.",
  },
};

export default function PartsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
