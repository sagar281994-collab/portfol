
import React from 'react';
import { SuccessStory } from '../types';
import { ExternalLink, TrendingUp } from 'lucide-react';

const stories: SuccessStory[] = [
  {
    id: '1',
    role: "Director of AI Research",
    client: "Stealth-Mode Unicorn",
    category: "Startup",
    challenge: "Client needed a visionary leader to transition from theoretical models to production-ready GenAI infrastructure.",
    result: "Sourced a world-class researcher from a FAANG lab within 45 days. Lead to a $200M Series B funding round.",
    imageUrl: "https://picsum.photos/seed/story1/600/400"
  },
  {
    id: '2',
    role: "Lead Machine Learning Engineer",
    client: "Fortune 500 Automotive",
    category: "Fortune 500",
    challenge: "Scaling an autonomous driving unit with specific expertise in computer vision and real-time edge processing.",
    result: "Placed 3 key hires who built the core perception engine now shipping in over 500,000 vehicles annually.",
    imageUrl: "https://picsum.photos/seed/story2/600/400"
  },
  {
    id: '3',
    role: "Head of Data Science",
    client: "Series C FinTech",
    category: "Scale-up",
    challenge: "Revolutionizing fraud detection through graph neural networks while maintaining regulatory compliance.",
    result: "Reduced false positives by 40% in the first 6 months, saving the client an estimated $12M in operational costs.",
    imageUrl: "https://picsum.photos/seed/story3/600/400"
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Success Stories</h2>
          <p className="text-gray-500 max-w-xl">
            A selection of key placements that have fundamentally shifted the technological trajectory of our clients.
          </p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 border border-gray-200 dark:border-zinc-800 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all font-semibold">
          <span>View All Cases</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.id} className="group bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={story.imageUrl} 
                alt={story.role} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest border border-white/20">
                {story.category}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#00F5D4]" />
                <h3 className="text-xl font-bold">{story.role}</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Challenge</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{story.challenge}"</p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-zinc-800">
                <h4 className="text-xs font-black text-[#007AFF] dark:text-[#00F5D4] uppercase tracking-widest mb-2">The Impact</h4>
                <p className="text-sm font-medium leading-relaxed">{story.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
