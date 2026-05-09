import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Aether transformed our data pipeline. What took weeks now happens in hours. It's a game-changer.",
    author: 'Sarah Chen',
    title: 'VP Engineering, TechCorp',
    avatar: '👩‍💼',
  },
  {
    quote: "The AI capabilities are unmatched. We saved 60% on infrastructure costs in the first month alone.",
    author: 'Marcus Johnson',
    title: 'CEO, FinScale',
    avatar: '👨‍💼',
  },
  {
    quote: "Best platform I've worked with. The support team is incredibly responsive and knowledgeable.",
    author: 'Elena Rodriguez',
    title: 'Data Scientist, AI Labs',
    avatar: '👩‍🔬',
  },
];

export default function Testimonials() {
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
          Loved by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          See what customers are saying about their experience with Aether.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-colors flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-cyan-400">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-200 mb-6 leading-relaxed flex-1">"{testimonial.quote}"</p>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-slate-700/50 pt-6">
              <div className="text-3xl">{testimonial.avatar}</div>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-slate-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-800"
      >
        {[
          { value: '500+', label: 'Companies' },
          { value: '99.9%', label: 'Uptime' },
          { value: '$2B+', label: 'Value Created' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              {stat.value}
            </p>
            <p className="text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
