import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Lightbulb, Star, Package, Clock, Mail } from "lucide-react";
import Chatbot from "@/components/Chatbot";
import drewiaHillImage from "@/assets/drewia-hill.jpeg";
import elev8Image from "@/assets/elev8.jpeg";
import year1969Image from "@/assets/1969.jpeg";
import marryMeImage from "@/assets/marry-me.jpg";
import setup1Image from "@/assets/setup-1.jpeg";
import setup2Image from "@/assets/setup-2.jpg";
import marqueeDetailImage from "@/assets/marquee-detail.jpg";

const BuildInventory = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Build Your Own Marquee Letter Rental Inventory
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Give your clients the wow factor with professional‑grade marquee letters, numbers and symbols. Whether you're just getting started or expanding an existing rental business, we've got you covered.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://vintagemarqueelights.com/pages/custom-sign-request-form', '_blank')}
              >
                Get Your Custom Quote
              </Button>
            </div>
            <div className="relative">
              <img 
                src={drewiaHillImage} 
                alt="Drewia Hill marquee letters event setup" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Our Marquee Letters */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            About Our Marquee Letters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Durable & Long‑Lasting</h3>
                <p className="text-muted-foreground">Powder‑coated steel construction built to withstand years of events.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Top‑Tier Craftsmanship</h3>
                <p className="text-muted-foreground">Extra‑deep, self‑standing design with a high‑gloss finish and closed backs to hide wiring.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Plug‑and‑Play LED Bulbs</h3>
                <p className="text-muted-foreground">Energy‑efficient LEDs provide warm, even lighting.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Reusable Foam‑Lined Boxes</h3>
                <p className="text-muted-foreground">Every order ships in protective boxes you can use again and again for safe transport.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              No Franchise Fees: Keep 100% of your rental revenue
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 15 years of experience creating marquee letters and custom signs, we've perfected the balance between quality and value. Our rental letters are manufactured overseas by a long‑term partner, ensuring consistent quality and better pricing than most U.S. suppliers. Meanwhile, our custom signs are hand‑built in the United States. That combination lets us offer durable products at competitive rates.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">See Our Letters in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={elev8Image} 
                alt="ELEV8 marquee letters setup" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={year1969Image} 
                alt="1969 marquee numbers display" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={marryMeImage} 
                alt="Marry Me marquee letters wedding setup" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={setup1Image} 
                alt="Marquee letters event setup" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={setup2Image} 
                alt="Professional marquee letter display" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={marqueeDetailImage} 
                alt="Close-up of marquee letter construction and quality" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Customization Options</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start small with a few letters or numbers, or go big with one of our pre‑mixed packages. If you have a specific word or phrase in mind, we can tailor your order accordingly. Otherwise, let our team curate a versatile mix based on the letters and symbols most rental companies use.
          </p>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Packages & Pricing</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            We offer flexible packages designed to grow with your rental business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-card-foreground">Investment Range</h3>
                </div>
                <p className="text-3xl font-bold text-primary mb-4">$12,000–$35,000</p>
                <p className="text-muted-foreground">Most clients invest in this range for a complete rental inventory, depending on package size and delivery location.</p>
              </CardContent>
            </Card>

            <Card className="border-secondary border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Package className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-card-foreground">Starting Price</h3>
                </div>
                <p className="text-3xl font-bold text-secondary mb-4">$300 per letter</p>
                <p className="text-muted-foreground">Elite Package includes 36″ self-standing marquee letters made of powder-coated steel, with LED bulbs and reusable foam-lined transport boxes.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Final pricing depends on the exact mix and style of letters—including any upgrades like color-changing bulbs or LED neon options—as well as your preferred timeline and shipping destination. Reach out for a custom quote and we'll help build the perfect inventory for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">When Can You Get Them?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Because we manufacture overseas and ship by ocean freight to keep pricing low, delivery takes time—but it's worth the wait.
          </p>
          
          <Card className="border-accent border-2 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-12 h-12 text-accent mr-4" />
                <h3 className="text-3xl font-bold text-card-foreground">3–4 Months</h3>
              </div>
              <p className="text-xl text-muted-foreground">Estimated turnaround from order finalization</p>
            </CardContent>
          </Card>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Planning ahead ensures you get the best value without rush fees. Reserve your set early to stay ahead of peak event seasons.
          </p>

          <div className="bg-accent/10 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-foreground">Need something sooner?</h4>
            <p className="text-muted-foreground">
              It's possible to air freight a small number of letters for an additional cost. That way, you can start showing off your new inventory, build marketing buzz, and begin drumming up business while the rest of your order is still en route.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Next Steps</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Ready to start with a few letters or jump into a larger package? Let us know which package interests you or share a custom list of letters and numbers you need. We'll prepare a detailed quote and timeline ASAP.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => window.open('https://vintagemarqueelights.com/pages/custom-sign-request-form', '_blank')}
            >
              Get Started - Request Your Quote
            </Button>
          </div>
          
          <p className="mt-8 text-lg opacity-90">
            We look forward to helping you build a rental inventory that stands out at every event.
          </p>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default BuildInventory;