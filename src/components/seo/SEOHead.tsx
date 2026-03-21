import { Helmet } from 'react-helmet-async';
import { TemplateConfig } from '@/types/template';

interface SEOHeadProps {
  config: TemplateConfig;
  canonicalUrl?: string;
}

export const SEOHead = ({ config, canonicalUrl }: SEOHeadProps) => {
  const currentUrl = canonicalUrl || window.location.href;
  
  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{config.pageTitle}</title>
      <meta name="description" content={config.metaDescription} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      <meta name="author" content={config.business.name} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={config.pageTitle} />
      <meta property="og:description" content={config.metaDescription} />
      <meta property="og:image" content={config.hero.heroImage} />
      <meta property="og:site_name" content={config.business.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@VintageMarquee" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={config.pageTitle} />
      <meta name="twitter:description" content={config.metaDescription} />
      <meta name="twitter:image" content={config.hero.heroImage} />
      
      {/* Performance & Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Critical Image Preload */}
      <link rel="preload" as="image" href={config.hero.heroImage} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Theme Color */}
      <meta name="theme-color" content={config.theme.primaryColor} />
      <meta name="msapplication-TileColor" content={config.theme.primaryColor} />
    </Helmet>
  );
};