import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold text-orange-500">GlamCS</h1>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-gray-800 hover:text-orange-500 transition duration-200"
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        >
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="py-2 text-gray-800 hover:text-orange-500 transition duration-200"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;