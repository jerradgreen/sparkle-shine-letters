import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import barMonteTrailer from "@/assets/food-truck-bar-monte.jpg";
import parliamentCoffee from "@/assets/wall-hanging-parliament.jpg";
import britneyAsset from "@/assets/custom-signs/britney-marquee-letters.webp.asset.json";
import cafeCollectiveAsset from "@/assets/custom-signs/cafe-collective-cleveland-logo-sign.jpg.asset.json";
import espnHouseAsset from "@/assets/custom-signs/espn-house-nashville-sign.jpg.asset.json";
import sharkBuildAsset from "@/assets/custom-signs/shark-custom-sign-build.png.asset.json";
import bigToysBuildAsset from "@/assets/custom-signs/big-toys-custom-sign-build.png.asset.json";
import lolasAsset from "@/assets/custom-signs/lolas-order-here-arrow-sign.jpg.asset.json";
import surBurgerAsset from "@/assets/custom-signs/sur-burger-badge-sign.jpg.asset.json";
import coldBeerAsset from "@/assets/custom-signs/cold-beer-marquee-sign.jpg.asset.json";
import starlightAsset from "@/assets/custom-signs/starlight-theater-logo-sign.jpg.asset.json";
import charmBarAsset from "@/assets/custom-signs/charm-bar-mobile-trailer-sign.jpg.asset.json";
import donutsTruck from "@/assets/food-truck-donuts.jpg";

const PAGE_URL = "https://inventory.vintagemarqueelights.com/custom-marquee-signs";
const PAGE_TITLE = "Custom Marquee Signs & Custom Signs | Vintage Marquee Lights";
const PAGE_DESCRIPTION =
  "Custom marquee signs, light-up signs, logo signs and one-of-a-kind custom signs made to order since 2008. Send your logo, design or idea and get a quote.";

// Real Vintage Marquee Lights project photography (Shopify CDN, project assets, Lovable asset CDN)
const img = {
  // Hero
  britney: britneyAsset.url,
  cafeCollective: cafeCollectiveAsset.url,
  donutsTruck,
  espnHouse: espnHouseAsset.url,

  // Sign-style cards
  beerHappy:
    "https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_89FDB5B68894-1.jpg?v=1759690677",
  tucks: "https://cdn.shopify.com/s/files/1/1403/8315/files/logo-tucks-1.jpg?v=1759693606",
  barMonteTrailer,
  sharkBuild: sharkBuildAsset.url,

  // Gallery
  chopSuey:
    "https://cdn.shopify.com/s/files/1/1403/8315/files/Chop_Suey_a1aaee95-b586-4fb9-880d-2bc12998e8ee_800x.jpg?v=1759691041",
  parliamentCoffee,
  chicago:
    "https://cdn.shopify.com/s/files/1/1403/8315/files/chicago_layered-sign.jpg?v=1759695333",
  exitZero:
    "https://cdn.shopify.com/s/files/1/1403/8315/files/image_-_2023-06-08T131820.287.png?v=1759695499",
  hardes:
    "https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_6390_layered-sign_800x.jpg?v=1759694027",
  lolas: lolasAsset.url,
  surBurger: surBurgerAsset.url,
  bigToysBuild: bigToysBuildAsset.url,
  savannah:
    "https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_4392_layered_sign.jpg?v=1759690802",
  coldBeer: coldBeerAsset.url,
  charmBar: charmBarAsset.url,
  starlight: starlightAsset.url,
};

const signStyles = [
  {
    title: "Wall-Hanging Marquee Signs & Letters",
    description:
      "Classic light-bulb marquee letters and custom signs designed to hang like artwork. Perfect for restaurants, bars, offices, retail spaces, studios, homes and more.",
    cta: "Explore Wall-Hanging Signs",
    link: "/wall-hanging-signs",
    image: img.beerHappy,
    alt: "Multi-colored BEER HAPPY marquee letters mounted on a wood wall inside a brewery taproom",
  },
  {
    title: "Custom Logo & Layered Signs",
    description:
      "Turn your logo, artwork or concept into a dimensional custom sign built around your brand and design.",
    cta: "Explore Custom Logo Signs",
    link: "/3d-logos",
    image: img.tucks,
    alt: "Tuck's Truffles layered logo sign with dimensional lettering and a bulb-lit border",
  },
  {
    title: "Mobile Vendor & Food Truck Signs",
    description:
      "Custom signs made to get attention on food trucks, trailers, carts, pop-ups and mobile businesses.",
    cta: "Explore Mobile Vendor Signs",
    link: "/mobile-vendor-signs",
    image: img.barMonteTrailer,
    alt: "Bar Monté teal mobile bar trailer with a lit marquee sign above the service window",
    imagePosition: "center 30%",
  },
  {
    title: "Have Something Completely Custom in Mind?",
    description:
      "If your idea doesn't fit neatly into one of these categories, that's okay. Send us your drawing, inspiration, logo or concept and tell us what you're imagining.",
    cta: "Tell Us Your Idea",
    link: "/quote/custom",
    image: img.sharkBuild,
    alt: "Shark-shaped custom sign shown as a sketch, a production proof and the finished build",
  },
];

