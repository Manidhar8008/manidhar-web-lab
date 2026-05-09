import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for exploring AI capabilities',
    features: ['Up to 1M API calls', 'Basic analytics', 'Email support', 'One custom model'],
    featured: false,
  },
  {
    name: 'Professional',
    price: 499,
    description: 'For growing teams and businesses',
    features: ['Up to 50M API calls', 'Advanced analytics', 'Priority support', '5 custom models', 'Custom integrations'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'Unlimited scale for enterprises',
    features: ['Unlimited API calls', 'Real-time analytics', '24/7 dedicated support', 'Unlimited models', 'Custom infrastructure'],
    featured: false,
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Start free, scale as you grow. No credit card required.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          {['monthly', 'annual'].map((cycle) => (
            <motion.button
              key={cycle}
              whileTap={{ scale: 0.95 }}
              onClick={() => setBillingCycle(cycle)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                billingCycle === cycle
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {cycle === 'monthly' ? 'Monthly' : 'Annual (Save 20%)'}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={plan.featured ? { y: -10 } : {}}
            className={`rounded-2xl border transition-all ${
              plan.featured
                ? 'md:scale-105 border-cyan-500/50 bg-gradient-to-br from-slate-800 to-slate-900 ring-2 ring-cyan-500/20'
                : 'border-slate-700/50 bg-slate-800/40 hover:border-cyan-500/30'
            } p-8 flex flex-col relative overflow-hidden`}
          >
            {plan.featured && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                MOST POPULAR
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

            {plan.price !== null ? (
              <>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-cyan-300 text-sm mb-4">Save ${Math.floor(plan.price * 12 * 0.2)}/year</p>
                )}
              </>
            ) : (
              <div className="text-2xl font-bold text-slate-300 mb-6">Custom pricing</div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                plan.featured
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                  : 'border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10'
              }`}
            >
              {plan.cta || 'Get Started'}
            </motion.button>

            <div className="space-y-4 flex-1">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-slate-400">All plans include 14 days free trial. No credit card required.</p>
      </motion.div>
    </section>
  );
}
