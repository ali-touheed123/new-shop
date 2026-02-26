'use client';

import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function StoreBanner() {
  return (
    <section className="relative h-[450px] lg:h-[550px] overflow-hidden flex items-center">
      {/* Background with Asian Paints aesthetic brown/beige tone */}
      <div className="absolute inset-0 bg-[#A67C52]">
         <Image 
           src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1400" 
           alt="Store Interior" 
           fill 
           className="object-cover opacity-60 mix-blend-multiply" 
         />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-start gap-8"
        >
          <h2 className="text-[60px] lg:text-[100px] leading-[0.9] text-white font-['Playfair_Display']">
            Find a store <br />
            near you!
          </h2>
          <p className="text-xl text-white/80 font-medium">
            Discover your closest Tawakkal Elite flagship store.
          </p>
          <button className="bg-white text-gray-900 px-12 py-5 rounded-sm font-black uppercase text-xs tracking-[0.3em] flex items-center gap-4 hover:bg-[#E31E24] hover:text-white transition-all shadow-2xl active:scale-95">
            Explore now <MoveRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
