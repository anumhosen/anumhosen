import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import { personalInfo } from '../../data/personalInfo';

export default function QuickStats() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {personalInfo.stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <GlassCard className="text-center py-6 border-gray-800/60 bg-gray-900/40">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
