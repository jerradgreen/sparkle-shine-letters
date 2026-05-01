import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ShopifyHeader from '@/components/ShopifyHeader';
import ShopifyFooter from '@/components/ShopifyFooter';

const weddingFaqs = [
  {
    question: "What marquee letter sizes work best for weddings?",
    answer: "Our 36-inch letters are ideal for intimate indoor receptions and photo backdrops. The 48-inch letters are the go-to choice for large ballrooms, outdoor ceremonies, and anywhere you want maximum visual impact. For a full name or long phrase, 36-inch letters keep the overall footprint manageable while still looking stunning in photos."
  },
  {
    question: "Can I rent marquee letters for a wedding?",
    answer: "Yes. If you are looking to rent marquee letters for your wedding, search for a local marquee letter rental company in your area. If you are an event professional or entrepreneur looking to start a wedding rental business with marquee letters, we sell complete rental inventory packages designed for exactly that purpose."
  },
  {
    question: "How far in advance should I order wedding marquee signs?",
    answer: "We recommend ordering at least 6 to 8 weeks before your wedding date. Our signs are custom fabricated, and production lead times typically run 4 to 6 weeks. Ordering early also gives you time to address any questions before the big day."
  },
  {
    question: "What is the most popular wedding marquee sign?",
    answer: "The most popular wedding marquee setups are the couple's last name or initials, 'LOVE', 'MR & MRS', and custom hashtags for social media. Large illuminated letters spelling out the couple's name as a backdrop behind the sweetheart table are consistently one of the most-photographed elements at modern weddings."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": weddingFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const WeddingMarqueeSigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Wedding Marquee Signs and Light-Up Letters | Vintage Marquee Lights</title>
        <meta name="description" content="Custom wedding marquee signs and illuminated letters for receptions, ceremonies, and photo backdrops. Available in 36-inch and 48-inch sizes. Request a quote today." />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/wedding-marquee-signs" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <ShopifyHeader />

      <main className="max-w-4xl mx-auto px-4 py-12">

        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Wedding Marquee Signs</span>
        </nav>

        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          Wedding Marquee Signs and Light-Up Letters
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          There is a moment at every wedding reception when the lights dim, the letters glow, and every guest reaches for their phone. Custom marquee signs have become one of the most iconic elements of modern wedding decor, and for good reason: they are personal, they are photogenic, and they create an atmosphere that flat printed signage simply cannot match.
        </p>

        <div className="mb-10 rounded-lg overflow-hidden">
          <img
            src="/images/hero-lockwoods.webp"
            alt="Couple dancing in front of large illuminated marquee letters spelling THE LOCKWOODS at a wedding reception"
            className="w-full object-cover max-h-[480px]"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Why Couples Choose Marquee Letters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Illuminated marquee letters bring warmth and dimension to any venue. Whether you are working with a rustic barn, a modern ballroom, or an outdoor garden setting, large light-up letters anchor the space and give guests a focal point that photographs beautifully in every lighting condition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unlike floral arrangements or fabric draping, marquee signs are durable, reusable, and deliver a consistent wow factor regardless of the time of day. They look just as striking during the cocktail hour as they do on the dance floor at midnight.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Popular Wedding Setups</h2>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>Last name or initials</strong> behind the sweetheart table or ceremony arch</span></li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>LOVE</strong> or <strong>MR &amp; MRS</strong> as a freestanding photo backdrop</span></li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>Custom hashtag</strong> to drive social media sharing from guests</span></li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>Table numbers</strong> in matching marquee style for a cohesive look</span></li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>Venue name or monogram</strong> for a permanent installation at the event space</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-3">Sizes and Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">36-Inch Letters</h3>
              <p className="text-sm text-muted-foreground">The most versatile size for weddings. Works in venues with standard ceiling heights, fits comfortably on most reception tables as a centerpiece backdrop, and is easy to transport and set up. Ideal for indoor ceremonies and intimate receptions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">48-Inch Letters</h3>
              <p className="text-sm text-muted-foreground">The statement size. At four feet tall, these letters command attention in large ballrooms, outdoor settings, and anywhere you need the sign to be visible from across the room. The go-to choice for couples who want maximum impact in their photos.</p>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/blog/36-vs-48-inch-marquee-letters" className="text-primary hover:underline text-sm font-semibold">
              Read our full comparison: 36-inch vs 48-inch marquee letters
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">For Wedding Rental Professionals</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you are an event planner, wedding coordinator, or entrepreneur looking to add marquee letter rentals to your business, our <Link to="/rental-inventory" className="text-primary hover:underline font-semibold">rental inventory packages</Link> are built for exactly that. A complete starter inventory gives you the letters, numbers, and symbols to service multiple weddings per weekend, with a return on investment that most rental business owners see within the first year.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Visit our <Link to="/rental-business" className="text-primary hover:underline font-semibold">rental business hub</Link> for detailed articles on startup costs, building a scalable inventory, and profitability.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Common Questions About Wedding Marquee Signs</h2>
          <div className="space-y-6">
            {weddingFaqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-5">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-3">Ready to Light Up Your Wedding?</h2>
          <p className="text-muted-foreground mb-5">
            Fill out our quote request and we will send you full pricing, size options, and availability within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/quote/event-standup" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity">
              Request a Wedding Quote
            </Link>
            <Link to="/event-standup-signs" className="inline-block border border-primary text-primary px-6 py-3 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              View Event Stand-Up Signs
            </Link>
          </div>
        </div>

      </main>

      <ShopifyFooter />
    </div>
  );
};

export default WeddingMarqueeSigns;
