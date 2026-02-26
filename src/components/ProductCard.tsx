'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { useStore } from '@/store';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative">
      <div className="relative aspect-[4/5] rounded-[2.5rem] bg-[#F7F7F7] overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.98] group-hover:rounded-[3.5rem] shadow-sm hover:shadow-2xl">

        {/* Editorial Badges */}
        <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
          {discount > 0 && (
            <span className="bg-primary text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              -{discount}%
            </span>
          )}
          <span className="glass-dark text-accent text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/5">
            +{product.loyaltyPoints} PTS
          </span>
        </div>

        <button className="absolute top-8 right-8 z-10 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 hover:bg-primary hover:text-white">
          <Heart size={14} strokeWidth={2.5} />
        </button>

        {/* Product Image Stage */}
        <Link href={`/products/${product.id}`} className="block w-full h-full relative">
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-12 mix-blend-multiply transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
        </Link>

        {/* Action Hub - Slips out from bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-primary text-white py-5 rounded-2xl flex items-center justify-center gap-4 font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl shadow-black/20 hover:bg-accent hover:text-primary transition-all duration-500"
          >
            <ShoppingCart size={14} strokeWidth={3} />
            Acquire Now
          </button>
        </div>
      </div>

      {/* Meta Info - Minimalist Editorial */}
      <div className="mt-8 px-4 flex flex-col items-center">
        <p className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-2">{product.brand}</p>
        <h3 className="text-xl font-bold text-primary mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">
          {product.name}
        </h3>
        <div className="flex items-center gap-4">
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs font-black text-primary/10 line-through uppercase tracking-widest">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-lg font-black text-primary tracking-tighter">
            Rs. {product.price.toLocaleString()}
          </span>
        </div>

        {/* Subtle Visual Finish Tag */}
        <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[9px] font-black text-primary uppercase tracking-widest capitalize">{product.category} Finish</span>
        </div>
      </div>
    </div>
  );
}
