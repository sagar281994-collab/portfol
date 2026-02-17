
import React from 'react';
import { Target, Globe, Code2, Cpu, Database, Network } from 'lucide-react';

const About: React.FC = () => {
  const expertises = [
    { name: "Deep Learning", icon: <Cpu className="w-4 h-4" /> },
    { name: "NLP & LLMs", icon: <Code2 className="w-4 h-4" /> },
    { name: "Computer Vision", icon: <Target className="w-4 h-4" /> },
    { name: "Reinforcement Learning", icon: <Network className="w-4 h-4" /> },
    { name: "MLOps", icon: <Database className="w-4 h-4" /> }
  ];

  return (
    <section id="about" className="py-24 border-t border-gray-200 dark:border-zinc-800">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-black mb-8 flex items-center space-x-3">
            <span className="w-12 h-1 bg-gradient-to-r from-[#007AFF] to-[#00F5D4]" />
            <span>THE MISSION</span>
          </h2>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              I don't just fill seats; I build the engines of innovation. Since 2016, I have exclusively focused on the AI ecosystem, witnessing firsthand the evolution from basic neural networks to the generative revolution.
            </p>
            <p>
              My expertise lies at the intersection of <span className="text-black dark:text-white font-bold">technical depth</span> and <span className="text-black dark:text-white font-bold">human intuition</span>. I understand the specific nuances that separate a generic developer from a specialized AI researcher.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {expertises.map((exp, i) => (
              <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-zinc-900 rounded-full border border-gray-200 dark:border-zinc-800 text-xs font-bold text-gray-500 dark:text-gray-400">
                <span className="text-[#00F5D4]">{exp.icon}</span>
                <span>{exp.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800">
              <h4 className="font-black text-3xl mb-1 text-[#007AFF]">150+</h4>
              <p className="text-xs uppercase font-black tracking-widest text-gray-400">Elite Hires</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800">
              <h4 className="font-black text-3xl mb-1 text-[#00F5D4]">Global</h4>
              <p className="text-xs uppercase font-black tracking-widest text-gray-400">Network Reach</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="absolute inset-0 bg-[#007AFF]/10 rounded-[4rem] rotate-6 scale-105 -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&h=1000&auto=format&fit=crop" 
            alt="AI Lab Environment" 
            className="rounded-[4rem] shadow-3xl object-cover h-[600px] w-full mix-blend-luminosity brightness-75 hover:mix-blend-normal transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
