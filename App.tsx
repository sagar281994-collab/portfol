
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Approach from './components/Approach.tsx';
import SuccessStories from './components/SuccessStories.tsx';
import AiAssistant from './components/AiAssistant.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { Theme } from './types.ts';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-500 bg-[#F5F5F7] dark:bg-[#121212] text-[#1D1D1F] dark:text-[#EAEAEA]">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Approach theme={theme} />
          <SuccessStories />
          <AiAssistant theme={theme} />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
