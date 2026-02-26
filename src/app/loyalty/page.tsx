'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Crown, Star, TrendingUp, Award, ShoppingBag, Percent, Clock, MoveRight, User, ShieldCheck } from 'lucide-react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      points: 100, // Welcome bonus
      tier: 'bronze' as const,
      totalPurchases: 0,
      joinDate: new Date().toISOString(),
    };
    setUser(newUser);
    setShowSignUp(false);
  };

  const currentTier = user ? getUserTier() : 'bronze';
  const currentDiscount = user ? getDiscount() : 0;

  const getNextTier = () => {
    const tiers = ['bronze', 'silver', 'gold', 'platinum'] as const;
    const currentIndex = tiers.indexOf(currentTier);
    return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null;
  };

  const getPointsToNextTier = () => {
    const nextTier = getNextTier();
    if (!nextTier || !user) return 0;
    return loyaltyTiers[nextTier].min - user.points;
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-32">
      {/* Editorial Hero */}
      <div className="relative pt-40 pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F5]" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-black tracking-[0.2em] uppercase text-xs">The Inner Circle</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-text text-5xl md:text-7xl lg:text-8xl text-primary"
          >
            Privilege <br />
            <span className="text-accent italic">Rewards</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/50 max-w-2xl mt-8 font-medium leading-relaxed"
          >
            Experience the zenith of patronage. Our loyalty program is an artisanal
            experience designed for the most discerning connoisseurs of color.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        {user ? (
          /* Premium Dashboard View */
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-dark p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Crown size={200} />
              </div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
                <div>
                  <p className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2">
                    <User size={14} />
                    Active Membership
                  </p>
                  <h2 className="display-text text-5xl lg:text-6xl mb-4 tracking-tighter">{user.name}</h2>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 glass text-white text-[10px] font-black uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Tier: {currentTier} Status
                  </div>
                </div>

                <div className="lg:text-right flex flex-col items-start lg:items-end">
                  <p className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Artisanal Credits</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl lg:text-8xl font-black text-accent tracking-tighter leading-none">
                      {user.points.toLocaleString()}
                    </span>
                    <span className="text-sm font-black text-white/40 uppercase tracking-widest">PTS</span>
                  </div>
                  <p className="text-xs font-medium text-white/40 mt-6 italic">
                    Equates to <span className="text-white font-bold">Rs. {(user.points * 1).toLocaleString()}</span> in luxury credit
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              {getNextTier() && (
                <div className="mt-16 pt-12 border-t border-white/10 relative z-10">
                  <div className="flex justify-between items-end mb-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Next Evolution</span>
                      <span className="text-lg font-black text-white uppercase">{getNextTier()} Status</span>
                    </div>
                    <span className="text-xs font-medium text-white/40 italic">
                      <span className="text-accent font-black not-italic">{getPointsToNextTier()}</span> credits remaining
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min(
                          ((user.points - loyaltyTiers[currentTier].min) /
                            (loyaltyTiers[getNextTier()!].min - loyaltyTiers[currentTier].min)) *
                          100,
                          100
                        )}%`
                      }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Premium Stat Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Privilege Rate", val: `${currentDiscount}%`, icon: Percent, sub: "Direct Discount" },
                { label: "Amplifier", val: `${loyaltyTiers[currentTier].pointMultiplier}x`, icon: TrendingUp, sub: "Point Multiplier" },
                { label: "Acquisitions", val: user.totalPurchases, icon: ShoppingBag, sub: "Total Lifecycle" },
                { label: "Tenure", val: new Date(user.joinDate).getFullYear(), icon: Clock, sub: "Member Since" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-black/[0.02] border border-black/5 group hover:bg-[#1A1A1A] transition-all duration-700"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-500 mb-6">
                    <stat.icon size={20} />
                  </div>
                  <p className="text-3xl font-black text-primary group-hover:text-white transition-colors mb-2 tracking-tighter">{stat.val}</p>
                  <p className="text-[10px] font-black text-foreground/40 group-hover:text-accent uppercase tracking-widest transition-colors mb-1">{stat.label}</p>
                  <p className="text-[9px] font-medium text-foreground/30 group-hover:text-white/30 italic transition-colors">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Editorial Transaction History */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-black/[0.04] border border-black/5"
            >
              <h3 className="heading-luxury text-xl text-primary mb-12 uppercase">Chronicle of Credit</h3>
              {transactions.length > 0 ? (
                <div className="space-y-6">
                  {transactions.slice(0, 10).map((transaction, i) => (
                    <div key={i} className="flex items-center justify-between py-6 border-b border-black/5 last:border-0 group">
                      <div className="flex gap-6 items-center">
                        <div className="w-10 h-10 rounded-full bg-[#F9F9F9] flex items-center justify-center text-primary font-black text-[10px] group-hover:bg-accent group-hover:text-primary transition-all">
                          {transaction.type === 'earned' ? '+' : '-'}
                        </div>
                        <div>
                          <p className="text-sm font-black text-primary uppercase tracking-tight">{transaction.description}</p>
                          <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em] mt-1">{new Date(transaction.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-xl font-black tracking-tighter ${transaction.type === 'earned' ? 'text-green-600' : 'text-red-500'}`}>
                          {transaction.type === 'earned' ? '+' : '-'}{transaction.points} <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">pts</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 opacity-20">
                  <ShoppingBag size={64} className="mx-auto mb-6" />
                  <p className="text-sm font-black uppercase tracking-[0.3em]">No Heritage Recorded</p>
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          /* Premium Recruitment View */
          <div className="space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] p-16 max-w-2xl mx-auto border border-black/5 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-white to-accent opacity-50" />

              <AnimatePresence mode="wait">
                {showSignUp ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSignUp}
                    className="space-y-10"
                  >
                    <div className="text-center">
                      <h3 className="heading-luxury text-2xl text-primary uppercase mb-3">Enlistment</h3>
                      <p className="text-xs font-medium text-foreground/40 italic">Procure 100 artisanal credits upon induction</p>
                    </div>

                    <div className="space-y-8">
                      {[
                        { label: "Legal Name", type: "text", key: "name", placeholder: "Your name" },
                        { label: "Email Coordinate", type: "email", key: "email", placeholder: "Email address" },
                        { label: "Mobile Conduit", type: "tel", key: "phone", placeholder: "Phone number" }
                      ].map((field) => (
                        <div key={field.key} className="flex flex-col gap-3">
                          <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-4">{field.label}</label>
                          <input
                            type={field.type}
                            required
                            value={formData[field.key as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                            className="w-full bg-[#F9F9F9] px-8 py-5 rounded-full border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-lg"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4 pt-6">
                      <button type="submit" className="btn-premium grouping shadow-2xl shadow-primary/20">
                        Initiate Membership
                        <MoveRight size={20} className="transition-transform group-hover:translate-x-2" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowSignUp(false)}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 hover:text-primary transition-colors py-4"
                      >
                        Decline Induction
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="cta"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-accent/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 overflow-hidden group">
                      <Gift className="text-accent group-hover:scale-125 transition-transform duration-700" size={40} />
                    </div>
                    <h3 className="display-text text-4xl text-primary mb-6 leading-none">The Inner <br /> Circle</h3>
                    <p className="text-base text-foreground/50 mb-12 max-w-sm mx-auto font-medium leading-relaxed italic">
                      Transcend the ordinary. Join the assembly of elite patrons and access unrivaled benefits.
                    </p>
                    <button onClick={() => setShowSignUp(true)} className="btn-premium grouping shadow-2xl shadow-primary/20 scale-110">
                      Request Induction
                      <MoveRight size={20} className="transition-transform group-hover:translate-x-2" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Membership Hierarchy */}
            <div>
              <div className="text-center mb-20">
                <span className="text-accent font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Hierarchy</span>
                <h3 className="heading-luxury text-4xl text-primary uppercase">The Evolution of Status</h3>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {tierInfo.map((tier, index) => (
                  <motion.div
                    key={tier.tier}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-[3rem] shadow-xl shadow-black/[0.03] border border-black/5 p-10 flex flex-col group hover:bg-[#1A1A1A] transition-all duration-700"
                  >
                    <div
                      className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"
                      style={{ backgroundColor: `${tier.color}15` }}
                    >
                      <tier.icon size={28} style={{ color: tier.color }} />
                    </div>
                    <h4 className="heading-luxury text-2xl text-primary group-hover:text-white uppercase transition-colors mb-2">
                      {tier.tier}
                    </h4>
                    <p className="text-[10px] font-black text-foreground/30 group-hover:text-accent uppercase tracking-[0.2em] mb-8 transition-colors">
                      {tier.minPoints.toLocaleString()}+ Credits
                    </p>

                    <div className="mt-auto space-y-4 pt-8 border-t border-black/5 group-hover:border-white/10 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Privilege</span>
                        <span className="text-sm font-black text-primary group-hover:text-accent uppercase">{loyaltyTiers[tier.tier as keyof typeof loyaltyTiers].discount}% OFF</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Growth</span>
                        <span className="text-sm font-black text-primary group-hover:text-accent uppercase">{loyaltyTiers[tier.tier as keyof typeof loyaltyTiers].pointMultiplier}X PTS</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Procedural Overview */}
            <div className="glass-dark rounded-[4rem] p-16 md:p-24 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              <h3 className="heading-luxury text-3xl md:text-5xl text-white uppercase text-center mb-24 tracking-tighter">The Process</h3>
              <div className="grid md:grid-cols-3 gap-20">
                {[
                  { step: 'I', title: 'Induction', desc: 'Secure your place and receive an immediate credit of 100 artisanal points.' },
                  { step: 'II', title: 'Acquisition', desc: 'Accumulate points with every precision high-end procurement.' },
                  { step: 'III', title: 'Evolution', desc: 'Redeem your heritage for unrivaled privileges on future collections.' },
                ].map((item) => (
                  <div key={item.step} className="text-center group">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-10 text-primary font-black text-2xl shadow-2xl shadow-accent/20 transition-transform duration-700 group-hover:scale-110">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-black text-white uppercase tracking-[0.2em] mb-4">{item.title}</h4>
                    <p className="text-base text-white/40 font-medium leading-relaxed italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
