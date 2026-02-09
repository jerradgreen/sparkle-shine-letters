import { FormPageTemplate } from '@/components/templates/FormPageTemplate';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EventStandupQuote = () => {
  const location = useLocation();

  // Security: Sanitize URL parameters to prevent XSS
  const sanitizeParam = (value: string | null): string => {
    if (!value) return '';
    // Remove script tags and HTML, limit length
    return value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<[^>]+>/g, '')
      .replace(/[<>'"]/g, '')
      .trim()
      .slice(0, 100);
  };

  // Get URL parameters from visualizer
  const params = new URLSearchParams(location.search);
  const mainText = sanitizeParam(params.get('mainText'));
  const letterSize = sanitizeParam(params.get('letterSize'));
  const topper = sanitizeParam(params.get('topper'));
  const showTopper = params.get('showTopper') === 'true';

  // Map letter size to match radio button values in Cognito form
  const mappedSize = letterSize === '36' ? '36"' : letterSize === '48' ? '48"' : '';

  // Build prefill data object
  const prefillData: Record<string, string> = {};
  if (mainText) prefillData['MainTextLettersNumbersSymbols'] = mainText;
  if (mappedSize) prefillData['MainTextSize2'] = mappedSize;
  if (topper) {
    prefillData['Topper'] = topper;
    prefillData['Topper?'] = topper;
  } else if (showTopper) {
    // Prefill with space to trigger Cognito's "Topper is filled out" condition
    prefillData['Topper'] = ' ';
    prefillData['Topper?'] = ' ';
  }
  prefillData['ZipCodeForDeliveryEstimate'] = ''; // Honeypot field

  useEffect(() => {
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
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Ensure topper field is filled when provided by visualizer
  useEffect(() => {
    if (!topper) return;
    
    let attempts = 0;
    const maxAttempts = 30; // 12 seconds total (30 × 400ms)
    
    const fillTopperField = setInterval(() => {
      attempts++;
      const form = document.querySelector('.cognito form') as HTMLFormElement | null;
      if (!form) return;

      // Find the topper textbox by multiple selectors
      let topperInput = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        "input[name*='Topper'], textarea[name*='Topper'], input[aria-label*='Topper'], input[placeholder*='Topper']"
      );

      // Also try finding by label text "Topper?"
      if (!topperInput) {
        const labels = Array.from(form.querySelectorAll('label'));
        const topperLabel = labels.find(l => l.textContent?.trim().toLowerCase().includes('topper'));
        if (topperLabel) {
          const labelFor = topperLabel.getAttribute('for');
          if (labelFor) {
            topperInput = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${labelFor}`);
          }
        }
      }

      if (topperInput) {
        // Fill the field
        topperInput.value = topper;
        topperInput.dispatchEvent(new Event('input', { bubbles: true }));
        topperInput.dispatchEvent(new Event('change', { bubbles: true }));

        // Ensure field is visible if hidden
        const container = topperInput.closest('.c-field, .field, div[style*="display: none"]');
        if (container instanceof HTMLElement && container.style.display === 'none') {
          container.style.display = '';
        }

        console.log('Topper field filled successfully');
        clearInterval(fillTopperField);
      }

      if (attempts >= maxAttempts) {
        console.log('Topper field not found after retries');
        clearInterval(fillTopperField);
      }
    }, 400);

    return () => clearInterval(fillTopperField);
  }, [topper]);


  return (
    <FormPageTemplate
      title="Event Stand-Up Letters Quote"
      description="Get a custom quote for event stand-up marquee letters"
      formId="7"
      prefill={prefillData}
    />
  );
};

export default EventStandupQuote;
