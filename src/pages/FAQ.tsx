import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: "What sizes do your marquee letters come in?",
    answer: "Our marquee letters are available in 36-inch and 48-inch heights. The 36-inch size is ideal for indoor events, photo backdrops, and spaces with lower ceilings. The 48-inch size is our most popular for large events, outdoor use, and anywhere you need maximum visual impact. We also fabricate custom sizes for commercial and architectural installations."
  },
  {
    question: "What is the difference between event stand-up signs and rental inventory packages?",
    answer: "Event stand-up signs are individual letters and symbols designed for single-event use — weddings, birthdays, corporate events, and similar occasions. Rental inventory packages are complete business-in-a-box sets designed for entrepreneurs who want to start or grow a marquee letter rental business. The rental packages include a full alphabet, numbers, symbols, and everything needed to service multiple clients."
  },
  {
    question: "How much does a marquee letter rental business package cost?",
    answer: "Our rental inventory packages start at several thousand dollars and can range up to $35,000 or more depending on the size and scope of the inventory. Because every business has different goals and market sizes, we gate pricing behind a quote request so we can build the right package for your specific situation. Fill out our quote form and we will send you full pricing and package details."
  },
  {
    question: "Do you ship nationwide?",
    answer: "Yes. We ship marquee letters and signs across the United States. Larger items like 48-inch letters and full rental inventory packages ship via freight. Smaller items ship via standard carriers. Lead times vary by product — custom fabricated items typically take 4 to 6 weeks."
  },
  {
    question: "Can you make custom shapes and logos?",
    answer: "Yes. Our 3D layered logo signs and custom wall-hanging signs are fully custom fabricated to your specifications. We can reproduce logos, brand marks, custom shapes, and dimensional lettering in any font. These are popular for restaurants, bars, hotels, retail stores, and corporate offices."
  },
  {
    question: "What are wall-hanging marquee signs used for?",
    answer: "Wall-hanging marquee signs are permanent or semi-permanent installations designed for businesses, restaurants, hotels, event venues, and residential spaces. They are mounted directly to a wall and can be wired for power or run on battery packs. Common uses include restaurant branding, hotel lobby signage, bar and nightclub decor, and home entertainment rooms."
  },
  {
    question: "Are your signs suitable for outdoor use?",
    answer: "Some of our products are designed for outdoor use and some are not. Our commercial wall-hanging signs and 3D logos can be built for exterior installation with weather-resistant materials and exterior-rated electrical components. Event stand-up letters are designed for indoor use. If you need outdoor signage, mention that in your quote request and we will spec the right materials."
  },
  {
    question: "What are mobile vendor signs?",
    answer: "Mobile vendor signs are custom marquee-style signs designed for food trucks, trailers, carts, and mobile businesses. They are built to be lightweight, durable, and visually striking so your business stands out at markets, festivals, and events. They can be mounted to the exterior of your vehicle or trailer and are a major driver of impulse traffic and social media attention."
  },
  {
    question: "How do I get pricing?",
    answer: "Fill out the quote request form for the product you are interested in. We will send you full pricing, package details, and any available options within one business day. For rental inventory packages, you will also receive our rental business guide with ROI projections and market analysis."
  },
  {
    question: "What is the ROI on a marquee letter rental business?",
    answer: "Marquee letter rental businesses can generate significant returns because the inventory is reusable and the per-event rental fees are high relative to the cost of the letters. Many of our rental business customers recover their full investment within 12 to 18 months of consistent bookings. Our rental business guide walks through realistic revenue projections based on your market size and event frequency."
  },
  {
    question: "How are your signs different from cheap marquee letters on Amazon?",
    answer: "Our signs are commercial-grade, custom-fabricated steel and aluminum products built to last years of heavy use. Amazon marquee letters are typically lightweight plastic or thin sheet metal with low-quality bulb sockets, designed for occasional home use. Our products are used by professional event rental companies, hotels, restaurants, and venues that need something that looks premium and holds up to repeated handling and transport."
  },
  {
    question: "Can I start a marquee letter rental business with no experience?",
    answer: "Yes. Many of our rental inventory customers had no prior event industry experience when they started. The business model is straightforward: you own the letters, you rent them to clients for events, and you repeat. We provide a full rental business guide, pricing strategy recommendations, and ongoing support. Our rental business hub at inventory.vintagemarqueelights.com/rental-business has detailed articles on startup costs, building a scalable inventory, and profitability."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Frequently Asked Questions | Vintage Marquee Lights</title>
        <meta name="description" content="Answers to common questions about marquee letter sizes, pricing, rental business packages, shipping, custom signs, and more. Get the information you need before requesting a quote." />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground mb-10">
          Everything you need to know about our marquee letters, custom signs, and rental business packages. If you do not see your question here, <Link to="/quote" className="text-primary hover:underline font-semibold">fill out a quote request</Link> and we will get back to you within one business day.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border pb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h2>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold text-foreground mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            Our team is happy to walk you through any of our products, pricing, or the rental business opportunity. Fill out a quote request and we will be in touch.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/quote" className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded font-semibold hover:opacity-90 transition-opacity">
              Request a Quote
            </Link>
            <Link to="/rental-business" className="inline-block border border-primary text-primary px-5 py-2 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Rental Business Info
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
