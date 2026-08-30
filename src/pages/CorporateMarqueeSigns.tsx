import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import PerformantImage from '@/components/PerformantImage';

import cafeCollectiveAsset from '@/assets/custom-signs/cafe-collective-cleveland-logo-sign.jpg.asset.json';
import espnHouseAsset from '@/assets/custom-signs/espn-house-nashville-sign.jpg.asset.json';
import starlightAsset from '@/assets/custom-signs/starlight-theater-logo-sign.jpg.asset.json';

const PAGE_URL = 'https://inventory.vintagemarqueelights.com/corporate-marquee-signs';
const PAGE_TITLE = 'Corporate Marquee Letters & Custom Business Signs | Vintage Marquee Lights';
const PAGE_DESCRIPTION =
  'Custom marquee letters and custom business signs companies buy and own — reusable event letters for conferences, awards and activations, plus custom logo signs for lobbies, trade shows and branded spaces.';

const lexusHolidayPartyImage = '/images/lexus-event-style/lexus-holiday-party.jpg';
const lexusLettersOfficeImage = '/images/lexus-event-style/lexus-letters-office.jpg';

const corporateFaqs = [
  {
    question: 'Are these corporate marquee letters for rent or for purchase?',
    answer:
      'Vintage Marquee Lights sells the letters for long-term ownership and repeated use. Corporate marketing teams commonly buy their company name, initials, or a recurring event title and reuse the same set year after year.',
  },
  {
    question: 'Can a sign display our company logo or brand name?',
    answer:
      'Yes. We fabricate custom logo signs and custom lettering that can reproduce your brand mark, company name, or a custom shape in any font. These are popular for trade show booths, conference backdrops, lobby installations, and branded event activations.',
  },
  {
    question: 'What types of corporate events use marquee letters?',
    answer:
      'Common corporate applications include annual conferences and award ceremonies, product launches and brand activations, trade show and expo booths, employee appreciation events, company milestone celebrations, and holiday parties. Large glowing letters create a branded photo opportunity attendees share on social media, extending the reach of the event.',
  },
  {
    question: 'Can we get a permanent sign for our office or lobby?',
    answer:
      'Yes. Our wall-hanging marquee signs and custom logo signs are designed for permanent or semi-permanent installation in commercial spaces such as office lobbies, conference rooms, reception areas, and co-working spaces. We fabricate to your specifications; final mounting is the customer\u2019s responsibility.',
  },
  {
    question: 'What sizes are the freestanding event letters?',
    answer:
      'We offer 36-inch and 48-inch stand-up marquee letters. The 36-inch size is the most popular because it is easier to store, transport, and set up. The 48-inch size is available when you need maximum visibility at large venues or outdoor events.',
  },
  {
    question: 'Do you offer letters, numbers, and symbols?',
    answer:
      'Yes. We offer the full alphabet A–Z, numbers 0–9, and common symbols including the ampersand (&), hashtag (#), and heart (♥), so you can spell company initials, anniversary years, and event hashtags.',
  },
  {
    question: 'How are event letters packaged?',
    answer:
      'Event letters arrive pre-lit and ready to display. Optional foam-lined boxes are available for storage and transport between events, with each letter individually cushioned.',
  },
  {
    question: 'Is financing available for corporate purchases?',
    answer:
      'Yes. Financing is available for qualified buyers through APPROVE, an equipment-financing platform that connects applicants with a network of lenders. Financing and terms are subject to lender approval and vary.',
  },
];

const paths = [
  {
    title: 'Reusable Event Letters',
    subtitle: 'Conferences, awards, activations, company events',
    body:
      'Freestanding 36-inch and 48-inch illuminated letters your company owns. Spell the company name, initials, an anniversary year, or a recurring event title and reuse the same set across the calendar.',
    cta: 'Request Event Letter Pricing',
    link: '/quote/event-standup',
    secondaryCta: 'View event letters',
    secondaryLink: '/event-standup-signs',
  },
  {
    title: 'Custom Business & Logo Signs',
    subtitle: 'Lobbies, trade show booths, restaurants, retail, branded spaces',
    body:
      'Custom marquee signs, custom business signs, and custom logo signs built from your brand mark, wordmark, or concept for permanent and semi-permanent installation.',
    cta: 'Request a Custom Sign Quote',
    link: '/quote/3d-logos',
    secondaryCta: 'View custom logo signs',
    secondaryLink: '/3d-logos',
  },
];

const benefits = [
  {
    title: 'One set, many events',
    description:
      'A single lettering set can support holiday parties, kick-off events, award nights, conferences, banquets, and photo ops.',
  },
  {
    title: 'Restyle for each theme',
    description:
      'Pair the same letters with balloons, florals, sports props, brand colors, or seasonal decor.',
  },
  {
    title: 'Built-in photo moment',
    description:
      'Large glowing letters give employees, clients, sponsors, and attendees a natural place to take photos.',
  },
  {
    title: 'Consistent brand presence',
    description:
      'Company initials, event titles, and short phrases become a repeatable part of your event identity.',
  },
];

