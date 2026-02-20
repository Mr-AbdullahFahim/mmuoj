import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How to', href: '#about' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-transparent rounded-xl flex items-center justify-center">
              <span className="text-white text-xl"><ImageWithFallback src='./../../../assets/logo.png' alt='majlis logo' /></span>
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">MMUoJ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
               <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
                 {link.name}
               </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="#download" className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-sm">
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col px-2 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-100 px-2">
                  <a 
                    href="#download" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors text-center shadow-sm"
                  >
                    Download App
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}