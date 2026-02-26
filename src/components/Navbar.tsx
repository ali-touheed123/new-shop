'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Calculator, Palette, Gift, ArrowRight } from 'lucide-react';
import { useStore } from '@/store';
import WhatsAppButton from './WhatsAppButton';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartCount = useStore((state) => state.getCartCount());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/brands', label: 'Brands' },
    { href: '/calculator', label: 'Calculator', icon: Calculator },
    { href: '/visualizer', label: 'Visualizer', icon: Palette },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className={`pointer-events-auto max-w-[1200px] mx-auto transition-all duration-500 ${isScrolled
          ? 'glass-dark rounded-[2.5rem] py-3 shadow-2xl'
          : 'glass rounded-[2rem] py-4 shadow-xl shadow-black/5'
          }`}
      >
        <div className="px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className={`relative w-12 h-12 rounded-2xl overflow-hidden transition-all duration-500 ${isScrolled ? 'bg-white' : 'bg-primary'}`}>
              <Image
                src="/images/logo of website.png"
                alt="Logo"
                fill
                className="object-contain p-1.5"
              />
            </div>
            <span className={`text-xl font-black tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-primary'}`}>
              PAINT PALACE
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-bold uppercase tracking-widest transition-colors duration-500 ${isScrolled ? 'text-white/70 hover:text-accent' : 'text-primary/70 hover:text-primary'
                  }`}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full"
                  whileHover={{ width: '100%' }}
                />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/cart"
              className={`relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 ${isScrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-primary'
                }`}
            >
              <ShoppingCart size={20} strokeWidth={2.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-primary text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center shadow-lg border border-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/loyalty"
              className={`hidden sm:flex w-11 h-11 rounded-full items-center justify-center transition-all duration-500 ${isScrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-primary'
                }`}
            >
              <User size={20} strokeWidth={2.5} />
            </Link>

            <div className="h-6 w-px bg-current opacity-10 mx-2 hidden lg:block" />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 ${isScrolled ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-black/5'
                }`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link
              href="/products"
              className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-500 ${isScrolled ? 'bg-accent text-primary hover:bg-white' : 'bg-primary text-white hover:bg-accent hover:text-primary'
                }`}
            >
              Shop Now
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:hidden overflow-hidden px-6"
            >
              <div className={`py-8 border-t ${isScrolled ? 'border-white/10' : 'border-black/5'} flex flex-col gap-6`}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-2xl font-black uppercase tracking-tighter ${isScrolled ? 'text-white hover:text-accent' : 'text-primary hover:text-accent'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-6">
                  <WhatsAppButton variant="full" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
