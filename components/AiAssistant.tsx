
import React, { useState } from 'react';
import { Sparkles, Bot, Loader2, ExternalLink, Globe } from 'lucide-react';
import { getTalentAdvice, TalentAdviceResponse } from '../services/geminiService.ts';
import { Theme } from '../types.ts';

interface Props {
  theme: Theme;
}

const AiAssistant: React.FC<Props> = ({ theme }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<TalentAdviceResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const data = await getTalentAdvice(input);
    setResult(data);
    setIsLoading(false);
  };

  const suggestions = [
    "What is the average TC for a Staff MLE in London?",
    "Which AI startups are hiring heavily in 2025?",
    "How to vet for real-world RL experience?",
  ];

  return (
    <section className="py-24">
      <div className="relative bg-[#0A0A0B] dark:bg-[#050505] rounded-[3.5rem] p-8 md:p-16 overflow-hidden border border-[#00F5D4]/20 shadow-[0_0_80px_rgba(0,245,212,0.08)]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00F5D4 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="w-14 h-14 bg-[#00F5D4]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#00F5D4]/30">
              <Bot className="w-7 h-7 text-[#00F5D4]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Talent <span className="text-[#00F5D4]">Oracle</span> <br />
              <span className="text-2xl font-medium text-gray-400">Real-time Sourcing Intelligence</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Ask about market rates, tech stack shifts, or geographic talent density. Powered by the latest global market data.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {suggestions.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => setInput(s)}
                  className="text-xs font-semibold px-3 py-2 bg-zinc-900 text-gray-300 hover:text-[#00F5D4] border border-zinc-800 rounded-lg transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <form onSubmit={handleAsk} className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the market oracle..."
                className="w-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-white rounded-2xl pl-6 pr-32 py-5 focus:outline-none focus:border-[#00F5D4] transition-all"
              />
              <button 
                disabled={isLoading}
                className="absolute right-2 top-2 bottom-2 bg-[#00F5D4] text-black font-bold px-6 rounded-xl flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              </button>
            </form>

            {result && (
              <div className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl border border-zinc-800 p-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00F5D4]">Alex Vance AI Insights</span>
                </div>
                <p className="text-gray-300 leading-relaxed font-mono text-sm mb-6">
                  {result.text}
                </p>
                
                {result.sources.length > 0 && (
                  <div className="pt-6 border-t border-zinc-800">
                    <div className="flex items-center space-x-2 mb-3 text-gray-500">
                      <Globe className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Grounding Sources</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {result.sources.map((source, i) => (
                        <a 
                          key={i} 
                          href={source.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-[11px] bg-zinc-800/50 hover:bg-zinc-800 text-gray-400 hover:text-[#00F5D4] px-3 py-1.5 rounded-full border border-zinc-700 transition-all"
                        >
                          <span className="truncate max-w-[120px]">{source.title}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
