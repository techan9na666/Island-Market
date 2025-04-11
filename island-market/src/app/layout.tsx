import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Island Market - Logan's Historic Grocery Store",
  description: "A historic grocery store serving Logan, Utah since 1919. Specializing in local craft products, fresh produce, and community service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Navbar />
        <ParallaxBackground />
        {children}
      </body>
    </html>
  );
}
