import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Southern Edge | Screens, Belting, Parts & Material Processing Machines",
  description:
    "Southern Edge Screens & Belting supplies screening media, conveyor belting, crusher parts, and material processing machines to the aggregate, mining, and material processing industries across the Southeast US.",
  keywords: [
    "screening media",
    "conveyor belting",
    "crusher parts",
    "heavy equipment",
    "material processing",
    "aggregate equipment",
    "mining equipment",
    "Southeast US",
  ],
  openGraph: {
    title: "Southern Edge | Screens, Belting, Parts & Material Processing Machines",
    description:
      "Your trusted source for screening media, conveyor belting, crusher parts, and material processing equipment in the Southeast.",
    type: "website",
    locale: "en_US",
    siteName: "Southern Edge Screens & Belting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${oswald.variable} ${inter.variable} font-sans antialiased bg-[#0A0A0A] text-white`}
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Southern Edge Screens & Belting",
            url: "https://southernedgescreens.com",
            logo: "https://southernedgescreens.com/images/southernedgebusinessnameandlogo.png",
            description:
              "Screening media, conveyor belting, crusher parts, and material processing equipment supplier serving the Southeast US.",
            telephone: "1-800-234-789",
            email: "info@southernedgescreens.com",
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: { "@type": "GeoCoordinates", latitude: 33.5, longitude: -86.8 },
              geoRadius: "500 mi",
            },
            sameAs: [
              "https://facebook.com/southernedgescreens",
              "https://instagram.com/southernedgescreens",
              "https://linkedin.com/company/southern-edge-screens",
            ],
          }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
