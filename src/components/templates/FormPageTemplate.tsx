import { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface FormPageTemplateProps {
  title: string;
  description: string;
  formId: string;
  prefill?: Record<string, any>;
  children?: ReactNode;
}

export const FormPageTemplate = ({ 
  title, 
  description, 
  formId,
  prefill,
  children 
}: FormPageTemplateProps) => {
  const containerId = `cognito-form-container-${formId}`;
  useEffect(() => {
    let isMounted = true;

    const mountForm = () => {
      if (!isMounted) return;
      const container = document.getElementById(containerId);
      // Clear any previous render
      if (container) {
        container.innerHTML = '';
      }
      const w = window as any;
      if (container && w.Cognito && typeof w.Cognito.mount === 'function') {
        try {
          if (prefill && typeof w.Cognito.prefill === 'function') {
            // Global prefill (per Cognito docs)
            w.Cognito.prefill(prefill);
          }
          const instance = w.Cognito.mount(formId, `#${containerId}`);
          if (prefill && instance && typeof instance.prefill === 'function') {
            // Instance prefill to ensure radio/choice fields are set
            instance.prefill(prefill);
            // Retry once after mount in case fields render lazily
            setTimeout(() => {
              try { instance.prefill(prefill); } catch {}
            }, 800);
          }
        } catch (e) {
          console.error('Cognito mount failed', e);
        }
      }
    };

    // Ensure Cognito script is loaded only once
    const existing = document.querySelector(
      'script[src="https://www.cognitoforms.com/f/seamless.js"]'
    ) as HTMLScriptElement | null;

    if ((window as any).Cognito) {
      mountForm();
    } else {
      const script = existing || document.createElement('script');
      script.src = 'https://www.cognitoforms.com/f/seamless.js';
      script.async = true;
      // Provide account key but omit data-form to prevent auto-inject at end of <body>
      script.setAttribute('data-key', 'dufgHGZ4sU6F2rV69vJTrA');
      if (!existing) {
        script.onload = mountForm;
        document.body.appendChild(script);
      } else {
        existing.addEventListener('load', mountForm);
      }
    }

    return () => {
      isMounted = false;
      const container = document.getElementById(containerId);
      if (container) container.innerHTML = '';
    };
  }, [formId, JSON.stringify(prefill)]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | Vintage Marquee Lights</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Navigation />
      
      <main className="relative py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* SEO-only heading to keep semantics without visible title */}
          <h1 className="sr-only">{title}</h1>
          
          <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 min-h-[600px]">
            <div className="cognito" id={containerId}></div>
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
