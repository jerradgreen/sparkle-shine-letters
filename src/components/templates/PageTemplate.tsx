import { ReactNode } from 'react';
import { TemplateConfig } from '@/types/template';
import { SEOHead } from '@/components/seo/SEOHead';
import { StructuredData } from '@/components/seo/StructuredData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface PageTemplateProps {
  config: TemplateConfig;
  children: ReactNode;
  canonicalUrl?: string;
  showNavigation?: boolean;
  showFooter?: boolean;
}

export const PageTemplate = ({ 
  config, 
  children, 
  canonicalUrl,
  showNavigation = true,
  showFooter = true
}: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead config={config} canonicalUrl={canonicalUrl} />
      <StructuredData config={config} />
      
      {showNavigation && <Navigation />}
      
      <main className="relative">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};