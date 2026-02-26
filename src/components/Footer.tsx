'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Twitter, Pinterest, Phone, MapPin, Search } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Colours',
      links: ['Colour by family', 'Colour Collections', 'Colour Tools', 'Inspirations']
    },
    {
      title: 'Products',
      links: ['Inner wall products', 'Outer wall products', 'Waterproofing products', 'Wood & Metal products']
    },
    {
      title: 'Services',
      links: ['BeautifulHomes Painting Service', 'Colour Consultation Online', 'Home Interior Design', 'Bespoke Consultation Service']
    },
    {
      title: 'Shop',
      links: ['E-shop', 'Store Locator', 'Shade card', 'Paints by room']
    },
    {
      title: 'Company',
      links: ['About us', 'Investors', 'Media', 'Careers', 'CSR']
    }
  ];

  return (
    <footer className="bg-[#333333] text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 pb-16 border-b border-gray-600">
          
          {/* Logo & Socials Section */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-10">
            <Link href="/" className="flex flex-col gap-2">
               <h2 className="text-3xl font-black text-white tracking-tighter">TAWAKKAL</h2>
               <span className="text-[10px] text-[#E31E24] font-black uppercase tracking-[0.3em]">Elite Paint House</span>
            </Link>
            
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#E31E24] hover:border-[#E31E24] transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#E31E24] hover:border-[#E31E24] transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#E31E24] hover:border-[#E31E24] transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#E31E24] hover:border-[#E31E24] transition-all">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#E31E24]">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-sm text-gray-400 font-medium hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="py-12 border-b border-gray-600 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-all">
                  <Phone size={20} />
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Call us</span>
                  <span className="text-xl font-black">1800-209-5678</span>
               </div>
            </div>
            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-all">
                  <MapPin size={20} />
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Visit HQ</span>
                  <span className="text-lg font-black italic">Color District, Karachi</span>
               </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/5 px-6 py-4 rounded-xl border border-gray-600 flex items-center gap-4 w-full md:w-[400px]">
               <Search size={18} className="text-gray-400" />
               <input type="text" placeholder="Find stores near you" className="bg-transparent border-none outline-none text-sm font-medium w-full" />
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
           <div className="flex gap-8">
              <span>Sitemap</span>
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
           </div>
           <p>© {currentYear} TAWAKKAL ELITE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
