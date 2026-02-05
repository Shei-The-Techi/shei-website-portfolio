'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior IT Specialist',
      organization: 'Tech Company',
      period: '2022 - Present',
      description:
        'Leading cybersecurity initiatives and developing secure web applications. Implemented security protocols that reduced vulnerabilities by 60%.',
      highlights: [
        'Architected secure cloud infrastructure',
        'Led security audits and penetration testing',
        'Mentored junior developers on security best practices',
      ],
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'Digital Agency',
      period: '2020 - 2022',
      description:
        'Built responsive web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.',
      highlights: [
        'Developed 15+ client projects from concept to deployment',
        'Optimized application performance by 40%',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University Name',
      period: '2016 - 2020',
      description:
        'Focused on cybersecurity, network systems, and software engineering. Graduated with honors.',
      highlights: [
        'Specialized in Cybersecurity',
        'Dean\'s List all semesters',
        'Lead developer for capstone project',
      ],
    },
  ];

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
            Experience & <span className="text-cyan">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan via-cyan/50 to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}
                >
                  <div className="bg-navy border border-gray-800 rounded-lg p-6 hover:border-cyan transition-all duration-300">
                    {/* Icon & Type */}
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.type === 'work' ? (
                        <FaBriefcase className="text-cyan text-xl" />
                      ) : (
                        <FaGraduationCap className="text-cyan text-xl" />
                      )}
                      <span className="text-cyan text-sm font-semibold uppercase">
                        {exp.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-gray-400 mb-2">{exp.organization}</p>
                    <p className="text-sm text-cyan mb-4">{exp.period}</p>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-cyan mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan rounded-full border-4 border-charcoal"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;