const gallery = [
  { src: img.chopSuey, alt: "Marquee letters spelling CHOP SUEY lit with globe bulbs", pos: "center 12%" },
  { src: img.parliamentCoffee, alt: "Parliament script marquee letters lit above a coffee shop service counter" },
  { src: img.chicago, alt: "Vertical CHICAGO marquee sign with lit bulbs on a wood wall" },
  { src: img.exitZero, alt: "Exit Zero Filling Station round logo sign outlined in lit bulbs" },
  { src: img.hardes, alt: "Harde's Watering Hole custom sign with a bulb-lit border on a wood wall" },
  { src: img.lolas, alt: "Lola's arrow-shaped ORDER HERE sign with lit bulbs and dimensional lettering" },
  { src: img.surBurger, alt: "Sur Burger badge-shaped sign with bulb-lit border and vintage finish" },
  { src: img.bigToysBuild, alt: "Big Toys custom sign shown as a sketch, a production proof and the finished sign" },
  { src: img.savannah, alt: "Savannah arena marquee sign with a bulb-lit border and changeable letters" },
  { src: img.coldBeer, alt: "COLD BEER marquee letters in white and yellow with exposed bulbs" },
  { src: img.charmBar, alt: "Charm Bar pink mobile trailer with a red marquee sign mounted on the roof" },
  { src: img.starlight, alt: "Starlight Theater bulb-lit logo sign mounted in a home theater room" },
];


const applications = [
  "Restaurants & Bars",
  "Breweries",
  "Hotels & Hospitality",
  "Retail & Boutiques",
  "Offices & Corporate Spaces",
  "Interior Designers",
  "Architects & Design Firms",
  "Venues",
  "Schools & Universities",
  "Studios",
  "Mobile Businesses",
  "One-of-a-Kind Spaces",
];

const valuePoints = [
  {
    title: "Custom Built",
    description: "Your sign starts with your words, logo, artwork, dimensions or idea.",
  },
  {
    title: "Made to Match Your Vision",
    description:
      "Choose the size, colors, finish, lighting and overall style that fits your space.",
  },
  {
    title: "Experience Since 2008",
    description:
      "We've been creating custom marquee lights and one-of-a-kind signs for businesses and customers across the country since 2008.",
  },
  {
    title: "Shipped Nationwide",
    description:
      "We build custom projects for customers throughout the United States and ship them directly to you.",
  },
];

const steps = [
  {
    title: "Send Us Your Idea",
    description:
      "Share your logo, artwork, dimensions, inspiration photos, drawing, or tell us what you have in mind.",
  },
  {
    title: "We Work Out the Details",
    description:
      "We'll help determine the right style, size, finish and lighting for the project.",
  },
  {
    title: "Approve Your Design",
    description: "You'll review the project details before the sign is built.",
  },
  {
    title: "We Build & Ship It",
    description: "Your custom sign is created and shipped to you ready for its new space.",
  },
];


const CustomMarqueeSigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="custom marquee signs, custom marquee sign, custom signs, custom business signs, custom light up signs, custom logo signs, custom wall signs, vintage marquee signs, marquee lights, light bulb signs"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={img.chopSuey} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
      </Helmet>

      <Navigation />

      <main>
        {/* SECTION 1 — HERO */}
        <section className="border-b border-border/60 bg-gradient-to-b from-muted/40 to-background">
          <div className="container mx-auto px-6 py-12 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Custom Marquee Signs Since 2008
                </p>
                <h1 className="mb-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  Custom Marquee Signs &amp; One-of-a-Kind Custom Signs
                </h1>
                <p className="mb-5 text-2xl font-medium text-primary md:text-3xl">
                  Bring Your Idea to Life
                </p>
                <p className="mb-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Vintage Marquee Lights creates one-of-a-kind custom signs for businesses,
                  brands and spaces across the country. Start with your logo, your design, or
                  just an idea — we&apos;ll help turn it into something unforgettable.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a href="#sign-styles">Explore Sign Styles</a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/quote/custom">Request a Custom Quote</Link>
                  </Button>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">
                  The Original Vintage Marquee Light Makers • Creating Custom Signs Since 2008 •
                  Ships Nationwide
                </p>
              </div>

              {/* Real project photo collage */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 overflow-hidden rounded-2xl border border-border/60 shadow-lg">
                  <img
                    src={img.britney}
                    alt="BRITNEY marquee letters in pink with exposed bulbs mounted on a wood wall"
                    className="h-56 w-full object-cover sm:h-72"
                    loading="eager"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border/60 shadow-md">
                  <img
                    src={img.cafeCollective}
                    alt="Cafe Collective Cleveland shaped logo sign outlined with lit marquee bulbs"
                    className="h-36 w-full object-cover sm:h-44"
                    loading="eager"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border/60 shadow-md">
                  <img
                    src={img.donutsTruck}
                    alt="LET'S EAT DONUTS lit marquee sign on the roof of a red vintage food truck"
                    className="h-36 w-full object-cover sm:h-44"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="col-span-2 overflow-hidden rounded-2xl border border-border/60 shadow-md">
                  <img
                    src={img.espnHouse}
                    alt="ESPN House Nashville dimensional sign with lit marquee letters on a wood wall"
                    className="h-36 w-full object-cover sm:h-44"
                    loading="lazy"
                    width={1200}
                    height={600}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — CHOOSE YOUR SIGN STYLE */}
        <section id="sign-styles" className="container mx-auto scroll-mt-24 px-6 py-14">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Find the Style That Fits Your Idea
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every project starts differently. You may already have a finished design, a logo, a
              word or phrase, or simply an idea. Explore our most popular custom sign styles.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {signStyles.map((style) => (
              <Card
                key={style.title}
                className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link to={style.link} className="block">
                  <div className="overflow-hidden">
                    <img
                      src={style.image}
                      alt={style.alt}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: style.imagePosition ?? "center" }}
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                </Link>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{style.title}</h3>
                  <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                    {style.description}
                  </p>
                  <Button asChild className="w-fit">
                    <Link to={style.link}>{style.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 3 — REAL PROJECT GALLERY */}
        <section className="border-y border-border/60 bg-muted/30 py-14">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                See What We&apos;ve Made
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                From restaurants and bars to offices, hotels, venues and one-of-a-kind spaces,
                every sign starts with a different idea.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map((item) => (
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-48"
                    style={{ objectPosition: item.pos ?? "center" }}
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — MADE FOR YOUR SPACE */}
        <section className="container mx-auto px-6 py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Made for Businesses, Brands &amp; Spaces
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Some customers come to us with a finished design. Others send a logo, sketch,
                reference photo, or simply tell us what they want the sign to say. We build around
                the project — not the other way around.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {applications.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border/60 bg-card px-4 py-3 text-center text-sm font-medium text-foreground shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5 — WHY VINTAGE MARQUEE LIGHTS */}
        <section className="border-y border-border/60 bg-muted/30 py-14">
          <div className="container mx-auto px-6">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
              Why Vintage Marquee Lights?
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {valuePoints.map((point) => (
                <Card key={point.title} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-primary">
                      {point.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — HOW IT WORKS */}
        <section className="container mx-auto px-6 py-14">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            From Your Idea to Your Sign
          </h2>
          <ol className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* SECTION 7 — FINAL CTA */}
        <section className="container mx-auto px-6 py-14">
          <div className="mx-auto max-w-4xl rounded-3xl bg-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Have a Sign in Mind?</h2>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-primary-foreground/90">
              Send us your logo, design, inspiration photo, or just tell us what you&apos;re
              imagining. We&apos;ll help you figure out the best way to bring it to life.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link to="/quote/custom">Request a Custom Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#sign-styles">Explore Sign Styles</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomMarqueeSigns;
