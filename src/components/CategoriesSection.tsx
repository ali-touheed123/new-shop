'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/lib/data';

export default function CategoriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent font-black tracking-[0.2em] uppercase text-xs">Curated Selection</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-text text-5xl md:text-7xl lg:text-8xl text-primary"
            >
              Master Your <br />
              <span className="text-accent italic">Environment</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:pb-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-foreground/50 leading-relaxed font-medium"
            >
              Explore our editorial collections, precisely engineered for every
              surface, shadow, and soul. From high-fashion interiors to industrial fortitude.
            </motion.p>
          </div>
        </div>

        {/* Masonry-Style Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8"
        >
          {categories.map((category, index) => {
            // Complex grid placement for asymmetrical look
            const gridClasses = [
              'lg:col-span-7 lg:h-[700px]', // 0: Large
              'lg:col-span-5 lg:h-[450px]', // 1: Medium
              'lg:col-span-5 lg:h-[550px] lg:-mt-[250px]', // 2: Shifted
              'lg:col-span-7 lg:h-[450px] lg:-mt-[0px]', // 3: Wide
            ][index] || 'lg:col-span-6 lg:h-[500px]';

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className={gridClasses}
              >
                <Link
                  href={`/category/${category.slug}`}
                  className="group block relative w-full h-full rounded-[3rem] overflow-hidden bg-gray-100 hover-luxury-scale transition-all duration-700"
                >
                  {/* Background Image with Reveal Blur */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:blur-[2px] transition-all duration-1000 group-hover:scale-105"
                  />

                  {/* Gradient & Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

                  {/* Glassmorphic Badge */}
                  <div className="absolute top-10 left-10 overflow-hidden rounded-full">
                    <motion.div
                      className="glass px-6 py-2 border-white/40 flex items-center gap-2"
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                    >
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                        {category.productCount}+ Essential Blends
                      </span>
                    </motion.div>
                  </div>

                  {/* Content Reveal */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="transform transition-all duration-700 group-hover:-translate-y-4">
                      <h3 className="display-text text-4xl lg:text-5xl text-white mb-6">
                        {category.name}
                      </h3>

                      <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
                        <p className="text-white/70 text-base font-medium mb-10 max-w-sm line-clamp-3">
                          {category.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[10px]">
                        <span>Explore Collection</span>
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:text-primary">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Border (Internal) */}
                  <div className="absolute inset-10 border border-white/10 rounded-[2rem] pointer-events-none group-hover:border-white/30 transition-colors duration-700" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
