import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const TechFocus = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Current Tech Focus
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "3D Animation", desc: "Cling Logo animation" },
            { title: "3D Animation", desc: "Advertisement video" },
            { title: "AI", desc: "The Surveillance Model identifies suspicious activity in the video" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-6 bg-brand-light">
                {/* Abstract thumbnail background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-blue-900 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-brand-red text-white transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-500 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechFocus;
