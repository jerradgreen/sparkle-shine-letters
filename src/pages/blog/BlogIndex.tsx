import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ShopifyHeader from '@/components/ShopifyHeader';
import ShopifyFooter from '@/components/ShopifyFooter';

const articles = [
  {
    title: "Why Schools Buy Commercial Marquee Letters for Events",
    description: "How high schools, middle schools, and districts use commercial marquee letters for pep rallies, graduations, fundraisers, and more.",
    href: "/blog/why-schools-buy-commercial-marquee-letters",
  },
  {
    title: "36 vs 48 Inch Marquee Letters: Which Size Should You Buy?",
    description: "A practical comparison of the two standard sizes — when to choose 36-inch letters, when 48-inch makes sense, and how to decide.",
    href: "/blog/36-vs-48-inch-marquee-letters",
  },
  {
    title: "How Universities and Teams Use Marquee Letters for Branding and Recruiting",
    description: "Why athletic departments, university event offices, and teams invest in commercial marquee letters for recruiting events, game days, and campus branding.",
    href: "/blog/universities-teams-marquee-letters-branding",
  },
];

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Articles | Vintage Marquee Lights</title>
        <meta name="description" content="Guides and articles about commercial marquee letters for schools, universities, corporations, and event businesses." />
      </Helmet>

      <ShopifyHeader />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Articles</h1>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.href} className="border-b border-border pb-6">
              <Link to={article.href} className="group">
                <h2 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground">{article.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <ShopifyFooter />
    </div>
  );
};

export default BlogIndex;
