'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Crown, Star, TrendingUp, Award, ShoppingBag, Percent, Clock, MoveRight, User, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useStore } from '@/store';
import { loyaltyTiers } from '@/lib/data';

const tierInfo = [
  { tier: 'bronze', icon: Award, color: '#CD7F32', minPoints: 0 },
  { tier: 'silver', icon: Star, color: '#C0C0C0', minPoints: 1000 },
  { tier: 'gold', icon: Crown, color: '#D4AF37', minPoints: 5000 },
  { tier: 'platinum', icon: ShieldCheck, color: '#E5E4E2', minPoints: 10000 },
];

export default function LoyaltyPage() {
  const { user, setUser, transactions, getUserTier, getDiscount } = useStore();
  const [showSignUp, setShowSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      points: 100,
      tier: 'bronze',
      totalPurchases: 0,
      joinDate: new Date().toISOString(),
    });
    setShowSignUp(false);
  };

  const currentTier = user ? getUserTier() : 'bronze';

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Editorial Hero */}
      <div className="relative pt-48 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9F8F6] -skew-x-12 translate-x-1/2" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">The Inner Circle</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-text text-5xl md:text-8xl"
          >
            Privilege <br />
            <span className="accent-serif text-accent">Status</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-primary/40 max-w-2xl mt-12 font-medium leading-relaxed italic"
          >
            Experience the zenith of patronage. Our loyalty program is an artisanal experience designed for elite connoisseurs of color.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-20">

        {user ? (
          /* High-End Member Dashboard */
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-dark p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group border border-white/5"
            >
              <div className="absolute top-0 right-0 p-16 opacity-[0.03] rotate-12">
                <Crown size={240} />
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center text-white">
                <div>
                  <h2 className="display-text text-4xl lg:text-6xl mb-6 tracking-tighter uppercase">{user.name}</h2>
                  <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Tier: {currentTier} Distinction
                  </div>
                </div>

                <div className="md:text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-2">Heritage Credits</p>
                  <div className="flex items-baseline justify-end gap-3 text-accent font-black">
                    <span className="text-8xl lg:text-9xl tracking-tighter">{user.points}</span>
                    <span className="text-xs uppercase tracking-[0.4em] opacity-40">PTS</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stat Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Advantage', val: `${getDiscount()}%`, icon: Percent },
                { label: 'Multiplier', val: `${loyaltyTiers[currentTier].pointMultiplier}x`, icon: TrendingUp },
                { label: 'Total Value', val: user.totalPurchases, icon: ShoppingBag },
                { label: 'Established', val: '2026', icon: Clock }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl shadow-black/5 border border-black/5 group hover:bg-primary transition-all duration-1000"
                >
                  <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-500 mb-8">
                    <stat.icon size={22} />
                  </div>
                  <p className="text-4xl font-black text-primary group-hover:text-white transition-colors mb-2 tracking-tighter">{stat.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 group-hover:text-accent transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* High-End Recruitment Flow */
          <div className="max-w-3xl mx-auto space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-20 rounded-[4rem] shadow-2xl shadow-black/5 border border-black/5 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent via-white to-accent opacity-50" />

              <div className="w-24 h-24 bg-accent/10 rounded-[2rem] flex items-center justify-center mx-auto mb-12">
                <ShieldCheck className="text-accent" size={40} />
              </div>

              <h3 className="display-text text-4xl mb-6">Induction <br /> <span className="accent-serif text-accent">Circle</span></h3>
              <p className="text-lg text-primary/40 font-medium italic mb-16 max-w-sm mx-auto leading-relaxed">
                Join the assembly of elite patrons and access unrivaled benefits curated for the modern visionary.
              </p>

              {showSignUp ? (
                <form onSubmit={handleSignUp} className="space-y-10 text-left">
                  <div className="space-y-8">
                    {['name', 'email', 'phone'].map((key) => (
                      <div key={key} className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] ml-6 opacity-30">{key}</label>
                        <input
                          required
                          className="w-full bg-[#FAFAFA] px-10 py-5 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-lg"
                          placeholder={`Confirm ${key}...`}
                          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        />
                      </div>
                    ))}
                  </div>
                  <button type="submit" className="btn-ultimate w-full justify-center py-6 shadow-2xl shadow-accent/20">
                    <span>Apply for Membership</span>
                    <MoveRight size={20} />
                  </button>
                </form>
              ) : (
                <button onClick={() => setShowSignUp(true)} className="btn-ultimate mx-auto scale-110">
                  <span>Request Induction</span>
                  <MoveRight size={20} />
                </button>
              )}
            </motion.div>

            {/* Hierarchy */}
            <div>
              <div className="text-center mb-24">
                <h4 className="heading-luxury mb-6">Hierarchy</h4>
                <h2 className="display-text text-4xl lg:text-5xl uppercase tracking-tighter">The Evolution of Status</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-10">
                {tierInfo.map((tier, i) => (
                  <motion.div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-black/5 flex flex-col items-center text-center group hover:bg-primary transition-all duration-1000">
                    <div className="w-20 h-20 rounded-[2rem] bg-background flex items-center justify-center mb-10 group-hover:bg-accent transition-colors duration-1000">
                      <tier.icon size={32} style={{ color: tier.color }} className="group-hover:!text-primary" />
                    </div>
                    <h4 className="display-text text-2xl text-primary group-hover:text-white uppercase mb-4 transition-colors">{tier.tier}</h4>
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-accent mb-8">{tier.minPoints}+ Credits</p>
                    <div className="w-full h-px bg-black/5 group-hover:bg-white/10 mb-8" />
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 group-hover:text-accent">
                        <span>Privilege</span>
                        <span className="text-primary group-hover:text-white">{loyaltyTiers[tier.tier as keyof typeof loyaltyTiers].discount}% OFF</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
