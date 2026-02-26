import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock, MoveRight, ShieldCheck, Globe } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20">

          {/* Brand Vision (5 cols) */}
          <div className="lg:col-span-5 pr-20">
            <Link href="/" className="flex items-center gap-4 mb-10 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
                <Image
                  src="/images/logo of website.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="display-text text-3xl text-white tracking-widest leading-none">TAWAKKAL</h2>
                <p className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mt-2 opacity-60">Elite Paint House</p>
              </div>
            </Link>

            <p className="text-lg text-white/40 leading-relaxed font-medium mb-12 italic">
              Redefining architectural aesthetics since 1998. We curate the world&apos;s
              most prestigious pigment collections for the modern visionary.
            </p>

            <div className="flex flex-col gap-6">
              <WhatsAppButton variant="full" />
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-white/5 flex items-center justify-center text-[10px] font-bold text-accent">
                      EX
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">25+ Global Excellence Awards</p>
              </div>
            </div>
          </div>

          {/* Practical Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-10 opacity-40">Atelier</h3>
            <ul className="space-y-6">
              {[
                { href: '/products', label: 'Collection' },
                { href: '/brands', label: 'Partnerships' },
                { href: '/calculator', label: 'Spatial Metrics' },
                { href: '/visualizer', label: 'Atelier Studio' },
                { href: '/loyalty', label: 'Privilege Circle' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/60 hover:text-accent transition-all"
                  >
                    <span className="w-0 group-hover:w-6 h-px bg-accent transition-all duration-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-10 opacity-40">Mediums</h3>
            <ul className="space-y-6">
              {[
                { href: '/category/decorative', label: 'Interior Art' },
                { href: '/category/industrial', label: 'Fortitude' },
                { href: '/category/auto', label: 'Aerodynamic' },
                { href: '/category/projects', label: 'Structures' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/60 hover:text-accent transition-all"
                  >
                    <span className="w-0 group-hover:w-6 h-px bg-accent transition-all duration-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-10 opacity-40">Coordinates</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <p className="text-xs font-medium text-white/50 leading-relaxed uppercase tracking-widest">
                  123 Paint Street, Color District,<br />
                  Karachi, Pakistan
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0">
                  <Phone size={18} />
                </div>
                <p className="text-xs font-black text-white/80 uppercase tracking-widest">+92 300 123 4567</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0">
                  <Clock size={18} />
                </div>
                <p className="text-[10px] font-medium text-white/40 uppercase tracking-[0.2em]">Mon - Sat: 09:00 — 21:00</p>
              </div>
            </div>

            <div className="flex gap-4 mt-12 pb-2">
              {[Facebook, Instagram, Youtube, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-accent hover:text-primary transition-all duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Bar */}
      <div className="bg-black/20 py-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <ShieldCheck size={16} className="text-accent" />
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">
              Certified Premium Excellence &copy; 2026/27 Tawakkal Paint House
            </p>
          </div>
          <div className="flex gap-12">
            <Link href="/privacy" className="text-[9px] font-black text-white/20 uppercase tracking-widest hover:text-accent transition-colors">Integrity Policy</Link>
            <Link href="/terms" className="text-[9px] font-black text-white/20 uppercase tracking-widest hover:text-accent transition-colors">Member Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
