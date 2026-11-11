import { ReactNode, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getQuoteAttribution, ATTRIBUTION_READY_FORM_IDS } from '@/lib/leadAttribution';

type CognitoFormInstance = {
  prefill?: (values: Record<string, unknown>) => void;
};

type CognitoApi = {
  mount?: (formId: string, selector: string) => CognitoFormInstance | undefined;
  prefill?: (values: Record<string, unknown>) => void;
};

type WindowWithCognito = Window & {
  Cognito?: CognitoApi;
};

interface FormPageTemplateProps {
  title: string;
  description: string;
  formId: string;
  prefill?: Record<string, unknown>;
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
  const { pathname } = useLocation();
  const cleanCanonicalUrl = `https://inventory.vintagemarqueelights.com${pathname}`;
  const serializedPrefill = JSON.stringify(prefill ?? {});
  const formPrefill = useMemo(() => ({
    ...JSON.parse(serializedPrefill),
    ...(ATTRIBUTION_READY_FORM_IDS.includes(formId) ? { AdAttribution: getQuoteAttribution() } : {}),
  }), [serializedPrefill, formId]);

  useEffect(() => {
    let isMounted = true;
    let prefillTimer: ReturnType<typeof setTimeout> | undefined;

    const mountForm = () => {
      if (!isMounted) return;
      const container = document.getElementById(containerId);
      // Clear any previous render
      if (container) {
        container.innerHTML = '';
      }
      const w = window as WindowWithCognito;
      if (container && w.Cognito && typeof w.Cognito.mount === 'function') {
        try {
          if (formPrefill && typeof w.Cognito.prefill === 'function') {
            // Global prefill (per Cognito docs)
            w.Cognito.prefill(formPrefill);
          }
          const instance = w.Cognito.mount(formId, `#${containerId}`);
          if (formPrefill && instance && typeof instance.prefill === 'function') {
            // Instance prefill to ensure radio/choice fields are set
            instance.prefill(formPrefill);
            // Retry once after mount in case fields render lazily
            prefillTimer = setTimeout(() => {
              if (!isMounted) return;
              try {
                instance.prefill?.(formPrefill);
              } catch (error) {
                console.warn('Cognito prefill retry failed', error);
              }
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

    const w = window as WindowWithCognito;
    if (w.Cognito) {
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
      clearTimeout(prefillTimer);
      existing?.removeEventListener('load', mountForm);
      const container = document.getElementById(containerId);
      if (container) container.innerHTML = '';
    };
  }, [containerId, formId, formPrefill]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | Vintage Marquee Lights</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={cleanCanonicalUrl} />
        <meta property="og:url" content={cleanCanonicalUrl} />
      </Helmet>
      
      <Navigation />
      
      <main className="relative py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 rounded-lg border border-border bg-card/80 p-6 shadow-sm">
            <h1 className="mb-3 text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
            {['8', '9', '10', '12'].includes(formId) && (
              <p className="mt-3 text-sm text-muted-foreground">
                Tell us your wording or logo, approximate size, and where your sign will go.
                An idea is enough to get started; artwork uploads are optional. We’ll review
                your request and help confirm the details for your custom quote.
              </p>
            )}
            <Link to="/quote" className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4">
              Choose a different sign style
            </Link>
          </div>
          
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
