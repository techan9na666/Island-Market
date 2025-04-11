import Link from 'next/link';

export default function CommunityPage() {
  return (
    <div className="min-h-screen pb-16 bg-white/90">
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Community Hub</h1>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-[var(--primary-green)]">24</h3>
            <p className="text-[var(--text-light)]">Active Events</p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-[var(--primary-green)]">156</h3>
            <p className="text-[var(--text-light)]">Items for Sale</p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-[var(--primary-green)]">42</h3>
            <p className="text-[var(--text-light)]">Local Services</p>
          </div>
          <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-[var(--primary-green)]">89</h3>
            <p className="text-[var(--text-light)]">Community Posts</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Events Section */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-green)]">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold">Farmers Market</h3>
                <p className="text-sm text-[var(--text-light)]">Saturday, 9:00 AM - 2:00 PM</p>
                <p className="text-sm">Local farmers and artisans showcase their products</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold">Cooking Class</h3>
                <p className="text-sm text-[var(--text-light)]">Thursday, 6:00 PM</p>
                <p className="text-sm">Learn to make traditional local dishes</p>
              </div>
              <Link href="/community/events" className="text-[var(--primary-yellow)] hover:text-[var(--accent-orange)]">
                View All Events →
              </Link>
            </div>
          </div>

          {/* Items for Sale */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-green)]">Items for Sale</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold">Vintage Kitchen Table</h3>
                <p className="text-sm text-[var(--text-light)]">$150</p>
                <p className="text-sm">Solid oak, great condition</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold">Garden Tools Set</h3>
                <p className="text-sm text-[var(--text-light)]">$45</p>
                <p className="text-sm">Complete set, barely used</p>
              </div>
              <Link href="/community/items" className="text-[var(--primary-yellow)] hover:text-[var(--accent-orange)]">
                View All Items →
              </Link>
            </div>
          </div>

          {/* Local Services */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-green)]">Local Services</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold">Home Repair</h3>
                <p className="text-sm text-[var(--text-light)]">John's Handyman Services</p>
                <p className="text-sm">Licensed and insured, 20 years experience</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold">Tutoring</h3>
                <p className="text-sm text-[var(--text-light)]">Sarah's Learning Center</p>
                <p className="text-sm">K-12 subjects, flexible scheduling</p>
              </div>
              <Link href="/community/services" className="text-[var(--primary-yellow)] hover:text-[var(--accent-orange)]">
                View All Services →
              </Link>
            </div>
          </div>

          {/* Community Board */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-green)]">Community Board</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold">Looking for Carpool</h3>
                <p className="text-sm text-[var(--text-light)]">Posted 2 days ago</p>
                <p className="text-sm">Need ride to SLC on weekends</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold">Book Club Meeting</h3>
                <p className="text-sm text-[var(--text-light)]">Posted 1 week ago</p>
                <p className="text-sm">Next meeting at the library</p>
              </div>
              <Link href="/community/board" className="text-[var(--primary-yellow)] hover:text-[var(--accent-orange)]">
                View All Posts →
              </Link>
            </div>
          </div>

          {/* Lost & Found */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-green)]">Lost & Found</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold">Lost Dog</h3>
                <p className="text-sm text-[var(--text-light)]">Posted yesterday</p>
                <p className="text-sm">Golden Retriever, last seen near Main St.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold">Found Keys</h3>
                <p className="text-sm text-[var(--text-light)]">Posted 3 days ago</p>
                <p className="text-sm">Set of car keys found in parking lot</p>
              </div>
              <Link href="/community/lost-found" className="text-[var(--primary-yellow)] hover:text-[var(--accent-orange)]">
                View All Posts →
              </Link>
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-green)]">Volunteer</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold">Food Bank Help</h3>
                <p className="text-sm text-[var(--text-light)]">Every Saturday</p>
                <p className="text-sm">Sorting and packing food donations</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold">Park Cleanup</h3>
                <p className="text-sm text-[var(--text-light)]">Next Sunday</p>
                <p className="text-sm">Community park maintenance</p>
              </div>
              <Link href="/community/volunteer" className="text-[var(--primary-yellow)] hover:text-[var(--accent-orange)]">
                View All Opportunities →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 