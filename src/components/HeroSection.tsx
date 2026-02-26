'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MoveRight, Layers, Play, Phone } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-48 pb-32 overflow-hidden bg-background">
      {/* Editorial Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[30vw] font-black leading-none">TAWAKKAL</h2>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* Text Content (Cols 1-7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              animate="show"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
                <div className="w-12 h-px bg-gradient-to-r from-accent to-yellow-500" />
                <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Archival Numbers — 2026</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="display-text text-5xl md:text-[10vw] mb-4 text-white drop-shadow-2xl"
              >
                The Master <br />
                <span className="text-gradient-gold accent-serif text-[8vw] lowercase">Palette</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-2xl text-white/40 max-w-xl mx-auto mb-16 font-medium italic leading-relaxed"
              >
                "Beyond pigment. Beyond color. We curate the chemical soul of architectural space."
              </motion.p>

              <div className="flex flex-wrap gap-8 items-center mb-24">
                <Link href="/products" className="btn-ultimate">
                  <span>Explore The Catalogue</span>
                  <MoveRight size={20} />
                </Link>

                <Link href="/visualizer" className="group flex items-center gap-6 text-primary font-black uppercase tracking-[0.3em] text-[10px] hover:text-accent transition-all">
                  <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center transition-all duration-700 group-hover:bg-accent group-hover:border-accent group-hover:text-primary">
                    <Play size={18} fill="currentColor" className="ml-1" />
                  </div>
                  Enter The Atelier
                </Link>
              </div>

              {/* High-End Validation */}
              <div className="flex items-center gap-12 pt-12 border-t border-black/5">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-gray-100 shadow-xl shadow-black/5">
                      <Image src={`https://i.pravatar.cc/100?u=${i * 10}`} alt="User" width={48} height={48} />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-background bg-accent flex items-center justify-center text-[10px] font-black text-primary">
                    15K+
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 text-accent mb-1.5">
                    {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Certified Premium Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Immersive Img Stage (Cols 8-12) */}
          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div
              style={{ y: y1 }}
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] bg-gray-100 group"
            >
              <Image
                src="/images/features/modern-interior.png"
                alt="Luxury"
                fill
                className="object-cover transition-transform duration-[4s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* Editorial Label Overlay */}
              <div className="absolute bottom-12 left-12 text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-60">Signature Studio</p>
                <h3 className="heading-luxury text-4xl text-white normal-case italic font-normal font-['Playfair_Display']">Milan Nightfall</h3>
              </div>
            </motion.div>

            {/* Floating Protection Tier Card */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -top-12 -right-8 glass-dark p-8 rounded-[3.5rem] shadow-2xl z-20 flex flex-col items-center gap-6 w-48 border border-white/10"
            >
              <div className="w-16 h-16 bg-accent rounded-2.5xl flex items-center justify-center text-primary shadow-xl shadow-accent/20">
                <Layers size={28} />
              </div>
              <div className="text-center">
                <p className="text-xs font-black text-white uppercase tracking-widest leading-none mb-1">7-Layer</p>
                <p className="text-[9px] font-black text-accent uppercase tracking-widest opacity-60">Defense Shield</p>
              </div>
            </motion.div>

            {/* Custom Interactive Palette */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-12 glass p-8 rounded-[3.5rem] shadow-2xl flex items-center gap-6 z-20"
            >
              <div className="flex -space-x-3">
                <div className="w-11 h-11 rounded-full bg-[#0A0A0B] border-4 border-background shadow-lg" />
                <div className="w-11 h-11 rounded-full bg-[#DCC58C] border-4 border-background shadow-lg" />
                <div className="w-11 h-11 rounded-full bg-[#EEEBE4] border-4 border-background shadow-lg" />
              </div>
              <div>
                <p className="text-[8px] font-black text-primary/30 uppercase tracking-[0.3em] mb-1">Curation</p>
                <p className="text-[11px] font-black text-primary uppercase tracking-widest">Heritage</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Final Detail: Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4 group cursor-pointer"
      >
        <span className="text-[8px] font-black text-primary/20 uppercase tracking-[0.5em] group-hover:text-accent transition-colors">Scroll to Discover</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/10 to-transparent group-hover:from-accent transition-all" />
      </motion.div>
    </section>
  );
}
