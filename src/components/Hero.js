import React from 'react';

const Hero = () => {
  return (
    <section className="product-section bg-black text-white relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="product-title text-white mb-2">
          iPhone 17 Pro
        </h1>
        <p className="product-subtitle text-gray-300 mb-8">
          All out Pro.
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
      
      {/* iPhone image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto mt-20">
          <div className="relative">
            {/* iPhone body */}
            <div className="w-80 h-96 mx-auto bg-gradient-to-b from-orange-400 to-orange-600 rounded-3xl shadow-2xl transform perspective-1000 rotate-x-12">
              {/* Camera module */}
              <div className="absolute top-6 left-6 w-32 h-20 bg-orange-500 rounded-2xl shadow-lg">
                {/* Camera lenses */}
                <div className="absolute top-2 left-2 w-6 h-6 bg-black rounded-full shadow-inner"></div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-black rounded-full shadow-inner"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-black rounded-full shadow-inner"></div>
                {/* Flash */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-white rounded-full opacity-90"></div>
                {/* Microphone */}
                <div className="absolute top-8 right-6 w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;