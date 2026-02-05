'use client';

import { siteConfig } from '@/data/config';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: 'text-cyan',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: siteConfig.social.linkedin.replace('https://', ''),
      href: siteConfig.social.linkedin,
      color: 'text-[#0A66C2]',
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: siteConfig.social.github.replace('https://', ''),
      href: siteConfig.social.github,
      color: 'text-white',
    },
  ];

  const socialLinks = [
    {
      icon: FaXTwitter,
      name: 'X',
      href: siteConfig.social.twitter,
      color: 'hover:text-white',
    },
    {
      icon: FaFacebook,
      name: 'Facebook',
      href: siteConfig.social.facebook,
      color: 'hover:text-[#1877F2]',
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      href: siteConfig.social.instagram,
      color: 'hover:text-[#E4405F]',
    },
    {
      icon: FaTiktok,
      name: 'TikTok',
      href: siteConfig.social.tiktok,
      color: 'hover:text-white',
    },
  ];

  return (
    <section className="py-12 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Primary Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Primary <span className="text-cyan">Channels</span>
            </h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-navy border border-gray-800 rounded-lg hover:border-cyan transition-all duration-300"
                  >
                    <div className={`text-3xl ${method.color}`}>
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{method.title}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Social <span className="text-cyan">Media</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Connect with me on social platforms for updates, insights, and discussions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex flex-col items-center justify-center gap-3 p-6 bg-navy border border-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    <Icon className="text-4xl" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;