import { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface FormPageTemplateProps {
  title: string;
  description: string;
  formId: string;
  children?: ReactNode;
}

export const FormPageTemplate = ({ 
  title, 
  description, 
  formId,
  children 
}: FormPageTemplateProps) => {
  useEffect(() => {
    // Load Cognito Forms script
    const script = document.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';
    script.setAttribute('data-key', 'dufgHGZ4sU6F2rV69vJTrA');
    script.setAttribute('data-form', formId);
    script.async = true;
    document.body.appendChild(script);

    // Load tracking script
    const trackingScript = document.createElement('script');
    trackingScript.src = '//s.ksrndkehqnwntyxlhgto.com/87022.js';
    trackingScript.async = true;
    document.body.appendChild(trackingScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(trackingScript);
    };
  }, [formId]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | Vintage Marquee Lights</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Navigation />
      
      <main className="relative py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
            <div className="cognito"></div>
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
