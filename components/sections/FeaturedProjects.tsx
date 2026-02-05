'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const MotionLink = motion(Link);

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Secure Web Application',
      description:
        'A full-stack web application with advanced security features including CSP, XSS protection, and encrypted data handling.',
      tags: ['Next.js', 'TypeScript', 'Security'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Network Monitoring Tool',
      description:
        'Real-time network monitoring dashboard with threat detection and automated alerting system.',
      tags: ['Python', 'Docker', 'Cybersecurity'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio site built with Next.js, featuring animations and optimized performance.',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      github: '#',
      demo: '#',
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
            Featured <span className="text-cyan">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of recent work showcasing my expertise in web development and cybersecurity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-charcoal border border-gray-800 rounded-lg p-6 hover:border-cyan transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-navy text-cyan text-sm rounded-full border border-cyan/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <MotionLink
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 border-2 border-cyan text-cyan font-semibold rounded-lg hover:bg-cyan hover:text-charcoal-dark transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
