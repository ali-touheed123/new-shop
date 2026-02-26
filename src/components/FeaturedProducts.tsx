'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 12);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/5 text-primary font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-6"
            >
              Best Sellers
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mt-3 tracking-tight"
            >
              Featured Products
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
              className="inline-flex items-center gap-3 text-primary font-bold hover:text-accent transition-colors mt-4 md:mt-0 group"
            >
              <span className="uppercase tracking-wider text-sm">View All Products</span>
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-2 group-hover:bg-accent group-hover:text-primary">
                <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
