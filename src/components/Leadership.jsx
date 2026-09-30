import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Ramesh Singh', role: 'Co-founder & Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Ashi Gupta', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Akshay Gupta', role: 'CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400' }
];

const Leadership = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Meet Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-white shadow-xl relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-xs">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
