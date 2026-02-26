'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Globe, MoveRight, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-40 pb-20 relative overflow-hidden">
      {/* Editorial Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-white/20 to-accent opacity-30" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 pb-24 border-b border-white/5">

          {/* Brand Identity (Cols 1-5) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-6 mb-12 group">
              <div className="relative w-16 h-16 transition-transform duration-1000 group-hover:rotate-[360deg] p-2 bg-white rounded-2xl">
                <Image
                  src="/images/logo of website.png"
                  alt="Tawakkal"
                  fill
                  className="object-contain grayscale contrast-125"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-4xl font-black tracking-tighter leading-none mb-1">TAWAKKAL</h2>
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.6em]">ELITE PAINT HOUSE</span>
              </div>
            </Link>

            <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-medium italic max-w-md mb-16">
              "Redefining architectural aesthetics since 1998. We curate the world’s most prestigious pigment collections for the modern visionary."
            </p>

            <div className="flex gap-10">
              {[
                { icon: Facebook, label: 'FB' },
                { icon: Instagram, label: 'IG' },
                { icon: Youtube, label: 'YT' },
                { icon: Globe, label: 'WEB' }
              ].map((social, i) => (
                <a key={i} href="#" className="group flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-accent group-hover:text-primary group-hover:border-accent">
                    <social.icon size={18} />
                  </div>
                  <span className="text-[8px] font-black tracking-widest opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all uppercase">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Hub (Cols 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="heading-luxury mb-12 !text-white/40">The Atelier</h4>
            <div className="flex flex-col gap-6">
              {[
                { label: 'The Full Catalogue', href: '/products' },
                { label: 'Artisanal Partnerships', href: '/brands' },
                { label: 'Spatial Metrics Tool', href: '/calculator' },
                { label: 'The Digital Studio', href: '/visualizer' },
                { label: 'Induction Circle', href: '/loyalty' }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group flex items-center justify-between py-2 overflow-hidden">
                  <span className="text-xs font-black uppercase tracking-[0.3em] transition-transform duration-700 group-hover:translate-x-2">{link.label}</span>
                  <ArrowUpRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </Link>
              ))}
            </div>
          </div>

          {/* Coordinates Hub (Cols 9-12) */}
          <div className="lg:col-span-4">
            <h4 className="heading-luxury mb-12 !text-white/40">Coordinates</h4>
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="mt-1 flex-shrink-0"><MapPin size={18} className="text-accent" /></div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] mb-3">Principal HQ</p>
                  <p className="text-sm font-medium text-white/40 leading-relaxed italic">123 Paint Street, Color District,<br />Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0"><Phone size={18} className="text-accent" /></div>
                <a href="tel:+923001234567" className="text-xl font-black tracking-tight hover:text-accent transition-colors">+92 300 123 4567</a>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="btn-ultimate !bg-white !text-primary !px-10">
                  <span>Inquire Direct</span>
                  <MoveRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Meta Base */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          <p>© {currentYear} TAWAKKAL ELITE HOUSE. ALL HERITAGE RESERVED.</p>

          <div className="flex gap-12">
            <Link href="/terms" className="hover:text-accent transition-colors">Integrity Policy</Link>
            <Link href="/privacy" className="hover:text-accent transition-colors">Member Terms</Link>
            <Link href="/cookies" className="hover:text-accent transition-colors">Digitial Privacy</Link>
          </div>

          <div className="flex items-center gap-6">
            <span>DESIGNED BY ANTIGRAVITY ARC</span>
            <div className="w-12 h-px bg-white/10" />
          </div>
        </div>
      </div>

      {/* Extreme Detail: Watermark Background */}
      <div className="absolute bottom-0 right-0 p-12 opacity-[0.02] pointer-events-none">
        <h2 className="text-[12vw] font-black leading-none uppercase">AUTHENTIC</h2>
      </div>
    </footer>
  );
}
