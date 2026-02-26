'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Upload, RotateCcw, Download, Check, Sparkles, MoveRight, Eye, Layers, Trash2 } from 'lucide-react';
import Image from 'next/image';

const colorPalettes = [
  { name: 'Warm Neutrals', colors: ['#F5F5DC', '#E8DCC4', '#D4C4A8', '#C9B896', '#BEA97D'] },
  { name: 'Cool Blues', colors: ['#E6F2FF', '#B3D9FF', '#80C1FF', '#4DA8FF', '#1A8FFF'] },
  { name: 'Earth Tones', colors: ['#8B7355', '#A67B5B', '#C19A6B', '#D4A574', '#E7BC91'] },
  { name: 'Modern Grays', colors: ['#F8F9FA', '#E9ECEF', '#DEE2E6', '#CED4DA', '#ADB5BD'] },
  { name: 'Elegant Greens', colors: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A'] },
  { name: 'Luxe Golds', colors: ['#FFF8E7', '#FFEEBA', '#FFE066', '#FFD700', '#D4AF37'] },
  { name: 'Bold Reds', colors: ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350'] },
  { name: 'Soft Purples', colors: ['#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC'] },
];

const presetRooms = [
  { id: 'living', name: 'Living Room', image: '/images/features/modern-interior.png' },
  { id: 'bedroom', name: 'Bedroom', image: '/images/features/soft-gradient.png' },
  { id: 'exterior', name: 'Exterior', image: '/images/features/exterior-facade.png' },
  { id: 'kitchen', name: 'Kitchen', image: '/images/features/luxury-finish.png' },
];

export default function VisualizerPage() {
  const [selectedColor, setSelectedColor] = useState('#D4AF37');
  const [selectedRoom, setSelectedRoom] = useState(presetRooms[0]);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(50);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetVisualizer = () => {
    setSelectedColor('#D4AF37');
    setSelectedRoom(presetRooms[0]);
    setCustomImage(null);
    setIntensity(50);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Immersive Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Image
          src={customImage || selectedRoom.image}
          alt="Canvas"
          fill
          className="object-cover transition-opacity duration-1000"
        />
        <div
          className="absolute inset-0 mix-blend-multiply transition-all duration-1000 ease-[0.16, 1, 0.3, 1]"
          style={{ backgroundColor: selectedColor, opacity: intensity / 100 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Floating UI Layer */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between p-8 pointer-events-none">

        {/* Top Branding & Exit */}
        <div className="flex justify-between items-start pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass px-8 py-5 rounded-[2rem] border-white/40 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-accent">
              <Palette size={20} />
            </div>
            <div>
              <h1 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Color Atelier</h1>
              <p className="text-[9px] font-bold text-primary/40 uppercase tracking-widest">Digital Projection Studio</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <button
              onClick={resetVisualizer}
              className="w-14 h-14 glass rounded-full flex items-center justify-center text-primary/40 hover:text-primary transition-all duration-500 border-white/40"
            >
              <RotateCcw size={20} />
            </button>
            <button className="btn-premium px-8 grouping shadow-2xl">
              Save Composition
              <Download size={18} />
            </button>
          </motion.div>
        </div>

        {/* Bottom Control Hub */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-end justify-between pointer-events-auto">

          {/* Palette Selection (Large Pill) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass px-10 py-8 rounded-[3.5rem] border-white/40 shadow-2xl flex-1 max-w-4xl"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Curation: The Muse Collection</span>
              <div className="flex gap-2">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">{selectedColor}</span>
                <div className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: selectedColor }} />
              </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar no-scrollbar">
              {colorPalettes.flatMap(p => p.colors).slice(0, 20).map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`relative w-24 h-24 rounded-3xl shrink-0 transition-all duration-500 overflow-hidden ${selectedColor === color ? 'scale-110 shadow-2xl ring-4 ring-white' : 'hover:scale-105 opacity-80'}`}
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                  {selectedColor === color && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check className="text-white" size={24} />
                    </div>
                  )}
                </button>
              ))}
              <button className="w-24 h-24 rounded-3xl shrink-0 glass border-dashed border-2 border-primary/20 flex flex-col items-center justify-center text-primary/40 hover:text-primary hover:border-accent transition-all">
                <Plus size={24} />
                <span className="text-[9px] font-black uppercase tracking-widest mt-2">Custom</span>
              </button>
            </div>
          </motion.div>

          {/* Sidebar Toggle & Contextual View */}
          <div className="flex flex-col gap-6 w-full lg:w-80">

            {/* Intensity Slider (Luxury Ring) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-dark p-8 rounded-[3rem] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Luminance</span>
                <span className="text-xs font-black text-accent">{intensity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={intensity}
                onChange={(e) => setIntensity(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-accent"
              />
            </motion.div>

            {/* Room Selection (Compact Pills) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-[3rem] shadow-2xl border-white/40 h-80 overflow-y-auto no-scrollbar"
            >
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-6">Select Environment</p>
              <div className="grid grid-cols-2 gap-4">
                {presetRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => { setSelectedRoom(room); setCustomImage(null); }}
                    className={`relative aspect-square rounded-2.5xl overflow-hidden transition-all duration-500 ${selectedRoom.id === room.id && !customImage ? 'ring-4 ring-accent' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`}
                  >
                    <Image src={room.image} alt={room.name} fill className="object-cover" />
                  </button>
                ))}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="relative aspect-square rounded-2.5xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-primary/40 hover:bg-white transition-all"
                >
                  <Upload size={20} />
                  <span className="text-[8px] font-black uppercase mt-2">Upload</span>
                  <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Editorial Watermark */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-20">
        <p className="text-[10px] font-medium text-white uppercase tracking-[1em]">Tawakkal Digital Studio &copy; 2026</p>
      </div>
    </div>
  );
}

function Plus(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
