'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'IT Support Specialist',
      organization: 'Freelance',
      period: 'June 2021 - Present',
      description:
        'I Provide remote and on site IT support and consulting to Businesses, Organizations and individual clients across diverse industries.',
      
        highlights: [
        'Resolve remote hardware and software issues',
        'Implement cloud and local data backups',
        'Advise on practical security best practices',
        'Reduce downtime through proactive monitoring',
        'Create clear technical documentation',
      ],
    },
    {
      type: 'work',
      title: 'IT Consultant',
      organization: 'CK Marketing Coaching',
      period: 'March 2024 – Present',
      description:
        'Established IT infrastructure for a marketing and coaching company during rapid growth phase.',
      highlights: [
        'Deploy and manage Google Workspace',
        'Implement data security controls',
        'Advise on cost-effective technology decisions',
        'Provide ongoing cloud platform support',
        'Create internal process documentation',
      ],
    },
    {
      type: 'work',
      title: 'Project Lead & IT Support',
      organization: 'Adapo (MVP Startup)',
      period: 'July 2024 – September 2025',
      description:
        'Led technical development and infrastructure while, coordinating platform design and ensuring system reliability during critical development and operation phases.',
      highlights: [
        'Built front-end product interfaces',
        'Streamlined pilot testing and onboarding',
        'Advised on technical roadmap and implementation',
        'Maintain system uptime during demos',
      ],
    },
    {
    type: 'work',
      title: 'IT Support and Administrator',
      organization: 'AVLC Group and BT Concepts',
      period: 'December 2019 – August 2025',
      description:
        'Managed complete IT operations for a multi-department organization, supporting 10+ users across remote and on-site environments.',
      highlights: [
        'Maintained 95% network uptime through proactive monitoring',
        'Administered routers, switches, and wireless access points',
        'Managed user accounts and permissions across platforms and systems',
        'Implemented daily and weekly backups, recovering critical data',
        'Installed and configured operating systems, software, and network devices',
        'Created technical documentation to reduce repeat support inquiries',
        'Trained end users on business applications',
        'Coordinated vendor relationships for hardware and software',
      ],
    },
    {
    type: 'Internship',
      title: 'I.T Support',
      organization: 'National Museums of Kenya',
      period: 'September 2018 – December 2018',
      description:
        'Supported IT operations for a large public institution, gaining exposure to enterprise-scale infrastructure management.',
      highlights: [
        'Monitored network stability and troubleshoot connectivity issues',
        'Assisted with server maintenance and backups',
        'Supported integration of new systems into infrastructure',
        'Provided technical support for hardware and software',
        'Implemented basic security measures to protect systems',
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
             Work <span className="text-cyan">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey 
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