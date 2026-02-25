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
    <div className="card-luxury group relative flex flex-col h-full bg-white border border-black/5">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          -{discount}%
        </div>
      )}

      {/* Loyalty Points Badge */}
      <div className="absolute top-4 right-4 z-10 bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
        <Gift size={14} />
        +{product.loyaltyPoints} pts
      </div>

      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="block relative h-64 overflow-hidden bg-background m-2 rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
        />
      </Link>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
          {product.brand}
        </p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-foreground/60 mb-4 line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-end gap-3 mb-5">
          <span className="text-2xl font-bold text-primary tracking-tight">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-foreground/40 line-through mb-1 font-medium">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Coverage & Finish */}
        {(product.coverage || product.finishType) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {product.coverage && (
              <span className="text-xs font-medium bg-background text-foreground/70 px-2.5 py-1 rounded border border-black/5">
                {product.coverage}
              </span>
            )}
            {product.finishType && (
              <span className="text-xs font-medium bg-background text-foreground/70 px-2.5 py-1 rounded border border-black/5">
                {product.finishType}
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-2">
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`flex-1 flex items-center justify-center gap-2 h-12 rounded-lg font-medium transition-all ${product.inStock
                ? 'bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:-translate-y-0.5'
                : 'bg-background text-foreground/40 cursor-not-allowed border border-black/5'
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
