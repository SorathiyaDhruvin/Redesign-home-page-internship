import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Cling Info Tech completely transformed our digital presence. Their team understood our vision and delivered a product that exceeded our expectations in every way.",
    author: "Client Partner",
    role: "CEO, Tech Startup"
  },
  {
    content: "The level of professionalism and technical expertise demonstrated by the Cling team is unmatched. They delivered our ERP solution on time and flawless.",
    author: "Enterprise Client",
    role: "Operations Director"
  },
  {
    content: "We partnered with Cling for our AI/ML integration. Their strategic approach and implementation have significantly improved our business efficiency.",
    author: "Technology Partner",
    role: "CTO"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Testimonials
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your Voice, Our Pride! Dive into the heartfelt accounts of our valued patrons. From life-changing experiences to exceptional service, their stories illuminate the essence of our commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
              <div className="mb-8 relative z-10">
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="mt-auto">
                <div className="font-bold text-brand-navy">{testimonial.author}</div>
                <div className="text-sm text-brand-blue">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
