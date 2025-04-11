import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/about-hero.jpeg"
          alt="Island Market Historic Building"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/10 bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our History
            </h1>
            <p className="text-xl">
              Serving Logan, Utah since 1919
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">1919</h2>
              <p className="text-gray-600">
                The building housing Island Market was first constructed, marking the beginning of our story in Logan, Utah.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1920</h2>
              <p className="text-gray-600">
                The building briefly served as a butcher shop, establishing its roots in food service for the community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Post-1920</h2>
              <p className="text-gray-600">
                The building has operated nearly continuously as a corner grocery store, with only brief interruptions for renovations and during the Great Depression.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1982</h2>
              <p className="text-gray-600">
                The store adopted the name "Island Market" for the second time in its history, and the name has remained ever since.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Present Day</h2>
              <p className="text-gray-600">
                Island Market continues to serve as a vital part of the Logan community, specializing in local craft products, grocery staples, fresh produce, and fresh local coffee. We're currently working with Utah State University to document our rich history in detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600">
              To continue our century-long tradition of serving the Logan community with quality products, exceptional service, and a commitment to local partnerships.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
