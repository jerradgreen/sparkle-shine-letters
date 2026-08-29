import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PerformantImage from '@/components/PerformantImage';
import { DollarSign, Package, Percent, ShieldCheck, ArrowRight, CreditCard } from 'lucide-react';

const heroImage = '/images/hero-rental-setup.webp';

const storyCards = [
  {
    name: 'C&D Marquees',
    blurb: 'A rental brand built around photo-ready marquee light setups.',
    image: '/images/cd-marquees/all-the-feels-marquee.webp',
    alt: 'ALLTHEFEELS marquee lights at an outdoor C&D Marquees event setup',
    to: '/rental-inventory#cd-marquees-story',
  },
  {
    name: 'DJ Franco Events',
    blurb: 'An existing event business adding marquee letters as a premium upsell.',
    image: '/images/cd-marquees/love-marquee-balloon-backdrop.webp',
    alt: 'LOVE marquee lights with a red and pink balloon backdrop',
    to: '/marquee-letters-for-event-pros',
  },
];

const guides = [
  {
    to: '/rental-business/startup-cost',
    title: 'How Much Does It Cost to Start a Marquee Letter Rental Business?',
    blurb: 'Budget ranges, what to buy first, and where the money actually goes.',
  },
  {
    to: '/rental-business/building-a-scalable-inventory',
    title: 'How to Build a Scalable Marquee Letter Rental Inventory',
    blurb: 'Character selection strategy that keeps your calendar booked.',
  },
  {
    to: '/rental-business/profitability',
    title: 'Is a Marquee Letter Rental Business Profitable?',
    blurb: 'Per-event revenue, margins, and how operators reach break-even.',
  },
];

