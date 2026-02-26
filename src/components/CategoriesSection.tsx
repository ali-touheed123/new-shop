'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/lib/data';

export default function CategoriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/5 text-primary font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-6"
          >
            Our Collections
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight"
          >
            Shop by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto text-lg"
          >
            Explore our comprehensive range of paints designed for every application,
            from beautiful home interiors to industrial-grade solutions.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link
                href={`/category/${category.slug}`}
                className={`group block relative rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 ${index === 0 || index === 3 ? 'h-[500px]' : 'h-[400px] mt-0 lg:mt-12'
                  }`}
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                    <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
                      {category.productCount}+ Products
                    </span>
                    <h3 className="text-3xl font-black text-white mb-3">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed line-clamp-2 mix-blend-screen">
                      {category.description}
                    </p>
                    <div className="flex items-center text-white font-bold group-hover:text-accent transition-colors">
                      <span className="uppercase tracking-wider text-sm">Explore Collection</span>
                      <div className="ml-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-x-2 group-hover:bg-accent group-hover:text-primary">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Border Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
