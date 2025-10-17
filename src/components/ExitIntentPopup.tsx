import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "rental-guide-exit-intent-shown";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already shown
    const hasShown = localStorage.getItem(STORAGE_KEY);
    if (hasShown) return;

    let isActive = false;

    // Activate after 5 seconds
    const timer = setTimeout(() => {
      isActive = true;
    }, 5000);

    // Handle browser-level exits only (close tab, new URL, external links)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown && isActive) {
        e.preventDefault();
        e.returnValue = '';
        localStorage.setItem(STORAGE_KEY, "true");
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleDownload = () => {
    navigate("/download/rental-guide");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Download className="h-6 w-6 text-primary" />
            Wait! Get Our Free Guide
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Before you go, download our comprehensive guide to starting a successful marquee light rental business.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">What's Inside:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Step-by-step startup checklist</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Pricing strategies that work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Marketing tactics for quick wins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Essential inventory planning</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="lg" onClick={handleDownload} className="w-full">
              <Download className="mr-2 h-5 w-5" />
              Get Free Guide Now
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setIsOpen(false)}
              className="w-full text-muted-foreground"
            >
              No thanks, I'll pass
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
