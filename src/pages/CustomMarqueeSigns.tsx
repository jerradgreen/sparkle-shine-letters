import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import barMonteTrailer from "@/assets/food-truck-bar-monte.jpg";
import parliamentCoffee from "@/assets/wall-hanging-parliament.jpg";
import coldBeerNightAsset from "@/assets/custom-signs/cold-beer-night.jpeg.asset.json";
import cafeCollectiveAsset from "@/assets/custom-signs/cafe-collective-cleveland-logo-sign.jpg.asset.json";
import espnHouseAsset from "@/assets/custom-signs/espn-house-nashville-sign.jpg.asset.json";
import sharkBuildAsset from "@/assets/custom-signs/shark-custom-sign-build.png.asset.json";
import formaspaceAsset from "@/assets/custom-signs/formaspace-office-marquee-sign.jpg.asset.json";
import masonJarAsset from "@/assets/custom-signs/mason-jar-marquee-sign.png.asset.json";
import lolasAsset from "@/assets/custom-signs/lolas-order-here-arrow-sign.jpg.asset.json";
import surBurgerAsset from "@/assets/custom-signs/sur-burger-badge-sign.jpg.asset.json";
import coldBeerAsset from "@/assets/custom-signs/cold-beer-marquee-sign.jpg.asset.json";
import starlightAsset from "@/assets/custom-signs/starlight-theater-logo-sign.jpg.asset.json";
import charmBarAsset from "@/assets/custom-signs/charm-bar-mobile-trailer-sign-v2.jpg.asset.json";
import exitZeroShopAsset from "@/assets/custom-signs/exit-zero-shop.webp.asset.json";
import exitZeroProcessAsset from "@/assets/custom-signs/exit-zero-process-grid.webp.asset.json";
import exitZeroInstalledAsset from "@/assets/custom-signs/exit-zero-installed.webp.asset.json";
import exitZeroMilkshakeAsset from "@/assets/custom-signs/exit-zero-milkshake.webp.asset.json";
import jerradPortraitAsset from "@/assets/custom-signs/jerrad-approved-portrait.webp.asset.json";
import fabricationCrewWeldingAsset from "@/assets/custom-signs/fabrication-crew-welding.webp.asset.json";
import fabricationCrewOneAsset from "@/assets/custom-signs/fabrication-crew-1.webp.asset.json";
import fabricationCrewThreeAsset from "@/assets/custom-signs/fabrication-crew-3.webp.asset.json";

const PAGE_URL = "https://inventory.vintagemarqueelights.com/custom-marquee-signs";
const PAGE_TITLE = "Custom Marquee Signs & Custom Signs | Vintage Marquee Lights";
const PAGE_DESCRIPTION =
  "Custom marquee signs, light-up signs, logo signs and one-of-a-kind custom signs made to order since 2008. Send your logo, design or idea and get a quote.";

// Real Vintage Marquee Lights project photography (Shopify CDN, project assets, Lovable asset CDN)
const img = {
  // Hero
  coldBeerNight: coldBeerNightAsset.url,
  cafeCollective: cafeCollectiveAsset.url,
  formaspace: formaspaceAsset.url,
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
  masonJar: masonJarAsset.url,
  savannah:
    "https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_4392_layered_sign.jpg?v=1759690802",
  coldBeer: coldBeerAsset.url,
  charmBar: charmBarAsset.url,
  starlight: starlightAsset.url,

  // Exit Zero case study and founder introduction
  exitZeroShop: exitZeroShopAsset.url,
  exitZeroProcess: exitZeroProcessAsset.url,
  exitZeroInstalled: exitZeroInstalledAsset.url,
  exitZeroMilkshake: exitZeroMilkshakeAsset.url,
  jerradPortrait: jerradPortraitAsset.url,
  fabricationCrewWelding: fabricationCrewWeldingAsset.url,
  fabricationCrewOne: fabricationCrewOneAsset.url,
  fabricationCrewThree: fabricationCrewThreeAsset.url,
};

