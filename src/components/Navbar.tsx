import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif">
          A<span className="text-orange-600">dicontec</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link
                to="/products"
                className={`font-medium transition-colors ${
                  isActive('/products')
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/spices"
                className={`font-medium transition-colors ${
                  isActive('/spices')
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Especiarias
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50`}
        >
          <ul className="py-4 px-4 space-y-4">
            <li>
              <Link
                to="/products"
                onClick={toggleMenu}
                className={`block font-medium transition-colors ${
                  isActive('/products')
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/spices"
                onClick={toggleMenu}
                className={`block font-medium transition-colors ${
                  isActive('/spices')
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Especiarias
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`block font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
