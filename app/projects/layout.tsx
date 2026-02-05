import { Metadata } from 'next';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: `Projects - ${siteConfig.name}`,
  description: `Explore ${siteConfig.name}'s portfolio of web development, cybersecurity, and systems projects.`,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}