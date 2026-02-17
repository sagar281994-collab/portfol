
import React from 'react';
import { Sun, Moon, Cpu } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-200/20 dark:border-white/10 bg-white/70 dark:bg-black/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Cpu className="w-8 h-8 text-[#007AFF] dark:text-[#00F5D4]" />
            <span className="font-extrabold text-xl tracking-tighter uppercase">
              Alex<span className="text-[#007AFF] dark:text-[#00F5D4]">Vance</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-[#007AFF] dark:hover:text-[#00F5D4] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#007AFF] dark:hover:text-[#00F5D4] transition-colors">About</a>
            <a href="#approach" className="hover:text-[#007AFF] dark:hover:text-[#00F5D4] transition-colors">Approach</a>
            <a href="#portfolio" className="hover:text-[#007AFF] dark:hover:text-[#00F5D4] transition-colors">Success Stories</a>
            <a href="#contact" className="hover:text-[#007AFF] dark:hover:text-[#00F5D4] transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all shadow-inner"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-800" />
              ) : (
                <Sun className="w-5 h-5 text-[#FFD700]" />
              )}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-block px-5 py-2.5 bg-[#007AFF] dark:bg-[#00F5D4] text-white dark:text-black font-semibold rounded-full hover:opacity-90 transition-all text-sm uppercase tracking-wide"
            >
              Consult Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
