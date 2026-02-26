'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { brands } from '@/lib/data';

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Our Premium Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We partner with the most trusted paint manufacturers to bring you quality products
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/brands/${brand.id}`}
                className="group block bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col"
              >
                <div className="p-10 flex flex-col h-full">
                  <div className="relative h-24 mb-8">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                  <h2 className="text-3xl font-black text-primary group-hover:text-accent transition-colors mb-4 text-center">
                    {brand.name}
                  </h2>
                  <p className="text-foreground/70 mb-8 leading-relaxed flex-grow text-center font-medium">{brand.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-black/5 mt-auto">
                    <span className="text-xs text-accent font-bold tracking-widest uppercase bg-accent/10 px-4 py-2 rounded-full">
                      {brand.productCount} Products
                    </span>
                    <span className="flex items-center text-primary group-hover:text-accent font-bold transition-colors">
                      Explore
                      <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
