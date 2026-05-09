import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyan-500/30 text-cyan-300 text-sm font-medium">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Powered by Advanced AI
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          The Future of{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Intelligent Automation
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Harness the power of next-generation AI to transform your business. Aether delivers enterprise-grade intelligence with unmatched simplicity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-shadow"
          >
            Get Started Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Hero Graphic */}
        <motion.div
          variants={itemVariants}
          className="relative mt-20"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-400 text-sm mt-4 text-center">AI Neural Network Visualization</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-slate-800/50 flex justify-center gap-8 flex-wrap">
          {['Trusted by 500+ Companies', '99.9% Uptime', 'SOC 2 Certified'].map((badge, i) => (
            <div key={i} className="text-slate-400 text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
              {badge}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
