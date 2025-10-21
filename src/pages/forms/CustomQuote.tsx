import { useEffect } from 'react';
import { FormPageTemplate } from '@/components/templates/FormPageTemplate';

const CustomQuote = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        const MIN_SECONDS_BEFORE_SUBMIT = 1;
        const BAD_KEYWORDS = ["vivo","oppo","realme","xiaomi","iqoo","tecno","infinix","redmi","huawei"];
        const formSelector = ".cognito";
        let startTime = Date.now();

        // Block obvious foreign-market devices
        const ua = navigator.userAgent.toLowerCase();
        if (BAD_KEYWORDS.some(k => ua.includes(k))) {
          console.warn("Spam device detected:", ua);
          window.location.href = "https://www.vintagemarqueelights.com";
          return;
        }

        // Wait until Cognito form loads
        window.addEventListener("load", function() {
          const form = document.querySelector(\`\${formSelector} form\`);
          if (!form) return;

          // Optional: capture IP in hidden field called ip_address
          fetch("https://api.ipify.org?format=json")
            .then(r => r.json())
            .then(data => {
              const ipField = form.querySelector("input[name='ip_address']");
              if (ipField) ipField.value = data.ip;
            })
            .catch(() => {});

          // Add small human-like delay requirement
          form.addEventListener("submit", function(e) {
            const elapsed = (Date.now() - startTime) / 1000;
            if (elapsed < MIN_SECONDS_BEFORE_SUBMIT) {
              e.preventDefault();
              alert("Please wait a moment before submitting.");
              return false;
            }
          });
        });
      })();
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <FormPageTemplate
      title="Custom Marquee Lights Quote"
      description="Get a custom quote for vintage marquee lights"
      formId="1"
    />
  );
};

export default CustomQuote;
