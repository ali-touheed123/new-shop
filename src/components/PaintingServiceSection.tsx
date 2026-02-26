'use client';

import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

export default function PaintingServiceSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-bold text-gray-500 mb-6">Beautifulhomes</p>
            <h2 className="text-[70px] lg:text-[100px] leading-[0.9] text-[#E31E24] mb-8 font-['Playfair_Display']">
              Painting <br />
              Service
            </h2>
            <p className="text-xl text-gray-600 max-w-md">
              Bid goodbye to your home painting hassles with our expert supervision.
            </p>
          </motion.div>

          {/* Right: Modern Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#F8F8F8] p-12 lg:p-16 rounded-[2rem] border border-gray-100 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl text-sm font-medium focus:border-[#E31E24] outline-none transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl text-sm font-medium focus:border-[#E31E24] outline-none transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="tel" 
                  placeholder="Enter mobile number" 
                  className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl text-sm font-medium focus:border-[#E31E24] outline-none transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Enter your Pincode" 
                  className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl text-sm font-medium focus:border-[#E31E24] outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-6 bg-[#25D366] rounded-full relative cursor-pointer p-1">
                   <div className="w-4 h-4 bg-white rounded-full translate-x-6" />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Update me on WhatsApp</span>
              </div>
              
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-5 h-5 border-2 border-gray-200 rounded group-hover:border-[#E31E24] transition-all" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">House under construction</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-5 h-5 border-2 border-gray-200 rounded group-hover:border-[#E31E24] transition-all" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Local painter hired</span>
                </label>
              </div>

              <button className="w-full bg-[#FFB800] hover:bg-[#E31E24] text-white py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-4 mt-4">
                Book FREE Site Visit <MoveRight size={20} />
              </button>
              
              <p className="text-[9px] text-gray-400 text-center uppercase tracking-widest leading-relaxed px-8">
                By proceeding, you are authorizing Tawakkal Elite and its suggested contractors to get in touch with you through calls, sms, or e-mail.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
