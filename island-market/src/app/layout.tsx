import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Island Market - Logan, Utah",
  description: "A historic grocery store in Logan, Utah, serving the community since 1919. Specializing in local craft products, grocery staples, fresh produce, and fresh local coffee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <ParallaxBackground />
          <div className="relative z-10">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
