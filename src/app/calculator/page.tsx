'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RefreshCw, MoveRight, Ruler, Layers, Info } from 'lucide-react';

interface RoomDimensions {
  length: number; width: number; height: number; doors: number; windows: number; coats: number;
}

export default function PaintCalculatorPage() {
  const [dimensions, setDimensions] = useState<RoomDimensions>({ length: 0, width: 0, height: 0, doors: 0, windows: 0, coats: 2 });
  const [result, setResult] = useState<{ wallArea: number; paintNeeded: number; litersNeeded: number; } | null>(null);

  const COVERAGE_PER_LITER = 120; 
  const DOOR_AREA = 21; 
  const WINDOW_AREA = 15;

  const calculatePaint = () => {
    const { length, width, height, doors, windows, coats } = dimensions;
    const totalWallArea = (2 * (length + width)) * height - (doors * DOOR_AREA) - (windows * WINDOW_AREA);
    const totalAreaWithCoats = totalWallArea * coats;
    setResult({ wallArea: totalWallArea, paintNeeded: totalAreaWithCoats, litersNeeded: Math.ceil(totalAreaWithCoats / COVERAGE_PER_LITER) });
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Editorial Hero */}
      <div className="relative pt-48 pb-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9F8F6] -skew-x-12 translate-x-1/2" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Precision Metrics</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="display-text text-5xl md:text-8xl">
            The Paint <br /> <span className="accent-serif text-accent">Calculator</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-primary/40 font-medium italic mt-12 max-w-2xl leading-relaxed">
            Eliminate excess through architectural precision. Curate the exact volume required for your bespoke environment.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-20">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Inputs Column */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-12 xl:col-span-7 bg-white p-12 lg:p-20 rounded-[4rem] shadow-2xl shadow-black/5 border border-black/5">
             <div className="flex items-center gap-6 mb-20 pb-10 border-b border-black/5">
                <div className="w-16 h-16 bg-primary rounded-2.5xl flex items-center justify-center text-white"><Ruler size={24} /></div>
                <div>
                   <h2 className="text-xl font-black uppercase tracking-tighter text-primary">Spatial Dimensions</h2>
                   <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mt-1">Define the Canvas</p>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
                {['length', 'width', 'height'].map((key) => (
                  <div key={key} className="flex flex-col gap-4">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] ml-6 opacity-30">{key} (FT)</label>
                     <input 
                       type="number" 
                       className="w-full bg-[#FAFAFA] px-10 py-6 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none font-bold text-xl transition-all"
                       placeholder="0.00"
                       onChange={(e) => setDimensions({...dimensions, [key]: parseFloat(e.target.value) || 0})}
                     />
                  </div>
                ))}
                <div className="flex flex-col gap-4">
                   <label className="text-[10px] font-black uppercase tracking-[0.4em] ml-6 opacity-30">Coatings</label>
                   <select 
                     className="w-full bg-[#FAFAFA] px-10 py-6 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none font-bold text-lg transition-all appearance-none cursor-pointer"
                     onChange={(e) => setDimensions({...dimensions, coats: parseInt(e.target.value)})}
                   >
                      <option value={1}>Single Tier (Economy)</option>
                      <option value={2} selected>Signature Double (Standard)</option>
                      <option value={3}>Triple Depth (Luxury)</option>
                   </select>
                </div>
             </div>

             <div className="flex gap-6 mt-20 pt-10 border-t border-black/5">
                <button onClick={calculatePaint} className="flex-1 btn-ultimate py-6 justify-center shadow-2xl shadow-accent/20">
                   <span>Analyze Spatial Grid</span>
                   <MoveRight size={20} />
                </button>
                <button onClick={() => setResult(null)} className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-primary/20 hover:bg-black/5 hover:text-primary transition-all duration-700">
                   <RefreshCw size={20} />
                </button>
             </div>
          </motion.div>

          {/* Results Column */}
          <aside className="lg:col-span-12 xl:col-span-5 space-y-12">
             <AnimatePresence mode="wait">
                {result ? (
                  <motion.div key="res" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="bg-white p-16 rounded-[4rem] shadow-2xl border border-black/5 overflow-hidden">
                     <h3 className="heading-luxury mb-20 text-center">Synthesis Report</h3>
                     
                     <div className="flex flex-col items-center gap-12 text-center">
                        <div className="relative">
                           <div className="absolute inset-0 bg-accent/10 blur-[60px] rounded-full" />
                           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 relative z-10">Absolute Requirement</p>
                           <h2 className="display-text text-9xl text-primary relative z-10">{result.litersNeeded}</h2>
                           <p className="text-xl font-black uppercase tracking-widest text-primary/20 mt-4 relative z-10">Liters Curated</p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 w-full pt-12 border-t border-black/5">
                           <div className="text-center">
                              <p className="text-[9px] font-black uppercase tracking-widest text-primary/20 mb-2">Net Area</p>
                              <p className="text-2xl font-black tracking-tighter">{result.wallArea.toFixed(0)} <span className="text-[10px] opacity-40">SQFT</span></p>
                           </div>
                           <div className="text-center">
                              <p className="text-[9px] font-black uppercase tracking-widest text-primary/20 mb-2">Gross Target</p>
                              <p className="text-2xl font-black tracking-tighter">{result.paintNeeded.toFixed(0)} <span className="text-[10px] opacity-40">SQFT</span></p>
                           </div>
                        </div>

                        <div className="flex gap-4 p-8 glass rounded-[3rem] border-black/5 bg-background/50">
                           <Info size={20} className="text-accent flex-shrink-0" />
                           <p className="text-[11px] font-medium text-primary/40 leading-relaxed italic text-left">
                             Metrics based on archival coverage of {COVERAGE_PER_LITER} sqft/L. We recommend an 8% luxury buffer for meticulous edges.
                           </p>
                        </div>
                     </div>
                  </motion.div>
                ) : (
                  <div className="bg-white p-20 rounded-[4rem] border border-dashed border-black/10 text-center flex flex-col items-center">
                     <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mb-10"><Calculator size={40} className="text-primary/5" /></div>
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/20 max-w-[180px] leading-relaxed italic">
                        Input spatial metrics to initiate architectural synthesis.
                     </p>
                  </div>
                )}
             </AnimatePresence>

             {/* Pro Advice Card */}
             <div className="glass-dark p-16 rounded-[4rem] text-white overflow-hidden group border border-white/5 shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 rotate-45 group-hover:rotate-0 transition-transform duration-1000"><Layers size={100} /></div>
                <h4 className="heading-luxury !text-accent mb-12 flex items-center gap-4">
                  <div className="w-8 h-px bg-accent" /> Curatorial Tips
                </h4>
                <ul className="space-y-8">
                   {[
                     "Atmospheric Integrity: Paint only in relative humidity below 60%.",
                     "The Layer Rule: Allow 4 hours between signature coats.",
                     "Batch Control: Procure total volume simultaneously for pigment flow."
                   ].map((tip, i) => (
                     <li key={i} className="flex gap-6 items-start">
                        <span className="text-accent font-black text-xs pt-1 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                        <p className="text-sm font-medium text-white/50 leading-relaxed italic group-hover:text-white transition-colors">{tip}</p>
                     </li>
                   ))}
                </ul>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
