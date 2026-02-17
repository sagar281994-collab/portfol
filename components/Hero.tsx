
import React from 'react';
import { ArrowRight, BrainCircuit, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-20 md:pt-32 md:pb-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] bg-[#007AFF]/10 dark:bg-[#00F5D4]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-[600px] h-[600px] bg-[#00F5D4]/10 dark:bg-[#007AFF]/10 rounded-full blur-[120px] -z-10" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-3/5 z-10 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 mb-8 shadow-sm">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5D4]"></span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Actively Sourcing: Senior AI Researchers
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
            THE HUMAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#00F5D4]">
              ALGORITHM
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
            Expert talent acquisition for the most ambitious AI/ML teams in the world. I don't just fill roles; I engineer breakthroughs.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button className="group px-8 py-5 bg-[#1D1D1F] dark:bg-white text-white dark:text-black font-black rounded-2xl flex items-center justify-center hover:shadow-2xl transition-all">
              Initiate Search
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="hidden sm:flex items-center px-6 py-4 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl">
              <Activity className="w-5 h-5 text-[#00F5D4] mr-3" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-gray-400">Response Rate</p>
                <p className="text-sm font-black">98.4% (Elite)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 relative">
          <div className="relative z-10 p-2 bg-gradient-to-tr from-[#007AFF] to-[#00F5D4] rounded-[3.5rem] shadow-2xl">
            <div className="bg-[#121212] rounded-[3.2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=800&auto=format&fit=crop" 
                alt="Alex Vance" 
                className="w-full h-[550px] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              {/* Glassmorphic overlay */}
              <div className="absolute inset-x-8 bottom-8 p-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#00F5D4] uppercase tracking-widest">Global Status</span>
                  <span className="text-[10px] text-white/50">Online</span>
                </div>
                <p className="text-white font-bold leading-tight">"Securing the builders of Tomorrow's Intelligence."</p>
              </div>
            </div>
          </div>
          
          {/* Visual fluff: geometric accents */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-[#00F5D4]/20 rounded-tr-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-[#007AFF]/20 rounded-bl-3xl" />
        </div>
      </div>

      {/* Trust Ticker */}
      <div className="mt-32 pt-12 border-t border-gray-200 dark:border-zinc-800 overflow-hidden">
        <div className="flex items-center justify-center space-x-12 animate-marquee whitespace-nowrap opacity-40 grayscale filter hover:grayscale-0 transition-all">
          {['DeepMind', 'OpenAI', 'NVIDIA', 'Anthropic', 'Scale AI', 'Mistral', 'Cohere', 'Meta AI'].map((brand, i) => (
            <span key={i} className="text-3xl font-black uppercase tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
