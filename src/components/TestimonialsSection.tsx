'use client';

import { motion } from 'framer-motion';
import { Play, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Preeti Saha',
    location: 'Pune',
    text: '"With Tawakkal, expertise meets trust" We chose Tawakkal over local contractors for their product knowledge, professional approach, and the assurance...',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Alex Varghese Kurian',
    location: 'Kochi',
    text: '"Reliable and hassle-free" With 15 years of memories in this home, we wanted a stress-free makeover. Tawakkal stood out for their technical expertise...',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Deepa',
    location: 'Chennai',
    text: '"Our dream home, beautifully brought to life" When we found our dream home, we wanted it to look perfect. Tawakkal guided us with the right colours...',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-[60px] lg:text-[80px] leading-[1] text-gray-900 font-['Playfair_Display'] mb-4">
              What our <br />
              clients say <br />
              about us!
            </h2>
          </div>
          <div className="lg:col-span-8 flex justify-end gap-4 pb-4">
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all">
               <ChevronLeft size={24} className="text-gray-400" />
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all">
               <ChevronRight size={24} className="text-[#E31E24]" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-white rounded-2.5xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative aspect-video w-full">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play size={20} fill="#E31E24" className="text-[#E31E24] ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-10">
                <div className="flex gap-1 mb-6">
                   <span className="text-6xl text-gray-100 font-serif leading-none">“</span>
                </div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                  {item.text}
                </p>
                <div className="pt-8 border-t border-gray-50 flex flex-col">
                  <span className="text-sm font-black text-gray-900 uppercase tracking-widest">{item.name}, <span className="text-gray-400 font-bold">{item.location}</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
