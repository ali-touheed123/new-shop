'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Paintbrush, Info, RefreshCw, Sparkles, MoveRight, Layers, Ruler } from 'lucide-react';
import Image from 'next/image';

interface RoomDimensions {
  length: number;
  width: number;
  height: number;
  doors: number;
  windows: number;
  coats: number;
}

export default function PaintCalculatorPage() {
  const [dimensions, setDimensions] = useState<RoomDimensions>({
    length: 0,
    width: 0,
    height: 0,
    doors: 0,
    windows: 0,
    coats: 2,
  });

  const [result, setResult] = useState<{
    wallArea: number;
    paintNeeded: number;
    litersNeeded: number;
  } | null>(null);

  const COVERAGE_PER_LITER = 120; // sq ft per liter
  const DOOR_AREA = 21; // sq ft per door
  const WINDOW_AREA = 15; // sq ft per window

  const calculatePaint = () => {
    const { length, width, height, doors, windows, coats } = dimensions;
    const perimeter = 2 * (length + width);
    const totalWallArea = perimeter * height;
    const doorArea = doors * DOOR_AREA;
    const windowArea = windows * WINDOW_AREA;
    const paintableArea = totalWallArea - doorArea - windowArea;
    const totalAreaWithCoats = paintableArea * coats;
    const litersNeeded = Math.ceil(totalAreaWithCoats / COVERAGE_PER_LITER);

    setResult({
      wallArea: paintableArea,
      paintNeeded: totalAreaWithCoats,
      litersNeeded,
    });
  };

  const resetCalculator = () => {
    setDimensions({
      length: 0,
      width: 0,
      height: 0,
      doors: 0,
      windows: 0,
      coats: 2,
    });
    setResult(null);
  };

  const handleInputChange = (field: keyof RoomDimensions, value: string) => {
    const numValue = parseFloat(value) || 0;
    setDimensions((prev) => ({ ...prev, [field]: numValue }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-32">
      {/* Editorial Hero */}
      <div className="relative pt-40 pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F5]" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-black tracking-[0.2em] uppercase text-xs">Precision Tool</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-text text-5xl md:text-7xl lg:text-8xl text-primary"
          >
            The Paint <br />
            <span className="text-accent italic">Calculator</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/50 max-w-2xl mt-8 font-medium leading-relaxed"
          >
            Precisely calculate the essence required for your architectural canvas.
            Eliminate excess, embrace efficiency.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-black/[0.03] border border-black/5"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white">
                <Ruler size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-primary uppercase tracking-tighter">Spatial Metrics</h2>
                <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Define your canvas</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-4">Length (FT)</label>
                  <input
                    type="number"
                    value={dimensions.length || ''}
                    onChange={(e) => handleInputChange('length', e.target.value)}
                    className="w-full bg-[#F9F9F9] px-8 py-5 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-lg"
                    placeholder="0.00"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-4">Width (FT)</label>
                  <input
                    type="number"
                    value={dimensions.width || ''}
                    onChange={(e) => handleInputChange('width', e.target.value)}
                    className="w-full bg-[#F9F9F9] px-8 py-5 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-lg"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-4">Ceiling Height (FT)</label>
                <input
                  type="number"
                  value={dimensions.height || ''}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className="w-full bg-[#F9F9F9] px-8 py-5 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-lg"
                  placeholder="e.g. 10"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-4">Apertures (Doors)</label>
                  <input
                    type="number"
                    value={dimensions.doors || ''}
                    onChange={(e) => handleInputChange('doors', e.target.value)}
                    className="w-full bg-[#F9F9F9] px-8 py-5 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-lg"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-4">Apertures (Windows)</label>
                  <input
                    type="number"
                    value={dimensions.windows || ''}
                    onChange={(e) => handleInputChange('windows', e.target.value)}
                    className="w-full bg-[#F9F9F9] px-8 py-5 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-lg"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-4">Application Layers (Coats)</label>
                <div className="relative group">
                  <select
                    value={dimensions.coats}
                    onChange={(e) => handleInputChange('coats', e.target.value)}
                    className="w-full bg-[#F9F9F9] px-8 py-5 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-lg appearance-none cursor-pointer"
                  >
                    <option value={1}>Single Layer (Minimalist)</option>
                    <option value={2}>Double Layer (Signature Standard)</option>
                    <option value={3}>Triple Layer (Luxury Depth)</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/30">
                    <MoveRight size={20} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="flex gap-6 pt-8">
                <button
                  onClick={calculatePaint}
                  className="flex-1 btn-premium grouping shadow-2xl shadow-primary/20"
                >
                  Analyze Canvas
                  <MoveRight size={20} className="transition-transform group-hover:translate-x-2" />
                </button>
                <button
                  onClick={resetCalculator}
                  className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-primary/30 hover:bg-black/5 hover:text-primary transition-all duration-500"
                >
                  <RefreshCw size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Result Section */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-black/[0.03] border border-black/5 overflow-hidden"
            >
              <h3 className="heading-luxury text-xl text-primary mb-12 uppercase">Synthesis</h3>

              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-12"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest mb-2">Net Area</span>
                        <span className="text-2xl font-black text-primary">{result.wallArea.toFixed(0)} <span className="text-xs font-bold text-foreground/40 italic">SQFT</span></span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest mb-2">Coat Total</span>
                        <span className="text-2xl font-black text-primary">{result.paintNeeded.toFixed(0)} <span className="text-xs font-bold text-foreground/40 italic">SQFT</span></span>
                      </div>
                    </div>

                    <div className="relative py-12 text-center rounded-[2.5rem] bg-gradient-to-br from-[#FAFAFA] to-white border border-black/5 group overflow-hidden">
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <p className="relative z-10 text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-6">Quantity Required</p>
                      <div className="relative z-10 flex flex-col items-center">
                        <span className="text-8xl lg:text-9xl font-black text-primary tracking-tighter leading-none">
                          {result.litersNeeded}
                        </span>
                        <span className="text-sm font-black text-primary uppercase tracking-[0.5em] mt-4 opacity-40">Liters</span>
                      </div>
                    </div>

                    <div className="flex gap-4 p-6 glass rounded-[2rem] border-white/40">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Info size={20} />
                      </div>
                      <p className="text-[11px] font-medium text-foreground/50 leading-relaxed italic">
                        Precision estimate based on {COVERAGE_PER_LITER} sqft/L. We recommend an 8% buffer for meticulous finishing.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-24 text-center"
                  >
                    <div className="w-24 h-24 bg-[#F9F9F9] rounded-full flex items-center justify-center mx-auto mb-8">
                      <Calculator className="text-foreground/10" size={40} />
                    </div>
                    <p className="text-xs font-bold text-foreground/30 uppercase tracking-[0.2em] max-w-[200px] mx-auto leading-relaxed">
                      Inputs required <br /> for spatial synthesis
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Pro Tips Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-dark p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Layers size={80} />
              </div>

              <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] mb-10 text-accent">
                <Sparkles size={16} />
                Curatorial Advice
              </h4>

              <ul className="space-y-6">
                {[
                  "Primal Primer: Crucial for true color integrity.",
                  "Atmospheric Moisture: Paint only in relative humidity below 60%.",
                  "Layer Sifting: Allow 4 hours between signature coats.",
                  "Batch Integrity: Procure total volume simultaneously."
                ].map((tip, i) => (
                  <li key={i} className="flex gap-6 items-start group/tip">
                    <span className="text-accent font-black text-xs pt-1 opacity-40 group-hover/tip:opacity-100 transition-opacity">0{i + 1}</span>
                    <p className="text-sm font-medium text-white/70 group-hover/tip:text-white transition-colors">{tip}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
