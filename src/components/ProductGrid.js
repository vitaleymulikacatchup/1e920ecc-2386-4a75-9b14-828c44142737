import React from 'react';

const ProductGrid = () => {
  return (
    <div className="bg-white">
      {/* iPhone Air Section */}
      <section className="product-section bg-apple-light-gray text-black">
        <div className="relative z-10">
          <h2 className="product-title text-black mb-2">
            iPhone Air
          </h2>
          <p className="product-subtitle text-gray-600 mb-4">
            The thinnest iPhone ever.
          </p>
          <p className="product-subtitle text-gray-600 mb-8">
            With the power of pro inside.
          </p>
          <div className="product-buttons">
            <button className="apple-button-primary">
              Learn more
            </button>
            <button className="apple-button-secondary">
              Buy
            </button>
          </div>
        </div>
        
        {/* iPhone Air image */}
        <div className="relative mt-12">
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Hand holding iPhone */}
              <div className="w-96 h-64 relative">
                {/* iPhone */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-4 bg-gray-300 rounded-full shadow-lg">
                  {/* Side buttons */}
                  <div className="absolute -left-1 top-1/4 w-1 h-2 bg-gray-400 rounded-l"></div>
                  <div className="absolute -left-1 top-1/2 w-1 h-3 bg-gray-400 rounded-l"></div>
                  <div className="absolute -right-1 top-1/3 w-1 h-4 bg-gray-400 rounded-r"></div>
                </div>
                {/* Hand */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-32 h-24 bg-gradient-to-l from-amber-100 to-amber-200 rounded-l-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Pro Section */}
      <section className="product-section bg-black text-white">
        <div className="relative z-10">
          <h2 className="product-title text-white mb-2">
            MacBook Pro 14"
          </h2>
          <p className="product-subtitle text-gray-300 mb-8">
            Supercharged by M5.
          </p>
          <div className="product-buttons">
            <button className="apple-button-primary">
              Learn more
            </button>
            <button className="apple-button-secondary bg-transparent border-white text-white hover:bg-white hover:text-black">
              Buy
            </button>
          </div>
        </div>
        
        {/* MacBook image */}
        <div className="relative mt-12">
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* MacBook */}
              <div className="w-96 h-64 relative">
                {/* MacBook base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-4 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg shadow-2xl"></div>
                {/* MacBook screen */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-48 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-lg shadow-2xl">
                  {/* Screen bezel */}
                  <div className="absolute inset-2 bg-black rounded-t-lg"></div>
                  {/* Apple logo */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-10 text-gray-600" viewBox="0 0 14 18" fill="currentColor">
                      <path d="M12.5 9.5c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9 0-3.6 1.1-4.6 2.7C-3 8.4-.1 13.1 2.3 15.9c1.2 1.4 2.6 2.9 4.5 2.8 1.8-.1 2.5-1.2 4.7-1.2s2.8 1.2 4.7 1.1c1.9-.1 3.2-1.3 4.4-2.7 1.4-1.6 2-3.2 2-3.3-.1 0-3.8-1.5-3.8-5.8zM10.1 2.9c1-1.2 1.7-2.9 1.5-4.6-1.5.1-3.3.9-4.4 2.1-.9 1.1-1.8 2.8-1.6 4.5 1.7.1 3.4-.9 4.5-2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Apple Watch */}
        <section className="product-section bg-apple-light-gray text-black min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              WATCH SERIES 11
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              The ultimate way to watch your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
          
          {/* Watch image */}
          <div className="relative mt-8">
            <div className="flex items-center justify-center">
              <div className="w-48 h-48 relative">
                {/* Watch body */}
                <div className="w-32 h-40 mx-auto bg-gradient-to-b from-pink-200 to-pink-300 rounded-3xl shadow-lg">
                  {/* Watch screen */}
                  <div className="absolute inset-2 bg-black rounded-3xl">
                    {/* Activity rings */}
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-4 border-red-500 rounded-full" style={{clipPath: 'polygon(0 0, 70% 0, 70% 100%, 0 100%)'}}></div>
                        <div className="absolute inset-1 border-4 border-green-500 rounded-full" style={{clipPath: 'polygon(0 0, 85% 0, 85% 100%, 0 100%)'}}></div>
                        <div className="absolute inset-2 border-4 border-blue-500 rounded-full" style={{clipPath: 'polygon(0 0, 60% 0, 60% 100%, 0 100%)'}}></div>
                      </div>
                    </div>
                  </div>
                  {/* Digital Crown */}
                  <div className="absolute -right-1 top-8 w-2 h-4 bg-pink-400 rounded-r"></div>
                  {/* Side button */}
                  <div className="absolute -right-1 top-16 w-2 h-2 bg-pink-400 rounded-r"></div>
                </div>
                {/* Watch band */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-56 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* iPad Pro */}
        <section className="product-section bg-black text-white min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              iPad Pro
            </h2>
            <p className="text-lg md:text-xl mb-4 text-gray-300">
              Advanced M-performance.
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              All game-changing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary bg-transparent border-white text-white hover:bg-white hover:text-black">
                Buy
              </button>
            </div>
          </div>
          
          {/* iPad image */}
          <div className="relative mt-8">
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* iPad stack effect */}
                <div className="relative">
                  <div className="w-48 h-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform rotate-2"></div>
                  <div className="absolute top-0 w-48 h-64 bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl shadow-2xl transform -rotate-1"></div>
                  <div className="absolute top-0 w-48 h-64 bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl shadow-2xl">
                    {/* Screen */}
                    <div className="absolute inset-2 bg-black rounded-xl">
                      {/* Colorful lines representing content */}
                      <div className="absolute top-4 left-4 right-4 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute top-8 left-4 right-8 h-1 bg-green-500 rounded"></div>
                      <div className="absolute top-12 left-4 right-6 h-1 bg-yellow-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AirPods Pro 3 */}
        <section className="product-section bg-apple-light-gray text-black min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              AirPods Pro 3
            </h2>
            <p className="text-lg md:text-xl mb-4 text-gray-600">
              The world's best in-ear
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              Active Noise Cancellation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* MacBook Air */}
        <section className="product-section bg-apple-light-gray text-black min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              MacBook Air
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              Sky high performance with M4.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* Trade In */}
        <section className="product-section bg-apple-light-gray text-black min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              Trade In
            </h2>
            <p className="text-lg md:text-xl mb-4 text-gray-600">
              Get $200-$800
            </p>
            <p className="text-lg md:text-xl mb-4 text-gray-600">
              in credit when you trade in
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              iPhone 15 or higher.*
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* Apple Card */}
        <section className="product-section bg-apple-light-gray text-black min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              Card
            </h2>
            <p className="text-lg md:text-xl mb-4 text-gray-600">
              Get up to 3% Daily Cash back
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              with every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Apply now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductGrid;