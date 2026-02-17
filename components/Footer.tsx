
import React from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-2">
          <Cpu className="w-6 h-6 text-[#007AFF] dark:text-[#00F5D4]" />
          <span className="font-extrabold text-lg tracking-tighter uppercase">
            Alex<span className="text-[#007AFF] dark:text-[#00F5D4]">Vance</span>
          </span>
        </div>

        <div className="flex space-x-8 text-sm text-gray-400">
          <a href="#" className="hover:text-[#007AFF] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#007AFF] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#007AFF] transition-colors">Talent Grid</a>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Vance AI Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
