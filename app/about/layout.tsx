import { Metadata } from 'next';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: `About - ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}'s background, experience, and expertise in IT and cybersecurity.`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