const productCards = [
  {
    title: 'Event Stand-Up Letters',
    body:
      'Freestanding illuminated letters in 36-inch and 48-inch heights for conferences, award ceremonies, and branded activations. Letters, numbers, symbols, and 15-inch topper phrases available. No permanent installation required.',
    link: '/event-standup-signs',
    linkLabel: 'Explore event letters',
    image: lexusLettersOfficeImage,
    alt: 'Lexus Southern Area freestanding illuminated marquee letters set up for a company event',
  },
  {
    title: 'Custom Logo Signs',
    body:
      'Custom fabricated metal signs built from your logo, wordmark, or artwork with optional illumination. Popular for trade show booths, lobby walls, and brand installations. Layered metal construction adds depth and hand-finished detail.',
    link: '/3d-logos',
    linkLabel: 'Explore custom logo signs',
    image: cafeCollectiveAsset.url,
    alt: 'Cafe Collective Cleveland custom logo sign with lit lettering mounted on a wall',
  },
  {
    title: 'Wall-Hanging Marquee Signs',
    body:
      'Permanent or semi-permanent wall-mounted marquee signs and letters for offices, lobbies, conference rooms, restaurants, retail spaces, and branded interiors. Custom built in your font, size, and configuration.',
    link: '/wall-hanging-signs',
    linkLabel: 'Explore wall-hanging signs',
    image: starlightAsset.url,
    alt: 'Starlight Theater bulb-lit logo sign mounted in a room',
  },
  {
    title: 'Something Fully Custom',
    body:
      'Trade show structures, branded shapes, arrows, badges, and one-of-a-kind pieces. Send your drawing, inspiration, logo, or concept and tell us what you are imagining.',
    link: '/custom-marquee-signs',
    linkLabel: 'See all custom sign options',
    image: espnHouseAsset.url,
    alt: 'ESPN House Nashville custom sign built for a branded event space',
  },
];

