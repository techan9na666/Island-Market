import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Instagram Embed Script */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-gradient-to-b from-yellow-500/50 to-green-500/50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="float-animation mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Welcome to Island Market
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-6 text-white/95 font-medium">
              A historic grocery store serving Logan, Utah since 1919. 
              Specializing in local craft products, fresh produce, and community service.
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <p className="text-lg text-white font-medium">
                ⭐ Rated 4.7/5 on Google
              </p>
            </div>
            <div className="space-x-4">
              <a
                href="/about"
                className="btn-primary"
              >
                Our History
              </a>
              <a
                href="/products"
                className="btn-secondary"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">Follow Us on Instagram</h2>
            <div className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/theislandmarket/?hl=en"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "100%"
                }}
              ></blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Local Products */}
            <div className="text-center p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Local Craft Products</h3>
              <p className="text-[#7F8C8D]">
                Discover unique local products from Utah's finest craftsmen and artisans.
              </p>
            </div>

            {/* Fresh Produce */}
            <div className="text-center p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Fresh Produce</h3>
              <p className="text-[#7F8C8D]">
                Quality fresh fruits and vegetables sourced from local farmers.
              </p>
            </div>

            {/* Community Focus */}
            <div className="text-center p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF9800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Community First</h3>
              <p className="text-[#7F8C8D]">
                Proudly serving the Logan community for over a century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Hours Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">Store Hours</h2>
            <div className="space-y-2 text-lg text-[#2C3E50]">
              <p>Monday - Thursday: 7:00 AM - 10:00 PM</p>
              <p>Friday - Saturday: 7:00 AM - 11:00 PM</p>
              <p>Sunday: 8:00 AM - 10:00 PM</p>
            </div>
            <div className="mt-8">
              <p className="text-[#2C3E50]">
                We accept SNAP/EBT, credit cards, and debit cards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
