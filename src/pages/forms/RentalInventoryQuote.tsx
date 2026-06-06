import { FormPageTemplate } from '@/components/templates/FormPageTemplate';

const RentalInventoryQuote = () => {
  return (
    <FormPageTemplate
      title="Rental Inventory Quote"
      description="Get a custom quote for rental marquee light packages"
      formId="1"
      prefill={{ 'WhatStyleOfSignAreYouWantingUsToMake': 'Rental Inventory Package Info/Download Biz Guide' }}
    >
      <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-5 text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
          What happens after you submit
        </p>
        <h2 className="text-xl font-bold text-foreground mb-3">
          We will send the package details first, then personally help you decide if this makes sense.
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-md bg-background/80 p-4">
            <p className="font-semibold text-foreground mb-1">1. Check your email</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Package pricing, the rental business guide, and next-step details are sent automatically within a few minutes.
            </p>
          </div>
          <div className="rounded-md bg-background/80 p-4">
            <p className="font-semibold text-foreground mb-1">2. Expect a quick hello</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If it is during normal business hours, Jerrad may personally reach out so you know who to contact with questions.
            </p>
          </div>
          <div className="rounded-md bg-background/80 p-4">
            <p className="font-semibold text-foreground mb-1">3. No pressure</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The first conversation is simply to understand your market, timeline, and which package fits your goals.
            </p>
          </div>
        </div>
      </div>
    </FormPageTemplate>
  );
};

export default RentalInventoryQuote;
