'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-40 bg-white relative">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#FAFAFA]" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">The Signature Edit</span>
            </motion.div>
            <h2 className="display-text text-5xl md:text-6xl">
              Curated <br />
              <span className="accent-serif text-accent">Excellence</span>
            </h2>
          </div>

          <Link href="/products" className="group flex flex-col items-end gap-2">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary group-hover:text-accent transition-colors">Enter Full Catalogue</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="w-full h-0.5 bg-primary/5 group-hover:bg-accent transition-all duration-700" />
          </Link>
        </div>

        {/* Sophisticated Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              className={index % 2 === 1 ? 'lg:mt-32' : ''}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-48 flex flex-col items-center">
          <div className="w-px h-32 bg-gradient-to-t from-accent to-transparent mb-12" />
          <Link href="/products" className="group flex flex-col items-center">
            <h4 className="display-text text-2xl lg:text-4xl group-hover:text-accent transition-colors duration-700 mb-6">Explore Endless Possibilities</h4>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/30 group-hover:text-primary transition-colors">The 2026 Pigment Index</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
