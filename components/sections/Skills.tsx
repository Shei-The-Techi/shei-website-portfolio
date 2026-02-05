'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDocker,
  SiGit,
  SiLinux,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
    { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'Linux', icon: SiLinux, color: 'text-[#FCC624]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies & <span className="text-cyan">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Core technologies I work with to build modern, secure applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-navy border border-gray-800 rounded-lg p-6 text-center hover:border-cyan transition-all duration-300 cursor-pointer"
              >
                <Icon className={`text-5xl mx-auto mb-4 ${skill.color}`} />
                <p className="text-gray-300 font-medium">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;