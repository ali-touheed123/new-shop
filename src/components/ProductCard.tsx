'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Gift, ArrowUpRight } from 'lucide-react';
import { Product } from '@/types';
import { useStore } from '@/store';
import WhatsAppButton from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full card-premium overflow-hidden"
    >
      {/* Premium Badges */}
      <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
        {discount > 0 && (
          <div className="bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
            -{discount}%
          </div>
        )}
        <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2 border-white/50 shadow-sm">
          <Gift size={12} className="text-accent" />
          <span className="text-[10px] font-black text-primary uppercase">+{product.loyaltyPoints} PTS</span>
        </div>
      </div>

      <button className="absolute top-6 right-6 z-20 w-10 h-10 glass rounded-full flex items-center justify-center text-primary/40 hover:text-red-500 transition-colors border-white/50">
        <Heart size={18} />
      </button>

      {/* Product Image Stage */}
      <Link
        href={`/products/${product.id}`}
        className="block relative aspect-square m-4 rounded-[2rem] overflow-hidden bg-[#F8F8F8] group-hover:bg-[#F0F0F0] transition-colors duration-700"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-10 group-hover:scale-110 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] mix-blend-multiply"
        />

        {/* Hover View Detail Overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
            <ArrowUpRight size={24} className="text-primary" />
          </div>
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-8 pt-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">
            {product.brand}
          </span>
          <div className="h-px flex-grow mx-4 bg-black/5" />
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="heading-luxury text-xl text-primary mb-3 hover:text-accent transition-colors line-clamp-1 leading-tight uppercase font-black tracking-tighter">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs font-medium text-foreground/40 mb-8 line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Price Information */}
        <div className="flex items-end justify-between mb-8">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-[10px] text-foreground/30 line-through font-bold mb-1">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-3xl font-black text-primary tracking-tighter">
              <span className="text-sm font-bold mr-1">Rs.</span>
              {product.price.toLocaleString()}
            </span>
          </div>

          <div className="flex gap-1">
            {product.finishType && (
              <span className="text-[9px] font-black bg-gray-50 text-foreground/40 px-2 py-1 rounded border border-black/5 uppercase tracking-widest whitespace-nowrap">
                {product.finishType}
              </span>
            )}
          </div>
        </div>

        {/* Global Action Stage */}
        <div className="flex items-center gap-3 pt-6 border-t border-black/5">
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`flex-1 flex items-center justify-center gap-3 h-14 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${product.inStock
                ? 'bg-primary text-white hover:bg-accent hover:text-primary shadow-xl shadow-primary/10 hover:shadow-accent/20 hover:-translate-y-1'
                : 'bg-gray-100 text-foreground/30 cursor-not-allowed'
              }`}
          >
            <ShoppingCart size={16} />
            {product.inStock ? 'Acquire Now' : 'Reserved'}
          </button>

          <WhatsAppButton variant="product" productName={product.name} />
        </div>
      </div>
    </motion.div>
  );
}
