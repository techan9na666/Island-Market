import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Island Market</h3>
            <p className="text-gray-300">
              Serving Logan, Utah since 1919. Your local source for fresh produce, craft products, and community service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>400 E Center St, Logan, UT 84321</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>(435) 555-1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@islandmarket.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Island Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 