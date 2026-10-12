import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: object;
}

export function SEO({
  title,
  description,
  keywords = 'packers and movers, packers and movers in karnataka, house shifting services, office relocation, vehicle transport, likhit packers',
  canonical,
  ogImage = 'https://likhitpackers.in/logo.png',
  ogType = 'website',
  schema,
}: SEOProps) {
  const siteUrl = 'https://likhitpackers.in';
  const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Likhit Packers and Movers',
    image: 'https://likhitpackers.in/logo.png',
    '@id': 'https://likhitpackers.in/#organization',
    url: 'https://likhitpackers.in',
    telephone: '+91 9900231434',
    email: 'likhitpg08092020@gmail.com',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kinnal Road, Kalyan Nagar, 1st Cross, 3rd Phase Right near Railway Track',
      addressLocality: 'Koppal',
      addressRegion: 'Karnataka',
      postalCode: '583231',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.3456,
      longitude: 76.1543,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.facebook.com/people/Likhit-packers-and-movers/61566452786416/',
      'https://www.instagram.com/likhit_packers_movers/',
    ],
  };

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Likhit Packers and Movers" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
