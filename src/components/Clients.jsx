import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3 block"
          >
            Our Diverse Clientele
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight"
          >
            Trusted by over <span className="text-brand-red">350+</span> clients globally
          </motion.h2>
        </div>

        {/* Abstract elegant client shapes/logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
          {[
            "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", 
            "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z",
            "M4 4h16v16H4V4zm2 2v12h12V6H6z",
            "M12 2L2 22h20L12 2zm0 4l7.5 15h-15L12 6z",
            "M12 21l-9-4V7l9-4 9 4v10l-9 4z"
          ].map((path, index) => (
            <motion.div
              key={`row1-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 text-gray-400 hover:text-brand-blue"
            >
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d={path} />
              </svg>
            </motion.div>
          ))}
          
          {[
            "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", 
            "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5",
            "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
            "M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0zm10-8a8 8 0 1 1 0 16 8 8 0 1 1 0-16z",
            "M4 4h16v16H4V4zm4 4v8h8V8H8z"
          ].map((path, index) => (
            <motion.div
              key={`row2-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 5) * 0.1, duration: 0.5 }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 text-gray-400 hover:text-brand-red"
            >
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d={path} />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
