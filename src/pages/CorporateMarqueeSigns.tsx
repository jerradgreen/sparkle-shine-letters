import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ShopifyHeader from '@/components/ShopifyHeader';
import ShopifyFooter from '@/components/ShopifyFooter';

const corporateFaqs = [
  {
    question: "Can marquee letters display a company logo or brand name?",
    answer: "Yes. We fabricate custom 3D layered logo signs and dimensional lettering that can reproduce your brand mark, company name, or custom shapes in any font. These are popular for trade show booths, conference backdrops, lobby installations, and branded event activations."
  },
  {
    question: "What types of corporate events use marquee signs?",
    answer: "Common corporate applications include annual conferences and award ceremonies, product launches and brand activations, trade show and expo booths, employee appreciation events, company milestone celebrations, and holiday parties. Marquee letters are particularly effective at conferences because they create a branded photo opportunity that attendees share on social media, extending your event's reach organically."
  },
  {
    question: "Can I get a permanent marquee sign for our office or lobby?",
    answer: "Yes. Our wall-hanging marquee signs and 3D logo signs are designed for permanent or semi-permanent installation in commercial spaces. They are popular for office lobbies, conference rooms, reception areas, and co-working spaces. We fabricate to your exact specifications and provide installation-ready hardware."
  },
  {
    question: "What is the turnaround time for a corporate order?",
    answer: "Custom fabricated signs typically take 4 to 6 weeks from order confirmation to shipping. For large corporate orders or event-specific deadlines, we recommend reaching out as early as possible. Fill out a quote request and mention your event date so we can confirm availability."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": corporateFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const CorporateMarqueeSigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Corporate Event Marquee Signs and Branded Signage | Vintage Marquee Lights</title>
        <meta name="description" content="Custom marquee signs and illuminated letters for corporate events, conferences, trade shows, and office installations. Branded signage that creates memorable photo moments and extends your event reach." />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/corporate-marquee-signs" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <ShopifyHeader />

      <main className="max-w-4xl mx-auto px-4 py-12">

        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Corporate Marquee Signs</span>
        </nav>

        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          Corporate Event Marquee Signs and Branded Signage
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          The best corporate events are the ones people talk about afterward. Custom illuminated marquee signs and branded dimensional lettering give your company a physical presence that attendees photograph, share, and remember. Whether you need a backdrop for your annual conference, a statement piece for your trade show booth, or a permanent installation in your lobby, we build commercial-grade signs that represent your brand at the highest level.
        </p>

        <div className="mb-10 rounded-lg overflow-hidden">
          <img
            src="/images/hero-lexus-event.png"
            alt="Large illuminated marquee letters spelling LEXUS on stage at a corporate event with audience"
            className="w-full object-cover max-h-[480px]"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-muted rounded-lg p-5">
            <h2 className="font-semibold text-foreground mb-2">Events and Conferences</h2>
            <p className="text-sm text-muted-foreground">Large illuminated letters spelling your company name, event hashtag, or theme create a branded photo opportunity that extends your event's reach on social media long after the day is over.</p>
          </div>
          <div className="bg-muted rounded-lg p-5">
            <h2 className="font-semibold text-foreground mb-2">Trade Shows and Expos</h2>
            <p className="text-sm text-muted-foreground">A dimensional illuminated logo or brand name makes your booth visible from across the floor and signals to attendees that you take your brand seriously. It is one of the highest-ROI investments at a trade show.</p>
          </div>
          <div className="bg-muted rounded-lg p-5">
            <h2 className="font-semibold text-foreground mb-2">Office and Lobby Installations</h2>
            <p className="text-sm text-muted-foreground">Permanent wall-mounted marquee signs and 3D logo installations transform reception areas, conference rooms, and common spaces into branded environments that impress clients and motivate employees.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">Products for Corporate Use</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-1">
                <Link to="/event-standup-signs" className="text-primary hover:underline">Event Stand-Up Letters</Link>
              </h3>
              <p className="text-sm text-muted-foreground">Freestanding illuminated letters in 36-inch and 48-inch heights. Ideal for conferences, award ceremonies, and branded activations. Available in full alphabets, numbers, and symbols. No permanent installation required.</p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-1">
                <Link to="/3d-logos" className="text-primary hover:underline">3D Layered Logo Signs</Link>
              </h3>
              <p className="text-sm text-muted-foreground">Custom fabricated dimensional signs that reproduce your logo or brand mark in metal with optional illumination. Perfect for trade show booths, lobby walls, and permanent brand installations. Every piece is built to your exact specifications.</p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-1">
                <Link to="/wall-hanging-signs" className="text-primary hover:underline">Wall-Hanging Marquee Signs</Link>
              </h3>
              <p className="text-sm text-muted-foreground">Permanent or semi-permanent wall-mounted signs for offices, lobbies, conference rooms, and commercial spaces. Custom fabricated in any font, size, or configuration. Wired or battery-powered options available.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">For Event Rental Companies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you run a corporate event production or rental company and want to add marquee letters to your inventory, our <Link to="/rental-inventory" className="text-primary hover:underline font-semibold">rental inventory packages</Link> are designed for professional use. Corporate event clients are among the highest-paying customers in the marquee rental market, and a single conference booking can cover a significant portion of your inventory investment.
          </p>
          <Link to="/rental-business" className="text-primary hover:underline font-semibold text-sm">
            Learn more about building a marquee rental business
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Common Questions About Corporate Marquee Signs</h2>
          <div className="space-y-6">
            {corporateFaqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-5">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-3">Ready to Elevate Your Next Corporate Event?</h2>
          <p className="text-muted-foreground mb-5">
            Fill out a quote request and we will send you pricing and options within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/quote/custom" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity">
              Request a Corporate Quote
            </Link>
            <Link to="/3d-logos" className="inline-block border border-primary text-primary px-6 py-3 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              View 3D Logo Signs
            </Link>
          </div>
        </div>

      </main>

      <ShopifyFooter />
    </div>
  );
};

export default CorporateMarqueeSigns;
