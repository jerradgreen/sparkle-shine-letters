import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const pressPhotos = [
  {
    src: "/images/press-ellen2.jpg",
    alt: "Ellen DeGeneres backstage with Vintage Marquee Lights illuminated E letters on The Ellen DeGeneres Show",
    label: "The Ellen DeGeneres Show",
    span: "col-span-1",
  },
  {
    src: "/images/press-ellen3.jpg",
    alt: "Ellen DeGeneres Premiere Week backstage with marquee letter E from Vintage Marquee Lights",
    label: "Ellen — Premiere Week",
    span: "col-span-1",
  },
  {
    src: "/images/press-agt.png",
    alt: "Vintage Marquee Lights star sign on the set of America's Got Talent",
    label: "America's Got Talent",
    span: "col-span-1",
  },
  {
    src: "/images/press-rachael-ray.png",
    alt: "Vintage Marquee Lights arrow sign featured on The Rachael Ray Show",
    label: "The Rachael Ray Show",
    span: "col-span-1",
  },
  {
    src: "/images/press-barenaked-ladies.jpg",
    alt: "Barenaked Ladies concert stage featuring large illuminated marquee letters from Vintage Marquee Lights",
    label: "Barenaked Ladies Tour",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "/images/press-cecily-strong.jpg",
    alt: "SNL cast member Cecily Strong with her custom C marquee letter from Vintage Marquee Lights",
    label: "Cecily Strong",
    span: "col-span-1",
  },
  {
    src: "/images/press-martha-stewart.jpg",
    alt: "Vintage Marquee Lights star featured in Martha Stewart Weddings magazine",
    label: "Martha Stewart Weddings",
    span: "col-span-1",
  },
  {
    src: "/images/press-fox6.png",
    alt: "Vintage Marquee Lights featured on Fox 6 News morning segment",
    label: "Fox 6 News",
    span: "col-span-1",
  },
];

const brandNames = [
  "The Ellen DeGeneres Show",
  "America's Got Talent",
  "Rachael Ray",
  "Fuller House (Netflix)",
  "Martha Stewart Weddings",
  "West Elm",
  "Anthropologie",
  "Pottery Barn",
  "Pottery Barn Teen",
  "Brookstone",
  "Zaxby's",
  "Ruby Tuesday",
  "Subway",
  "HGTV",
  "Yahoo! Homepage",
  "Mental Floss",
  "Glitter Magazine",
  "POSH Magazine",
];

const Press = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>As Seen In | Vintage Marquee Lights Press & Media Features</title>
        <meta
          name="description"
          content="Vintage Marquee Lights has been featured on The Ellen DeGeneres Show, Rachael Ray, America's Got Talent, Martha Stewart Weddings, Fuller House, and sold at West Elm, Anthropologie, and Pottery Barn."
        />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/press" />
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="py-16 px-4 text-center border-b border-white/10">
        <p className="uppercase tracking-widest text-amber-400 text-xs font-bold mb-4">
          As Seen In
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight">
          The Original.<br />The Iconic.
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Vintage Marquee Lights has been featured on national television, concert stages, Netflix, and the shelves of the world's most recognized retailers since 2012.
        </p>
      </section>

      {/* Photo Grid */}
      <section className="py-10 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          {pressPhotos.map((photo) => (
            <div
              key={photo.src}
              className={`relative group overflow-hidden rounded-xl ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-white font-bold text-base md:text-lg drop-shadow">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Strip */}
      <section className="py-14 px-4 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-widest text-amber-400 text-xs font-bold mb-8">
            Also Featured In &amp; Sold At
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {brandNames.map((brand) => (
              <span
                key={brand}
                className="text-white/50 text-sm md:text-base font-medium hover:text-white transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-400 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
          Ready to be part of something iconic?
        </h2>
        <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
          The same letters that lit up Hollywood sets and national TV stages are available for your event, business, or rental inventory.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/quote"
            className="inline-block bg-black text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-900 transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            to="/start-marquee-rental-business"
            className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Start a Rental Business
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
