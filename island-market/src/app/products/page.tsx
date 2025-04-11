export default function Products() {
  const categories = [
    {
      title: 'Local Craft Products',
      description: 'Unique items from Utah\'s finest artisans and craftsmen',
      items: ['Handmade Soaps', 'Local Honey', 'Artisan Breads', 'Craft Jams']
    },
    {
      title: 'Fresh Produce',
      description: 'Locally sourced fruits and vegetables',
      items: ['Seasonal Fruits', 'Fresh Vegetables', 'Local Herbs', 'Organic Options']
    },
    {
      title: 'Grocery Staples',
      description: 'Essential items for your daily needs',
      items: ['Dairy Products', 'Bread & Bakery', 'Canned Goods', 'Snacks']
    },
    {
      title: 'Fresh Coffee',
      description: 'Locally roasted coffee and tea selections',
      items: ['Local Roasts', 'Specialty Blends', 'Organic Teas', 'Coffee Accessories']
    }
  ]

  return (
    <div className="min-h-screen bg-white/90">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600">
              Quality local products and everyday essentials
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
            <p className="text-xl text-gray-600 mb-8">
              Come explore our wide selection of products in person. Our staff is always ready to help you find what you need.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 