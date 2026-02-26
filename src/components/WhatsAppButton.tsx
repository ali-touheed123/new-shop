'use client';

import { MessageCircle, MoveRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';

interface WhatsAppButtonProps {
  variant?: 'icon' | 'full' | 'floating' | 'product';
  productName?: string;
  className?: string;
}

export default function WhatsAppButton({
  variant = 'full',
  productName,
  className = '',
}: WhatsAppButtonProps) {
  const getMessage = () => {
    if (productName) {
      return encodeURIComponent(`Hi! I'm interested in ${productName}. Can you provide more details?`);
    }
    return encodeURIComponent('Hi! I would like to inquire about your paint products.');
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${getMessage()}`;

  if (variant === 'icon') {
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500 scale-90 hover:scale-100 ${className}`}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
    );
  }

  if (variant === 'floating') {
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 glass rounded-full flex items-center justify-center text-primary shadow-2xl hover:bg-accent transition-all duration-500 hover:scale-110 border-white/40 ${className}`}
        title="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
        <MessageCircle size={28} className="relative z-10" />
      </a>
    );
  }

  if (variant === 'product') {
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-primary/40 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-500 ${className}`}
      >
        <MessageCircle size={20} />
      </a>
    );
  }

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between px-8 py-5 rounded-full bg-accent text-primary font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-xl shadow-accent/10 hover:shadow-black/5 ${className}`}
    >
      <div className="flex items-center gap-4">
        <MessageCircle size={18} />
        <span>Inquire Direct</span>
      </div>
      <MoveRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
    </a>
  );
}
