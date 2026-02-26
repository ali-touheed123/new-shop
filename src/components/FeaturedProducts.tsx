'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 12);

  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Minimalist Premium Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent font-black tracking-[0.2em] uppercase text-xs sm:text-xs">Signature Selections</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-text text-5xl md:text-6xl text-primary"
            >
              The Essential <br />
              <span className="text-accent">Edit</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/products"
              className="group flex items-center gap-6 py-4 pr-4 pl-10 rounded-full bg-white shadow-xl shadow-black/5 border border-black/5 hover:bg-primary transition-all duration-500"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary group-hover:text-white transition-colors">Curated Shop</span>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white transition-all group-hover:bg-accent group-hover:text-primary">
                <MoveRight size={20} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Smooth Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={index % 2 === 1 ? 'lg:mt-16' : ''}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <Link
            href="/products"
            className="inline-flex flex-col items-center gap-6 group"
          >
            <p className="text-xs font-black text-foreground/40 uppercase tracking-[0.5em] group-hover:text-accent transition-colors">
              Explore Endless Possibilities
            </p>
            <div className="w-px h-24 bg-gradient-to-t from-accent to-transparent" />
            <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700">
              <ArrowRight size={24} className="group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
