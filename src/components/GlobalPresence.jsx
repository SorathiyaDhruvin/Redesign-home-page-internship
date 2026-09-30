import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

const GlobalPresence = () => {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Global Reach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-4"
          >
            Our Global Presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg"
          >
            Expanding our global footprint across diverse markets and cultures
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto h-96 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200&h=600" 
            alt="World Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700" 
          />
          <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply" />
          
          <div className="relative z-10 text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Connecting Businesses Worldwide</h3>
            <p className="text-brand-blue font-semibold">Serving clients across continents.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;
