'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Calculator, Palette, Search, MoveRight } from 'lucide-react';
import { useStore } from '@/store';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartCount = useStore((state) => state.getCartCount());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/products', label: 'Catalogue' },
    { href: '/brands', label: 'Partnerships' },
    { href: '/calculator', label: 'Spatial Metrics' },
    { href: '/visualizer', label: 'The Atelier' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] transition-all duration-1000">
      {/* Precision Announcement Bar - Optional premium feel */}
      <div className={`h-8 bg-primary overflow-hidden transition-all duration-700 ${isScrolled ? 'h-0' : 'h-8'}`}>
        <div className="flex items-center justify-center h-full">
          <p className="text-[9px] font-black text-accent uppercase tracking-[0.5em]">Global Shipping Now Available for the 2026 Collection</p>
        </div>
      </div>

      <nav className={`w-full transition-all duration-1000 ease-[0.16, 1, 0.3, 1] ${isScrolled ? 'py-4' : 'py-10'}`}>
        <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between transition-all duration-1000 ${isScrolled ? 'glass-dark rounded-full py-3 px-10 shadow-2xl shadow-black/20' : ''}`}>

          {/* Brand - Extremely Minimalist */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className={`relative w-10 h-10 transition-all duration-700 ${isScrolled ? 'scale-90 invert' : 'scale-100'}`}>
              <Image
                src="/images/logo of website.png"
                alt="Logo"
                fill
                className="object-contain grayscale contrast-125"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-[-0.05em] leading-none group-hover:text-accent transition-colors">
                TAWAKKAL <span className="text-accent underline underline-offset-4 decoration-1">ELITE</span>
              </h1>
              <span className="text-[8px] font-black uppercase tracking-[0.6em] opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all">
                Est. MCMXCVIII
              </span>
            </div>
          </Link>

          {/* Nav Links - Center Gravity */}
          <div className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${isScrolled ? 'text-white/40 hover:text-white' : 'text-primary/40 hover:text-primary'}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* Action Hub */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4">
              <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isScrolled ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-black/5'}`}>
                <Search size={16} strokeWidth={2.5} />
              </button>
              <Link href="/cart" className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all ${isScrolled ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-black/5'}`}>
                <ShoppingCart size={16} strokeWidth={2.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-primary text-[8px] font-black rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            <Link
              href="/products"
              className={`hidden sm:flex items-center gap-3 px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-700 ${isScrolled ? 'bg-accent text-primary hover:bg-white' : 'bg-primary text-white hover:bg-accent hover:text-primary'}`}
            >
              Shop Collection
              <MoveRight size={14} />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all ${isScrolled ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-black/5'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen High-End Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-primary z-[200] flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-white font-black tracking-[0.4em] uppercase text-xs">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="display-text text-5xl text-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10 flex flex-col gap-4">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-4">Official Channels</p>
              <div className="flex gap-8">
                <a href="#" className="text-xs font-black text-white uppercase tracking-widest">Instagram</a>
                <a href="#" className="text-xs font-black text-white uppercase tracking-widest">Behance</a>
                <a href="#" className="text-xs font-black text-white uppercase tracking-widest">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
