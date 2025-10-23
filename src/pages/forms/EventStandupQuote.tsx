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

  // Map letter size to match radio button values in Cognito form
  const mappedSize = letterSize === '36' ? '36"' : letterSize === '48' ? '48"' : '';

  // Build prefill data object
  const prefillData: Record<string, string> = {};
  if (mainText) prefillData['MainTextLettersNumbersSymbols'] = mainText;
  if (mappedSize) prefillData['MainTextSize2'] = mappedSize;
  if (topper) {
    prefillData['DoYouWantATopper'] = 'Yes';
    prefillData['TopperText'] = topper;
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

  // Ensure topper field becomes visible when provided by visualizer
  useEffect(() => {
    if (!topper) return;
    let attempts = 0;
    const max = 10;
    const iv = setInterval(() => {
      attempts++;
      const form = document.querySelector('.cognito form') as HTMLFormElement | null;
      if (!form) return;

      let toggled = false;
      // Try radio/checkbox controls likely named for topper visibility
      const inputs = Array.from(form.querySelectorAll("input[type='radio'], input[type='checkbox']")) as HTMLInputElement[];
      for (const input of inputs) {
        const name = (input.name || '').toLowerCase();
        const id = (input.id || '').toLowerCase();
        const label = input.id ? (form.querySelector(`label[for="${input.id}"]`) as HTMLLabelElement | null) : null;
        const labelText = (label?.innerText || '').toLowerCase();
        const isTopperControl = name.includes('topper') || id.includes('topper') || labelText.includes('topper');
        const isYes = (input.value || '').toLowerCase() === 'yes' || (input.value || '').toLowerCase() === 'true';
        if (isTopperControl && isYes) {
          if (!input.checked) {
            input.checked = true;
            input.dispatchEvent(new Event('change', { bubbles: true }));
          }
          toggled = true;
          break;
        }
      }

      // Try selects that may control visibility
      if (!toggled) {
        const selects = Array.from(form.querySelectorAll('select')) as HTMLSelectElement[];
        for (const sel of selects) {
          const name = (sel.name || '').toLowerCase();
          if (name.includes('topper')) {
            const yesOption = Array.from(sel.options).find(
              (o) => o.text.toLowerCase() === 'yes' || o.value.toLowerCase() === 'yes' || o.value.toLowerCase() === 'true'
            );
            if (yesOption) {
              sel.value = yesOption.value;
              sel.dispatchEvent(new Event('change', { bubbles: true }));
              toggled = true;
              break;
            }
          }
        }
      }

      // Fill the topper text if the input is present
      const topperInput = (form.querySelector("input[name*='TopperText'], textarea[name*='TopperText']") as
        | HTMLInputElement
        | HTMLTextAreaElement
        | null);
      if (topperInput) {
        topperInput.value = topper;
        topperInput.dispatchEvent(new Event('input', { bubbles: true }));
      }

      if ((toggled && topperInput) || attempts >= max) {
        clearInterval(iv);
      }
    }, 600);

    return () => clearInterval(iv);
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
