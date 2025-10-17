import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RentalGuideDownloadSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto">
        <Card className="border-primary/20 shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Visual preview */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl"></div>
                <div className="relative bg-card border-2 border-primary/30 rounded-lg p-6 text-center">
                  <Download className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Free Rental Business Guide</h3>
                  <p className="text-sm text-muted-foreground">Everything you need to launch & grow</p>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Start Your Rental Business?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get our comprehensive infographic with proven strategies, pricing guides, and the exact steps to launch your marquee light rental business.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete startup checklist</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Proven pricing strategies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Marketing tactics that work</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Inventory planning made simple</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate("/download/rental-guide")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Guide
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
