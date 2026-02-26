'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MoveRight, Layers, Play } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]">
      {/* Editorial Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5F5F5]" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Main Content (Columns 1-7) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:pr-20"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10 overflow-hidden">
              <div className="h-px w-12 bg-accent opacity-50" />
              <span className="text-accent font-black tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                The 2026 Collection
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="display-text text-6xl md:text-7xl lg:text-[7.5rem] text-primary mb-12"
            >
              The Art of <br />
              <span className="text-secondary opacity-20">Pure</span> <span className="text-accent">Living</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed max-w-xl font-medium"
            >
              Experience a new standard in luxury painting. We combine traditional artistry
              with modern innovation to transform your world into a masterpiece.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center mb-20">
              <Link href="/products" className="btn-premium grouping">
                Explore Collection
                <MoveRight size={20} className="transition-transform group-hover:translate-x-2" />
              </Link>

              <Link href="/visualizer" className="group flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs hover:text-accent transition-colors">
                <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center transition-all group-hover:bg-accent group-hover:border-accent">
                  <Play size={18} fill="currentColor" className="ml-1" />
                </div>
                Try Visualizer
              </Link>
            </motion.div>

            {/* Premium Social Proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-12 pt-12 border-t border-black/5">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-100">
                    <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="user" width={48} height={48} />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">
                  15K+
                </div>
              </div>
              <div>
                <div className="flex gap-1 text-accent mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Global Excellence Award 2026</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Presentation (Columns 8-12) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Immersive Card */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
              <Image
                src="/images/features/luxury-finish.png"
                alt="Premium Finish"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Floating Image Label */}
              <div className="absolute bottom-10 left-10 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Signature Finish</p>
                <h3 className="text-3xl font-black">Obsidian Gold</h3>
              </div>
            </div>

            {/* Decorative Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 w-40 h-40 glass rounded-[2.5rem] flex flex-col items-center justify-center p-6 text-center shadow-xl border border-white/40"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-4">
                <Layers size={24} />
              </div>
              <p className="text-xs font-black text-primary uppercase leading-tight">7-Layer <br />Protection</p>
            </motion.div>

            {/* Color Palette Hint */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 -left-8 glass-dark p-6 rounded-[2rem] shadow-2xl flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#0A0A0A] border-2 border-white/20" />
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] border-2 border-white/20" />
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] border-2 border-white/20" />
              </div>
              <div>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-0.5">Seasonal</p>
                <p className="text-xs font-bold text-white uppercase">The Muse Palette</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
