import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ShopifyHeader from '@/components/ShopifyHeader';
import ShopifyFooter from '@/components/ShopifyFooter';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>How It Works: Ordering Custom Marquee Signs | Vintage Marquee Lights</title>
        <meta name="description" content="Learn how to order custom marquee signs, start a rental business, or get commercial signage for your event or storefront." />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/how-it-works" />
      </Helmet>

      <ShopifyHeader />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you are buying a single custom sign for your wedding, outfitting a food truck, or launching a full marquee rental business, the process is simple. Choose your path below.
          </p>
        </div>

        {/* Path 1: Rental Business Buyers */}
        <section className="mb-20">
          <div className="bg-muted rounded-xl p-8 md:p-10 border border-border">
            <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full mb-6">
              Path 1: Starting a Rental Business
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Buying a Commercial Rental Package
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Submit a Quote Request</h3>
                  <p className="text-muted-foreground">Go to our <Link to="/rental-inventory" className="text-primary hover:underline">Rental Inventory page</Link> and fill out the form. You'll instantly receive an email with our full pricing guide, package options, and ROI breakdown.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Consultation & Customization</h3>
                  <p className="text-muted-foreground">We'll schedule a call to discuss your market, help you choose the right starter package (like our popular 45-letter set), and answer any questions about running the business.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Fabrication & Freight Delivery</h3>
                  <p className="text-muted-foreground">Once your order is placed, our manufacturing partners begin fabrication. Because these are large commercial orders, they are securely crated and shipped via freight directly to your home or warehouse.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <Link to="/quote/rental-inventory" className="inline-flex items-center text-primary font-semibold hover:underline">
                Get a Rental Package Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* Path 2: Custom Commercial/Event Signs */}
        <section className="mb-20">
          <div className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-sm">
            <div className="inline-block bg-secondary/10 text-secondary-foreground font-semibold px-4 py-1 rounded-full mb-6">
              Path 2: Custom Signs & Logos
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ordering a Custom Sign or 3D Logo
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Share Your Vision</h3>
                  <p className="text-muted-foreground">Fill out a custom quote form with your logo files, dimensions, and ideas. Whether it's for a food truck, corporate stage, or storefront, we need to know what you're dreaming up.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Design & Quoting</h3>
                  <p className="text-muted-foreground">Our team will review your requirements and provide a custom quote. For complex 3D logos or layered signs, we'll ensure the design translates perfectly to metal and illumination.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Build & Ship</h3>
                  <p className="text-muted-foreground">Your custom sign goes into production. Depending on the size and complexity, it will ship via standard ground or freight carrier right to your door.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <Link to="/quote/custom" className="inline-flex items-center text-secondary-foreground font-semibold hover:underline">
                Request a Custom Sign Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* Path 3: Wall-Hanging Letters */}
        <section className="mb-10">
          <div className="bg-background rounded-xl p-8 md:p-10 border border-border">
            <div className="inline-block bg-muted text-foreground font-semibold px-4 py-1 rounded-full mb-6">
              Path 3: Wall-Hanging Letters
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Custom Wall-Hanging Marquee Letters
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted text-foreground flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tell Us What You Need</h3>
                  <p className="text-muted-foreground">Whether it's a word, a name, or a full phrase for a restaurant, bar, studio, or home, start by browsing our <Link to="/wall-hanging-signs" className="text-primary hover:underline">Wall-Hanging Letters page</Link> and submitting a quote request with your size, finish, and wording.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted text-foreground flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Custom Quote & Approval</h3>
                  <p className="text-muted-foreground">We'll send you a custom quote based on your letter count and size. Once approved, your order goes into fabrication — hand-built from steel with standard incandescent filament bulbs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted text-foreground flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Fabrication & Delivery</h3>
                  <p className="text-muted-foreground">Standard turnaround is 4 to 6 weeks. Your letters ship via UPS Ground (or freight for larger pieces) right to your door, ready to hang and plug in.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <Link to="/quote/wall-hanging" className="inline-flex items-center text-foreground font-semibold hover:underline">
                Get a Wall-Hanging Letter Quote →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <ShopifyFooter />
    </div>
  );
};

export default HowItWorks;
