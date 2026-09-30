import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-brand-blue/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-full bg-brand-red/20 blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-effect-dark p-12 md:p-16 rounded-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Have an idea? Let's make it happen.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Let's discuss your next digital product and explore how we can help you achieve your business goals.
          </p>
          
          <a
            href="#contact"
            className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-brand-red text-white font-semibold hover:bg-red-600 transition-all hover:shadow-lg hover:shadow-red-500/40 hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
