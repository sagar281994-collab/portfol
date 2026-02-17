
import React from 'react';
import { Search, ShieldCheck, Zap, Handshake } from 'lucide-react';
import { ApproachStep, Theme } from '../types';

const steps: ApproachStep[] = [
  {
    title: "Deep Strategy",
    description: "We don't start with resumes. We start with your technical roadmap and cultural DNA to define the ideal profile.",
    icon: <Search className="w-10 h-10" />
  },
  {
    title: "Elite Sourcing",
    description: "Accessing the top 1% of passive talent through private networks, academic circles, and high-signal research hubs.",
    icon: <Zap className="w-10 h-10" />
  },
  {
    title: "Rigorous Vetting",
    description: "Multi-stage screening evaluating both theoretical deep learning knowledge and practical engineering maturity.",
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: "Long-term Partnership",
    description: "We stay connected long after the hire to ensure smooth integration and continued strategic team growth.",
    icon: <Handshake className="w-10 h-10" />
  }
];

interface Props {
  theme: Theme;
}

const Approach: React.FC<Props> = ({ theme }) => {
  return (
    <section id="approach" className="py-24 bg-gray-50/50 dark:bg-zinc-900/30 rounded-[4rem] px-8 md:px-16 my-12 border border-gray-100 dark:border-zinc-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">The Methodology</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Recruiting in the AI space requires a nuanced approach that combines deep technical understanding with sophisticated human intuition.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="group relative p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 hover:border-[#007AFF] dark:hover:border-[#00F5D4] transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className={`mb-6 p-4 rounded-2xl inline-block transition-colors duration-500 ${
              idx % 2 === 0 
                ? 'bg-[#007AFF]/10 text-[#007AFF]' 
                : 'bg-[#00F5D4]/10 text-[#00F5D4]'
            }`}>
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            <div className="absolute bottom-4 right-8 text-6xl font-black opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
              0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
