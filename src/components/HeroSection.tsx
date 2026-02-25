'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-24">
      {/* Background Pattern - very subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a2e' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="text-luxury-dark" size={20} />
              <span className="text-luxury-dark font-medium tracking-wide uppercase text-sm">
                Premium Paint Collection
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tight">
              Transform Your
              <span className="block text-accent">Living Space</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Discover our exclusive collection of premium paints from 10+ renowned brands.
              Create the perfect ambiance with colors that inspire.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="/products" className="btn-luxury inline-flex items-center gap-2">
                Explore Collection
                <ArrowRight size={20} />
              </Link>
              <Link href="/visualizer" className="btn-outline-luxury inline-flex items-center gap-2">
                Try Visualizer
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-black/5">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-foreground/60 text-sm font-medium">Premium Brands</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-foreground/60 text-sm font-medium">Color Options</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">15K+</div>
                <div className="text-foreground/60 text-sm font-medium">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-[500px] lg:min-h-[600px] flex items-center"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-black/5">
              <Image
                src="/images/features/luxury-finish.png"
                alt="Luxury Paint Finish"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-black/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-primary">Earn Rewards</div>
                  <div className="text-sm text-foreground/60">Join our loyalty program</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
