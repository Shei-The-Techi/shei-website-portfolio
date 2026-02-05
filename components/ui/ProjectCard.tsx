'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-charcoal border border-gray-800 rounded-lg overflow-hidden hover:border-cyan transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-navy via-charcoal to-navy-dark flex items-center justify-center border-b border-gray-800">
        <div className="text-center">
          <div className="text-5xl mb-2">💻</div>
          <p className="text-gray-500 text-xs">Project Screenshot</p>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-cyan text-charcoal-dark text-xs font-bold rounded-full">
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category */}
        <div className="mb-3">
          <span className="text-xs font-semibold text-cyan uppercase tracking-wide">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-navy text-cyan text-xs rounded border border-cyan/30"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 bg-navy text-gray-400 text-xs rounded border border-gray-700">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-gray-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan transition-colors"
            >
              <FaGithub className="text-xl" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan transition-colors"
            >
              <FaExternalLinkAlt className="text-lg" />
              <span className="text-sm">Demo</span>
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-gray-500 text-sm italic">Private Project</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;