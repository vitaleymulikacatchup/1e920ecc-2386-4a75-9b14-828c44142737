import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
  ];

  return (
    <>
      {/* Top banner */}
      <div className="bg-apple-gray text-white text-center py-2 px-4 text-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            Виберіть свою країну чи регіон, щоб переглянути контент відповідно до місця вашого перебування.
          </div>
          <div className="flex-1 flex justify-end items-center gap-2">
            <select className="bg-transparent border-none text-white text-sm">
              <option>Україна</option>
            </select>
            <button className="text-white hover:text-gray-300">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Apple logo */}
            <div className="flex-shrink-0">
              <svg className="w-4 h-5 text-white" viewBox="0 0 14 18" fill="currentColor">
                <path d="M12.5 9.5c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9 0-3.6 1.1-4.6 2.7C-3 8.4-.1 13.1 2.3 15.9c1.2 1.4 2.6 2.9 4.5 2.8 1.8-.1 2.5-1.2 4.7-1.2s2.8 1.2 4.7 1.1c1.9-.1 3.2-1.3 4.4-2.7 1.4-1.6 2-3.2 2-3.3-.1 0-3.8-1.5-3.8-5.8zM10.1 2.9c1-1.2 1.7-2.9 1.5-4.6-1.5.1-3.3.9-4.4 2.1-.9 1.1-1.8 2.8-1.6 4.5 1.7.1 3.4-.9 4.5-2z"/>
              </svg>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-300">
                <Search className="w-4 h-4" />
              </button>
              <button className="text-white hover:text-gray-300">
                <ShoppingCart className="w-4 h-4" />
              </button>
              <button 
                className="lg:hidden text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black bg-opacity-95 absolute left-0 right-0 top-full">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-white text-lg hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;