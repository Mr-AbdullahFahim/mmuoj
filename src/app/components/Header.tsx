import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center">
              <span className="text-white text-xl"><ImageWithFallback src='./../../../assets/logo.png' alt='majlis logo' /></span>
            </div>
            <span className="text-xl font-semibold text-gray-900">MMUoJ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">About</a>
            <a href="#download" className="text-gray-600 hover:text-emerald-600 transition-colors">Download</a>
            {/* <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a> */}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="#download" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">Features</a>
                <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">About</a>
                <a href="#download" className="text-gray-600 hover:text-emerald-600 transition-colors">Download</a>
                <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a>
                <div className="pt-4 border-t border-gray-100">
                  <a href="#download" className="block px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-center">
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