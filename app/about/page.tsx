export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our story, our passion, our commitment to excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Founded in 2010, RestaurantName began with a simple vision: to create a dining 
                experience that combines exceptional food with warm hospitality. What started as 
                a small family restaurant has grown into a beloved culinary destination.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Our journey has been driven by a passion for quality ingredients, innovative 
                cooking techniques, and an unwavering commitment to customer satisfaction. Every 
                dish we serve tells a story of tradition, creativity, and dedication.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Today, we continue to honor our roots while embracing new culinary trends. Our 
                team of expert chefs works tirelessly to craft menus that surprise and delight, 
                ensuring that every visit is a memorable experience.
              </p>
            </div>
            <div className="bg-gray-300 dark:bg-gray-700 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Restaurant Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Passion
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We pour our hearts into every dish, creating experiences that touch the soul
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Only the finest ingredients make it to your plate, sourced from trusted suppliers
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Hospitality
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every guest is treated like family, with warmth and genuine care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Chefs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The talented individuals behind our exceptional cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chef 1 */}
            <div className="text-center">
              <div className="bg-gray-300 dark:bg-gray-700 h-64 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Chef Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                John Smith
              </h3>
              <p className="text-orange-500 font-medium mb-2">Executive Chef</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                With 20 years of culinary experience, Chef John brings creativity and expertise to every dish.
              </p>
            </div>

            {/* Chef 2 */}
            <div className="text-center">
              <div className="bg-gray-300 dark:bg-gray-700 h-64 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Chef Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Maria Garcia
              </h3>
              <p className="text-orange-500 font-medium mb-2">Pastry Chef</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Maria's artistic desserts are the perfect ending to any meal, crafted with precision and love.
              </p>
            </div>

            {/* Chef 3 */}
            <div className="text-center">
              <div className="bg-gray-300 dark:bg-gray-700 h-64 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Chef Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                David Chen
              </h3>
              <p className="text-orange-500 font-medium mb-2">Sous Chef</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                David's innovative techniques and attention to detail ensure consistency and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/90">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Expert Staff</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-white/90">Menu Items</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10k+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
