import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Lightbulb, Star, Package, Clock, Mail, Zap, DollarSign, Percent, Check, Type, FileText, Hash, Circle, Square, Triangle } from "lucide-react";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OptimizedImage from "@/components/OptimizedImage";

import drewiaHillImage from "@/assets/drewia-hill.jpeg";
import elev8Image from "@/assets/elev8.jpeg";
import year1969Image from "@/assets/1969.jpeg";
import marryMeImage from "@/assets/marry-me.jpg";
import setup1Image from "@/assets/setup-1.jpeg";
import setup2Image from "@/assets/setup-2.jpg";
import marqueeDetailImage from "@/assets/marquee-detail.jpg";
import testimonialSarahImage from "@/assets/testimonial-sarah.jpg";
import marquee1Image from "@/assets/marquee-1.png";
import marquee2Image from "@/assets/marquee-2.png";
import marquee3Image from "@/assets/marquee-3.png";
import testimonialMikeImage from "@/assets/testimonial-mike.jpg";

const RentalInventory = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const buildUrl = () => {
    const payload = {
      Name: { First: firstName, Last: lastName },
      Phone: phone,
      EmailpleaseCheckSpellingBeforeSubmitting: email,
      WhatStyleOfSignAreYouWantingUsToMake: "Rental Inventory Package Info",
    };
    return "https://vintagemarqueelights.com/pages/custom-sign-request-form?entry=" + encodeURIComponent(JSON.stringify(payload));
  };

  return (
    <div className="min-h-screen bg-background">
      <ShopifyHeader />
      {/* Hero Section */}
      <section className="relative py-2 px-4 text-center bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden -mt-2">
            {/* Mobile image first */}
            <div className="mb-3">
              <img 
                src={drewiaHillImage} 
                alt="Professional marquee letter rental setup at Drewia Hill event showcasing profitable event rental business opportunity" 
                className="rounded-lg shadow-2xl w-full h-32 object-cover"
                loading="eager"
              />
            </div>
            
            {/* Mobile subtitle after image */}
            <p className="text-lg font-semibold text-accent mb-1 text-center">
              Entrepreneurs and Business Owners
            </p>
            
            {/* Mobile content */}
            <div className="text-left">
              <h1 className="text-xl font-bold text-foreground mb-2 leading-tight">
                Build your business. Boost your profits. Our marquee letter packages are designed to help you do both — FAST.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tap into the event rental industry's HOTTEST segment, marquee lights — no franchise fees, no middleman.
              </p>
              
              <div className="bg-muted/30 rounded-lg p-3 text-center mt-1">
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground italic mb-1 leading-relaxed">
                  "The quality is exactly what we needed for our rental business. Best investment we've made for expanding our event services."
                </blockquote>
                <cite className="text-sm text-foreground font-semibold">— Faith W., Tennessee</cite>
              </div>
              
              {/* Mobile CTA button after review */}
              <div className="mt-3">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 w-full"
                  onClick={() => setOpen(true)}
                >
                  Get Package Pricing Now
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg font-semibold text-accent mb-2">
                Entrepreneurs and Business Owners
              </p>
              <h1 className="text-2xl xl:text-3xl font-bold text-foreground mb-4 leading-tight">
                Build your business. Boost your profits. Our marquee letter packages are designed to help you do both — FAST.
              </h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Tap into the event rental industry's HOTTEST segment, marquee lights — no franchise fees, no middleman.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 w-full mb-4"
                onClick={() => setOpen(true)}
              >
                Get Package Pricing Now
              </Button>
              
              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground italic mb-2 leading-relaxed">
                  "The quality is exactly what we needed for our rental business. Best investment we've made for expanding our event services."
                </blockquote>
                <cite className="text-sm text-foreground font-semibold">— Faith W., Tennessee</cite>
              </div>
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

      {/* Feature Cards */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors h-full">
              <CardContent className="p-4 h-full flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Durable & Long‑Lasting</h3>
                  <p className="text-xs text-muted-foreground">Commercial grade, powder‑coated steel built to withstand years of events.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Top‑Tier Craftsmanship</h3>
                  <p className="text-xs text-muted-foreground">Extra‑deep, self‑standing design with a high‑gloss finish and closed backs to hide wiring.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Reusable Foam‑Lined Boxes</h3>
                  <p className="text-xs text-muted-foreground">Every order ships in protective boxes you can use again and again for safe transport.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile-only CTA button */}
          <div className="lg:hidden text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 w-full"
              onClick={() => setOpen(true)}
            >
              Get Package Pricing Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why Most Event Businesses Leave Money on the Table */}
      <section className="py-2 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Most Event Businesses Leave Money on the Table</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">You're outsourcing marquee letters and losing money on every event.</h3>
                <p className="text-base text-muted-foreground">YOU are booking the client… but someone else is collecting a portion of the profit. Why not keep it all?</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">You're working hard, but not building YOUR business.</h3>
                <p className="text-base text-muted-foreground">Whether you're working for someone else or renting cheap inventory, you're building THEIR brand — not YOURS.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Your profit per event is capped, no matter how busy you are.</h3>
                <p className="text-base text-muted-foreground">You need products that make more with less effort. Our letters are eye-catching, low-maintenance, and book themselves.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              No Franchise Fees: Keep 100% of your rental revenue
            </Badge>
          </div>
        </div>
      </section>

      {/* You Don't Need a Franchise Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Content - takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">You Don't Need a Franchise. You Just Need the Right Inventory.</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Get your own collection of professional-grade marquee letters — built to last, ready to rent, and designed to pay for themselves fast. No royalty fees. No chasing suppliers. Just premium product and full control.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">I've Seen the Struggle. That's Why I Built This.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Over 10+ years, I've worked with event pros who were constantly outsourcing marquee letters — watching someone else make the real money. I spent the last decade developing the highest quality marquee letters on the market — durable, self-standing, beautifully powder-coated, and designed specifically for the rental industry.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">You're Tapping Into a Proven System</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    I'm Jerrad Green, founder of Vintage Marquee Lights. I've helped business owners across the country create show-stopping displays that get eyeballs and bring in money.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These aren't off-the-shelf letters. Every detail was built from real-world rental industry experience. When you order from us, you're getting a shortcut to high-impact results — without the trial and error.
                  </p>
                </div>
              </div>

              {/* Image - takes 1 column */}
              <div className="lg:col-span-1">
              <OptimizedImage 
                src="/lovable-uploads/605ef708-58df-4fec-9e34-3f7232153fd9.png" 
                alt="Jerrad Green and family, founders of Vintage Marquee Lights rental business" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What You Get When You Own This Inventory</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Start Earning Fast — No Guesswork</h3>
              <p className="text-sm text-muted-foreground">Pre-packed with the most requested letters and symbols</p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Make More Per Event — With Less Effort</h3>
              <p className="text-sm text-muted-foreground">Premium, self-standing steel letters with a high-end finish</p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Keep Every Dollar — No Strings Attached</h3>
              <p className="text-sm text-muted-foreground">100% yours to own — no franchise, no royalty fees, no limits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="mb-4">
                <OptimizedImage 
                  src={testimonialSarahImage} 
                  alt="Sarah M. satisfied marquee letter rental business customer testimonial" 
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <blockquote className="text-base text-muted-foreground italic mb-4 leading-relaxed">
                "I run a balloon arch and decor company, and adding these marquee letters was a game changer. Now I can offer complete event packages and my profit per event has doubled."
              </blockquote>
              <cite className="text-sm text-foreground font-semibold">— Sarah M., California</cite>
            </div>

            {/* Testimonial 2 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="mb-4">
                <img 
                  src={testimonialMikeImage} 
                  alt="Mike R. testimonial photo" 
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <blockquote className="text-base text-muted-foreground italic mb-4 leading-relaxed">
                "These letters transformed our event business overnight. Clients are booking us specifically for the marquee letters now. The quality is absolutely stunning and they're so easy to transport."
              </blockquote>
              <cite className="text-sm text-foreground font-semibold">— Mike R., Texas</cite>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">How to Get Started</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-lg overflow-hidden bg-muted/40 ring-1 ring-border/40">
                <img 
                  src="/lovable-uploads/d86c2d98-97ca-4233-a7b6-6fea60a0dc18.png" 
                  alt="Step 1" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 1: Get a Quote in Around 5 Minutes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fill out a quick form and we'll send you pricing, package options, and everything you need to make the right move.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-lg overflow-hidden bg-muted/40 ring-1 ring-border/40">
                <img 
                  src="/lovable-uploads/3a1aa8ae-0d8f-463a-9102-dd8aef074419.png" 
                  alt="Step 2" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 2: We Handle Everything</h3>
              <p className="text-muted-foreground leading-relaxed">
                From production to freight, we coordinate every detail — your inventory arrives ready to rent, with nothing left to figure out.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-lg overflow-hidden bg-muted/40 ring-1 ring-border/40">
                <img 
                  src="/lovable-uploads/969e0a29-c68d-4a84-b260-590b946f35dd.png" 
                  alt="Step 3" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 3: Launch, Rent, and Grow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start booking rentals, keep every dollar, and grow a business that's fully yours — with products that pay for themselves again and again.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Button 
            onClick={() => setOpen(true)}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Get Package Pricing Now
          </Button>
        </div>
      </section>

      {/* 10 Reasons Section */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">10 Reasons Clients Choose Vintage Marquee Lights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Unmatched Durability</h3>
                  <p className="text-muted-foreground">These aren't flimsy wooden frames. Our steel letters are powder-coated, self-standing, and built to survive years of rentals and transport.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Zero Franchise or Royalty Fees</h3>
                  <p className="text-muted-foreground">You keep 100% of what you earn. No licensing. No middleman. No surprise costs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Complete, Ready‑to‑Rent Packages</h3>
                  <p className="text-muted-foreground">You don't have to guess what letters you need — we deliver full sets of high-demand characters so you start renting right away.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">End-to-End Logistics Handled</h3>
                  <p className="text-muted-foreground">From production to freight, packaging to delivery — we manage it all so you don't have to chase supply chains.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Premium Visual Impact</h3>
                  <p className="text-muted-foreground">These aren't mere signs — they command attention in photos, events, and social media. You look premium; your clients notice.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Scalable & Expandable Inventory</h3>
                  <p className="text-muted-foreground">Your setup today can grow — you can add modules, symbols, or backup letters without redoing your system.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Nationwide Reach / Delivery Capability</h3>
                  <p className="text-muted-foreground">No matter where your business is, you can order and get consistent service — not just local limitations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Tested & Proven in the Field</h3>
                  <p className="text-muted-foreground">These letters aren't just manufactured — they were developed through real-world use over a decade in the rental space.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Dynamic Lighting Options</h3>
                  <p className="text-muted-foreground">Upgrade to color-changing bulbs or a full LED neon-style look for clients who want something bold and modern.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Custom Shapes Available</h3>
                  <p className="text-muted-foreground">Need a heart, a hashtag, or something totally unique? We can design and produce custom shapes to make your rentals stand out even more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Product Features That Set Us Apart</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature A - Blue */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Star className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Extra-Deep, Self-Standing Construction</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Built with depth and balance for maximum stability.</p>
              </CardContent>
            </Card>

            {/* Feature B - Orange */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Fully Enclosed Backs</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">All wiring and sockets are hidden inside closed backs for a clean, professional appearance and safer transport.</p>
              </CardContent>
            </Card>

            {/* Feature C - Blue */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Star className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Powder-Coated Steel Finish</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Tough, sleek, and weather-resistant — your letters hold up to repeated rentals.</p>
              </CardContent>
            </Card>

            {/* Feature D - Orange */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">LED Bulbs (Warm or Color-Changing)</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Every unit includes long-lasting LED bulbs — with optional RGB color-changing or neon-style upgrades available.</p>
              </CardContent>
            </Card>

            {/* Feature E - Blue */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Star className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Reusable Foam-Lined Shipping Boxes</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Every package is shipped in durable foam-lined boxes you can reuse for safe storage, transport, and organization.</p>
              </CardContent>
            </Card>

            {/* Feature F - Orange */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Optional Display Stands for Multi-Row Setups</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Add-on base stands make it easy to stack letters in multiple rows for layered phrases or stage-height signage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => setOpen(true)}
          >
            Get Package Pricing Now
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions (and How We've Got You Covered)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product & Customization Group */}
            {/* FAQ Item 1 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Can I powder-coat the letters in a custom color?</h3>
              <p className="text-sm text-muted-foreground">Yes — we can powder coat in just about any color. That said, white is by far the most versatile for weddings, corporate events, proms, and everything in between.</p>
            </div>

            {/* FAQ Item 7 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Can I customize or change a package to fit my needs?</h3>
              <p className="text-sm text-muted-foreground">Absolutely. Our standard packages are based on years of rental data, but you can select the exact mix of letters, numbers, symbols, toppers, or lighting options that match your niche or market.</p>
            </div>

            {/* FAQ Item 9 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What size are the letters? And do you offer larger ones?</h3>
              <p className="text-sm text-muted-foreground">All of our rental packages include 36" tall letters, which are the perfect mix of visibility and practicality.</p>
              <p className="text-sm text-muted-foreground mt-1">We do offer 48" letters as well — they look amazing but require more space, effort, and cost to handle.</p>
            </div>

            {/* FAQ Item 10 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What are toppers?</h3>
              <p className="text-sm text-muted-foreground">Toppers are smaller word signs like THE, MR&MRS, CLASS OF, and BABY. Each phrase is pre-mounted on a shared base so you can easily set them on top of your 36" letters for layered displays — and extra rental income.</p>
            </div>

            {/* Business & Pricing Group */}
            {/* FAQ Item 2 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What are the payment terms?</h3>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">We try to make it easy on you.</p>
                <ul className="list-disc list-inside space-y-1 ml-3 text-xs">
                  <li>Wire transfer gets you a 3% discount and keeps production moving at top speed.</li>
                  <li>Credit cards are accepted but include a 3% fee to offset high transaction costs.</li>
                  <li>Checks are accepted but can take up to 10 days to clear — production won't start until they do.</li>
                  <li>Shop Pay Installments is also available if you want to break it into monthly payments — production starts immediately upon approval.</li>
                </ul>
              </div>
            </div>

            {/* FAQ Item 8 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Which package is the most popular?</h3>
              <p className="text-sm text-muted-foreground">The 112-piece Elite Package is by far the most popular. It has the best cost-per-letter and gives you enough inventory to handle multiple events per weekend — which means higher returns and better flexibility.</p>
            </div>

            {/* FAQ Item 12 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: How much can I rent the letters for?</h3>
              <p className="text-sm text-muted-foreground">Typical rates range from $75–$150 per letter, depending on your market.</p>
              <p className="text-sm text-muted-foreground mt-1">You can also offer bundles, delivery/setup add-ons, or even client pickup (with proper documentation and damage policies). You're in control of the pricing — it's your business.</p>
            </div>

            {/* Manufacturing & Quality Group */}
            {/* FAQ Item 4 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Where are these made?</h3>
              <p className="text-sm text-muted-foreground">We manufacture our letters overseas through a trusted production partner I've worked with for over 10 years.</p>
              <p className="text-sm text-muted-foreground mt-1">That relationship is what allows us to offer this level of quality, powder coating, precision packing, and attention to detail — all at a price that simply wouldn't be possible if made locally.</p>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Is there a warranty?</h3>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Yes.</p>
                <ul className="list-disc list-inside space-y-1 ml-3 text-xs">
                  <li>We replace any items damaged beyond simple repair during shipping or due to a manufacturing issue.</li>
                  <li>We do not replace items damaged from dropping, tipping, or event misuse.</li>
                  <li>That said, the product is built strong and packed well — breakage is rare, and we'll always take care of you if it's something on our end.</li>
                </ul>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What kind of bulbs do you use?</h3>
              <p className="text-sm text-muted-foreground">We use LED bulbs with E12 (candelabra) bases — long-lasting, energy efficient, and easy to replace.</p>
              <p className="text-sm text-muted-foreground mt-1">You'll receive spare bulbs with your order, and if you ever need more, we can ship replacements. You can also find fun or creative options on Amazon that fit the same base.</p>
            </div>

            {/* Logistics & Storage Group */}
            {/* FAQ Item 3 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: How long does it take from payment to delivery?</h3>
              <p className="text-sm text-muted-foreground">Once payment is received, delivery takes approximately 3–4 months. That includes production time, international freight, final delivery scheduling, and custom packing.</p>
              <p className="text-sm text-muted-foreground mt-1">It's a long timeline, but it's what makes it possible to get a premium product at this price point. You'll get updates along the way, and the final carrier will call you to coordinate delivery.</p>
            </div>

            {/* FAQ Item - What if I need something sooner */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What if I need something sooner?</h3>
              <p className="text-sm text-muted-foreground">It's possible to air freight a small number of letters for an additional cost. That way, you can start showing off your new inventory, build marketing buzz, and begin drumming up business while the rest of your order is still en route.</p>
            </div>

            {/* FAQ Item 11 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Are the foam-lined boxes going to last?</h3>
              <p className="text-sm text-muted-foreground">Yes. They're custom-designed for durability and protection. For best results, tape the corners when you receive them — it strengthens the boxes for years of loading and unloading. Many clients use them as long-term storage and transport systems.</p>
            </div>

            {/* FAQ Item 13 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: How much storage space will I need?</h3>
              <p className="text-sm text-muted-foreground">Keeping everything in boxes? Plan for 300–400 sq ft and solid shelving.</p>
              <p className="text-sm text-muted-foreground mt-1">One client removed the boxes and fit an entire 112-piece package into a 10×20 unit using Uline shelves. Either way, efficient organization will make a huge difference.</p>
            </div>
          </div>

          {/* Objection Busters Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Objection Busters</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Objection 1 */}
              <div className="border-b border-border pb-4">
                <h4 className="text-base font-bold mb-2 text-foreground">"Will this really make me money?"</h4>
                <p className="text-sm text-muted-foreground mb-1">That depends on your hustle and motivation. The opportunity is here — marquee letters are in demand — but like any business, success is earned.</p>
                <p className="text-sm text-muted-foreground mb-1">Post on social media, connect with local vendors, offer setups for styled shoots or charity events, and get visible in your community.</p>
                <p className="text-sm text-muted-foreground">This model rewards effort — the more you put in, the faster you grow. You're not buying a passive product; you're building a business that's fully yours.</p>
              </div>

              {/* Objection 2 */}
              <div className="border-b border-border pb-4">
                <h4 className="text-base font-bold mb-2 text-foreground">"What if I don't rent anything right away?"</h4>
                <p className="text-sm text-muted-foreground">You're not paying any ongoing fees. You own the inventory and can build your rental business at your own pace — while keeping 100% of the profits.</p>
              </div>

              {/* Objection 3 */}
              <div className="border-b border-border pb-4">
                <h4 className="text-base font-bold mb-2 text-foreground">"Will I be stuck replacing bulbs all the time?"</h4>
                <p className="text-sm text-muted-foreground">Nope. These LED bulbs last a long time. You'll get extras in the box, and we can ship you more any time.</p>
              </div>

              {/* Objection 4 */}
              <div className="pb-4">
                <h4 className="text-base font-bold mb-2 text-foreground">"Isn't overseas shipping risky or complicated?"</h4>
                <p className="text-sm text-muted-foreground">We handle all logistics and shipping. The price we quote already includes freight and delivery, and we manage every step until the inventory is in your hands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8 px-4">
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
                <p className="text-3xl font-bold text-primary mb-4">$12,500–$40,000</p>
                <p className="text-muted-foreground">Most clients invest in this range for a complete rental inventory, depending on package size and delivery location.</p>
              </CardContent>
            </Card>

            <Card className="border-secondary border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Package className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-card-foreground">Best Price</h3>
                </div>
                <p className="text-3xl font-bold text-secondary mb-4">~$300 per letter (Elite Pack)</p>
                <p className="text-muted-foreground">Includes 36″ self-standing marquee letters made of powder-coated steel, with LED bulbs and reusable foam-lined transport boxes and more!</p>
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
              onClick={() => setOpen(true)}
            >
              Get Package Pricing Now
            </Button>
          </div>
          
          <p className="mt-8 text-lg opacity-90">
            We look forward to helping you build a rental inventory that stands out at every event.
          </p>
        </div>
      </section>


      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Prefill your info - click submit on next page</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="first">First name</Label>
                <Input id="first" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last">Last name</Label>
                <Input id="last" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            If you don't see the information in your inbox in 5-10 minutes, please check your junk/spam folder.
          </p>
          <DialogFooter>
            <Button onClick={() => { const url = buildUrl(); window.open(url, "_blank"); setOpen(false); }}>Open Form</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <ShopifyFooter />
    </div>
  );
};

export default RentalInventory;
