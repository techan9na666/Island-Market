import Image from "next/image";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import MobileTimeline from "@/components/MobileTimeline";

const historicalEvents = [
  {
    year: 1920,
    title: "The Beginning",
    description: "The building that would become Island Market first opened as a butcher's shop, marking the start of its long history serving the Logan community.",
    image: "/images/hansen.png",
    imageAlt: "Hansen Grocery storefront",
    imageCaption: "A 1945 photo of the owners of Hansen Grocery outside their store, which eventually became the Island Market."
  },
  {
    year: 1953,
    title: "A New Era",
    description: "The market underwent significant renovations, expanding its space and modernizing its facilities to better serve the growing community.",
    image: "/images/1953.png",
    imageAlt: "1953 Island Market renovation",
    imageCaption: "A 1953 photo in The Herald Journal picturing the newly-remodeled Island Market, the owners, and the employees."
  },
  {
    year: 1961,
    title: "Joining the IGA",
    description: "The market became a member of the Independent Grocers Association, strengthening its position in the local grocery industry.",
    image: "/images/iga.png",
    imageAlt: "1961 Island Market IGA membership",
    imageCaption: "A 1961 photo of the Island Market showing its membership in the Independent Grocers Association."
  },
  {
    year: 1987,
    title: "Community Spirit",
    description: "Under owner Thomas Duce, the market continued to be a community hub, sponsoring local sports teams and participating in community events.",
    image: "/images/softball.png",
    imageAlt: "Island Market softball team",
    imageCaption: "The Island Market softball team, with Thomas Duce (the store's owner in 1987) on the bottom right."
  },
  {
    year: 2014,
    title: "Modern Storefront",
    description: "The market's exterior was updated while maintaining its historic charm, continuing to serve as a beloved local landmark.",
    image: "/images/island-fall.png",
    imageAlt: "Modern Island Market storefront",
    imageCaption: "The Island Market's modern storefront (2014)."
  },
  {
    year: new Date().getFullYear(),
    title: "Looking Forward",
    description: "Today, Island Market continues to evolve while staying true to its roots, serving as both a grocery store and a community gathering place. We're excited to write the next chapter of our history with you.",
    isModern: true
  }
];

export default function AboutPage() {
  // Sort events in reverse chronological order
  const sortedEvents = [...historicalEvents].sort((a, b) => b.year - a.year);

  return (
    <div className="min-h-screen pb-16 bg-white/90 text-black">
      <div className="container mx-auto px-4 pt-8 md:pt-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl">
            A century of serving the Logan community
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile Timeline */}
          <div className="block md:hidden">
            <MobileTimeline events={sortedEvents} />
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <Timeline events={sortedEvents} />
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-16 text-center">
          <p className="text-sm">
            Historical information and images provided by the{' '}
            <a 
              href="https://library.usu.edu/news/collections/island-market" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-accent-orange"
            >
              Utah State University Library Special Collections & Archives
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
