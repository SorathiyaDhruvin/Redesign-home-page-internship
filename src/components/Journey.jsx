import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2019', text: 'A year of foundational growth and learning, we focused on building a strong foundation and establishing our identity.' },
  { year: '2020', text: 'Solidifying our presence, we diversified our services and remained committed to quality and customer satisfaction.' },
  { year: '2021', text: 'We gained momentum and recognition, expanding our client base and embracing new technologies and methodologies.' },
  { year: '2022', text: 'A milestone year, we grew into a matured organization, taking on ambitious projects and delivering greater value.' }
];

const Journey = () => {
  return (
    <section className="py-24 bg-brand-navy text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            A journey as dynamic as us
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 rounded-full hidden md:block" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-5/12" />
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-brand-blue border-4 border-brand-navy flex items-center justify-center font-bold shadow-lg shadow-brand-blue/30 my-4 md:my-0">
                  {item.year.slice(2)}
                </div>
                
                <div className={`w-full md:w-5/12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">In {item.year}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
