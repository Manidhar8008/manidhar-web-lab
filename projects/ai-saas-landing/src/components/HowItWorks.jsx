import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Connect Your Data',
    description: 'Integrate with your existing tools and databases in minutes.',
  },
  {
    number: '02',
    title: 'Train Your Model',
    description: 'Let Aether learn from your data and build custom AI models.',
  },
  {
    number: '03',
    title: 'Deploy Instantly',
    description: 'Go live with one click. No infrastructure setup required.',
  },
  {
    number: '04',
    title: 'Monitor & Optimize',
    description: 'Track performance and get AI-powered recommendations.',
  },
];

export default function HowItWorks() {
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
          How It <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Simple, powerful workflow designed for maximum productivity.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Lines (Desktop only) */}
        <svg className="hidden lg:block absolute top-24 left-0 w-full h-24 text-slate-700/30">
          <line x1="12.5%" y1="0" x2="12.5%" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="37.5%" y1="0" x2="37.5%" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="62.5%" y1="0" x2="62.5%" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="87.5%" y1="0" x2="87.5%" y2="100" stroke="currentColor" strokeWidth="2" />
        </svg>

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Step Circle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-6 mx-auto relative z-10"
            >
              <span className="text-2xl font-bold text-white">{step.number}</span>
            </motion.div>

            {/* Content Card */}
            <motion.div
              whileHover={{ borderColor: '#06b6d4' }}
              className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 transition-colors text-center h-full flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Final Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyan-400 text-4xl"
        >
          ↓
        </motion.div>
        <p className="text-slate-400 mt-4">Your AI is now live and learning</p>
      </motion.div>
    </section>
  );
}
