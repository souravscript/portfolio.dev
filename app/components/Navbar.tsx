import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '@/app/components/ThemeToggle'
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = ['Home', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <span className="text-2xl font-bold text-gray-800 dark:text-dark-50">Portfolio</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-50 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links and Theme Toggle */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-4"
          >
            <ThemeToggle />
            <a href="https://github.com/souravscript" className="text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-50">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shivam-sourav-305132168/" className="text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-50">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@email.com" className="text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-50">
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-50 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;