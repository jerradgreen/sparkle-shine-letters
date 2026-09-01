import { Helmet } from 'react-helmet-async';
import { TemplateConfig } from '@/types/template';

interface StructuredDataProps {
  config: TemplateConfig;
  canonicalUrl?: string;
}

export const StructuredData = ({ config, canonicalUrl }: StructuredDataProps) => {
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": config.business.name,
    "description": config.business.description,
    "url": window.location.origin,
    "logo": "https://cdn.shopify.com/s/files/1/1403/8315/files/small_logo.webp?v=1759941778",
    "image": config.hero.heroImage,
    "telephone": config.business.location?.phone,
    "address": config.business.location ? {
      "@type": "PostalAddress",
      "streetAddress": config.business.location.address,
      "addressLocality": config.business.location.city,
      "addressRegion": config.business.location.state,
      "postalCode": config.business.location.zip,
      "addressCountry": "US"
    } : undefined
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.faq.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://inventory.vintagemarqueelights.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": config.pageTitle,
        "item": currentUrl
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};
