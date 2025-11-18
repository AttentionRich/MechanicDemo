import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg shadow-red-600/20' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img
                src="/Logo G Mechanic.png"
                alt="Inter Cars Garage Ltd"
                className="h-7 md:h-10 w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-white hover:text-red-600 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <Link
                to="/booking"
                className="text-white hover:text-red-600 transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
              <a
                href="tel:0871712185"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <Phone size={18} />
                087 171 2185
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              to="/"
              className="text-white text-xl font-medium hover:text-red-600 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/booking"
              className="text-white text-xl font-medium hover:text-red-600 transition-colors duration-300"
            >
              Contact
            </Link>
            <a
              href="tel:0871712185"
              className="flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300"
            >
              <Phone size={24} />
              087 171 2185
            </a>
          </div>
        </div>
      )}
    </>
  );
}
