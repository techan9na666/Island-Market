import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Island Market</h3>
            <address className="not-italic">
              <p>400 E Center St</p>
              <p>Logan, UT 84321</p>
              <p className="mt-2">Phone: (435) 752-6220</p>
              <p className="mt-2">Google Rating: 4.7/5</p>
              <p className="mt-2">Payment Methods:</p>
              <ul className="list-disc list-inside text-sm">
                <li>Accepts SNAP/EBT</li>
                <li>Accepts credit cards</li>
                <li>Accepts debit cards</li>
              </ul>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Store Hours</h3>
            <ul className="space-y-2">
              <li>Monday: 7:00 AM - 10:00 PM</li>
              <li>Tuesday: 7:00 AM - 10:00 PM</li>
              <li>Wednesday: 7:00 AM - 10:00 PM</li>
              <li>Thursday: 7:00 AM - 10:00 PM</li>
              <li>Friday: 7:00 AM - 11:00 PM</li>
              <li>Saturday: 7:00 AM - 11:00 PM</li>
              <li>Sunday: 8:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {/* Social Links */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Facebook
            </a>
          </div>
          <p className="text-gray-600">
            © {new Date().getFullYear()} Island Market. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 