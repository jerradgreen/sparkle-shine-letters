import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const WhySchoolsBuyMarqueeLetters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Why Schools Buy Commercial Marquee Letters for Events | Vintage Marquee Lights</title>
        <meta name="description" content="How high schools and middle schools use commercial marquee letters for pep rallies, graduations, fundraisers, and school events. Learn why schools invest in reusable marquee signage." />
      </Helmet>

      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose prose-sm md:prose-base max-w-none">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Schools Buy Commercial Marquee Letters for Events
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-4">
            High schools, middle schools, and school districts across the country are investing in commercial marquee letters — not for a single event, but as reusable assets that serve dozens of occasions every year.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Events That Use Marquee Letters</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Schools use stand-up marquee letters for pep rallies, homecoming, graduation ceremonies, fundraisers, athletic banquets, open houses, and spirit nights. The letters spell out the school name, class year, team name, or event-specific phrases — and they get reused throughout the entire school year.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Why Schools Choose to Buy Instead of Rent</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Renting marquee letters for every event adds up quickly. Schools that host 10–20 events a year find it far more cost-effective to purchase their own set of <Link to="/event-standup-signs" className="text-primary underline hover:text-primary/80">36-inch or 48-inch stand-up marquee letters</Link> and reuse them indefinitely. The letters are built from powder-coated steel, so they're durable enough to handle years of use across gyms, auditoriums, and outdoor fields.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">What to Order</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most schools start with the full alphabet (A–Z) plus numbers 0–9 to cover the widest range of phrases and dates. Adding symbols like the ampersand (&) and topper phrases such as CLASS OF or THE lets you create layered displays without ordering new inventory every year.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Foam-lined boxes keep everything organized and protected between events, and optional double-row display stands let you spell out longer phrases without taking up extra floor space.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Beyond the Gym</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Some schools also invest in <Link to="/wall-hanging-signs" className="text-primary underline hover:text-primary/80">wall-hanging marquee signs or custom layered logos</Link> for permanent installations in lobbies, trophy rooms, or athletic facilities. These complement the portable stand-up letters and give the school a cohesive branded look across campus.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-8">
            Ready to see what's available? <Link to="/event-standup-signs" className="text-primary underline hover:text-primary/80">Browse our commercial stand-up marquee letters</Link> and request a quote for your school.
          </p>
        </article>

        <div className="mt-12 pt-6 border-t border-border">
          <Link to="/blog" className="text-sm text-primary underline hover:text-primary/80">← Back to Articles</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhySchoolsBuyMarqueeLetters;
