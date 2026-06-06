import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const signOptions = [
  {
    title: "Wall-Hanging Marquee Letters",
    description:
      "Separate handcrafted steel letters that hang like artwork and plug in like a lamp for restaurants, bars, retail spaces, offices, studios, and homes.",
    link: "/wall-hanging-signs",
    cta: "View wall-hanging signs",
  },
  {
    title: "3D Logo Signs",
    description:
      "Dimensional layered metal signs built from your brand artwork, with color-separated depth, hand-finished detail, and optional lighting.",
    link: "/3d-logos",
    cta: "View 3D logo signs",
  },
  {
    title: "Food Truck and Mobile Vendor Signs",
    description:
      "Bold custom signage for trucks, trailers, carts, pop-ups, and mobile businesses that need to attract attention in busy event environments.",
    link: "/mobile-vendor-signs",
    cta: "View food truck signs",
  },
  {
    title: "Event Stand-Up Marquee Letters",
    description:
      "Commercial-grade 36-inch and 48-inch freestanding marquee letters for weddings, corporate events, schools, venues, and event rental professionals.",
    link: "/event-standup-signs",
    cta: "View event letters",
  },
];

const CustomMarqueeSigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Custom Marquee Signs Built to Own | Vintage Marquee Lights</title>
        <meta
          name="description"
          content="Custom marquee signs, marquee letters, lighted logo signs, and illuminated business signs handcrafted by Vintage Marquee Lights since 2008 for brands nationwide."
        />
        <meta
          name="keywords"
          content="custom marquee signs, marquee sign, marquee signs, marquee lights, custom marquee letters, lighted business signs, custom sign maker"
        />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/custom-marquee-signs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Custom Marquee Signs Built to Own | Vintage Marquee Lights" />
        <meta
          property="og:description"
          content="Custom marquee signs, marquee letters, lighted logo signs, and illuminated business signs handcrafted by Vintage Marquee Lights since 2008."
        />
        <meta property="og:url" content="https://inventory.vintagemarqueelights.com/custom-marquee-signs" />
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <section className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Custom lighted signs since 2008
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Custom Marquee Signs Built to Own
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Vintage Marquee Lights designs and fabricates custom marquee signs for businesses, brands, restaurants, schools, venues, event companies, and mobile vendors nationwide. Choose wall-hanging marquee letters, 3D logo signs, food truck signs, event letters, or a fully custom illuminated sign made for your space.
          </p>
        </section>

        <section className="max-w-5xl mx-auto mb-14 grid gap-6 md:grid-cols-2">
          {signOptions.map((option) => (
            <Card key={option.title} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-foreground mb-3">{option.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{option.description}</p>
                <Button asChild className="w-fit">
                  <Link to={option.link}>{option.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="max-w-4xl mx-auto mb-14 rounded-2xl bg-muted/30 p-6 md:p-8 border border-border/50">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Makes a Vintage Marquee Lights Sign Different?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Custom fabricated signs are made from steel and finished by hand, with standard incandescent filament G3 globe bulbs seated into the sign channels. Every project starts with the customer’s words, logo, space, mounting needs, and design direction, then moves through layout approval before fabrication.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Most custom fabrication projects take about 4–6 weeks after design approval, with rush orders available when the schedule allows. Oversized, structurally connected, or highly detailed signs may require manual freight and mounting review before final pricing.
          </p>
        </section>

        <section className="max-w-4xl mx-auto text-center rounded-2xl bg-primary text-primary-foreground p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-4">Ready to price a custom marquee sign?</h2>
          <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto">
            Tell us what you want to spell, where the sign will be used, and whether you need wall-hanging letters, a logo build, a food truck sign, event letters, or something completely custom.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/quote/custom">Request a custom quote</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomMarqueeSigns;
