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

    // Wait for Cognito form to be available
    const prefillForm = () => {
      const w = window as any;
      if (w.Cognito && typeof w.Cognito.prefill === 'function') {
        const prefillData: Record<string, string> = {};
        
        if (mainText) prefillData['MainText'] = mainText;
        if (letterSize) prefillData['LetterSize'] = `${letterSize} inches`;
        if (topper) prefillData['TopperText'] = topper;
        
        // Prefill the form
        try {
          w.Cognito.prefill('7', prefillData);
        } catch (e) {
          console.error('Cognito prefill failed', e);
        }
      }
    };

    // Try prefill after a short delay to ensure form is mounted
    const timer = setTimeout(prefillForm, 1000);
    return () => clearTimeout(timer);
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
