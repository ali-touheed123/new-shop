'use client';

import { motion } from 'framer-motion';
import { Calculator, Palette, Gift, Truck, Shield, Headphones } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Calculator,
    title: 'Paint Calculator',
    description: 'Calculate exactly how much paint you need for your project. No more guessing or wastage.',
    link: '/calculator',
    color: 'bg-blue-500',
  },
  {
    icon: Palette,
    title: 'Color Visualizer',
    description: 'See how colors look on your walls before buying. Upload your room photo and experiment.',
    link: '/visualizer',
    color: 'bg-purple-500',
  },
  {
    icon: Gift,
    title: 'Loyalty Rewards',
    description: 'Earn points on every purchase. Redeem for discounts and exclusive products.',
    link: '/loyalty',
    color: 'bg-amber-500',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep. Track your order in real-time.',
    link: '#',
    color: 'bg-green-500',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% authentic products from authorized dealers. Quality you can trust.',
    link: '#',
    color: 'bg-red-500',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Get professional advice from our paint experts. We help you choose the right colors.',
    link: '#',
    color: 'bg-indigo-500',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/10 text-white font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Premium Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Experience the best in paint shopping with our exclusive features
            designed to make your journey seamless.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={feature.link}
                className="group block bg-white/5 backdrop-blur-sm rounded-[2rem] p-10 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
