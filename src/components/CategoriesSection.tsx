'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data';
import { MoveRight } from 'lucide-react';

export default function CategoriesSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Asian Paints Style Heading */}
        <div className="mb-24">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 text-center"
           >
             <h2 className="text-4xl lg:text-6xl font-black text-gray-900 uppercase tracking-widest">
                Our <span className="text-[#E31E24]">Collections</span>
             </h2>
             <div className="w-24 h-1 bg-[#E31E24] mx-auto rounded-full" />
             <p className="text-gray-500 font-medium text-lg mt-4 max-w-2xl mx-auto italic">
                From professional interiors to heavy-duty industrial coatings, explore our range of architectural excellence.
             </p>
           </motion.div>
        </div>

        {/* The Grid: Clean and Professional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.slice(0, 3).map((category, i) => (
            <Link key={category.id} href={`/products?category=${category.id}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col gap-8"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={i === 0 ? "/images/categories/interior.png" : i === 1 ? "/images/categories/exterior.png" : "/images/features/modern-interior.png"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-black text-[#E31E24] uppercase tracking-[0.3em]">Collection {i + 1}</span>
                   <h3 className="text-3xl font-black text-gray-900 group-hover:text-[#E31E24] transition-colors flex items-center justify-between">
                      {category.name}
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E31E24] group-hover:text-white transition-all">
                        <MoveRight size={18} />
                      </div>
                   </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
