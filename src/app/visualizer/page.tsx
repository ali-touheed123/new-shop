'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Upload, Image as ImageIcon, Check, Sliders, MoveRight, Camera, Sparkles, Box } from 'lucide-react';
import Image from 'next/image';

const rooms = [
  { id: 'living', name: 'Grand Salon', image: '/images/features/modern-interior.png' },
  { id: 'bedroom', name: 'Master Suite', image: '/images/categories/interior.png' },
  { id: 'exterior', name: 'Structural Façade', image: '/images/categories/exterior.png' },
];

const palette = [
  { name: 'Heritage Black', color: '#0A0A0B' },
  { name: 'Silk White', color: '#FDFCFB' },
  { name: 'Vintage Gold', color: '#DCC58C' },
  { name: 'Milan Night', color: '#1C1C1E' },
  { name: 'Pure Clay', color: '#EEEBE4' },
];

export default function VisualizerPage() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedColor, setSelectedColor] = useState(palette[1]);
  const [intensity, setIntensity] = useState(70);

  return (
    <div className="min-h-screen bg-background pb-40">
      {/* Editorial Header */}
      <div className="relative pt-48 pb-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9F8F6] -skew-x-12 translate-x-1/2" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">The Atelier</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="display-text text-5xl md:text-8xl">
            color <br /> <span className="accent-serif text-accent">Visualizer</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-primary/40 font-medium italic mt-12 max-w-2xl leading-relaxed">
            Witness the atmospheric transformation. Overlay our high-end pigments onto your architectural canvas in real-time.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-20">
        <div className="grid lg:grid-cols-12 gap-20 items-stretch">
          
          {/* Main Visualizer Stage (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-12">
             <div className="relative aspect-[16/10] rounded-[4rem] overflow-hidden shadow-2xl bg-gray-100 group border border-black/5">
                <Image src={selectedRoom.image} alt="Vision" fill className="object-cover transition-transform duration-[3s] group-hover:scale-105" />
                
                {/* Visual Overlay - The Magic */}
                <div 
                   className="absolute inset-0 mix-blend-multiply transition-all duration-1000"
                   style={{ backgroundColor: selectedColor.color, opacity: intensity / 100 }}
                />

                {/* Studio Overlay Info */}
                <div className="absolute top-12 left-12 z-10">
                   <div className="glass px-6 py-2.5 rounded-full flex items-center gap-3 border border-white/40 shadow-xl">
                      <div className="w-3 h-3 rounded-full animate-pulse bg-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{selectedRoom.name} Stage</span>
                   </div>
                </div>

                <div className="absolute bottom-12 right-12 z-10">
                    <button className="h-16 px-10 rounded-full glass-dark text-white flex items-center gap-4 border border-white/5 transition-all hover:bg-black hover:scale-105 group font-black uppercase text-[10px] tracking-widest shadow-2xl">
                       <Camera size={18} />
                       Capture Atmosphere
                    </button>
                </div>
             </div>

             {/* Room Presets Selective */}
             <div className="grid grid-cols-3 gap-8">
                {rooms.map(room => (
                  <button 
                    key={room.id} 
                    onClick={() => setSelectedRoom(room)}
                    className={`relative aspect-[16/6] rounded-[2.5rem] overflow-hidden group transition-all duration-700 ${selectedRoom.id === room.id ? 'ring-2 ring-accent ring-offset-8 ring-offset-background scale-[1.02]' : 'opacity-40 hover:opacity-100'}`}
                  >
                     <Image src={room.image} alt={room.name} fill className="object-cover transition-transform group-hover:scale-110" />
                     <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-700">{room.name}</span>
                     </div>
                  </button>
                ))}
             </div>
          </div>

          {/* Controls Column (Cols 9-12) */}
          <aside className="lg:col-span-4 flex flex-col gap-12">
             
             {/* Palette Selection */}
             <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-black/5 flex-grow">
                <h3 className="heading-luxury mb-12 flex items-center gap-4">
                   <div className="w-8 h-px bg-accent" /> Curated Pigments
                </h3>
                
                <div className="space-y-6">
                   {palette.map(color => (
                     <button 
                       key={color.name}
                       onClick={() => setSelectedColor(color)}
                       className={`w-full flex items-center gap-6 p-4 rounded-full transition-all duration-700 ${selectedColor.name === color.name ? 'bg-primary' : 'hover:bg-background'}`}
                     >
                        <div 
                          className={`w-12 h-12 rounded-full border-4 border-background shadow-lg transition-transform duration-700 ${selectedColor.name === color.name ? 'scale-110' : ''}`}
                          style={{ backgroundColor: color.color }}
                        />
                        <div className="text-left">
                           <p className={`text-[11px] font-black uppercase tracking-widest ${selectedColor.name === color.name ? 'text-white' : 'text-primary'}`}>{color.name}</p>
                           <p className={`text-[8px] font-black uppercase tracking-[0.4em] opacity-30 ${selectedColor.name === color.name ? 'text-accent' : ''}`}>Pigment Archvie</p>
                        </div>
                        {selectedColor.name === color.name && <Check size={16} className="text-accent ml-auto mr-4" />}
                     </button>
                   ))}
                </div>

                {/* Intensity Slider */}
                <div className="mt-16 pt-12 border-t border-black/5">
                   <div className="flex justify-between items-end mb-8">
                      <p className="heading-luxury !text-primary/20">Chrome Intensity</p>
                      <span className="text-2xl font-black text-primary tracking-tighter">{intensity}%</span>
                   </div>
                   <input 
                      type="range" min="0" max="100" value={intensity} 
                      onChange={(e) => setIntensity(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-background rounded-full appearance-none accent-accent cursor-pointer"
                   />
                </div>
             </div>

             {/* Experience Banner */}
             <div className="glass-dark p-12 rounded-[4rem] text-white flex flex-col items-center text-center group overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <Box size={40} className="text-accent mb-8 group-hover:rotate-[360deg] transition-transform duration-[2s]" />
                <h4 className="display-text text-xl mb-6">Archival <br /> Integrity</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic px-6 mb-10 leading-relaxed">
                   Witness how light interacts with Heritage Pigments.
                </p>
                <button className="btn-ultimate !px-10 shadow-2xl shadow-accent/20">
                   <span>Order Swatch</span>
                   <MoveRight size={16} />
                </button>
             </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
