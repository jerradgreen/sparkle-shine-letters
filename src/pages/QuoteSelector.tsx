import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SignStyleImageGrid } from "@/components/SignStyleImageGrid";

const QuoteSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Get a Quote – What Type of Sign Are You Looking For?</title>
        <meta name="description" content="Choose your sign type to get a custom quote from Vintage Marquee Lights." />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <p className="text-sm text-muted-foreground text-center mb-4">
          Welcome to our NEW site!
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Select the style of sign to open the correct Quote Request Form
        </h1>
        <SignStyleImageGrid onSelect={(path) => navigate(path)} />
      </main>
      <Footer />
    </div>
  );
};

export default QuoteSelector;
