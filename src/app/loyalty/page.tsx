'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Crown, Star, TrendingUp, Award, ShoppingBag, Percent, Clock, MoveRight, User, ShieldCheck, ArrowUpRight, Diamond, Zap, Fingerprint } from 'lucide-react';
import { useStore } from '@/store';
import { loyaltyTiers } from '@/lib/data';

const tierInfo = [
  { tier: 'bronze', icon: Award, color: '#CD7F32', gradient: 'from-[#CD7F32]/20 to-transparent', label: 'Patron' },
  { tier: 'silver', icon: Zap, color: '#C0C0C0', gradient: 'from-[#C0C0C0]/20 to-transparent', label: 'Echelon' },
  { tier: 'gold', icon: Crown, color: '#D4AF37', gradient: 'from-[#D4AF37]/20 to-transparent', label: 'Distinction' },
  { tier: 'platinum', icon: Diamond, color: '#E5E4E2', gradient: 'from-[#E5E4E2]/20 to-transparent', label: 'Sovereign' },
];

export default function LoyaltyPage() {
  const { user, setUser, getUserTier, getDiscount } = useStore();
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
      {/* Ultimate Loyalty Hero */}
      <div className="relative pt-60 pb-40 overflow-hidden bg-white">
        {/* Architectural Background */}
        <div className="absolute inset-0 opacity-[0.02] select-none pointer-events-none">
           <div className="absolute top-0 right-1/3 w-px h-full bg-primary" />
           <div className="absolute bottom-1/4 left-0 w-full h-px bg-primary" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="w-16 h-px bg-accent" />
            <span className="text-secondary font-black tracking-[0.6em] uppercase text-[10px]">Induction Circle</span>
          </motion.div>

          <div className="relative">
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="display-text text-6xl md:text-[12vw] leading-[0.8]"
             >
               Privilege <br />
               <span className="text-gradient-gold lowercase accent-serif text-[10vw]">Status</span>
             </motion.h1>
             <div className="absolute -top-10 -right-10 opacity-5 rotate-12 scale-150 pointer-events-none">
                <Crown size={300} />
             </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-primary/30 max-w-xl mt-20 font-medium leading-relaxed italic border-l-2 border-accent/20 pl-12"
          >
            " patronage is more than loyalty; it is a shared pursuit of architectural perfection. Welcome to the Inner Circle."
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-20">
        
        {user ? (
          /* High-End Member Dashboard */
          <div className="space-y-24">
             <motion.div
               initial={{ opacity: 0, y: 60 }}
               animate={{ opacity: 1, y: 0 }}
               className="glass-dark p-20 rounded-[5rem] shadow-4xl relative overflow-hidden group"
             >
                {/* Visual Identity Watermark */}
                <div className="absolute -bottom-20 -right-20 opacity-[0.05] group-hover:scale-110 transition-transform duration-[3s]">
                   <Fingerprint size={400} />
                </div>
                
                <div className="relative z-10 grid lg:grid-cols-12 gap-20 items-center text-white">
                   <div className="lg:col-span-7">
                      <div className="flex items-center gap-6 mb-10">
                         <div className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center">
                            <User size={24} className="text-accent" />
                         </div>
                         <h2 className="display-text text-5xl lg:text-7xl group-hover:tracking-wider transition-all duration-1000">{user.name}</h2>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                         <div className="px-8 py-3 rounded-full glass border border-white/10 text-accent text-[9px] font-black uppercase tracking-[0.4em]">
                            STATUS: {currentTier} Distinction
                         </div>
                         <div className="px-8 py-3 rounded-full bg-white/5 text-white/40 text-[9px] font-black uppercase tracking-[0.4em]">
                            ID: #ARC-2026-99
                         </div>
                      </div>
                   </div>

                   <div className="lg:col-span-5 lg:text-right border-l lg:border-l-0 lg:border-r border-white/10 pr-12">
                      <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30 mb-4">HERITAGE CREDITS</p>
                      <div className="flex items-baseline justify-end gap-4">
                         <span className="display-text text-8xl lg:text-[10rem] text-accent leading-none">{user.points}</span>
                         <span className="museum-label !text-white/20 !border-white/10">PTS</span>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Stat Archvie Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                  { label: 'Advantage Tier', val: `${getDiscount()}%`, icon: Percent, sub: 'Global Discount' },
                  { label: 'Yield Multiplier', val: `${loyaltyTiers[currentTier].pointMultiplier}x`, icon: TrendingUp, sub: 'Per Acquisition' },
                  { label: 'Volume Integrity', val: user.totalPurchases, icon: ShoppingBag, sub: 'Archived Purchases' },
                  { label: 'Induction Year', val: 'MMXXVI', icon: Clock, sub: 'Digital Archetype' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i*0.1 }}
                    className="bg-white p-12 rounded-[4rem] shadow-premium border border-black/5 group hover:bg-primary transition-all duration-[1s]"
                  >
                     <div className="w-16 h-16 rounded-[2.5rem] bg-background flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-500 mb-12">
                        <stat.icon size={24} />
                     </div>
                     <div className="space-y-2">
                        <p className="display-text text-5xl text-primary group-hover:text-white transition-colors tracking-tighter">{stat.val}</p>
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">{stat.label}</p>
                        <p className="text-[9px] font-medium text-primary/20 group-hover:text-white/20 italic transition-colors">{stat.sub}</p>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        ) : (
          /* High-End Induction Flow */
          <div className="max-w-5xl mx-auto space-y-40">
             <motion.div
               initial={{ opacity: 0, y: 60 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white p-24 md:p-32 rounded-[5rem] shadow-4xl border border-black/[0.03] text-center relative overflow-hidden"
             >
                {/* Top Border Detail */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent via-white to-accent opacity-50" />
                
                <div className="relative z-10">
                   <div className="w-28 h-28 bg-accent/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-16 studio-glow">
                      <ShieldCheck className="text-accent" size={48} />
                   </div>
                   
                   <h3 className="display-text text-5xl md:text-7xl mb-10">The Inner <br /> <span className="text-gradient-gold accent-serif lowercase">circle</span></h3>
                   <p className="text-xl text-primary/30 font-medium italic mb-20 max-w-lg mx-auto leading-relaxed underline decoration-accent/20 underline-offset-8">
                      "Patronage is the foundation of our archival integrity. Apply for induction into our elite heritage status."
                   </p>

                   {showSignUp ? (
                     <motion.form 
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       onSubmit={handleSignUp} 
                       className="space-y-12 text-left max-w-2xl mx-auto"
                     >
                       <div className="grid md:grid-cols-2 gap-10">
                          {['name', 'email'].map((key) => (
                            <div key={key} className="flex flex-col gap-6">
                               <label className="museum-label ml-4">{key}</label>
                               <input 
                                 required 
                                 className="w-full bg-[#FAFAFA] px-10 py-7 rounded-[2rem] border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-black text-xs uppercase tracking-widest shadow-inner"
                                 placeholder={`CONFIRM ${key}...`}
                                 onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                               />
                            </div>
                          ))}
                       </div>
                       <div className="flex flex-col gap-6">
                          <label className="museum-label ml-4">Phone Coordinates</label>
                          <input 
                            required 
                            className="w-full bg-[#FAFAFA] px-10 py-7 rounded-[2rem] border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-black text-xs uppercase tracking-widest shadow-inner"
                            placeholder="CONFIRM PHONE..."
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                       </div>
                       <button type="submit" className="btn-ultimate w-full justify-center py-8 shadow-3xl shadow-accent/10 group">
                          <span className="group-hover:tracking-[0.5em] transition-all duration-700">Apply for Archival Induction</span>
                          <MoveRight size={20} className="group-hover:translate-x-4 transition-transform" />
                       </button>
                     </motion.form>
                   ) : (
                     <button onClick={() => setShowSignUp(true)} className="btn-ultimate mx-auto scale-125 hover:scale-110 shadow-4xl shadow-accent/20">
                       <span>Initiate Induction</span>
                       <MoveRight size={20} />
                     </button>
                   )}
                </div>
             </motion.div>

             {/* Heritage Hierarchy */}
             <div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 border-b border-black/5 pb-10 px-12">
                   <div>
                      <h4 className="heading-luxury mb-4">Heritage Hierarchy</h4>
                      <h2 className="display-text text-5xl tracking-[-0.05em]">Echelons <span className="accent-serif text-accent lowercase">of</span> Status</h2>
                   </div>
                   <p className="text-secondary/30 italic font-medium text-lg max-w-xs md:text-right">
                      "Each tier represents a deeper integration with our chemical heritage."
                   </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                   {tierInfo.map((tier, i) => (
                     <motion.div 
                       key={i} 
                       whileHover={{ y: -20 }}
                       className={`bg-white p-14 rounded-[4.5rem] shadow-premium border border-black/[0.03] flex flex-col items-center text-center relative overflow-hidden group transition-all duration-1000`}
                     >
                        {/* Tier Identity Glow */}
                        <div className={`absolute top-0 left-0 w-full h-40 bg-gradient-to-b ${tier.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-1000`} />
                        
                        <div className="relative z-10 w-24 h-24 rounded-[2.5rem] bg-background flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-700">
                           <tier.icon size={40} style={{ color: tier.color }} className="drop-shadow-lg" />
                        </div>
                        
                        <div className="relative z-10 mb-12">
                           <h4 className="display-text text-3xl group-hover:text-accent transition-colors duration-700 mb-2">{tier.tier}</h4>
                           <span className="px-6 py-2 rounded-full glass border border-black/5 text-[8px] font-black uppercase tracking-[0.4em] text-primary/40">Tier: {tier.label}</span>
                        </div>

                        <div className="relative z-10 w-full px-6 space-y-8">
                           <div className="flex justify-between items-center">
                              <span className="archival-number">Credits Req.</span>
                              <span className="text-[11px] font-black text-primary tracking-tighter">{loyaltyTiers[tier.tier as keyof typeof loyaltyTiers].min}+</span>
                           </div>
                           <div className="w-full h-px bg-black/5" />
                           <div className="flex justify-between items-center group-hover:px-4 transition-all duration-700">
                              <span className="museum-label !border-none !pl-0">Advantage</span>
                              <span className="display-text text-2xl text-accent">{loyaltyTiers[tier.tier as keyof typeof loyaltyTiers].discount}%</span>
                           </div>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>

             {/* The Master Process */}
             <div className="bg-primary rounded-[5rem] p-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-24 opacity-[0.03] rotate-[15deg]">
                   <h2 className="text-[20vw] font-black italic">PROCESS</h2>
                </div>
                
                <div className="relative z-10 max-w-3xl">
                   <h4 className="heading-luxury !text-accent mb-20 flex items-center gap-6">
                      <div className="w-12 h-px bg-accent" /> The Sovereignty Path
                   </h4>
                   
                   <div className="space-y-24">
                      {[
                        { step: 'Induction', desc: 'Secure your unique digital fingerprint and initiate your first archival purchase.' },
                        { step: 'Acquisition', desc: 'Accumulate credits across our global portfolio of prestigious pigment houses.' },
                        { step: 'Evolution', desc: 'Ascend the echelons of status and unlock unrivaled architectural privileges.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-12 group">
                           <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center font-black text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-700">
                                 {i + 1}
                              </div>
                              {i < 2 && <div className="w-px h-full bg-white/10 mt-4 group-hover:bg-accent transition-colors duration-1000" />}
                           </div>
                           <div className="pt-4">
                              <h3 className="display-text text-3xl group-hover:text-accent transition-colors duration-700 mb-6">{item.step}</h3>
                              <p className="text-white/30 text-lg leading-relaxed max-w-md italic group-hover:text-white transition-colors">"{item.desc}"</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
