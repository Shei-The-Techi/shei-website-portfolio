import { siteConfig } from '@/data/config';
import AboutHero from '@/components/sections/AboutHero';
import Experience from '@/components/sections/Experience';
import Expertise from '@/components/sections/Expertise';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About - ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}'s background, experience, and expertise in IT and cybersecurity.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Experience />
      <Expertise />
    </>
  );
}