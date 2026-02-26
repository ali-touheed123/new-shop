'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, X, MoveRight, SlidersHorizontal, ChevronDown, ArrowUpRight } from 'lucide-react';
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
      {/* Editorial Header */}
      <div className="relative pt-48 pb-32 overflow-hidden bg-white px-6 sm:px-8 lg:px-12">
        {/* Dynamic Watermark */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9F8F6] -skew-x-12 translate-x-1/2" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">The Global Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-text text-5xl md:text-8xl"
          >
            Artisanal <br />
            <span className="accent-serif text-accent">Catalogue</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-20">

        {/* Advanced Search & Filtering Terminal */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Sidebar - Institutional Filter Column */}
          <aside className="lg:col-span-3 space-y-16">

            {/* Search Hub */}
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-accent transition-colors" size={18} />
              <input
                type="text"
                placeholder="Inquire Collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-full bg-white border border-black/5 shadow-sm outline-none focus:border-accent font-bold text-xs uppercase tracking-widest transition-all"
              />
            </div>

            {/* Filter Groups */}
            <div className="space-y-12 bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-black/5 border border-black/5">
              <div>
                <h4 className="heading-luxury mb-8">Brand Portfolio</h4>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setSelectedBrand('all')}
                    className={`text-[10px] font-black uppercase tracking-[0.2em] text-left transition-colors ${selectedBrand === 'all' ? 'text-accent' : 'text-primary/20 hover:text-primary'}`}
                  >
                    Global Index
                  </button>
                  {brands.map(b => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBrand(b.name.toLowerCase())}
                      className={`text-[10px] font-black uppercase tracking-[0.2em] text-left transition-colors ${selectedBrand === b.name.toLowerCase() ? 'text-accent' : 'text-primary/20 hover:text-primary'}`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-black/5">
                <h4 className="heading-luxury mb-8">Surface Specialty</h4>
                <div className="flex flex-col gap-4">
                  {categories.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`text-[10px] font-black uppercase tracking-[0.2em] text-left transition-colors ${selectedCategory === c.id ? 'text-accent' : 'text-primary/20 hover:text-primary'}`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-black/5">
                <h4 className="heading-luxury mb-8">Value Tier</h4>
                <div className="flex justify-between items-end mb-6">
                  <span className="text-[10px] font-black text-primary/20 uppercase">Max</span>
                  <span className="text-xl font-black text-primary tracking-tighter">Rs. {priceRange[1].toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-1 bg-black/5 rounded-full appearance-none accent-accent cursor-pointer"
                />
              </div>
            </div>

            {/* Vertical Image Callout */}
            <div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden group shadow-2xl">
              <Image src="/images/categories/interior.png" alt="Callout" fill className="object-cover transition-transform duration-[3s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/40" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <p className="accent-serif text-3xl mb-6">The Essence of Quality</p>
                <Link href="/loyalty" className="group/link flex items-center gap-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em]">Join Circle</span>
                  <MoveRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Catalog Grid */}
          <main className="lg:col-span-9">
            <div className="flex justify-between items-center mb-12 pb-6 border-b border-black/5">
              <span className="text-[10px] font-black text-primary/20 uppercase tracking-[0.5em]">
                {filteredProducts.length} Results Discovered
              </span>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary/30">Sort By</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer"
                >
                  <option value="name">Alpha Order</option>
                  <option value="price-low">Price Ascent</option>
                  <option value="price-high">Price Descent</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-40 text-center bg-white rounded-[4rem] border border-dashed border-black/10">
                <Search size={64} className="mx-auto mb-10 text-primary/5" />
                <h2 className="display-text text-3xl mb-4">No Matches</h2>
                <p className="text-primary/30 font-medium italic mb-10">Try refining your archival search criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedBrand('all'); setSelectedCategory('all'); }}
                  className="btn-ultimate mx-auto"
                >
                  <span>Clear Filters</span>
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