const RentalBusiness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>How to Start a Marquee Letter Rental Business | Vintage Marquee Lights</title>
        <meta name="description" content="Learn how to start a profitable marquee letter rental business. Discover startup costs, inventory strategy, ROI planning, and commercial-grade equipment recommendations." />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/rental-business" />
      </Helmet>

      <Navigation />

      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0">
            <PerformantImage
              src={heroImage}
              alt="Commercial-grade marquee letters set up at an event"
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          </div>

          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Business Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                How to Start a Marquee Letter Rental Business
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Startup costs, inventory strategy, profit margins, and the equipment decisions that separate a real rental operation from an expensive hobby.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-auto py-3 text-lg">
                  <Link to="/rental-inventory">Explore Commercial Rental Packages</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="py-3 h-auto text-lg">
                  <a href="#guides">Read the Guides</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <div className="max-w-3xl mx-auto space-y-6 mb-16">
              <p className="text-base text-muted-foreground leading-relaxed">
                Marquee letter rentals are one of the highest-margin segments in the event industry. From weddings and corporate galas to school dances, fundraisers, and private parties, the demand for oversized illuminated letters continues to grow year over year. Operators who enter this market with the right inventory and a clear booking strategy can build a sustainable, highly profitable business with relatively low overhead.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Success in this space depends on two critical factors: choosing durable, commercial-grade inventory that can withstand repeated transport and setup, and making smart character selections that maximize booking flexibility across a wide range of events. Operators who get both right position themselves to dominate their local market.
              </p>
            </div>

            {/* Customer stories */}
            <section className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">See two real customer paths</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Some customers use VML inventory to launch a dedicated marquee rental brand, while others add marquee letters to an event business they already operate. C&amp;D Marquees and DJ Franco Events show both sides of that opportunity.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {storyCards.map((story) => (
                  <Link key={story.name} to={story.to} className="group">
                    <Card className="overflow-hidden h-full transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="h-48 overflow-hidden">
                        <PerformantImage
                          src={story.image}
                          alt={story.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          {story.name}
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{story.blurb}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            {/* Content panels */}
            <div className="space-y-8 mb-20">
              <section className="rounded-2xl border border-border bg-card p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary"><DollarSign className="w-6 h-6" /></span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Startup Costs &amp; Initial Investment</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    A serious commercial marquee letter rental setup typically requires an initial investment of $15,000–$35,000, depending on how much inventory you want to launch with. This covers commercial-grade letters and numbers, protective transport cases, replacement LED lighting, basic marketing materials, and a storage solution that keeps your inventory organized and accessible.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    While the upfront cost may seem significant, the long-term ROI makes it one of the strongest investments in the event rental space. Because the same inventory is rented repeatedly — often dozens or hundreds of times — revenue compounds quickly while ongoing costs remain minimal. Most operators find that consistent bookings and repeat clients make this a remarkably efficient business model.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary"><CreditCard className="w-6 h-6" /></span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Preserve Cash Flow While You Build Your Inventory</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-5">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      You don't have to pay for your entire inventory package upfront. Qualified buyers can apply for equipment financing through APPROVE and spread the purchase across monthly payments — keeping cash available for transportation, storage, insurance, and the marketing that fills your calendar while the inventory starts working for you.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Payments as low as $295/month are available on select packages. Actual payment amounts, rates, and terms vary by applicant and package and are subject to lender approval.
                    </p>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">
                      APPROVE is an equipment-financing platform that connects applicants with a network of third-party lenders. APPROVE is not the lender, and all financing is subject to lender approval.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-4 rounded-xl border border-border bg-card p-6">
                    <p className="text-sm font-semibold text-foreground">See what you may qualify for</p>
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-auto py-3 text-base whitespace-normal text-center leading-snug">
                      <a
                        href="https://vintagemarqueelights.approvepayments.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore Financing Through APPROVE
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-auto py-3 text-base">
                      <Link to="/rental-inventory">View Inventory Packages</Link>
                    </Button>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-card p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary"><Package className="w-6 h-6" /></span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Choosing the Right Letters &amp; Inventory First</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      The 36-inch marquee letter has become the industry standard for rental operators. It's large enough to create visual impact at events but manageable enough for a single person to transport and set up. Starting with a full A–Z alphabet, a complete set of numbers (0–9), and popular word toppers like "MR &amp; MRS," "LOVE," and "THE" gives you the widest booking potential from day one.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Versatility matters far more than novelty when building your first inventory. High-demand characters that work across weddings, birthdays, corporate events, and holiday parties will generate significantly more revenue than specialty or one-off pieces. Focus on characters that book consistently before expanding into niche items.
                    </p>
                  </div>
                  <PerformantImage
                    src="/images/cd-marquees/new-edition-marquee.webp"
                    alt="NEW EDITION marquee lights with a black and silver balloon backdrop"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-card p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary"><Percent className="w-6 h-6" /></span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Profit Margins &amp; ROI Potential</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    A typical 36-inch marquee letter rents for $75–$125 per letter per event. Most bookings include 4–6 characters, generating $400–$700 or more per event. With just 3–5 bookings per month, many operators generate $1,200–$3,500+ in monthly revenue from the same inventory — with minimal ongoing costs beyond transportation and occasional bulb replacement.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Many rental companies recover their initial investment within the first year through consistent bookings and repeat clients. Because commercial-grade letters are built for durability and frequent transport, they continue generating revenue for years beyond break-even. Scaling is straightforward: as demand grows, you add more inventory and expand your service area.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-card p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary"><ShieldCheck className="w-6 h-6" /></span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Commercial-Grade vs Cheap Imports</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Not all marquee letters are created equal. Commercial-grade letters are built with steel frames, professional powder-coat finishes, and serviceable LED wiring systems designed to handle the demands of repeated rental use. They're engineered to survive transport, outdoor setups, and years of continuous operation without structural or electrical failure.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Cheap imports and consumer-grade decorative letters may look similar in photos, but they lack the structural integrity and wiring quality needed for professional rental operations. Thin materials warp, poor wiring fails, and replacement costs add up quickly. For serious operators building a real business, commercial-grade inventory isn't optional — it's essential.
                  </p>
                </div>
              </section>
            </div>

            {/* Guides */}
            <section id="guides" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Explore Detailed Guides</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Below are in-depth resources to help you plan and structure your rental business properly.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {guides.map((guide) => (
                  <Link key={guide.to} to={guide.to} className="group">
                    <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg">
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{guide.blurb}</p>
                        <span className="mt-auto text-sm font-semibold text-primary inline-flex items-center gap-1">
                          Read guide <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Launch?</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                If you're ready to build a marquee letter rental business with inventory that's built for the long haul, explore our complete commercial rental packages. We manufacture commercial-grade marquee letters designed specifically for rental operators who demand durability, reliability, and professional presentation.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 text-lg h-auto">
                <Link to="/rental-inventory">Explore Commercial Rental Packages</Link>
              </Button>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default RentalBusiness;
