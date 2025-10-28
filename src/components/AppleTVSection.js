import React from 'react';

const AppleTVSection = () => {
  const shows = [
    {
      title: 'LASSO',
      image: '/images/lasso.jpg',
      logo: '/images/lasso-logo.png'
    },
    {
      title: 'THE LAST FRONTIER',
      image: '/images/last-frontier.jpg',
      subtitle: 'Action • 1h 00 min episodes • New episodes Fridays',
      description: 'Watch now'
    },
    {
      title: 'THE MORNING SHOW',
      image: '/images/morning-show.jpg'
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Apple TV+ shows carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* LASSO */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">LASSO</div>
                <div className="flex items-center justify-center space-x-4">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="white">
                    <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-2c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14z"/>
                  </svg>
                  <span className="text-sm">tv+</span>
                </div>
              </div>
            </div>
          </div>

          {/* THE LAST FRONTIER */}
          <div className="relative rounded-2xl overflow-hidden h-96">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-2">THE LAST</div>
                <div className="text-4xl font-bold mb-4">FRONTIER</div>
                <div className="text-xs mb-2">Action • 1h 00 min episodes • New episodes Fridays</div>
                <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                  Watch now
                </button>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 z-20">
              <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-2c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14z"/>
              </svg>
            </div>
          </div>

          {/* THE MORNING SHOW */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-600 to-orange-600 h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-2">THE</div>
                <div className="text-3xl font-bold">MORNING</div>
                <div className="text-3xl font-bold">SHOW</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom shows grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-green-600 rounded-2xl h-48 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-lg font-bold">Severance</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl h-48 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-lg font-bold">Slow Horses</div>
              <div className="text-sm">The Final Season</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl h-48 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-lg font-bold">Silo</div>
            </div>
          </div>
          <div className="bg-purple-600 rounded-2xl h-48 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-lg font-bold">Shrinking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleTVSection;