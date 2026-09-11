import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Chico Scissor Sharpener | The Best Shear & Scissor Sharpener in Chico, CA",
    template: "%s | Chico Scissor Sharpener",
  },
  description:
    "Expert scissor and shear sharpening services for barbers and salons in Chico, CA. Precision sharpening, quick turnaround, satisfaction guaranteed.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Chico Scissor Sharpener",
  description:
    "Expert scissor and shear sharpening services for barbers and salons in Chico, CA.",
  url: "https://chicoscissorsharpener.com",
  telephone: "+1-530-444-1534",
  email: "info@chicoscissorsharpener.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1350 Mangrove #155",
    addressLocality: "Chico",
    addressRegion: "CA",
    postalCode: "95926",
    addressCountry: "US",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* RFM site data - pushed before GTM loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  rfm: {
    schema_version: "1.0",
    site_id: "chico_scissors_sharpener",
    provider_id: "a7709388-501b-4640-9ade-2950c27e4943",
    provider_name: "Chico Scissor Sharpener",
    service_category: "scissor_sharpening",
    market: "chico"
  }
});`,
          }}
        />
      </head>
      <body className={`${openSans.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
