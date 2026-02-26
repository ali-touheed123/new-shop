'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { brands } from '@/lib/data';
import { MoveRight } from 'lucide-react';

export default function BrandsSection() {
  return (
    <section className="py-40 bg-background relative overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">The Heritage Collection</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-text text-5xl md:text-7xl lg:text-8xl"
            >
              World-Class <br />
              <span className="accent-serif text-accent">Partnerships</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-lg text-primary/30 font-medium italic mb-8 max-w-xs ml-auto">
              We partner with the world's most prestigious pigment houses to ensure unrivaled material integrity.
            </p>
          </div>
        </div>

        {/* Minimalist Brands Wall - Borderless and Curated */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-black/5 rounded-[4rem] overflow-hidden shadow-2xl shadow-black/5 border border-black/5">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white aspect-square p-12 transition-all duration-[1.2s] ease-[0.16, 1, 0.3, 1] hover:bg-[#FAFAFA] hover:z-20"
            >
              <Link
                href={`/brands/${brand.id}`}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-24 mb-6 transition-transform duration-[1.2s] group-hover:scale-110 group-hover:-translate-y-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain filter grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s]"
                  />
                </div>

                {/* Revealable Portfolio Link */}
                <div className="absolute bottom-12 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">View Selection</span>
                    <MoveRight size={14} className="text-accent" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Dynamic "Global Index" Tile */}
          <Link
            href="/brands"
            className="group relative bg-primary aspect-square p-12 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-1000 hover:bg-black"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
              <h2 className="text-8xl font-black text-white">ALL</h2>
            </div>

            <div className="relative z-10">
              <p className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4">The Index</p>
              <h4 className="display-text text-xl md:text-2xl text-white mb-8 tracking-widest leading-tight">
                Explore All <br /> Elite Partners
              </h4>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-700 group-hover:bg-accent group-hover:text-primary group-hover:border-accent">
                <MoveRight size={20} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
