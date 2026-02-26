'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, X, MoveRight, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, brands, categories } from '@/lib/data';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
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
    switch (sortBy) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'points': filtered.sort((a, b) => b.loyaltyPoints - a.loyaltyPoints); break;
    }
    return filtered;
  }, [searchQuery, selectedBrand, selectedCategory, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBrand('all');
    setSelectedCategory('all');
    setPriceRange([0, 10000]);
    setSortBy('name');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-32">
      {/* Editorial Header */}
      <div className="relative pt-40 pb-24 overflow-hidden bg-white px-6 sm:px-8 lg:px-12">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F5]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-black tracking-[0.2em] uppercase text-xs">The Catalogue</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-text text-5xl md:text-7xl lg:text-8xl text-primary"
          >
            Artisanal <br />
            <span className="text-accent italic">Inventory</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        {/* Search & Global Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center">
          <div className="relative flex-1 group w-full">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-accent transition-colors" size={24} />
            <input
              type="text"
              placeholder="Search by collection or finish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-20 pr-8 py-6 rounded-full bg-white border border-black/5 shadow-2xl shadow-black/[0.02] outline-none focus:border-accent font-bold text-lg transition-all"
            />
          </div>

          <div className="flex gap-4 w-full lg:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex-1 lg:flex-none flex items-center justify-center gap-4 px-10 py-6 bg-primary text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10"
            >
              <SlidersHorizontal size={18} />
              Refine
            </button>

            <div className="relative flex-1 lg:flex-none">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-10 py-6 pr-16 bg-white rounded-full border border-black/5 font-black text-xs uppercase tracking-[0.2em] text-primary appearance-none cursor-pointer outline-none focus:border-accent"
              >
                <option value="name">Sort: A-Z</option>
                <option value="price-low">Price: Low</option>
                <option value="price-high">Price: High</option>
                <option value="points">Points: High</option>
              </select>
              <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 text-primary/30 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation (Filters) */}
          <aside className="lg:w-80 space-y-12">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-black/[0.03] border border-black/5">
              {/* Brand Filter */}
              <div className="mb-12">
                <h3 className="heading-luxury text-sm text-primary uppercase mb-8">Brand Portfolio</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedBrand('all')}
                    className={`flex items-center justify-between w-full group ${selectedBrand === 'all' ? 'text-accent' : 'text-primary/40 hover:text-primary'}`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest transition-colors">All Collection</span>
                    <div className={`w-2 h-2 rounded-full ${selectedBrand === 'all' ? 'bg-accent scale-150' : 'bg-black/10 group-hover:bg-primary'} transition-all`} />
                  </button>
                  {brands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.name.toLowerCase())}
                      className={`flex items-center justify-between w-full group ${selectedBrand === brand.name.toLowerCase() ? 'text-accent' : 'text-primary/40 hover:text-primary'}`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest transition-colors">{brand.name}</span>
                      <div className={`w-2 h-2 rounded-full ${selectedBrand === brand.name.toLowerCase() ? 'bg-accent scale-150' : 'bg-black/10 group-hover:bg-primary'} transition-all`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-12 pt-12 border-t border-black/5">
                <h3 className="heading-luxury text-sm text-primary uppercase mb-8">Specialization</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`flex items-center justify-between w-full group ${selectedCategory === 'all' ? 'text-accent' : 'text-primary/40 hover:text-primary'}`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest transition-colors">Global Catalog</span>
                    <div className={`w-2 h-2 rounded-full ${selectedCategory === 'all' ? 'bg-accent scale-150' : 'bg-black/10 group-hover:bg-primary'} transition-all`} />
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center justify-between w-full group ${selectedCategory === cat.id ? 'text-accent' : 'text-primary/40 hover:text-primary'}`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest transition-colors">{cat.name}</span>
                      <div className={`w-2 h-2 rounded-full ${selectedCategory === cat.id ? 'bg-accent scale-150' : 'bg-black/10 group-hover:bg-primary'} transition-all`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-12 pt-12 border-t border-black/5">
                <h3 className="heading-luxury text-sm text-primary uppercase mb-8">Value Tier</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Cap</span>
                    <span className="text-xl font-black text-primary tracking-tighter">Rs. {priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-accent h-1 bg-black/5 rounded-full appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="w-full py-5 rounded-full border border-black/10 text-[9px] font-black uppercase tracking-[0.3em] text-foreground/30 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all duration-500"
              >
                Flush Filters
              </button>
            </div>

            {/* Minimalist Visual Callout */}
            <div className="glass-dark p-12 rounded-[3.5rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4">Luxe Fidelity</p>
                <h4 className="heading-luxury text-2xl mb-8 leading-tight">Masterful Color Accuracy</h4>
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest group-hover:text-accent transition-colors">
                  Learn More
                  <MoveRight size={16} className="transition-transform group-hover:translate-x-2" />
                </button>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Grid size={100} />
              </div>
            </div>
          </aside>

          {/* Catalog Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-black/5">
              <span className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.5em]">
                {filteredProducts.length} Results Procured
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-32 text-center bg-white rounded-[3.5rem] border border-dashed border-black/10">
                <div className="w-24 h-24 bg-[#F9F9F9] rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="text-foreground/10" size={40} />
                </div>
                <h2 className="heading-luxury text-2xl text-primary uppercase mb-4">No Matches Found</h2>
                <p className="text-sm font-medium text-foreground/30 italic mb-10">Modify your refined search criteria to discover results.</p>
                <button onClick={clearFilters} className="btn-premium px-12 scale-90">Reset Refining</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
