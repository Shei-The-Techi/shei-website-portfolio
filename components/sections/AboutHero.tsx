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
                I am a passionate <span className="text-cyan font-semibold">IT support</span> and{' '}
                <span className="text-cyan font-semibold">technology consultant</span> with over five years of experience helping businesses and teams keep their systems reliable, secure, and easy to use. 
                My work focuses on practical solutions, fixing issues, setting up systems properly, and making sure technology supports work instead of slowing it down.
              </p>

              <p>
                I support organizations,businesses and individuals across different environments, from day-to-day technical support to setting up infrastructure and advising on better technology decisions. 
                I enjoy working closely with both technical and non-technical teams to solve problems clearly and calmly.
              </p>

              <p>
                Alongside my current experience, I am expanding my skills in cybersecurity, web and system development 
                while exploring how secure systems and AI-assisted tools can improve reliability, monitoring, and operations.
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
              {/* Your Photo */}
              <div className="relative w-full h-full">
                <Image
                  src="/profile-photo.webp"
                  alt={siteConfig.name}
                  fill
                  className="object-cover rounded-2xl border-2 border-cyan/30"
                  priority
                />
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