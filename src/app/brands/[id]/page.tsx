'use client';

import { use, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { products, brands } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function BrandPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const brand = brands.find((b) => b.id === id);

  if (!brand) {
    notFound();
  }

  const brandProducts = useMemo(() => {
    return products.filter((p) => p.brand.toLowerCase() === brand.name.toLowerCase());
  }, [brand.name]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl p-6 flex flex-shrink-0 items-center justify-center shadow-2xl shadow-black/10"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={120}
                className="object-contain drop-shadow-sm"
              />
            </motion.div>
            <div className="text-center md:text-left flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              >
                {brand.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto md:mx-0"
              >
                {brand.description}
              </motion.p>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-accent text-primary text-sm font-bold px-5 py-2 rounded-full shadow-sm tracking-wide uppercase"
              >
                {brandProducts.length} Products Available
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No products available for this brand yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
