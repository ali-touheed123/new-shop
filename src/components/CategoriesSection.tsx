'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data';
import { MoveRight } from 'lucide-react';

export default function CategoriesSection() {
  return (
    <section className="py-40 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Editorial Header */}
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Curated Selection</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-text text-5xl md:text-7xl lg:text-8xl"
            >
              Master Your <br />
              <span className="accent-serif text-accent">Space</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-primary/40 font-medium lg:max-w-xs italic leading-relaxed"
          >
            Explore our interior, exterior, and industrial collections, precisely engineered for Every Surface.
          </motion.p>
        </div>

        {/* The Gallery: Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">

          {/* Column 1 - Large Feature */}
          <div className="md:col-span-8 group">
            <Link href={`/products?category=${categories[0].id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[16/10] rounded-[4rem] overflow-hidden card-ultimate"
              >
                <Image
                  src="/images/categories/interior.png"
                  alt="Interior"
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="absolute bottom-16 left-16">
                  <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Collection 01</span>
                  <h3 className="display-text text-5xl md:text-7xl text-white mb-8 transition-transform duration-1000 translate-y-4 group-hover:translate-y-0">
                    Interior <br /> <span className="accent-serif text-accent">Sanctuary</span>
                  </h3>
                  <div className="flex items-center gap-4 text-white/40 group-hover:text-white transition-all duration-700">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore Collection</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-700">
                      <MoveRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Column 2 - High Vertical */}
          <div className="md:col-span-4 mt-0 lg:mt-32">
            <Link href={`/products?category=${categories[1].id}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden card-ultimate shadow-2xl"
              >
                <Image
                  src="/images/features/modern-interior.png" // Industrial placeholder
                  alt="Industrial"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 border-[3rem] border-primary/5 transition-all duration-1000 group-hover:border-0" />

                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000" />

                <div className="absolute bottom-12 left-12 right-12">
                  <h3 className="display-text text-4xl text-white mb-6 uppercase">
                    Industrial <br /> <span className="accent-serif text-accent">Power</span>
                  </h3>
                  <div className="w-full h-px bg-white/20 group-hover:bg-accent transition-colors duration-1000" />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Row 2 - Inverse Large Feature */}
          <div className="md:col-span-12 lg:col-span-5 lg:-mt-24">
            <Link href={`/products?category=${categories[2].id}`} className="group">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl card-ultimate"
              >
                <Image
                  src="/images/categories/exterior.png"
                  alt="Exterior"
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="absolute top-12 left-12 text-primary">
                  <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40">Portfolio 03</span>
                  <h3 className="display-text text-4xl mt-4">Structural <br /> Evolution</h3>
                </div>

                <div className="absolute bottom-12 right-12">
                  <div className="w-16 h-16 rounded-full glass-dark flex items-center justify-center text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-700">
                    <MoveRight size={24} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Row 2 - Artistic Text/Visual Mix */}
          <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-center p-12 lg:p-24 bg-white rounded-[4rem] border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 transition-transform duration-[4s] group-hover:rotate-0">
              <h2 className="text-[15vw] font-black">CURATED</h2>
            </div>

            <div className="relative z-10">
              <h4 className="heading-luxury mb-8">Specialized Finish</h4>
              <p className="display-text text-3xl md:text-5xl lg:text-6xl text-primary mb-12 normal-case tracking-tight italic font-serif">
                "We don't just sell paint; we curate the atmospheric layers of your environment."
              </p>
              <Link href="/products" className="flex items-center gap-6 group/link">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary group-hover/link:text-accent transition-colors">View All Collections</span>
                <div className="h-px w-24 bg-primary/10 group-hover/link:bg-accent group-hover/link:w-32 transition-all duration-700" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
