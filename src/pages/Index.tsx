import Chatbot from '@/components/Chatbot';

// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Vintage Marquee Lights</h1>
        <p className="text-xl text-muted-foreground mb-8">Professional marquee letters for rental businesses</p>
        <a 
          href="/build-inventory" 
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Build Your Rental Inventory
        </a>
      </div>
      <Chatbot />
    </div>
  );
};

export default Index;
