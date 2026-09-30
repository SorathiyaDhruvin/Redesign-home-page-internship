import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Ready to start your next project? Get in touch with our team of experts and let's make your idea happen.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-brand-navy font-bold text-lg">Head Office Noida</span>
                <span className="text-gray-500">130, 131, 132, 2nd Floor, Wave Galleria, Wave City, NH-24, Noida, UP - 201015</span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-navy font-bold text-lg">Pune Office</span>
                <span className="text-gray-500">2nd Floor, Raj Sqaure, Pashan - Sus Rd, Pune, Maharashtra - 411021</span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-navy font-bold text-lg">Email & Phone</span>
                <span className="text-brand-blue font-medium">info@clinginfotech.com</span>
                <span className="text-brand-red font-medium">+91 8264469132</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-light p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2" htmlFor="fullName">Full Name *</label>
                  <input type="text" id="fullName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2" htmlFor="email">Email *</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2" htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2" htmlFor="company">Company</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2" htmlFor="message">Message *</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white resize-none" required></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 rounded-xl bg-brand-navy text-white font-bold hover:bg-brand-blue transition-colors shadow-lg shadow-brand-navy/20">
                Submit Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
