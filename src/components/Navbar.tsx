'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Calculator, Palette, Search, MoveRight, Phone } from 'lucide-react';
import { useStore } from '@/store';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const cartCount = useStore((state) => state.getCartCount());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenus = {
    Colours: {
      columns: [
        {
          title: 'Colour by family',
          items: ['All Colours', 'Grey', 'Blue', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Purple', 'Pink', 'Whites', 'Off Whites']
        },
        {
          title: 'Colour Collections',
          items: ['Royale Designer', 'Colour of the year']
        },
        {
          title: 'Colour Tools',
          items: ['Colour Quiz', 'Wall Paint Finder', 'Wood Paint Finder', 'Wood Finish Visualiser', 'Textures For You', 'Shade Cards', 'Visualize Shades']
        },
        {
          title: 'Inspirations',
          items: ['Colour combinations', 'Celebrity homes', 'Home discoveries']
        }
      ]
    },
    Products: {
      columns: [
        {
          title: 'Interior Wall Products',
          items: ['Interior Paints', 'Interior Textures', 'Wallpapers']
        },
        {
          title: 'Exterior Wall Products',
          items: ['Exterior Paints', 'Exterior Textures']
        },
        {
          title: 'Waterproofing Products',
          items: ['All Waterproofing Products', 'Bathroom Waterproofing', 'Terrace & Tank Waterproofing', 'Cracks & Joints Waterproofing']
        },
        {
          title: 'Wood & Metal Products',
          items: ['Wood Base', 'Metal Base', 'Clear Finishes']
        }
      ]
    },
    Services: {
      columns: [
        {
          title: 'Painting Services',
          items: ['Home Painting', 'Commercial Painting', 'Project Estimates']
        },
        {
          title: 'Consultation',
          items: ['Expert Color Advice', 'Site Visit Request']
        }
      ]
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      {/* Top Utility Bar */}
      <div className={`bg-[#F4F4F4] border-b border-gray-200 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto px-12 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[10px] font-bold text-gray-500 hover:text-black uppercase tracking-wider">Our Company</Link>
            <Link href="/" className="text-[10px] font-bold text-gray-500 hover:text-black uppercase tracking-wider">Investors</Link>
            <Link href="/" className="text-[10px] font-bold text-gray-500 hover:text-black uppercase tracking-wider">Careers</Link>
          </div>
          <div className="flex items-center gap-6 border-l border-gray-300 pl-6 h-4">
            <p className="text-[10px] items-center gap-2 font-bold text-gray-500 flex"><Phone size={10} /> 1800-209-5678</p>
          </div>
        </div>
      </div>

      <nav className={`w-full bg-white transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          <div className="flex items-center gap-12">
            {/* Asian Paints Style Logo Section */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 invert">
                <Image src="/images/logo of website.png" alt="Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-black tracking-tight text-[#E31E24]">TAWAKKAL</h1>
                <span className="text-[8px] font-bold text-gray-400 tracking-[0.3em] uppercase">Paint House</span>
              </div>
            </Link>

            {/* Mega Menu Triggers */}
            <div className="hidden lg:flex items-center gap-8 ml-8">
              {Object.keys(megaMenus).map((menu) => (
                <button
                  key={menu}
                  onMouseEnter={() => setActiveMegaMenu(menu)}
                  className={`relative text-xs font-bold uppercase tracking-widest h-14 border-b-2 transition-all ${
                    activeMegaMenu === menu ? 'border-[#E31E24] text-[#E31E24]' : 'border-transparent text-gray-600 hover:text-black'
                  }`}
                >
                  {menu}
                </button>
              ))}
              <Link href="/loyalty" className="text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black">Loyalty</Link>
              <Link href="/visualizer" className="text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black">Visualizer</Link>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-2 bg-[#F4F4F4] px-4 py-2 rounded-lg border border-gray-200">
              <Search size={16} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for paints..." 
                className="bg-transparent border-none outline-none text-xs w-48 font-medium text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center gap-6">
              <Link href="/cart" className="relative group">
                <ShoppingCart size={20} className="text-gray-700 group-hover:text-[#E31E24] transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E31E24] text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link href="/profile" className="hidden lg:block">
                <User size={20} className="text-gray-700 hover:text-[#E31E24]" />
              </Link>
              <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
                <Menu size={24} className="text-gray-700" />
              </button>
            </div>

            <Link
              href="/book-visit"
              className="hidden md:flex items-center gap-2 bg-[#FFB800] hover:bg-[#E31E24] text-white px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Book Free Site Visit
            </Link>
          </div>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 pt-10 pb-16 z-50 overflow-hidden"
          >
            <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-4 gap-12">
              {megaMenus[activeMegaMenu as keyof typeof megaMenus].columns.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-b pb-2">{col.title}</h3>
                  <div className="flex flex-col gap-3">
                    {col.items.map((item, i) => (
                      <Link
                        key={i}
                        href="/products"
                        className="text-sm font-medium text-gray-600 hover:text-[#E31E24] transition-colors flex items-center justify-between group"
                      >
                        {item}
                        {item.includes('New') && <span className="bg-[#E31E24] text-white text-[8px] px-1.5 py-0.5 rounded font-black ml-2 uppercase">New</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-[#F9F9F9] py-8 border-t border-gray-100">
               <div className="max-w-[1400px] mx-auto px-12 flex items-center justify-between">
                  <div className="flex gap-12">
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
                       <Palette size={16} className="text-[#E31E24]" /> Visualizer
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
                       <Calculator size={16} className="text-[#E31E24]" /> Budget Calculator
                    </div>
                  </div>
                  <Link href="/products" className="text-xs font-black text-[#E31E24] uppercase tracking-[0.2em] flex items-center gap-2 group">
                    View All Categories <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[300] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white p-8 flex flex-col gap-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-black text-gray-800 tracking-tight">Navigation</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} className="text-gray-800" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {Object.keys(megaMenus).map((menu) => (
                  <div key={menu} className="border-b border-gray-100 pb-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">{menu}</p>
                    <div className="flex flex-col gap-3 pl-2">
                       {megaMenus[menu as keyof typeof megaMenus].columns[0].items.slice(0, 4).map(item => (
                         <Link key={item} href="/products" className="text-sm font-bold text-gray-600">{item}</Link>
                       ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <Link href="/book-visit" className="w-full py-4 bg-[#FFB800] text-primary rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                   Book Free Visit
                </Link>
                <Link href="/cart" className="w-full py-4 border border-gray-200 text-gray-800 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                   View Cart ({cartCount})
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
