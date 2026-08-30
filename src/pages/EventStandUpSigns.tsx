import { PageTemplate } from '@/components/templates/PageTemplate';
import { LetterViewer3D } from '@/components/LetterViewer3D';
import { MarqueeHeroSection } from '@/components/MarqueeHeroSection';
import { HighlightsSection } from '@/components/HighlightsSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { GallerySection } from '@/components/templates/GallerySection';
import { MarqueeVisualizer } from '@/components/MarqueeVisualizer';
import { GetQuoteButton } from '@/components/GetQuoteButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import PerformantImage from '@/components/PerformantImage';
import { standUpSignsConfig } from '@/config/templateConfigs';
import ShopifyHeader from '@/components/ShopifyHeader';
import ShopifyFooter from '@/components/ShopifyFooter';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const lexusHolidayPartyImage = "/images/lexus-event-style/lexus-holiday-party.jpg";
const lexusLettersOfficeImage = "/images/lexus-event-style/lexus-letters-office.jpg";

const EventStandUpSigns = () => {
  return (
    <PageTemplate 
      config={standUpSignsConfig}
      canonicalUrl="https://inventory.vintagemarqueelights.com/event-standup-signs"
      showNavigation={true}
      showFooter={false}
    >
      <ShopifyHeader />
      <MarqueeHeroSection />

      {/* Lexus customer proof strip — placed immediately below the hero like the rental inventory page */}
      <section className="py-6 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/10">Customer Story</Badge>
            <h2 className="text-lg md:text-xl font-bold text-foreground">
              How organizations reuse Event Style letters all year
            </h2>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-card shadow-sm p-4 md:p-5 max-w-4xl mx-auto">
            <div className="grid gap-4 sm:grid-cols-[112px_1fr] sm:items-center">
              <PerformantImage
                src={lexusHolidayPartyImage}
                alt="LEXUS illuminated marquee letters at a Lexus Southern Area holiday party"
                className="hidden sm:block w-28 h-28 object-contain bg-muted/30 rounded-xl p-1"
                loading="lazy"
                sizes="112px"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Lexus Southern Area: one letter set, multiple company events</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Lexus used the same commercial freestanding letters for an elegant holiday party and a World Cup kick-off event, proving how a handful of letters can become a reusable branded photo moment.
                </p>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href="#lexus-event-style-story">Read the Lexus Story</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Letter Viewer — placed high so visitors see style options immediately */}
      <LetterViewer3D />

      {/* Marquee Visualizer — placed directly below the 3D section so visitors can build their set immediately */}
      <MarqueeVisualizer />

      {/* Institutional / Repeat-Use Block */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 text-center">
            Who Buys Commercial Freestanding Marquee Letters?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
            Our freestanding marquee letters are purchased by <strong>universities, event companies, venues, athletic departments, corporate marketing teams, and schools</strong> that need reusable event signage — not a one-time decoration. Common use cases include graduations, brand activations, conferences, recruiting events, donor events, pep rallies, stage displays, and sponsor activations.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Universities can use marquee letters for campus-wide branding across graduations, athletic events, and recruiting. Event companies and venues can build a set for repeated client deployments. Corporate teams can spell their company name or a recurring event title. Schools can use letters for graduations, pep rallies, and branded campus events. Owning your own letters keeps branding consistent, removes rental coordination, and lets you deploy them whenever you need them.
          </p>
        </div>
      </section>

      <HighlightsSection />

      {/* Built for Institutional Use */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 text-center">
            Built for Repeated Event Deployment
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            The 36-inch size is the most popular choice — easy to store, transport, and deploy across a full calendar of events. The 48-inch size is available for high-visibility venues such as auditoriums, outdoor stadiums, and convention halls. Every freestanding letter is built with powder-coated steel construction designed for repeated transport and setup across years of use. Universities, event companies, venues, athletic departments, and schools purchase these as reusable event signage they own.
          </p>
        </div>
      </section>

      {/* Lexus Event Style customer story */}
      <section id="lexus-event-style-story" className="py-12 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">Customer Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Lexus turned Event Style letters into reusable branded photo moments
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Lexus Southern Area purchased a small set of commercial freestanding marquee letters that can be styled again and again for company events, seasonal celebrations, sports themes, and marketing department activations.
            </p>
          </div>

          <div className="grid lg:grid-cols-[420px_1fr] gap-6 items-start mb-8">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-card border border-border max-w-[440px] w-full mx-auto lg:mx-0">
              <PerformantImage
                src={lexusHolidayPartyImage}
                alt="LEXUS illuminated marquee letters styled with a silver and white balloon garland at a Lexus holiday party"
                className="w-full aspect-[4/3] object-contain bg-muted/30"
                loading="lazy"
                sizes="(max-width: 1024px) 440px, 420px"
              />
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">A branded display they can use beyond one event</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Joy Hackney and the Lexus Southern Area team used their Event Style letters for two very different company events. For the holiday party, they spelled out LEXUS and paired the warm illuminated letters with a silver and white balloon garland to create an elegant focal point. Later, they used the same set for a 2026 World Cup kick-off party, spelling LSA and styling the display with soccer balls to match the theme.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                That is the strength of owning a small set of 36-inch or 48-inch stand-up letters. A company, school, university, athletic department, venue, church, or nonprofit can use the same letters for recurring events throughout the year instead of starting from scratch each time.
              </p>

              <div className="bg-muted/40 border-l-4 border-primary rounded-xl p-5">
                <blockquote className="text-lg text-foreground font-semibold leading-relaxed italic mb-4">
                  “Everyone loves the letters and we use them for so many things. They were the absolute highlight of the decor. Everyone was raving about them and taking photos all night. This was definitely one of the best purchases I made for our marketing department.”
                </blockquote>
                <cite className="text-sm text-muted-foreground font-semibold not-italic">
                  Joy Hackney, Vehicle Marketing Administrator, Lexus Southern Area
                </cite>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Use it repeatedly</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">One set can support holiday parties, kick-off events, award nights, conferences, banquets, and photo ops.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Change the styling</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Pair the same letters with balloons, florals, sports props, brand colors, or seasonal decor.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Create photo moments</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Large glowing letters give guests, employees, donors, students, and sponsors a natural place to take photos.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Build the brand</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Company initials, school letters, team abbreviations, and short phrases can become part of the event identity.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 mx-auto max-w-xl">
            <div className="rounded-xl overflow-hidden shadow-md bg-card border border-border">
              <PerformantImage
                src={lexusLettersOfficeImage}
                alt="Lexus Southern Area freestanding marquee letters reused for another company event"
                className="w-full aspect-[4/3] object-contain bg-muted/30"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Want letters your organization can reuse all year?</h3>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-6 leading-relaxed">
              Tell us the company name, school letters, team abbreviation, initials, or short phrase you want to spell. We can help you compare 36-inch and 48-inch options and plan around your event date.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => {
                const visualizer = document.querySelector('.marquee-visualizer');
                if (visualizer) {
                  visualizer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Build Your Set &amp; Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Link to Homepage */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="text-sm md:text-base h-auto py-4 md:py-2 whitespace-normal md:whitespace-nowrap leading-tight"
          >
            <Link to="/">
              <span className="block md:inline">
                Looking for a different style of sign?<br className="md:hidden" /> Click here to go to the homepage
              </span>
            </Link>
          </Button>
        </div>
      </section>

      {/* What to Buy — Inventory Guidance */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 text-center">
            What to Buy: Letters, Numbers, Symbols &amp; Accessories
          </h2>
          <ul className="text-sm md:text-base text-muted-foreground space-y-2 list-disc list-inside">
            <li><strong>Letters A–Z</strong> and <strong>numbers 0–9</strong> — spell names, dates, years, and custom phrases.</li>
            <li><strong>Symbols</strong> — ampersand (&amp;), hashtag (#), heart (♥), and more.</li>
            <li><strong>36″ letters</strong> are the standard size. <strong>48″ letters</strong> are available for maximum visibility at larger venues.</li>
            <li><strong>15″ topper phrases</strong> (THE, MR&amp;MRS, CLASS OF, BABY) sit on top of your letters for layered displays.</li>
            <li><strong>Double-row display stands</strong> (optional) hold two rows of letters side by side for longer messages.</li>
            <li><strong>Foam-lined boxes</strong> (optional) for safe storage and repeated transport.</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4 italic">
            We strongly recommend ordering your full inventory upfront. Commercial production runs are more efficient at scale — adding small quantities later typically costs more per unit and extends lead times.
          </p>
        </div>
      </section>

      <GallerySection config={standUpSignsConfig.gallery} />
      
      {/* FAQ Section - 2 Column Layout */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            {standUpSignsConfig.faq.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {standUpSignsConfig.faq.items.map((item, index) => (
              <div key={index} className="border-b border-border pb-4">
                <h3 className="text-base font-bold mb-2 text-foreground">
                  {item.question}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8 max-w-5xl mx-auto">
            Starting a rental inventory business instead? See our{' '}
            <a href="/rental-inventory" className="text-primary underline hover:text-primary/80 transition-colors">
              Commercial Rental Inventory Packages
            </a>.
          </p>

          <p className="text-sm text-muted-foreground mt-4 max-w-5xl mx-auto">
            Need a different style of sign? Explore our{' '}
            <a href="/wall-hanging-signs" className="text-primary underline hover:text-primary/80 transition-colors">
              Wall-Hanging Marquee Signs
            </a>{' '}
            and{' '}
            <a href="/3d-logos" className="text-primary underline hover:text-primary/80 transition-colors">
              Custom Layered Logos
            </a>{' '}
            for permanent installations, retail displays, and branded décor.
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-5xl mx-auto">
            If your project calls for a fully integrated brand mark rather than freestanding letters, our{' '}
            <a href="/3d-logos" className="text-primary underline hover:text-primary/80 transition-colors">
              Custom Logo Signs
            </a>{' '}
            offer layered metal fabrication with dimensional depth and hand-finished detail.
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-5xl mx-auto">
            Need signage for a food truck or mobile vendor setup? See our{' '}
            <a href="/mobile-vendor-signs" className="text-primary underline hover:text-primary/80 transition-colors">
              Custom Food Truck and Mobile Vendor Signs
            </a>.
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-5xl mx-auto">
            Not sure which size is right for your event? Read our guide:{' '}
            <a href="/blog/36-vs-48-inch-marquee-letters" className="text-primary underline hover:text-primary/80 transition-colors">
              36 vs 48 Inch Marquee Letters: Which Size Should You Buy?
            </a>
          </p>
        </div>
      </section>

      {/* CTA Section before Footer */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Invest in Commercial Freestanding Marquee Letters?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Click below, test your letters and get a quote in less than 5 minutes.
          </p>
          <Button 
            variant="outline"
            size="lg" 
            className="text-sm md:text-lg px-6 md:px-10 py-4 md:py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => {
              const visualizer = document.querySelector('.marquee-visualizer');
              if (visualizer) {
                visualizer.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Build Your Set & Get a Quote
          </Button>
        </div>
      </section>

      <ShopifyFooter />
    </PageTemplate>
  );
};

export default EventStandUpSigns;