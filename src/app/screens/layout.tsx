import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screening Media | Woven Wire, Polyurethane & Rubber Screens | Southern Edge",
  description:
    "Premium screening media for aggregate, mining, and recycling operations. Woven wire, polyurethane, rubber, perforated plate, self-cleaning, and expanded metal screen panels.",
  openGraph: {
    title: "Screening Media | Southern Edge",
    description: "Woven wire, polyurethane, rubber, and specialty screen panels.",
  },
};

export default function ScreensLayout({ children }: { children: React.ReactNode }) {
  return children;
}
