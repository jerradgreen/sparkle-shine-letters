import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { TemplateConfig } from '@/types/template';
import { SEOHead } from '@/components/seo/SEOHead';
import { StructuredData } from '@/components/seo/StructuredData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

interface PageTemplateProps {
  config: TemplateConfig;
  children: ReactNode;
  canonicalUrl?: string;
  showNavigation?: boolean;
  showFooter?: boolean;
  showChatbot?: boolean;
}

export const PageTemplate = ({ 
  config, 
  children, 
  canonicalUrl,
  showNavigation = true,
  showFooter = true,
  showChatbot = false
}: PageTemplateProps) => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <SEOHead config={config} canonicalUrl={canonicalUrl} />
        <StructuredData config={config} />
        
        {showNavigation && <Navigation />}
        
        <main className="relative">
          {children}
        </main>
        
        {showFooter && <Footer />}
        {showChatbot && <Chatbot />}
      </div>
    </HelmetProvider>
  );
};