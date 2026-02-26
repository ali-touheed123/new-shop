'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "Where can I find the nearest Asian Paints store?",
    answer: "You can use our store locator tool on the website to find the nearest Asian Paints store. Simply enter your location to get a list of nearby stores."
  },
  {
    question: "How can I contact Asian Paints customer service?",
    answer: "You can reach our customer support at 1800-209-5678 or via email at customercare@tawakkalelite.com. Our experts are available 24/7."
  },
  {
    question: "How do I choose the right colour for my home?",
    answer: "Use our 'The Atelier' visualizer or get a personalized consultation from our experts. We also offer shade cards with over 2000+ pigments."
  },
  {
    question: "Can I get help with colour selection from Asian Paints?",
    answer: "Yes! Our 'Royale Designer' service provides one-on-one expert help to match your personality with the perfect architectural palette."
  },
  {
    question: "What are the latest colour trends?",
    answer: "Our 'Colour of the Year' collection highlights the current global architectural trends. Explore our 2026 collection for seasonal inspiration."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-black text-gray-900 text-center uppercase tracking-widest mb-24">FAQ's</h2>
        
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 last:border-none">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-8 text-left group"
              >
                <span className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-[#E31E24]' : 'text-gray-700 group-hover:text-black'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#F4F4F4] rotate-45' : 'bg-transparent group-hover:bg-[#F4F4F4]'}`}>
                  {openIndex === i ? <X size={24} className="text-[#E31E24]" /> : <Plus size={24} className="text-gray-300" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pt-2 text-gray-500 font-medium text-lg leading-relaxed max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 px-8 py-3.5 border-2 border-gray-900 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-xl active:scale-95 group">
             View all <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
