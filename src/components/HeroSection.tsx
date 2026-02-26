'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100/50" />

      {/* Blob decoration for organic feel */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] mix-blend-multiply opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16 md:mt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl xl:pr-12"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5">
              <Sparkles className="text-accent" size={18} />
              <span className="text-primary font-bold tracking-wider uppercase text-xs">
                Premium Paint Collection
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-primary mb-8 leading-[1.1] tracking-tight">
              Transform Your
              <span className="block text-accent mt-2">Living Space</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-xl font-medium">
              Discover our exclusive collection of premium paints from top brands.
              Create the perfect ambiance with colors that inspire emotion.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link href="/products" className="btn-luxury shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30">
                Explore Collection
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="/visualizer" className="btn-outline-luxury bg-white hover:bg-white shadow-sm hover:shadow-md">
                Try Visualizer
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-black/5">
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-1">10<span className="text-accent">+</span></div>
                <div className="text-foreground/60 text-sm font-semibold uppercase tracking-wider">Premium Brands</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-1">500<span className="text-accent">+</span></div>
                <div className="text-foreground/60 text-sm font-semibold uppercase tracking-wider">Color Options</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-1">15K<span className="text-accent">+</span></div>
                <div className="text-foreground/60 text-sm font-semibold uppercase tracking-wider">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[700px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* Main Image Frame */}
            <div className="relative w-full max-w-[600px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 z-10 group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <Image
                src="/images/features/luxury-finish.png"
                alt="Luxury Paint Finish"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>

            {/* Floating Color Swatch */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-8 lg:bottom-24 -left-4 lg:-left-12 z-20 bg-white p-4 rounded-3xl shadow-2xl border border-black/5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1a1a2e] shadow-inner" />
                <div className="w-12 h-12 rounded-full bg-[#d4af37] shadow-inner" />
                <div className="w-12 h-12 rounded-full bg-[#e8e8e8] shadow-inner" />
              </div>
              <div className="px-2 pt-1 pb-2">
                <p className="font-bold text-primary text-sm">Trending Palette</p>
                <p className="text-xs text-foreground/50 font-medium">Midnight & Gold</p>
              </div>
            </motion.div>

            {/* Floating Quality Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-12 -right-4 lg:-right-8 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="font-black text-primary leading-tight">100%</p>
                <p className="text-xs text-foreground/60 font-bold uppercase tracking-wide">Quality Assured</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
