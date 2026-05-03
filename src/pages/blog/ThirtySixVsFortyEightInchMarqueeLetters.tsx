import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ThirtySixVsFortyEightInchMarqueeLetters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>36 vs 48 Inch Marquee Letters: Which Size Should You Buy? | Vintage Marquee Lights</title>
        <meta name="description" content="Compare 36-inch and 48-inch stand-up marquee letters. Learn which size fits your venue, storage, and event needs. A practical buyer's guide." />
      </Helmet>

      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose prose-sm md:prose-base max-w-none">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            36 vs 48 Inch Marquee Letters: Which Size Should You Buy?
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-4">
            When you're buying commercial marquee letters, one of the first decisions is size. We offer two standard heights — 36 inches and 48 inches — and both are built the same way: powder-coated steel, LED-lit with E12 bulbs, and fully self-standing. The difference comes down to visibility, handling, and where you plan to use them.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">36-Inch Letters: The Standard Choice</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The 36-inch size is our most popular option. It's tall enough to be clearly visible in most indoor venues — school gyms, hotel ballrooms, conference rooms, stages, and restaurant spaces. At three feet tall, they're easy to move, store, and set up without a team. They also fit comfortably in standard vehicles for transport.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            36-inch letters start at $800 and ship faster due to higher production volume. For most buyers — schools, event companies, and corporations — this is the right size.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">48-Inch Letters: Maximum Visibility</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The 48-inch size is built for large spaces where you need the letters to be seen from far away. Think outdoor stadiums, convention center halls, large auditoriums, or festival grounds. At four feet tall, they command attention — but they also require more storage space and heavier lifting to set up and transport.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            48-inch letters are available on request. Contact us for pricing and lead times.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">How to Decide</h2>
          <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-4">
            <li><strong>Venue size:</strong> Indoor venues under 5,000 sq ft → 36″. Large halls, outdoor, or stadium settings → consider 48″.</li>
            <li><strong>Transport:</strong> 36″ letters fit in SUVs and vans. 48″ letters typically need a cargo van or trailer.</li>
            <li><strong>Storage:</strong> 36″ foam-lined boxes are more compact. 48″ boxes take up more warehouse or closet space.</li>
            <li><strong>Budget:</strong> 36″ letters cost less per unit and ship sooner.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Can You Mix Sizes?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Technically, yes — but most buyers stick with one size for a consistent look. If you have two distinct use cases (e.g., indoor school events and outdoor stadium events), separate sets may make sense.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-8">
            Ready to order? <Link to="/event-standup-signs" className="text-primary underline hover:text-primary/80">View our commercial stand-up marquee letters</Link>, preview your setup with our letter visualizer, and request a quote.
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

export default ThirtySixVsFortyEightInchMarqueeLetters;
