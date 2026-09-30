import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'React', 'Node.js', 'JavaScript', 'AI/ML', 'Cloud', 'Mobile', 'Database', 'ERP',
  'Next.js', 'TypeScript', 'Python', 'AWS', 'Tailwind CSS', 'Docker', 'Kubernetes'
];

const Technology = () => {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-brand-navy to-brand-navy -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technologies we excel in.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            We use modern, scalable tech stacks to ensure your products perform flawlessly.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:bg-white/10 transition-colors backdrop-blur-sm cursor-default"
            >
              <span className="text-gray-300 font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