const processSteps = [
  {
    step: '1',
    title: 'Share the brief',
    body: 'Send the wording, logo file, artwork, or idea, plus the space or event you are planning around.',
  },
  {
    step: '2',
    title: 'Get a quote',
    body: 'Submit the matching quote form and we follow up with options, sizing guidance, and pricing.',
  },
  {
    step: '3',
    title: 'Approve the build',
    body: 'Confirm size, finish, lighting, and accessories. Financing is available for qualified buyers.',
  },
  {
    step: '4',
    title: 'Receive and reuse',
    body: 'Event letters arrive pre-lit and ready to display. Optional foam-lined storage boxes are available.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://inventory.vintagemarqueelights.com/' },
        { '@type': 'ListItem', position: 2, name: 'Corporate Marquee Signs', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: corporateFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

const CorporateMarqueeSigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Corporate &amp; Brands</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
                  For corporations, brands, and businesses
                </Badge>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  Corporate Marquee Letters &amp; Custom Business Signs
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  Two ways companies buy from us: reusable freestanding marquee letters for conferences,
                  awards, activations, and company events — and custom marquee signs, custom business signs,
                  and custom logo signs for lobbies, trade show booths, restaurants, retail, and branded
                  spaces.
                </p>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  Everything is built to order and sold for ownership. Your team keeps the letters and the
                  signs, and uses them as long as you want.
                </p>
                <p className="mb-6 text-sm text-muted-foreground">
                  36″ event letters start at $800 per letter, with quantity-based discounts available.{' '}
                  <a
                    href="https://vintagemarqueelights.approvepayments.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-primary"
                  >
                    Financing Available
                  </a>{' '}
                  — as low as $41/month
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="text-base font-semibold">
                    <Link to="/quote/event-standup">Get Event Letter Pricing</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base font-semibold">
                    <Link to="/quote/3d-logos">Get a Custom Sign Quote</Link>
                  </Button>
                </div>
              </div>

              <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <PerformantImage
                  src={lexusHolidayPartyImage}
                  alt="LEXUS illuminated marquee letters styled with a silver and white balloon garland at a Lexus holiday party"
                  className="aspect-[4/3] w-full bg-muted/30 object-contain"
                  loading="eager"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  Lexus Southern Area used one set of freestanding letters for two different company events.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Two paths */}
        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              Choose your path
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {paths.map((path) => (
                <div
                  key={path.title}
                  className="flex flex-col rounded-2xl border border-primary/20 bg-card p-6 shadow-sm md:p-8"
                >
                  <h3 className="mb-1 text-xl font-bold text-foreground">{path.title}</h3>
                  <p className="mb-3 text-sm font-semibold text-primary">{path.subtitle}</p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{path.body}</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="font-semibold">
                      <Link to={path.link}>{path.cta}</Link>
                    </Button>
                    <Button asChild variant="outline" className="font-semibold">
                      <Link to={path.secondaryLink}>{path.secondaryCta}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/30 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
              Why companies buy instead of renting each time
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
              Corporate calendars repeat. Owning the letters turns a one-time event expense into a branded
              asset your marketing team can pull out whenever it is needed.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-primary/20">
                  <CardContent className="p-5">
                    <Check className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mb-2 font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product cards */}
        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              Products for business and corporate use
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {productCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <PerformantImage
                    src={card.image}
                    alt={card.alt}
                    className="aspect-[16/10] w-full bg-muted/30 object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-bold text-foreground">{card.title}</h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                    <Button asChild variant="outline" className="self-start font-semibold">
                      <Link to={card.link}>{card.linkLabel}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lexus proof */}
        <section
          id="lexus-corporate-story"
          className="scroll-mt-24 bg-gradient-to-br from-primary/5 via-background to-accent/10 px-4 py-12 md:py-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/10">Customer Story</Badge>
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                How Lexus Southern Area reuses one letter set across company events
              </h2>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
                Lexus Southern Area purchased a small set of commercial freestanding marquee letters that can
                be styled again and again for company events, seasonal celebrations, sports themes, and
                marketing department activations.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[420px_1fr] lg:items-start">
              <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-border bg-card shadow-xl lg:mx-0">
                <PerformantImage
                  src={lexusHolidayPartyImage}
                  alt="LEXUS marquee letters with silver and white balloons at a corporate holiday party"
                  className="aspect-[4/3] w-full bg-muted/30 object-contain"
                  loading="lazy"
                  sizes="(max-width: 1024px) 440px, 420px"
                />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  A branded display they can use beyond one event
                </h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Joy Hackney and the Lexus Southern Area team used their event letters for two very different
                  company events. For the holiday party, they spelled out LEXUS and paired the warm illuminated
                  letters with a silver and white balloon garland to create an elegant focal point. Later, they
                  used the same set for a 2026 World Cup kick-off party, spelling LSA and styling the display
                  with soccer balls to match the theme.
                </p>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  That is the strength of owning a small set of 36-inch or 48-inch stand-up letters. A company
                  can use the same letters for recurring events throughout the year instead of starting from
                  scratch each time.
                </p>
                <div className="rounded-xl border-l-4 border-primary bg-muted/40 p-5">
                  <blockquote className="mb-4 text-lg font-semibold italic leading-relaxed text-foreground">
                    “Everyone loves the letters and we use them for so many things. They were the absolute
                    highlight of the decor. Everyone was raving about them and taking photos all night. This
                    was definitely one of the best purchases I made for our marketing department.”
                  </blockquote>
                  <cite className="text-sm font-semibold not-italic text-muted-foreground">
                    Joy Hackney, Vehicle Marketing Administrator, Lexus Southern Area
                  </cite>
                </div>
              </div>
            </div>

            <div className="mt-8 mx-auto max-w-xl overflow-hidden rounded-xl border border-border bg-card shadow-md">
              <PerformantImage
                src={lexusLettersOfficeImage}
                alt="Lexus Southern Area freestanding marquee letters set up for another company event"
                className="aspect-[4/3] w-full bg-muted/30 object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </div>
          </div>
        </section>

        {/* Financing + process */}
        <section className="bg-muted/20 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 rounded-2xl border border-primary/20 bg-card p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-bold text-foreground">Financing for qualified buyers</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Qualified buyers can finance a purchase through APPROVE, an equipment-financing platform that
                connects applicants with a network of lenders. APPROVE is not itself the lender, and financing
                and terms are subject to lender approval and vary. Financing can help preserve working capital
                while putting the signage to work for your brand.
              </p>
              <Button
                asChild
                variant="outline"
                className="whitespace-normal text-center font-semibold leading-snug"
              >
                <a
                  href="https://vintagemarqueelights.approvepayments.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Financing Through APPROVE
                </a>
              </Button>
            </div>

            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              How the process works
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div key={item.step} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Media coverage and notable installations are collected separately under{' '}
              <Link to="/press" className="text-primary underline underline-offset-2">
                Featured in
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              Common questions from corporate buyers
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {corporateFaqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-5">
                  <h3 className="mb-2 font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Run an event production or rental company instead? See our{' '}
              <Link to="/rental-inventory" className="text-primary underline underline-offset-2">
                rental inventory packages
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-5xl rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-xl md:p-10">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Ready to elevate your next corporate event or space?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-primary-foreground/85">
              Tell us the company name, initials, event title, or logo you want built and we will send options
              and pricing.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
                <Link to="/quote/event-standup">Get Event Letter Pricing</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/quote/3d-logos">Get a Custom Sign Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CorporateMarqueeSigns;
