'use client';

import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: { value: string; label: string }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeCategory === category.value
              ? 'bg-cyan text-charcoal-dark shadow-lg shadow-cyan/30'
              : 'bg-navy text-gray-300 border border-gray-700 hover:border-cyan'
          }`}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;