type SignStyle = {
  title: string;
  description: string;
  cta: string;
  link: string;
  image: string;
  alt: string;
  quoteLink?: string;
  imagePosition?: string;
  contain?: boolean;
  disableZoom?: boolean;
};

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  pos?: string;
  contain?: boolean;
};

const signStyles: SignStyle[] = [
  {
    title: "Wall-Hanging Marquee Signs & Letters",
    description:
      "Classic light-bulb marquee letters and custom signs designed to hang like artwork. Perfect for restaurants, bars, offices, retail spaces, studios, homes and more.",
    cta: "Explore Wall-Hanging Signs",
    link: "/wall-hanging-signs",
    quoteLink: "/quote/wall-hanging",
    image: img.beerHappy,
    alt: "Multi-colored BEER HAPPY marquee letters mounted on a wood wall inside a brewery taproom",
  },
  {
    title: "Custom Logo & Layered Signs",
    description:
      "Turn your logo, artwork or concept into a dimensional custom sign built around your brand and design.",
    cta: "Explore Custom Logo Signs",
    link: "/3d-logos",
    quoteLink: "/quote/3d-logos",
    image: img.tucks,
    alt: "Tuck's Truffles layered logo sign with dimensional lettering and a bulb-lit border",
  },
  {
    title: "Mobile Vendor & Food Truck Signs",
    description:
      "Custom signs made to get attention on food trucks, trailers, carts, pop-ups and mobile businesses.",
    cta: "Explore Mobile Vendor Signs",
    link: "/mobile-vendor-signs",
    quoteLink: "/quote/mobile-vendor",
    image: img.barMonteTrailer,
    alt: "Bar Monté teal mobile bar trailer with a lit marquee sign above the service window",
    imagePosition: "center 8%",
  },
  {
    title: "Have Something Completely Custom in Mind?",
    description:
      "If your idea doesn't fit neatly into one of these categories, that's okay. Send us your drawing, inspiration, logo or concept and tell us what you're imagining.",
    cta: "Tell Us Your Idea",
    link: "/quote/not-sure",
    image: img.sharkBuild,
    alt: "Shark-shaped custom sign shown as a sketch, a production proof and the finished build",
    contain: true,
    disableZoom: true,
  },
];

