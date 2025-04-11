import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Island Market"
          fill
          className="object-cover object-top"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight`}>
            Island Market
          </h1>

          {/* Subheading */}
          <p className={`${playfair.className} text-xl md:text-2xl text-white/90 mb-8 italic`}>
            A century of community, tradition, and quality
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Since 1920, we've been more than just a grocery store. We're a gathering place, 
            a supporter of local artisans, and a cornerstone of the Logan community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="px-8 py-3 bg-[var(--primary-yellow)] text-black font-semibold rounded-full hover:bg-[var(--primary-yellow)]/90 transition-colors"
            >
              Shop Local
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <div className="w-4 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
          <span className="text-white/50 text-sm mt-2">Scroll</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </section>
  );
} 