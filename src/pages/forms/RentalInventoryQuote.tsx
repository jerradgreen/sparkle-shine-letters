import { FormPageTemplate } from '@/components/templates/FormPageTemplate';
import { useEffect } from 'react';

const RentalInventoryQuote = () => {
  useEffect(() => {
    // Prefill "Rental Inventory Package Info" when coming from rental inventory page
    const prefillForm = () => {
      const w = window as any;
      if (w.Cognito && typeof w.Cognito.prefill === 'function') {
        try {
          // Prefill the form - adjust field name if needed based on your Cognito form setup
          w.Cognito.prefill('1', {
            'WhatAreYouLookingFor': 'Rental Inventory Package Info'
          });
        } catch (e) {
          console.error('Cognito prefill failed', e);
        }
      }
    };

    // Try prefill after a short delay to ensure form is mounted
    const timer = setTimeout(prefillForm, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FormPageTemplate
      title="Rental Inventory Quote"
      description="Get a custom quote for rental marquee light packages"
      formId="1"
    />
  );
};

export default RentalInventoryQuote;
