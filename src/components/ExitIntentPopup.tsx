import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate, useBlocker } from "react-router-dom";

const STORAGE_KEY = "rental-guide-exit-intent-shown";

// Routes that should NOT trigger the exit intent popup
const FORM_ROUTES = [
  '/quote/',
  '/download/',
  '/thank-you-for-submitting-a-form'
];

const shouldShowPopup = (pathname: string) => {
  return !FORM_ROUTES.some(route => pathname.startsWith(route));
};

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  // Check if already shown
  const hasShown = localStorage.getItem(STORAGE_KEY);

  // Block internal navigation to non-form pages
  const blocker = useBlocker(({ nextLocation }) => {
    if (!hasShown && isActive) {
      return shouldShowPopup(nextLocation.pathname);
    }
    return false;
  });

  useEffect(() => {
    if (hasShown) return;

    // Activate blocking after 5 seconds
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 5000);

    // Handle browser-level exits (close tab, new URL, etc.)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown && isActive) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown, isActive]);

  // Show popup when blocker is triggered
  useEffect(() => {
    if (blocker.state === 'blocked') {
      setIsOpen(true);
      localStorage.setItem(STORAGE_KEY, "true");
    }
  }, [blocker.state]);

  const handleDownload = () => {
    if (blocker.state === 'blocked') {
      blocker.reset();
    }
    navigate("/download/rental-guide");
    setIsOpen(false);
  };

  const handleContinue = () => {
    if (blocker.state === 'blocked') {
      blocker.proceed();
    }
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
              onClick={handleContinue}
              className="w-full text-muted-foreground"
            >
              {blocker.state === 'blocked' ? 'Continue Browsing' : "No thanks, I'll pass"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
