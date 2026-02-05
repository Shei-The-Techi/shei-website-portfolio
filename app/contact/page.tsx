import { siteConfig } from '@/data/config';
import ContactHero from '@/components/sections/ContactHero';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactForm from '@/components/sections/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} for project inquiries, collaborations, or just to say hello.`,
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  );
}