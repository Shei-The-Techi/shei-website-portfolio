'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  gaId: string;
}

const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    console.log('Google Analytics Component Loaded');
    console.log('GA ID received:', gaId);
    console.log('Environment variable:', process.env.NEXT_PUBLIC_GA_ID);
  }, [gaId]);

  if (!gaId || gaId === '') {
    console.error('Google Analytics ID is missing!');
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
            console.log('Google Analytics initialized with ID: ${gaId}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;