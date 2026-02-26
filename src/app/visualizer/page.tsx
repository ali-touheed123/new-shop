'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Upload, Image as ImageIcon, Check, Sliders, MoveRight, Camera, Sparkles, Box, Maximize, Activity, Command, Info } from 'lucide-react';
import Image from 'next/image';

const rooms = [
  { id: 'living', name: 'Grand Salon', image: '/images/features/modern-interior.png', perspective: 'ARCH-01' },
  { id: 'bedroom', name: 'Master Suite', image: '/images/categories/interior.png', perspective: 'ARCH-02' },
  { id: 'exterior', name: 'Structural Façade', image: '/images/categories/exterior.png', perspective: 'ARCH-03' },
];

const palette = [
  { id: 'H-01', name: 'Heritage Black', color: '#0A0A0B', batch: '26-A' },
  { id: 'H-02', name: 'Silk White', color: '#FDFCFB', batch: '26-B' },
  { id: 'H-03', name: 'Vintage Gold', color: '#DCC58C', batch: '26-C' },
  { id: 'H-04', name: 'Milan Night', color: '#1C1C1E', batch: '26-D' },
  { id: 'H-05', name: 'Pure Clay', color: '#EEEBE4', batch: '26-E' },
];

export default function VisualizerPage() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedColor, setSelectedColor] = useState(palette[1]);
  const [intensity, setIntensity] = useState(70);
  const [isCapturing, setIsCapturing] = useState(false);

  const handleCapture = () => {
    setIsCapturing(true);
    setTimeout(() => setIsCapturing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-40">
      {/* Editorial Header */}
      <div className="relative pt-60 pb-40 bg-white overflow-hidden border-b border-black/5">
        {/* Visualizer Abstract BG */}
        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.05" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.05" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.05" />
           </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="w-16 h-px bg-accent" />
            <span className="text-secondary font-black tracking-[0.6em] uppercase text-[10px]">Atelier Studio</span>
          </motion.div>

          <div className="relative">
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="display-text text-6xl md:text-[10vw] leading-[0.8]"
             >
               Digital <br />
               <span className="text-gradient-gold lowercase accent-serif text-[8vw]">Studio</span>
             </motion.h1>
             <div className="absolute -top-10 right-20 flex gap-4 opacity-[0.05] pointer-events-none rotate-6">
                <Box size={240} />
             </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-primary/30 max-w-2xl mt-20 font-medium leading-relaxed italic border-l-2 border-accent/20 pl-12"
          >
            "Analyze the interplay of light and high-fidelity pigments. Witness atmospheric integrity before a single drop is committed."
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 mt-24">
        <div className="grid lg:grid-cols-12 gap-24 items-stretch">
          
          {/* Main Visualizer Stage (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-16">
             <motion.div 
               className={`relative aspect-[16/10] rounded-[5rem] overflow-hidden shadow-4xl group border border-black/[0.03] transition-all duration-[1s] ${isCapturing ? 'scale-[0.98] ring-4 ring-accent' : ''}`}
             >
                {/* Visual Content */}
                <Image src={selectedRoom.image} alt="Vision" fill className="object-cover transition-transform duration-[4s] group-hover:scale-105" />
                
                {/* The Molecular Overlay */}
                <div 
                   className="absolute inset-0 mix-blend-multiply transition-all duration-2000 ease-[0.16, 1, 0.3, 1] custom-visualizer-overlay"
                   style={{ backgroundColor: selectedColor.color, opacity: intensity / 100 }}
                />
                
                {/* Studio Interface Elements */}
                <div className="absolute top-12 left-12 z-10 flex flex-col gap-4">
                   <div className="glass px-8 py-3 rounded-full flex items-center gap-4 border border-white/20 shadow-premium">
                      <Activity size={14} className="text-accent animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{selectedRoom.name} Status: High Fidelity</span>
                   </div>
                   <div className="px-6 py-2 rounded-full glass-dark border border-white/5 text-white/40 text-[8px] font-mono uppercase tracking-[0.4em]">
                      STAGE: {selectedRoom.perspective}
                   </div>
                </div>

                {/* Capture Hub */}
                <div className="absolute bottom-12 right-12 z-10 flex gap-6">
                    <button 
                      onClick={handleCapture}
                      className="h-20 px-12 rounded-full glass-dark text-white flex items-center gap-6 border border-white/10 transition-all hover:bg-black hover:scale-105 group shadow-4xl"
                    >
                       <Camera size={20} className="group-hover:rotate-[-15deg] transition-transform" />
                       <span className="font-black uppercase text-[10px] tracking-[0.4em]">Capture Atmosphere</span>
                    </button>
                    <button className="w-20 h-20 rounded-full glass flex items-center justify-center text-primary border border-white/20 hover:bg-white transition-all shadow-premium">
                       <Maximize size={20} />
                    </button>
                </div>

                {/* Shutter Animation */}
                <AnimatePresence>
                   {isCapturing && (
                     <motion.div 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }} 
                       exit={{ opacity: 0 }}
                       className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center"
                     >
                        <Sparkles size={80} className="text-accent mb-8 animate-bounce" />
                        <h2 className="display-text text-4xl">Analyzing Archvie...</h2>
                     </motion.div>
                   )}
                </AnimatePresence>

                {/* Studio Glow Effect */}
                <div 
                  className="absolute inset-x-0 -bottom-1/2 h-full opacity-30 blur-[120px] pointer-events-none transition-all duration-1000"
                  style={{ backgroundColor: selectedColor.color }}
                />
             </motion.div>

             {/* Studio Selector Rail */}
             <div className="grid grid-cols-3 gap-10">
                {rooms.map(room => (
                  <button 
                    key={room.id} 
                    onClick={() => setSelectedRoom(room)}
                    className={`relative p-8 rounded-[4rem] bg-white border transition-all duration-[1s] group overflow-hidden ${selectedRoom.id === room.id ? 'border-accent shadow-4xl ring-1 ring-accent/20' : 'border-black/5 opacity-50 hover:opacity-100'}`}
                  >
                     <div className="relative aspect-[16/6] rounded-[2.5rem] overflow-hidden mb-6">
                        <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{room.name}</span>
                        <span className="archival-number">{room.perspective}</span>
                     </div>
                  </button>
                ))}
             </div>
          </div>

          {/* Precision Controls Terminal (Cols 9-12) */}
          <aside className="lg:col-span-4 flex flex-col gap-16">
             
             {/* The Pigment Rack */}
             <div className="bg-white p-14 rounded-[5rem] shadow-4xl border border-black/[0.03] relative overflow-hidden flex-grow">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] select-none"><Command size={100} /></div>
                
                <div className="relative z-10 flex justify-between items-center mb-16 pb-6 border-b border-black/5">
                   <h3 className="heading-luxury">Pigment Rack</h3>
                   <span className="text-[8px] font-black uppercase text-primary/20">EST. Archvie</span>
                </div>
                
                <div className="space-y-6">
                   {palette.map(color => (
                     <button 
                       key={color.id}
                       onClick={() => setSelectedColor(color)}
                       className={`w-full flex items-center gap-8 p-6 rounded-[2.5rem] transition-all duration-700 relative group overflow-hidden ${selectedColor.id === color.id ? 'bg-primary shadow-4xl' : 'hover:bg-background'}`}
                     >
                        <div className="relative">
                           <div 
                             className={`w-14 h-14 rounded-full border-4 border-background shadow-premium transition-all duration-[1s] group-hover:scale-110 ${selectedColor.id === color.id ? 'scale-115 rotate-12' : ''}`}
                             style={{ backgroundColor: color.color }}
                           />
                           {selectedColor.id === color.id && (
                              <div className="absolute -inset-2 rounded-full border border-accent/40 animate-spin-slow" />
                           )}
                        </div>
                        <div className="text-left">
                           <p className={`text-[11px] font-black uppercase tracking-widest ${selectedColor.id === color.id ? 'text-white' : 'text-primary'}`}>{color.name}</p>
                           <div className="flex items-center gap-4 mt-1 opacity-40">
                              <span className="text-[8px] font-black tracking-[0.2em]">{color.id}</span>
                              <div className="w-1 h-1 rounded-full bg-accent" />
                              <span className="text-[8px] font-black tracking-[0.2em]">BATCH: {color.batch}</span>
                           </div>
                        </div>
                        {selectedColor.id === color.id && (
                           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto mr-4 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary">
                              <Check size={12} strokeWidth={4} />
                           </motion.div>
                        )}
                     </button>
                   ))}
                </div>

                {/* Atmospheric Intensity Archvie */}
                <div className="mt-20 pt-16 border-t border-black/5">
                   <div className="flex justify-between items-end mb-10 px-4">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-2xl bg-background flex items-center justify-center text-primary"><Sliders size={18} /></div>
                         <h4 className="heading-luxury !text-primary/30">Molecular Mix</h4>
                      </div>
                      <span className="display-text text-4xl text-primary tracking-tighter">{intensity}%</span>
                   </div>
                   <div className="relative h-1 w-full bg-background rounded-full group cursor-pointer">
                      <input 
                        type="range" min="0" max="100" value={intensity} 
                        onChange={(e) => setIntensity(parseInt(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-accent rounded-full"
                        style={{ width: `${intensity}%` }}
                      />
                      <motion.div 
                        className="absolute top-1/2 -mt-4 w-8 h-8 rounded-full bg-white border-2 border-accent shadow-premium z-20 pointer-events-none"
                        style={{ left: `calc(${intensity}% - 16px)` }}
                        whileHover={{ scale: 1.2 }}
                      />
                   </div>
                </div>
             </div>

             {/* Studio Intelligence Badge */}
             <div className="glass-dark p-14 rounded-[5rem] text-white flex flex-col items-center text-center group overflow-hidden border border-white/10 shadow-4xl relative">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="w-20 h-20 rounded-[2.5rem] bg-white/5 flex items-center justify-center mb-10 group-hover:border-accent border border-transparent transition-all duration-[1s]">
                   <Info size={32} className="text-accent" />
                </div>
                <h4 className="display-text text-2xl mb-6">Studio <br /> Intelligence</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 italic px-8 mb-12 leading-relaxed">
                   Analysis based on D65 standard illuminant. Atmospheric deviation ±3.2% possible.
                </p>
                <button className="btn-ultimate !w-full justify-center !px-10 group/btn !bg-white !text-primary">
                   <span className="group-hover/btn:tracking-[0.5em] transition-all duration-700">Explore Archvie</span>
                   <MoveRight size={18} />
                </button>
             </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
