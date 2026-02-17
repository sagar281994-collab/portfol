
import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 border-t border-gray-200 dark:border-zinc-800">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-extrabold mb-8">Let's build your <br /><span className="text-[#007AFF] dark:text-[#00F5D4]">dream team.</span></h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg leading-relaxed">
            Whether you're looking for an elusive Director of Research or building out an entire ML engineering pod, let's strategize.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-gray-100 dark:bg-zinc-900 rounded-2xl">
                <Mail className="w-6 h-6 text-[#007AFF]" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Email Me</h4>
                <p className="font-bold">alex@vanceai-recruiting.tech</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="p-4 bg-gray-100 dark:bg-zinc-900 rounded-2xl">
                <Linkedin className="w-6 h-6 text-[#007AFF]" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Connect</h4>
                <p className="font-bold">linkedin.com/in/alex-vance-ai</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="p-4 bg-gray-100 dark:bg-zinc-900 rounded-2xl">
                <Phone className="w-6 h-6 text-[#007AFF]" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Direct Line</h4>
                <p className="font-bold">+1 (555) 982-0122</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-zinc-800">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <CheckCircle2 className="w-20 h-20 text-[#00F5D4] mb-6" />
              <h3 className="text-2xl font-bold mb-2">Transmission Received</h3>
              <p className="text-gray-500">I will reach out to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Name</label>
                  <input required type="text" className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 ring-[#007AFF] outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Company</label>
                  <input required type="text" className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 ring-[#007AFF] outline-none transition-all" placeholder="NeuralX Inc" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Work Email</label>
                <input required type="email" className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 ring-[#007AFF] outline-none transition-all" placeholder="john@neuralx.ai" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">How can I help?</label>
                <textarea required rows={4} className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 ring-[#007AFF] outline-none transition-all resize-none" placeholder="Looking to hire a Lead ML Engineer..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#1D1D1F] dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 transition-all">
                <span>Initiate Contact</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
