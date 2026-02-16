import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SignStyleImageGrid } from "@/components/SignStyleImageGrid";

const CustomQuote = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Custom Marquee Lights Quote</title>
        <meta name="description" content="Get a custom quote for vintage marquee lights. Choose your sign style to get started." />
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

export default CustomQuote;
