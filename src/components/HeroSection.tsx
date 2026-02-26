'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Ruler, ShieldCheck, Palette, MoveRight, Play } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const services = [
    { icon: <Home className="w-10 h-10" />, label: 'Painting services', color: 'text-orange-500' },
    { icon: <Ruler className="w-10 h-10" />, label: 'Painting costs', color: 'text-blue-500' },
    { icon: <ShieldCheck className="w-10 h-10" />, label: 'Waterproofing costs', color: 'text-cyan-600' },
    { icon: <Palette className="w-10 h-10" />, label: 'Get a personalised shade', color: 'text-pink-500' },
  ];

  return (
    <section className="relative bg-white pt-24 lg:pt-32 overflow-hidden">
      {/* Background Banner - Large Editorial Image */}
      <div className="relative w-full h-[600px] lg:h-[750px] overflow-hidden">
        <Image
          src="/images/features/modern-interior.png" // Using existing luxury image
          alt="Asian Paints Style Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Transform your space card */}
        <div className="absolute top-1/2 right-12 lg:right-48 -translate-y-1/2 w-full max-w-sm lg:max-w-xl bg-white/95 backdrop-blur-sm p-12 lg:p-20 shadow-2xl rounded-sm">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[60px] lg:text-[100px] leading-[0.9] font-normal text-[#E31E24] mb-8 font-['Playfair_Display']">
              Transform <br />
              your space
            </h1>
            
            <div className="grid grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-20">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <span className="text-[13px] font-bold text-gray-700 leading-tight group-hover:text-[#E31E24] transition-colors">
                    {service.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Asian Paints Partner/Logo Banner Strip */}
      <div className="bg-[#F8F8F8] py-8 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-12 flex items-center justify-between opacity-60 grayscale">
          <div className="flex items-center gap-12">
             <Image src="/images/logo of website.png" alt="Partner" width={80} height={40} className="object-contain" />
             <div className="h-8 w-px bg-gray-300" />
             <span className="text-xs font-black uppercase tracking-[0.3em]">Official Colour Partner</span>
          </div>
          <div className="flex gap-12 items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest">Heritage Status</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Excellence MCMXCVIII</span>
          </div>
        </div>
      </div>
    </section>
  );
}
