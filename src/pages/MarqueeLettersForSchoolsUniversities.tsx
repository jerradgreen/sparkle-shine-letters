import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, GraduationCap, Trophy, Users, Building2, Sparkles, Package } from 'lucide-react';
import PerformantImage from '@/components/PerformantImage';

const PAGE_URL = 'https://inventory.vintagemarqueelights.com/marquee-letters-for-schools-universities';
const PAGE_TITLE = 'Marquee Letters for Schools & Universities | Vintage Marquee Lights';
const PAGE_DESCRIPTION =
  'Custom marquee letters schools and universities buy and own for graduations, admissions events, game days, homecoming, and recurring campus events. 36" and 48" freestanding letters built for repeated setup and teardown.';

const geneseoImage = '/images/schools/geneseo-knights-university-marquee-letters.webp';
const geneseoAlt = 'GENESEO KNIGHTS illuminated marquee letters outdoors at Geneseo, a university in New York.';

const campusUseCases = [
  {
    icon: GraduationCap,
    title: 'Graduation & Commencement',
    description:
      'Spell your school name, class year, or a short phrase for commencement stages, diploma photo lines, and senior celebrations.',
  },
  {
    icon: Users,
    title: 'Admissions & Recruiting',
    description:
      'Accepted-student days, open houses, and campus tours can use a branded, photo-ready focal point.',
  },
  {
    icon: Trophy,
    title: 'Athletics & Game Days',
    description:
      'Team abbreviations, mascot names, and school letters for tailgates, pep rallies, tournaments, and arena entrances.',
  },
  {
    icon: Users,
    title: 'Alumni & Homecoming',
    description:
      'One lettering set can be used for homecoming weekend, reunion tents, and donor receptions.',
  },
  {
    icon: Sparkles,
    title: 'Student Affairs & Campus Life',
    description:
      'Welcome week, orientation, residence life events, club fairs, and student programming displays.',
  },
  {
    icon: Trophy,
    title: 'Awards & Recognition',
    description:
      'Honors convocations, faculty and staff recognition nights, scholarship banquets, and stage backdrops.',
  },
  {
    icon: Building2,
    title: 'Fundraisers & Donor Events',
    description:
      'Galas, giving-day activations, and campaign milestones where a lit display can anchor photos.',
  },
  {
    icon: Package,
    title: 'Conferences & Recurring Events',
    description:
      'Symposiums, camps, summer programs, and other events that repeat on the academic calendar.',
  },
];

const ownershipPoints = [
  {
    title: 'Buy once, use it again',
    description:
      'The letters belong to the campus, so the same set can be used for events across the academic year without booking anything.',
  },
  {
    title: 'No rental coordination',
    description:
      'No availability calls, delivery windows, or per-event contracts — the set is already on campus when you need it.',
  },
  {
    title: 'Consistent brand presence',
    description:
      'The same letters, the same look, every event — instead of whatever a vendor happens to have available that weekend.',
  },
  {
    title: 'Built for repeated setup',
    description:
      'Powder-coated steel construction with a self-standing base, designed for repeated setup and teardown.',
  },
];

const productFit = [
  {
    title: '36-inch letters',
    body:
      'The standard and most popular size — easier to store, transport, and set up, and a good fit for most indoor venues, stages, and campus event spaces.',
  },
  {
    title: '48-inch letters',
    body:
      'Available when you need maximum visibility at large auditoriums, outdoor stadiums, or convention halls.',
  },
  {
    title: 'Letters, numbers & symbols',
    body:
      'Full alphabet A–Z, numbers 0–9, and common symbols including the ampersand (&), hashtag (#), and heart (♥) so you can spell class years, scores, and hashtags.',
  },
  {
    title: '15-inch topper phrases',
    body:
      'Topper phrases such as CLASS OF are pre-mounted on a shared base and sit on top of 36-inch letters for layered displays. Additional topper phrases are available — ask when you request a quote.',
  },
  {
    title: 'Lighting options',
    body:
      'Standard bulbs, plus color-changing bulb and LED neon options you can compare on the event letters page before you order.',
  },
  {
    title: 'Storage boxes & display stands',
    body:
      'Optional foam-lined boxes are available for storage and transport between events. Optional double-row display stands hold two rows of letters side by side.',
  },
];

const process = [
  {
    step: '1',
    title: 'Tell us what you want to spell',
    body: 'School name, team abbreviation, class year, or a short phrase — plus your event date if you have one.',
  },
  {
    step: '2',
    title: 'Request a quote',
    body: 'Submit the event letters quote form. We follow up with sizing guidance, options, and pricing for your set.',
  },
  {
    step: '3',
    title: 'Confirm your set',
    body: 'Choose 36-inch or 48-inch, add numbers, symbols, toppers, storage boxes, or stands. Financing is available for qualified buyers.',
  },
  {
    step: '4',
    title: 'Receive and reuse',
    body: 'Letters arrive pre-lit in foam-lined boxes, ready to deploy — then store them on campus for the next event.',
  },
];

