import { FormPageTemplate } from '@/components/templates/FormPageTemplate';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EventStandupQuote = () => {
  const location = useLocation();

  useEffect(() => {
    // Get URL parameters from visualizer
    const params = new URLSearchParams(location.search);
    const mainText = params.get('mainText');
    const letterSize = params.get('letterSize');
    const topper = params.get('topper');

    // Add anti-spam honeypot monitoring script
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        window.addEventListener("load", function() {
          const form = document.querySelector(".cognito form");
          if (!form) return;

          // Monitor honeypot field
          const honeypot = form.querySelector("input[name='ZipCodeForDeliveryEstimate']");
          if (honeypot) {
            honeypot.value = '';
            honeypot.style.display = 'none';
            
            // Block submission if honeypot gets filled (spam bot behavior)
            form.addEventListener("submit", function(e) {
              if (honeypot.value && honeypot.value.trim() !== '') {
                e.preventDefault();
                console.warn("Spam detected: honeypot filled");
                window.location.href = "https://www.vintagemarqueelights.com";
                return false;
              }
            });
          }
        });
      })();
    `;
    document.body.appendChild(script);

    // Wait for Cognito form to be available
    const prefillForm = () => {
      const w = window as any;
      if (w.Cognito && typeof w.Cognito.prefill === 'function') {
        const prefillData: Record<string, string> = {};
        
        if (mainText) prefillData['MainText'] = mainText;
        if (letterSize) prefillData['MainTextSize2'] = letterSize;
        if (topper) prefillData['TopperText'] = topper;
        prefillData['ZipCodeForDeliveryEstimate'] = '';
        
        console.log('Prefilling form with:', prefillData);
        
        // Prefill the form
        try {
          w.Cognito.prefill('7', prefillData);
        } catch (e) {
          console.error('Cognito prefill failed', e);
        }
      }
    };

    // Try prefill multiple times with delays to ensure it works
    let attempts = 0;
    const maxAttempts = 3;
    const attemptPrefill = setInterval(() => {
      if (attempts >= maxAttempts) {
        clearInterval(attemptPrefill);
        return;
      }
      prefillForm();
      attempts++;
    }, 800);
    
    return () => {
      clearInterval(attemptPrefill);
      document.body.removeChild(script);
    };
  }, [location.search]);

  return (
    <FormPageTemplate
      title="Event Stand-Up Letters Quote"
      description="Get a custom quote for event stand-up marquee letters"
      formId="7"
    />
  );
};

export default EventStandupQuote;
