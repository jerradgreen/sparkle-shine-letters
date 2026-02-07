import { FormPageTemplate } from '@/components/templates/FormPageTemplate';

const RentalInventoryQuote = () => {
  return (
    <FormPageTemplate
      title="Rental Inventory Quote"
      description="Get a custom quote for rental marquee light packages"
      formId="1"
      prefill={{ 'WhatStyleOfSignAreYouWantingUsToMake': 'Rental Inventory Package Info/Download Biz Guide' }}
    />
  );
};

export default RentalInventoryQuote;
