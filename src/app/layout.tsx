import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeeCursor from "@/components/BeeCursor";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bee's Tees — Apparel with Purpose",
  description:
    "Bee-inspired apparel designed to look good, wear well, and support pollinator-positive impact.",
  openGraph: {
    title: "Bee's Tees — Apparel with Purpose",
    description:
      "Bee-inspired apparel designed to look good, wear well, and support pollinator-positive impact.",
    siteName: "Bee's Tees",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <BeeCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
