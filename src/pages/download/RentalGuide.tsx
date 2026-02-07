import { FormPageTemplate } from '@/components/templates/FormPageTemplate';

const RentalGuide = () => {
  return (
    <FormPageTemplate
      title="Download Free Rental Guide"
      description="Get our comprehensive guide to starting your marquee light rental business"
      formId="1"
      prefill={{ 'WhatStyleOfSignAreYouWantingUsToMake': 'Rental Inventory Package Info/Download Biz Guide' }}
    />
  );
};

export default RentalGuide;
