'use client';

import { siteConfig } from '@/data/config';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal-dark to-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-cyan">Me</span>
            </h1>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a passionate <span className="text-cyan font-semibold">IT professional</span> and{' '}
                <span className="text-cyan font-semibold">cybersecurity specialist</span> with a focus on 
                building secure, scalable, and user-friendly applications.
              </p>

              <p>
                My expertise spans across full-stack web development, network security, 
                and systems administration. I believe in writing clean code, implementing 
                robust security practices, and creating solutions that make a real impact.
              </p>

              <p>
                With a strong foundation in both development and security, I approach 
                every project with a security-first mindset, ensuring applications are 
                not only functional but also resilient against modern threats.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
             <motion.div
               whileHover={{ scale: 1.05 }}
               className="text-center"
             >
               <div className="text-3xl font-bold text-cyan mb-2">{siteConfig.stats.yearsExperience}</div>
               <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
              
              <motion.div
               whileHover={{ scale: 1.05 }}
               className="text-center"
             >
               <div className="text-3xl font-bold text-cyan mb-2">{siteConfig.stats.projectsCompleted}</div>
               <div className="text-sm text-gray-400">Projects Completed</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-cyan mb-2">{siteConfig.stats.technologies}</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Placeholder - you'll replace with your actual image later */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-navy rounded-2xl border-2 border-cyan/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-400 text-sm">Your Photo Here</p>
                  <p className="text-gray-500 text-xs mt-2">
                    (Replace this placeholder later)
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/50 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;