const gallery: GalleryItem[] = [
  { src: img.chopSuey, alt: "Marquee letters spelling CHOP SUEY lit with globe bulbs", caption: "Lit CHOP SUEY marquee letters", pos: "center 12%" },
  { src: img.parliamentCoffee, alt: "Element dimensional logo sign with lit lettering and a starburst graphic on a dark wood wall", caption: "Element wall-mounted logo sign" },
  { src: img.chicago, alt: "Vertical CHICAGO marquee sign with lit bulbs on a wood wall", caption: "Vertical CHICAGO wall sign", pos: "center 45%" },

  { src: img.exitZero, alt: "Exit Zero Filling Station round logo sign outlined in lit bulbs", caption: "Exit Zero restaurant logo sign" },
  { src: img.hardes, alt: "Harde's Watering Hole custom sign with a bulb-lit border on a wood wall", caption: "Harde's Watering Hole wall sign" },
  { src: img.lolas, alt: "Lola's arrow-shaped ORDER HERE sign with lit bulbs and dimensional lettering", caption: "Lola's ORDER HERE arrow sign" },
  { src: img.surBurger, alt: "Sur Burger badge-shaped sign with bulb-lit border and vintage finish", caption: "Sur Burger badge-shaped sign" },
  { src: img.masonJar, alt: "MASON JAR red marquee letters lit behind a restaurant bar", caption: "MASON JAR restaurant wall letters", contain: true },
  { src: img.savannah, alt: "Savannah arena marquee sign with a bulb-lit border and changeable letters", caption: "Savannah arena marquee sign" },
  { src: img.coldBeer, alt: "COLD BEER marquee letters with lit bulbs laid out in the shop before shipping", caption: "COLD BEER illuminated letters" },
  { src: img.charmBar, alt: "Pink Charm Bar mobile trailer with illuminated marquee letters mounted on the roof", caption: "Charm Bar mobile trailer sign", contain: true },
  { src: img.starlight, alt: "Starlight Theater bulb-lit logo sign mounted in a home theater room", caption: "Starlight Theater logo sign" },
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
                    <Link to="/quote/not-sure">Request a Custom Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="#sign-styles">Explore Sign Styles</a>
                  </Button>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">
                  The Original Vintage Marquee Light Makers • Creating Custom Signs Since 2008 •
                  Ships Nationwide
                </p>
              </div>

              {/* Real project photo collage */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 aspect-video overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-lg">
                  <img
                    src={img.coldBeerNight}
                    alt="Illuminated Cold Beer arrow sign mounted outside a restaurant at night"
                    className="h-full w-full object-cover"
                    loading="eager"
                    width={5312}
                    height={2988}
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
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-md">
                  <img
                    src={img.formaspace}
                    alt="FORMASPACE illuminated office letters above a group at a trade show booth"
                    className="h-36 w-full object-contain sm:h-44"
                    loading="lazy"
                    width={2789}
                    height={2091}
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
                      className={`h-56 w-full ${style.contain ? "object-contain" : "object-cover"} ${style.disableZoom ? "" : "transition-transform duration-500 group-hover:scale-105"}`}
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
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="w-fit">
                      <Link to={style.link}>{style.cta}</Link>
                    </Button>
                    {style.quoteLink ? (
                      <Button asChild variant="outline" className="w-fit">
                        <Link to={style.quoteLink}>Request a Quote</Link>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION — FOUNDER INTRODUCTION */}
        <section className="border-t border-border/60 bg-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
              <div className="mx-auto w-full max-w-md overflow-hidden rounded border border-border/60 bg-background">
                <img
                  src={img.jerradPortrait}
                  alt="Jerrad, founder of Vintage Marquee Lights"
                  className="max-h-[450px] w-full object-contain"
                  loading="lazy"
                  width={1122}
                  height={1402}
                />
              </div>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  Meet the founder
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  Hi, I’m Jerrad, founder of Vintage Marquee Lights.
                </h2>
                <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                  Since VML started in 2008, we’ve helped customers turn their ideas into custom
                  pieces that feel right at home in their business or space.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  You’ll work with me and my team to figure out the size, style, and details.
                  Bring your logo, a sketch, or an idea you’re not quite sure how to explain
                  yet—we’ll take it from there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — EXIT ZERO CASE STUDY */}
        <section className="border-y border-border/60 bg-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    A custom project · Exit Zero Filling Station
                  </p>
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                    From a logo to<br className="hidden sm:block" /> part of the place.
                  </h2>
                  <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                    Exit Zero’s artwork already had plenty of personality. We carried that
                    character into a dimensional, illuminated piece—with layered details, a
                    weathered finish, and warm globe bulbs around the edge.
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    Cape May · Custom layered sign
                  </p>
                </div>

                <figure>
                  <div className="aspect-square overflow-hidden rounded border border-border/60 bg-background">
                    <img
                      src={img.exitZeroShop}
                      alt="Finished illuminated Exit Zero sign on the fabrication shop wall"
                      className="h-full w-full object-contain"
                      loading="lazy"
                      width={1512}
                      height={1512}
                    />
                  </div>
                  <figcaption className="pt-3 text-sm text-muted-foreground">
                    The finished piece, photographed at the shop before shipping.
                  </figcaption>
                </figure>
              </div>

              <div className="mt-16 border-t border-border/70 pt-14 md:mt-20 md:pt-16">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  How it came together
                </p>
                <h3 className="mb-8 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  The same character. A whole new dimension.
                </h3>
                <div className="aspect-[3/1] overflow-hidden rounded border border-border/60 bg-background">
                  <img
                    src={img.exitZeroProcess}
                    alt="Exit Zero original artwork, design mockup and finished illuminated sign"
                    className="h-auto w-full"
                    loading="lazy"
                    width={2250}
                    height={3000}
                  />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-xs leading-relaxed text-muted-foreground sm:gap-6 sm:text-base">
                  <p>
                    <strong className="block text-foreground">01 · The artwork</strong>
                    The original logo.
                  </p>
                  <p>
                    <strong className="block text-foreground">02 · The mockup</strong>
                    The design visualized with depth and light.
                  </p>
                  <p>
                    <strong className="block text-foreground">03 · The finished piece</strong>
                    Layers, texture, and illuminated detail.
                  </p>
                </div>

              </div>

              <div className="mt-16 border-t border-border/70 pt-14 md:mt-20 md:pt-16">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  At Exit Zero
                </p>
                <h3 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  The details up close.<br />The character across the room.
                </h3>
                <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  The shop photos show the depth and finish. At Exit Zero, you can see how the
                  piece fits into the space—even glowing in the background of a milkshake photo.
                </p>
                <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
                  <figure className="min-w-0">
                    <div className="h-[380px] overflow-hidden rounded border border-border/60 bg-background sm:h-[490px]">
                      <img
                        src={img.exitZeroInstalled}
                        alt="Exit Zero sign installed above the restaurant fireplace with seasonal decorations"
                        className="h-full w-full object-contain"
                        loading="lazy"
                        width={1340}
                        height={1606}
                      />
                    </div>
                    <figcaption className="pt-3 text-sm text-muted-foreground">
                      Installed above the fireplace at Exit Zero.
                    </figcaption>
                  </figure>
                  <figure className="min-w-0">
                    <div className="h-[380px] overflow-hidden rounded border border-border/60 bg-background sm:h-[490px]">
                      <img
                        src={img.exitZeroMilkshake}
                        alt="A milkshake with the illuminated Exit Zero sign visible behind it"
                        className="h-full w-full object-contain"
                        loading="lazy"
                        width={1684}
                        height={1630}
                      />
                    </div>
                    <figcaption className="pt-3 text-sm text-muted-foreground">
                      A familiar part of the restaurant’s backdrop.
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="mt-16 border-t border-border/70 pt-14 md:mt-20 md:pt-16">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  A look inside the shop
                </p>
                <figure>
                  <div className="grid gap-5 md:grid-cols-3 md:gap-4 lg:gap-5">
                    {[
                      {
                        src: img.fabricationCrewWelding,
                        alt: "Fabrication crew member welding a round metal sign in the shop",
                      },
                      {
                        src: img.fabricationCrewOne,
                        alt: "Fabrication crew member welding a curved metal piece at a worktable",
                      },
                      {
                        src: img.fabricationCrewThree,
                        alt: "Fabrication crew member grinding a metal piece at a worktable",
                      },
                    ].map((photo) => (
                      <div
                        key={photo.src}
                        className="aspect-[2/3] w-full overflow-hidden rounded border border-border/60 bg-background"
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          width={1000}
                          height={1500}
                        />
                      </div>
                    ))}
                  </div>
                  <figcaption className="pt-3 text-sm text-muted-foreground">
                    Behind the scenes with our fabrication crew.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — REAL PROJECT GALLERY */}
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
                    className={`h-40 w-full ${item.contain ? "object-contain" : "object-cover"} sm:h-48`}
                    style={{ objectPosition: item.pos ?? "center" }}
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <figcaption className="border-t border-border/60 px-3 py-2 text-sm text-muted-foreground">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — MADE FOR YOUR SPACE */}
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
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Looking for freestanding marquee letters to purchase for a corporate event,
              conference or brand activation? Explore our{' '}
              <Link to="/corporate-marquee-signs" className="text-primary underline hover:text-primary/80 transition-colors font-semibold">
                event-style marquee letters
              </Link>.
            </p>
          </div>
        </section>

        {/* SECTION 6 — WHY VINTAGE MARQUEE LIGHTS */}
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

        {/* SECTION 7 — HOW IT WORKS */}
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

        {/* SECTION 9 — FINAL CTA */}
        <section className="container mx-auto px-6 py-14">
          <div className="mx-auto max-w-4xl rounded-3xl bg-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Have a logo you’d like to see in lights?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-primary-foreground/90">
              Send us what you have. We’ll help work out the details.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link to="/quote/not-sure">Request a Custom Quote</Link>
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
