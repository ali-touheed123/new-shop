'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, Gift } from 'lucide-react';
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
    <div className="card-luxury group relative flex flex-col h-full bg-white border-0">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          -{discount}%
        </div>
      )}

      {/* Loyalty Points Badge */}
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md text-accent text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-sm border border-black/5">
        <Gift size={14} />
        +{product.loyaltyPoints} pts
      </div>

      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="block relative h-64 overflow-hidden bg-gray-50/50 m-2 rounded-[20px] group-hover:bg-primary/5 transition-colors">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-multiply"
        />
      </Link>

      {/* Product Info */}
      <div className="p-6 pt-4 flex flex-col flex-grow">
        <p className="text-[10px] text-accent font-bold uppercase tracking-widest mb-2">
          {product.brand}
        </p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-black text-xl text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-foreground/60 mb-6 line-clamp-2 leading-relaxed flex-grow font-medium">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-black text-primary tracking-tight">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-foreground/40 line-through font-bold">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Coverage & Finish */}
        {(product.coverage || product.finishType) && (
          <div className="flex flex-wrap gap-2 mb-8">
            {product.coverage && (
              <span className="text-[11px] font-bold bg-gray-50 text-foreground/70 px-3 py-1.5 rounded-full border border-black/5 uppercase tracking-wide">
                {product.coverage}
              </span>
            )}
            {product.finishType && (
              <span className="text-[11px] font-bold bg-gray-50 text-foreground/70 px-3 py-1.5 rounded-full border border-black/5 uppercase tracking-wide">
                {product.finishType}
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-black/5">
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`flex-1 flex items-center justify-center gap-2 h-14 rounded-full font-bold transition-all ${product.inStock
              ? 'bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:-translate-y-1'
              : 'bg-gray-100 text-foreground/40 cursor-not-allowed'
              }`}
          >
            <ShoppingCart size={18} />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <WhatsAppButton variant="product" productName={product.name} />
        </div>
      </div>
    </div>
  );
}
