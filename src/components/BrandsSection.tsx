'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { brands } from '@/lib/data';
import { MoveRight } from 'lucide-react';

export default function BrandsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent font-black tracking-[0.2em] uppercase text-xs">Our Heritage</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-text text-5xl md:text-6xl text-primary"
            >
              World-Class <br />
              <span className="text-accent">Partnerships</span>
            </motion.h2>
          </div>
        </div>

        {/* Minimalist Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-black/5 border border-black/5 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/brands/${brand.id}`}
                className="group block bg-white aspect-square p-12 flex flex-col items-center justify-center transition-all duration-700 hover:bg-[#FAFAFA]"
              >
                <div className="relative w-full h-24 mb-6">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain filter grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">View Selection</p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Dynamic "View All" Tile */}
          <Link
            href="/brands"
            className="group block bg-primary aspect-square p-12 flex flex-col items-center justify-center text-center transition-all duration-700 hover:bg-accent"
          >
            <p className="text-white group-hover:text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">
              Explore All <br /> Brands
            </p>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary/20 transition-colors">
              <MoveRight size={20} className="text-white group-hover:text-primary" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
