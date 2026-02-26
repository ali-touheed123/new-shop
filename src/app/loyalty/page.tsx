'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Crown, Star, TrendingUp, Award, ShoppingBag, Percent, Clock } from 'lucide-react';
import { useStore } from '@/store';
import { loyaltyTiers } from '@/lib/data';

const tierInfo = [
  { tier: 'bronze', icon: Award, color: '#CD7F32', minPoints: 0 },
  { tier: 'silver', icon: Star, color: '#C0C0C0', minPoints: 1000 },
  { tier: 'gold', icon: Crown, color: '#FFD700', minPoints: 5000 },
  { tier: 'platinum', icon: Gift, color: '#E5E4E2', minPoints: 10000 },
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-8 shadow-lg"
          >
            <Gift className="text-primary" size={40} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Loyalty Rewards
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Earn points on every purchase and unlock exclusive rewards.
            The more you shop, the more you save.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {user ? (
          /* Logged In View */
          <div className="space-y-8">
            {/* User Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 overflow-hidden"
            >
              <div className="bg-primary p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-white/70 mb-2 font-medium">Welcome back,</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{user.name}</h2>
                    <p className="text-accent font-semibold mt-3 uppercase tracking-wider text-sm">
                      {currentTier} Member
                    </p>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-white/70 mb-2 font-medium">Available Points</p>
                    <p className="text-5xl md:text-6xl font-bold text-accent tracking-tighter">
                      {user.points.toLocaleString()}
                    </p>
                    <p className="text-white/60 text-sm mt-3 font-medium">
                      Worth Rs. {(user.points * 1).toLocaleString()} in discounts
                    </p>
                  </div>
                </div>

                {/* Progress to Next Tier */}
                {getNextTier() && (
                  <div className="mt-8">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/60">Progress to {getNextTier()}</span>
                      <span className="text-white/60">{getPointsToNextTier()} points to go</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#d4af37] rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            ((user.points - loyaltyTiers[currentTier].min) /
                              (loyaltyTiers[getNextTier()!].min - loyaltyTiers[currentTier].min)) *
                            100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 bg-gray-50/50">
                <div className="p-8 text-center group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:-translate-y-1 transition-transform">
                    <Percent className="text-accent" size={24} />
                  </div>
                  <p className="text-3xl font-black text-primary mb-1">{currentDiscount}%</p>
                  <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest">Current Discount</p>
                </div>
                <div className="p-8 text-center group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:-translate-y-1 transition-transform">
                    <TrendingUp className="text-accent" size={24} />
                  </div>
                  <p className="text-3xl font-black text-primary mb-1">
                    {loyaltyTiers[currentTier].pointMultiplier}x
                  </p>
                  <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest">Point Multiplier</p>
                </div>
                <div className="p-8 text-center group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:-translate-y-1 transition-transform">
                    <ShoppingBag className="text-accent" size={24} />
                  </div>
                  <p className="text-3xl font-black text-primary mb-1">{user.totalPurchases}</p>
                  <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest">Total Orders</p>
                </div>
                <div className="p-8 text-center group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:-translate-y-1 transition-transform">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <p className="text-xl font-black text-primary mb-1 mt-2">
                    {new Date(user.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                  <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest">Member Since</p>
                </div>
              </div>
            </motion.div>

            {/* Transaction History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl p-8"
            >
              <h3 className="text-2xl font-black text-primary mb-6">Points History</h3>
              {transactions.length > 0 ? (
                <div className="space-y-4">
                  {transactions.slice(0, 10).map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl mb-4 border border-black/5"
                    >
                      <div>
                        <p className="font-bold text-primary text-lg">{transaction.description}</p>
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground/50 mt-1">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`font-bold ${transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                          }`}
                      >
                        {transaction.type === 'earned' ? '+' : '-'}
                        {transaction.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-8">
                  No transactions yet. Start shopping to earn points!
                </p>
              )}
            </motion.div>
          </div>
        ) : (
          /* Not Logged In View */
          <div className="space-y-12">
            {/* Sign Up Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] shadow-2xl shadow-primary/5 p-10 max-w-xl mx-auto border border-black/5"
            >
              {showSignUp ? (
                <form onSubmit={handleSignUp} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#1a1a2e] text-center">
                    Join Our Loyalty Program
                  </h3>
                  <p className="text-gray-600 text-center">
                    Sign up now and get 100 bonus points!
                  </p>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-full border border-black/10 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-lg bg-gray-50 focus:bg-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-full border border-black/10 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-lg bg-gray-50 focus:bg-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-full border border-black/10 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-lg bg-gray-50 focus:bg-white"
                      placeholder="Enter your phone"
                    />
                  </div>

                  <button type="submit" className="w-full btn-luxury">
                    Join Now & Get 100 Points
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowSignUp(false)}
                    className="w-full py-3 text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift className="text-[#d4af37]" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">
                    Join Our Loyalty Program
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Start earning points on every purchase and unlock exclusive discounts!
                  </p>
                  <button onClick={() => setShowSignUp(true)} className="btn-luxury">
                    Sign Up Now
                  </button>
                </div>
              )}
            </motion.div>

            {/* Tiers Explanation */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-primary text-center mb-12 tracking-tight">
                Membership Tiers
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {tierInfo.map((tier, index) => (
                  <motion.div
                    key={tier.tier}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 p-8 text-center"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner"
                      style={{ backgroundColor: `${tier.color}15` }}
                    >
                      <tier.icon size={36} style={{ color: tier.color }} />
                    </div>
                    <h4 className="text-2xl font-black text-primary capitalize mb-2">
                      {tier.tier}
                    </h4>
                    <p className="text-sm text-gray-500 mb-4">
                      {tier.minPoints.toLocaleString()}+ Points
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-[#d4af37] font-semibold">
                        {loyaltyTiers[tier.tier as keyof typeof loyaltyTiers].discount}% Discount
                      </p>
                      <p className="text-gray-600">
                        {loyaltyTiers[tier.tier as keyof typeof loyaltyTiers].pointMultiplier}x Points
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-primary rounded-[2rem] p-10 md:p-16 shadow-2xl shadow-primary/20">
              <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-12 tracking-tight">
                How It Works
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { step: '1', title: 'Sign Up', desc: 'Join for free and get 100 welcome points' },
                  { step: '2', title: 'Shop & Earn', desc: 'Earn points on every purchase you make' },
                  { step: '3', title: 'Redeem & Save', desc: 'Use points for discounts on future orders' },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a1a2e] font-bold text-xl">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/60">{item.desc}</p>
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
