'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ShoppingCart, User, Calculator, Palette, Gift, Phone } from 'lucide-react';
import { useStore } from '@/store';
import WhatsAppButton from './WhatsAppButton';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = useStore((state) => state.getCartCount());

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/brands', label: 'Brands' },
    { href: '/calculator', label: 'Paint Calculator', icon: Calculator },
    { href: '/visualizer', label: 'Visualizer', icon: Palette },
    { href: '/loyalty', label: 'Loyalty', icon: Gift },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo of website.png"
              alt="Paint Store Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-gold-gradient hidden sm:block">
              PAINT PALACE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-white/80 hover:text-white transition-colors font-semibold tracking-wide flex items-center gap-2 py-2 text-[15px]"
              >
                {link.icon && <link.icon size={20} className="text-white/60 group-hover:text-accent transition-colors" />}
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <WhatsAppButton variant="icon" className="hidden sm:flex" />

            <Link
              href="/cart"
              className="relative p-2.5 text-white bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent text-primary text-xs font-black rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/loyalty"
              className="p-2.5 text-white bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 hidden sm:block"
            >
              <User size={22} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2 py-2"
                >
                  {link.icon && <link.icon size={18} />}
                  {link.label}
                </Link>
              ))}
              <WhatsAppButton variant="full" className="mt-4" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
