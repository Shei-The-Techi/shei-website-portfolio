'use client';

import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="pt-32 pb-12 bg-gradient-to-b from-charcoal-dark to-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-cyan">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I would love to hear from you. 
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;