const faqs = [
  {
    question: 'Do schools rent these letters or buy them?',
    answer:
      'Vintage Marquee Lights sells the letters for long-term ownership and repeated use. They are commonly purchased by universities, schools, athletic departments, and venues that use them across multiple events each year.',
  },
  {
    question: 'What sizes should a campus buy?',
    answer:
      'We offer 36-inch and 48-inch stand-up marquee letters. The 36-inch size is the most popular because it is easier to store, transport, and set up, and it ships faster. The 48-inch size is available for buyers who need maximum visibility at large venues or outdoor events.',
  },
  {
    question: 'Can we get numbers for class years?',
    answer:
      'Yes. We offer the full alphabet A–Z, numbers 0–9, and common symbols including the ampersand (&), hashtag (#), and heart (♥), so you can spell class years, dates, scores, and hashtags.',
  },
  {
    question: 'How are the letters packaged and stored between events?',
    answer:
      'Letters ship in reusable foam-lined boxes designed for repeated use. Each letter is individually cushioned to prevent damage during transit and storage, and the boxes are built to last through many events.',
  },
  {
    question: 'Are these suitable for long-term institutional use?',
    answer:
      'Yes. They are built with powder-coated steel and LED bulbs designed for repeated setup and teardown. Universities, event companies, venues, athletic departments, and schools use them across dozens of events per year.',
  },
  {
    question: 'Are these the same as a school marquee sign or reader board?',
    answer:
      'No. These are freestanding illuminated event letters used for graduations, stage backdrops, branding, and promotional displays. They are not permanent roadside school reader boards or changeable message-center signs.',
  },
  {
    question: 'What kind of bulbs are used?',
    answer:
      'We use LED bulbs designed for durability and easy replacement. You receive spare bulbs with your order, and replacements are available if needed.',
  },
  {
    question: 'Is there a warranty?',
    answer:
      'Yes. We replace any items damaged beyond simple repair during shipping or due to a manufacturing issue. We do not replace items damaged from dropping, tipping, or misuse.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://inventory.vintagemarqueelights.com/' },
        { '@type': 'ListItem', position: 2, name: 'Marquee Letters for Schools & Universities', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

const MarqueeLettersForSchoolsUniversities = () => {
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
              <span>Schools &amp; Universities</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
                  For universities, colleges, and K-12 schools
                </Badge>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  Custom Marquee Letters Schools &amp; Universities Own and Reuse
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  Buy your school name, team abbreviation, or class year once and use the same illuminated
                  letters for graduation, admissions events, game days, homecoming, and campus programming —
                  every year.
                </p>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  Vintage Marquee Lights builds and sells commercial-grade 36-inch and 48-inch freestanding
                  marquee letters. Your campus owns the set. These are for purchase, not rental.
                </p>
                <p className="mb-6 text-sm text-muted-foreground">
                  36″ letters start at $800 per letter, with quantity-based discounts available.{' '}
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
                    <Link to="/quote/event-standup">Request Campus Pricing</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base font-semibold">
                    <Link to="/event-standup-signs">View Event Letters</Link>
                  </Button>
                </div>
              </div>

              <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <PerformantImage
                  src={geneseoImage}
                  alt={geneseoAlt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  GENESEO KNIGHTS marquee letters set up outdoors on the SUNY Geneseo campus.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Ownership vs repeated rental */}
        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
              Ownership beats renting the same letters again and again
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
              Most campuses do not hold one event a year. Between commencement, admissions, athletics, student
              life, and alumni weekends, the same lettering gets used over and over — which is exactly why
              schools buy their own set.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ownershipPoints.map((point) => (
                <Card key={point.title} className="border-primary/20">
                  <CardContent className="p-5">
                    <Check className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mb-2 font-bold text-foreground">{point.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Campus use cases */}
        <section className="bg-muted/30 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
              Where campuses use marquee letters
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
              One lettering set can serve the entire academic calendar.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {campusUseCases.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product fit */}
        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
              Choosing the right set for your campus
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
              Sizes, characters, lighting, and accessories — all of the options are detailed on the{' '}
              <Link to="/event-standup-signs" className="text-primary underline underline-offset-2">
                event stand-up letters page
              </Link>
              .
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {productFit.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm italic text-muted-foreground">
              We strongly recommend ordering your full set upfront. Commercial production runs are more
              efficient at scale — adding small quantities later typically costs more per unit and extends
              lead times.
            </p>
          </div>
        </section>

        {/* Photo proof */}
        <section className="bg-muted/20 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/10">Campus Photo</Badge>
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
              SUNY Geneseo: school name and mascot letters on campus
            </h2>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                <PerformantImage
                  src={geneseoImage}
                  alt={geneseoAlt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>
              <div>
                <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                  GENESEO and KNIGHTS spelled in illuminated stand-up marquee letters, set up outdoors on the
                  SUNY Geneseo campus in New York. A display like this can be arranged as one long line, split
                  into two words, or broken apart for separate photo spots depending on the event.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Because the letters are freestanding and self-supporting, campus staff can reposition them
                  for commencement one weekend and a game-day tailgate the next.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <PerformantImage
                  src={graduationNumbers}
                  alt="Illuminated marquee numbers spelling 1969 displayed at an event"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <PerformantImage
                  src={elev8Letters}
                  alt="Stand-up marquee letters spelling ELEV8 at an event venue"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <PerformantImage
                  src={stageSetup}
                  alt="Marquee letters displayed on a stage setup"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              How campuses order
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              Questions from schools and universities
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-5">
                  <h3 className="mb-2 font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Want the longer read? See{' '}
              <Link
                to="/blog/why-schools-buy-commercial-marquee-letters"
                className="text-primary underline underline-offset-2"
              >
                why schools buy commercial-grade marquee letters
              </Link>{' '}
              and{' '}
              <Link
                to="/blog/universities-teams-marquee-letters-branding"
                className="text-primary underline underline-offset-2"
              >
                how universities and teams use marquee letters for branding
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-5xl rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-xl md:p-10">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Ready to own your campus letters?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-primary-foreground/85">
              Tell us the school name, mascot, team abbreviation, or class year you want to spell and your
              event date. We will send sizing guidance and pricing for your set.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
                <Link to="/quote/event-standup">Request Campus Pricing</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/event-standup-signs">View Event Letters</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarqueeLettersForSchoolsUniversities;
