export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: 'web' | 'security' | 'systems' | 'other';
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Secure E-Commerce Platform',
    description: 'Full-stack e-commerce platform with advanced security features and payment integration.',
    longDescription:
      'Built a comprehensive e-commerce solution with user authentication, encrypted payment processing, and real-time inventory management. Implemented OWASP security best practices including XSS prevention, CSRF protection, and secure session handling.',
    category: 'web',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Security'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Network Security Monitoring Tool',
    description: 'Real-time network monitoring dashboard with threat detection and automated alerting.',
    longDescription:
      'Developed a Python-based network monitoring tool that detects anomalies, tracks suspicious traffic patterns, and sends automated alerts. Features include packet analysis, intrusion detection, and comprehensive logging system.',
    category: 'security',
    tags: ['Python', 'Scapy', 'Docker', 'Redis', 'Cybersecurity'],
    github: 'https://github.com/yourusername/net-monitor',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio site with animations and performance optimization.',
    longDescription:
      'Created a professional portfolio website using Next.js with TypeScript and Tailwind CSS. Features include smooth animations with Framer Motion, security headers, SEO optimization, and perfect Lighthouse scores.',
    category: 'web',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Automated Server Hardening Script',
    description: 'Bash scripts for automated Linux server security configuration and hardening.',
    longDescription:
      'Collection of shell scripts that automate the process of hardening Linux servers. Includes firewall configuration, SSH hardening, automatic updates, intrusion detection setup, and security auditing.',
    category: 'systems',
    tags: ['Bash', 'Linux', 'Security', 'DevOps'],
    github: 'https://github.com/yourusername/server-hardening',
    featured: false,
  },
  {
    id: 5,
    title: 'API Security Gateway',
    description: 'Authentication and rate-limiting middleware for RESTful APIs.',
    longDescription:
      'Built a robust API gateway with JWT authentication, rate limiting, request validation, and comprehensive logging. Protects backend services from common attacks and abuse.',
    category: 'security',
    tags: ['Node.js', 'Express', 'JWT', 'Redis', 'API Security'],
    github: 'https://github.com/yourusername/api-gateway',
    featured: false,
  },
  {
    id: 6,
    title: 'Cloud Infrastructure as Code',
    description: 'Terraform configurations for secure, scalable cloud infrastructure.',
    longDescription:
      'Infrastructure as Code templates for deploying secure cloud environments on AWS. Includes VPC configuration, security groups, load balancers, auto-scaling, and monitoring setup.',
    category: 'systems',
    tags: ['Terraform', 'AWS', 'DevOps', 'Cloud'],
    github: 'https://github.com/yourusername/terraform-aws',
    featured: false,
  },
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'security', label: 'Cybersecurity' },
  { value: 'systems', label: 'Systems & DevOps' },
  { value: 'other', label: 'Other' },
];