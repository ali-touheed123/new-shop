'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, Filter, Grid, List, X, MoveRight, SlidersHorizontal, ChevronDown, ArrowUpRight, Hash, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, brands, categories } from '@/lib/data';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedBrand !== 'all') {
      filtered = filtered.filter((p) => p.brand.toLowerCase() === selectedBrand);
    }
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    return filtered;
  }, [searchQuery, selectedBrand, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Vogue-Cover Editorial Header */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-white border-b border-black/5">
        
        {/* Abstract Architectural BG */}
        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
           <div className="absolute top-0 left-1/4 w-px h-full bg-primary" />
           <div className="absolute top-0 right-1/4 w-px h-full bg-primary" />
           <div className="absolute top-1/2 left-0 w-full h-px bg-primary" />
        </div>

        {/* Floating "Inventory" Text in BG */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
           <h2 className="text-[30vw] font-black tracking-tighter uppercase whitespace-nowrap">CATALOGUE</h2>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-4 mb-16 p-2 pr-8 rounded-full glass border border-black/5 shadow-2xl"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-black">26</div>
            <span className="text-accent font-black tracking-[0.5em] uppercase text-[9px]">The Master Archvie</span>
          </motion.div>

          <div className="relative">
             <motion.h1 
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               className="display-text text-6xl md:text-[10vw] mb-4 relative z-20"
             >
               Artisanal <span className="accent-serif text-accent lowercase">vol.</span>
             </motion.h1>
             
             <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                className="absolute top-1/2 left-0 h-px bg-black/5 -z-10"
             />

             <motion.h2 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="display-text text-5xl md:text-[8vw] text-accent tracking-[0.1em] mt-[-2vw]"
             >
               Inventory
             </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-primary/30 max-w-xl mx-auto mt-16 font-medium italic leading-relaxed"
          >
            "A curated index of molecular brilliance, indexed for the architectural avant-garde."
          </motion.p>
        </div>

        {/* Vertical Scroll Indicator */}
        <div className="absolute bottom-12 left-12 flex flex-col items-center gap-6">
           <span className="archival-number rotate-90 origin-left ml-2">INDEX.01</span>
           <div className="w-px h-24 bg-gradient-to-b from-primary/10 to-accent" />
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 mt-32">
        
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* Sidebar - Museum Filter Terminal */}
          <aside className="lg:col-span-3 space-y-20">
             
             {/* Studio Search Terminal */}
             <div className="relative group">
                <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-primary/10 group-focus-within:text-accent transition-colors duration-500" size={20} />
                <input
                  type="text"
                  placeholder="ARCHIVAL SEARCH..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-20 pr-8 py-7 rounded-[2rem] bg-white border border-black/5 shadow-premium outline-none focus:ring-1 focus:ring-accent/20 font-black text-[11px] uppercase tracking-[0.3em] transition-all"
                />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                   <div className="w-1.5 h-1.5 rounded-full bg-primary/5" />
                </div>
             </div>

             {/* Museum Filter Hub */}
             <div className="bg-white p-14 rounded-[4rem] shadow-3xl shadow-black/[0.02] border border-black/[0.03]">
                
                {/* Brand Portfolio with Archival Numbers */}
                <div>
                  <div className="flex justify-between items-center mb-10">
                     <h4 className="heading-luxury">Portfolio Index</h4>
                     <Hash size={12} className="text-primary/10" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <button 
                      onClick={() => setSelectedBrand('all')}
                      className="group flex items-center justify-between"
                    >
                      <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${selectedBrand === 'all' ? 'text-accent' : 'text-primary/30 group-hover:text-primary'}`}>Global Archive</span>
                      <span className="archival-number">00</span>
                    </button>
                    {brands.map((b, i) => (
                      <button 
                        key={b.id}
                        onClick={() => setSelectedBrand(b.name.toLowerCase())}
                        className="group flex items-center justify-between"
                      >
                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${selectedBrand === b.name.toLowerCase() ? 'text-accent' : 'text-primary/30 group-hover:text-primary'}`}>{b.name}</span>
                        <span className="archival-number">{i + 1 < 10 ? `0${i+1}` : i+1}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="my-14 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />

                {/* Specialty with Museum Labels */}
                <div>
                  <h4 className="heading-luxury mb-10">Material Integrity</h4>
                  <div className="flex flex-wrap gap-3">
                    {categories.map(c => (
                      <button 
                        key={c.id}
                        onClick={() => setSelectedCategory(c.id)}
                        className={`px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${selectedCategory === c.id ? 'bg-primary text-white border-primary' : 'bg-transparent text-primary/40 border-black/5 hover:border-accent hover:text-accent'}`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="my-14 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />

                {/* Price Terminal */}
                <div>
                  <div className="flex justify-between items-end mb-8">
                    <h4 className="heading-luxury">Value CAP</h4>
                    <span className="text-2xl font-black text-primary tracking-tighter">Rs. {priceRange[1].toLocaleString()}</span>
                  </div>
                  <div className="relative py-4">
                     <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-0.5 bg-black/5" />
                     </div>
                     <input
                       type="range"
                       min="0"
                       max="10000"
                       step="500"
                       value={priceRange[1]}
                       onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                       className="relative z-10 w-full h-1 bg-transparent appearance-none accent-accent cursor-pointer"
                     />
                  </div>
                </div>
             </div>

             {/* Studio Fidelity Promotion */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="relative p-12 bg-primary rounded-[4rem] text-white overflow-hidden shadow-2xl group"
             >
                <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-[2s]">
                   <Sparkles size={120} />
                </div>
                <div className="relative z-10">
                   <span className="text-accent text-[8px] font-black uppercase tracking-[0.5em] mb-6 block">Luxe Fidelity</span>
                   <h3 className="display-text text-3xl mb-8 normal-case italic font-serif">"Masterful Color Accuracy"</h3>
                   <Link href="/visualizer" className="flex items-center gap-4 group/link">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em]">Learn More</span>
                      <div className="h-px w-10 bg-accent transition-all duration-700 group-hover/link:w-20" />
                   </Link>
                </div>
             </motion.div>
          </aside>

          {/* Catalog Grid */}
          <main className="lg:col-span-9">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary font-black text-xs">
                     {filteredProducts.length}
                  </div>
                  <span className="museum-label tracking-[0.4em]">Index Entries Discovered</span>
               </div>
               
               <div className="flex items-center gap-10">
                  <div className="flex gap-4">
                     <button className="p-3 text-primary"><Grid size={18} /></button>
                     <button className="p-3 text-primary/20 hover:text-primary transition-colors"><List size={18} /></button>
                  </div>
                  <div className="h-10 w-px bg-black/5" />
                  <div className="flex items-center gap-4">
                     <span className="text-[9px] font-black uppercase tracking-widest text-primary/20">Archived By</span>
                     <select 
                       value={sortBy}
                       onChange={(e) => setSortBy(e.target.value)}
                       className="bg-transparent text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer text-accent"
                     >
                       <option value="name">Alpha Order</option>
                       <option value="price-low">Value Ascent</option>
                       <option value="price-high">Value Descent</option>
                     </select>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-24">
               <AnimatePresence mode="popLayout">
                 {filteredProducts.map((product, index) => (
                   <motion.div
                     layout
                     key={product.id}
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: (index % 6) * 0.05 }}
                   >
                     <ProductCard product={product} />
                   </motion.div>
                 ))}
               </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-48 text-center bg-white rounded-[5rem] border border-dashed border-black/10"
              >
                 <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center mx-auto mb-12 opacity-5">
                    <Search size={64} />
                 </div>
                 <h2 className="display-text text-4xl mb-6">Archive Empty</h2>
                 <p className="text-primary/30 font-medium italic mb-12 max-w-xs mx-auto">No pigment records match your current archival search parameters.</p>
                 <button 
                  onClick={() => { setSearchQuery(''); setSelectedBrand('all'); setSelectedCategory('all'); }}
                   className="btn-ultimate mx-auto group"
                 >
                   <span>Reset Archives</span>
                   <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-1000" />
                 </button>
              </motion.div>
            )}
            
            {/* Pagination / End Mark */}
            <div className="mt-40 pt-20 border-t border-black/5 flex flex-col items-center">
               <div className="w-2 h-2 rounded-full bg-accent mb-8" />
               <span className="text-[9px] font-black text-primary/20 uppercase tracking-[0.5em]">Terminal Archive Reached</span>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}

function RefreshCw(props: any) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}
