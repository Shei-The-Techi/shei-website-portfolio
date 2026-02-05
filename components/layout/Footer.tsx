'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: `mailto:${siteConfig.email}`,
      color: 'hover:text-cyan',
   },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: siteConfig.social.github,
      color: 'hover:text-cyan',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: siteConfig.social.linkedin,
      color: 'hover:text-cyan',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: siteConfig.social.facebook,
      color: 'hover:text-cyan',
    },
    {
      name: 'Twitter',
      icon: FaXTwitter,
      href: siteConfig.social.twitter,
      color: 'hover:text-cyan',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: siteConfig.social.instagram,
      color: 'hover:text-cyan',
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      href: siteConfig.social.tiktok,
      color: 'hover:text-cyan',
    },
  ];

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-navy border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-colors duration-200`}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <Icon className="text-2xl" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-cyan transition-colors duration-200 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;