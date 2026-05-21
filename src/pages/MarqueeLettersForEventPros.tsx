import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PerformantImage from '@/components/PerformantImage';

const djFrancoHeroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663459706891/hduztCJqumpVuYzd.webp";
const djFrancoGallery = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663459706891/reXuirzAXVKMdfED.webp",
    alt: "VOSS marquee letters displayed inside the DJ Franco Events venue"
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663459706891/khjlOFdwAGMpPYTg.webp",
    alt: "THE FOSTERS marquee letters displayed in an event space"
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663459706891/VaYUzgyOLxyzMFQs.webp",
    alt: "OBRIEN marquee letters with color-changing bulbs"
  }
];

const MarqueeLettersForEventPros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Marquee Letters for DJs, Venues & Event Pros | Vintage Marquee Lights</title>
        <meta name="description" content="Add commercial-grade marquee letters to your existing DJ, venue, planning, photo booth, balloon, or event rental business. See how DJ Franco Events uses VML letters as a premium event upsell." />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/marquee-letters-for-event-pros" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Marquee Letters for DJs, Venues & Event Pros" />
        <meta property="og:description" content="Already book weddings, parties, and corporate events? Add commercial-grade marquee letters as a premium visual upsell." />
        <meta property="og:url" content="https://inventory.vintagemarqueelights.com/marquee-letters-for-event-pros" />
      </Helmet>

      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">For DJs, venues, planners, decorators, photo booths, and event pros</Badge>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Add marquee letters to the event business you already have
              </h1>
              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                You already have the audience, the events, and the client relationships. Commercial-grade marquee letters give you another high-visibility add-on to sell at weddings, corporate events, birthdays, school functions, and private celebrations.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                Vintage Marquee Lights sells complete 36 inch and 48 inch rental inventory packages to event professionals who want a durable, photo-ready product they can rent again and again. You keep your own brand, your own customers, and your own booking revenue.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="text-base font-semibold">
                  <Link to="/quote/rental-inventory">Request Package Pricing</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base font-semibold">
                  <Link to="/rental-inventory#dj-franco-events-story">Read Franco's Story</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-3 shadow-xl">
              <PerformantImage
                src={djFrancoHeroImage}
                alt="DJ Franco Events marquee letters inside an event venue"
                className="h-[360px] w-full rounded-2xl object-cover md:h-[460px]"
                priority={true}
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ['Sell to people already booking you', 'Your current wedding, party, school, venue, and corporate clients are already buying event experiences. Marquee letters become a natural upgrade.'],
                ['Create a visual add-on with repeat value', 'The same inventory can be used for names, initials, company names, hashtags, birthdays, graduations, and themed events.'],
                ['Stay independent', 'VML does not sell a franchise. You own the inventory, keep your brand, set your pricing, and build equity in your own business.']
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h2 className="mb-3 text-xl font-bold text-foreground">{title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 px-4 py-14">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="grid grid-cols-3 gap-3">
              {djFrancoGallery.map((image) => (
                <PerformantImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="h-40 w-full rounded-2xl object-cover shadow-md md:h-56"
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, 220px"
                />
              ))}
            </div>
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/10">Customer proof</Badge>
              <h2 className="mb-5 text-3xl font-bold text-foreground">DJ Franco Events shows the add-on path</h2>
              <p className="mb-5 text-base leading-relaxed text-muted-foreground">
                Franco did not need to start over or become a different kind of business. He already served event clients. The marquee letters gave him a premium visual product that fit naturally into the events he was already booking.
              </p>
              <blockquote className="mb-5 rounded-2xl border-l-4 border-primary bg-background p-5 text-base italic leading-relaxed text-muted-foreground shadow-sm">
                "Our marquee letters have become one of the easiest add-ons to sell because clients instantly understand the photo value. They make the room feel custom, and they give guests something to take pictures with all night."
              </blockquote>
              <p className="mb-7 text-sm font-semibold text-foreground">DJ Franco Events</p>
              <Button asChild variant="outline" className="font-semibold">
                <Link to="/rental-inventory#dj-franco-events-story">See the full DJ Franco customer story</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground">Which event businesses are a fit?</h2>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
                If your business already touches weddings, parties, school events, corporate events, or private celebrations, marquee letters can give you another product to quote without needing to learn a completely different market.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {['DJs and entertainment companies', 'Photo booth businesses', 'Wedding and event planners', 'Venues and banquet halls', 'Balloon and backdrop decorators', 'Event rental companies'].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-card p-5 text-center text-sm font-semibold text-foreground shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary/5 px-4 py-14">
          <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-background p-6 text-center shadow-sm md:p-10">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Want to see which package fits your business?</h2>
            <p className="mx-auto mb-7 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Tell us what kind of event business you run, how many events you book, and whether you want 36 inch, 48 inch, RGB, or LED neon style inventory. We will help you compare the package sizes and choose a realistic entry point.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/quote/rental-inventory">Request Package Pricing</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <Link to="/rental-inventory">Compare Rental Inventory Packages</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarqueeLettersForEventPros;
