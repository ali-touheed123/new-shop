'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { brands } from '@/lib/data';

export default function BrandsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/5 text-primary font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-6"
          >
            Trusted Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight"
          >
            Our Premium Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We partner with the most trusted paint manufacturers to bring you
            quality products that stand the test of time.
          </motion.p>
        </div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/brands/${brand.id}`}
                className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-transparent hover:border-black/5 hover:-translate-y-2 h-full"
              >
                <div className="relative h-20 mb-8">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs font-bold text-foreground/40 mt-2 uppercase tracking-wide bg-gray-50 py-1.5 px-3 rounded-full inline-block">
                    {brand.productCount} Products
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/brands" className="btn-luxury inline-flex items-center gap-2">
            View All Brands
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
