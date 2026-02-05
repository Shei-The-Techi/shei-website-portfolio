'use client';

import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaServer, FaTools } from 'react-icons/fa';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      skills: [
        'React & Next.js',
        'TypeScript & JavaScript',
        'Node.js & Express',
        'RESTful APIs',
        'Database Design (SQL/NoSQL)',
      ],
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity',
      skills: [
        'Security Audits & Penetration Testing',
        'OWASP Top 10 Mitigation',
        'Network Security',
        'Encryption & Authentication',
        'Security Best Practices',
      ],
    },
    {
      icon: FaServer,
      title: 'Systems & DevOps',
      skills: [
        'Linux System Administration',
        'Docker & Containerization',
        'CI/CD Pipelines',
        'Cloud Platforms (AWS/Azure)',
        'Server Hardening',
      ],
    },
    {
      icon: FaTools,
      title: 'Tools & Practices',
      skills: [
        'Git & Version Control',
        'Agile Methodology',
        'Code Review & Testing',
        'Performance Optimization',
        'Documentation',
      ],
    },
  ];

  return (
    <section className="py-20 bg-navy-dark">
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
            Areas of <span className="text-cyan">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skills across development, security, and systems
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-charcoal border border-gray-800 rounded-lg p-8 hover:border-cyan transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan/10 rounded-lg">
                    <Icon className="text-3xl text-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold">{area.title}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {area.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-cyan mt-1 flex-shrink-0">▹</span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;