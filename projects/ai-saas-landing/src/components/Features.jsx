import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Process millions of data points in seconds with our distributed infrastructure.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
  },
  {
    icon: '🧠',
    title: 'Intelligent Learning',
    description: 'Self-improving AI that gets smarter with every interaction and data point.',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description: 'Visualize insights and trends as they happen with interactive dashboards.',
  },
  {
    icon: '🔗',
    title: 'Seamless Integration',
    description: 'Connect to 500+ applications and data sources with one-click setup.',
  },
  {
    icon: '🚀',
    title: 'Scale Infinitely',
    description: 'Built for growth, our platform scales from startup to enterprise effortlessly.',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <motion.h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Aether</span>
        </motion.h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Designed for modern teams that demand intelligence, security, and scale.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.1)' }}
            className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 transition-colors group cursor-pointer"
          >
            <motion.div
              className="text-5xl mb-4 inline-block"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
              {feature.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            <motion.div
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
