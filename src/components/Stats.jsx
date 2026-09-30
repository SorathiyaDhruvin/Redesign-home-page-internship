import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '350+', label: 'Happy Clients' },
  { value: '390+', label: 'Projects Completed' },
  { value: '32M+', label: 'Lines of Code' },
  { value: '10+', label: 'Years Experience' }
];

const Stats = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl sm:text-5xl font-bold text-brand-navy mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
