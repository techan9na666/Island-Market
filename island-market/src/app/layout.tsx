import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarInfo from "@/components/NavbarInfo";
import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Island Market - Logan's Historic Grocery Store",
  description: "A historic grocery store serving Logan, Utah since 1919. Specializing in local craft products, fresh produce, and community service.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <NavbarInfo />
        <div className="pt-6 relative">
          <Navbar />
          <ParallaxBackground />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
