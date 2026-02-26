'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { brands } from '@/lib/data';
import { MoveRight } from 'lucide-react';

export default function BrandsSection() {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Asian Paints Style Heading */}
        <div className="mb-24 flex flex-col items-center text-center">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
           >
             <h2 className="text-4xl lg:text-6xl font-black text-gray-900 uppercase tracking-widest">
                Our <span className="text-[#E31E24]">Partners</span>
             </h2>
             <div className="w-24 h-1 bg-[#E31E24] mx-auto rounded-full" />
             <p className="text-gray-500 font-medium text-lg mt-4 max-w-2xl italic">
                Strategically partnered with global leaders in architectural aesthetics and material science.
             </p>
           </motion.div>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white Aspect-square rounded-2xl flex items-center justify-center p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              <Link href={`/brands/${brand.id}`} className="w-full h-full relative">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </Link>
            </motion.div>
          ))}
          
          {/* Explore More Card */}
          <Link href="/brands" className="group col-span-2 md:col-span-1 bg-[#E31E24] rounded-2xl flex flex-col items-center justify-center p-8 text-center text-white transition-all duration-500 hover:bg-[#c41a1f] shadow-lg">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Global Network</span>
             <h4 className="text-xl font-black mb-6">Explore All</h4>
             <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#E31E24] transition-all">
                <MoveRight size={20} />
             </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
