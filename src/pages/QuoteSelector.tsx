import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const signTypeOptions = [
  { label: "Wall Letters", description: "Custom marquee letters for walls", path: "/quote/wall-hanging" },
  { label: "3D Layered Signs", description: "For logos/more complicated designs in a round, square or any shape", path: "/quote/3d-logos" },
  { label: "Mobile Vendors", description: "Signs for food trucks & carts", path: "/quote/mobile-vendor" },
  { label: "Stand-Up Letters", description: '36" & 48" event letters', path: "/quote/event-standup" },
  { label: "Rental Inventory", description: "Start your rental business", path: "/quote/rental-inventory" },
  { label: "Not Sure / Other", description: "We'll help you figure it out", path: "/quote/not-sure" },
];

const QuoteSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Get a Quote – What Type of Sign Are You Looking For?</title>
        <meta name="description" content="Choose your sign type to get a custom quote from Vintage Marquee Lights." />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <p className="text-sm text-muted-foreground text-center mb-4">
          (Welcome to our NEW site!)
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Select the style of sign to open the correct Quote Request Form
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {signTypeOptions.map((option) => (
            <button
              key={option.path}
              onClick={() => navigate(option.path)}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-card hover:bg-accent hover:border-primary transition-colors text-center"
            >
              <span className="font-semibold text-foreground text-lg">{option.label}</span>
              <span className="text-sm text-muted-foreground mt-2">{option.description}</span>
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuoteSelector;
