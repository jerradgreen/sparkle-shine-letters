import { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "rental-guide-exit-intent-shown";

// Routes that should NOT trigger the exit intent popup
const FORM_ROUTES = [
  '/quote/',
  '/download/',
  '/thank-you-for-submitting-a-form',
  '/download/rental-guide-thank-you'
];

const isFormRoute = (pathname: string) => {
  return FORM_ROUTES.some(route => pathname.startsWith(route));
};

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingNav, setPendingNav] = useState<{ href: string; target?: string } | null>(null);
  const navigate = useNavigate();
  const shownRef = useRef(false);

  useEffect(() => {
    // Check if already shown
    const hasShown = localStorage.getItem(STORAGE_KEY);
    if (hasShown) {
      shownRef.current = true;
      return;
    }

    let isActive = false;

    // Activate after 5 seconds
    const timer = setTimeout(() => {
      isActive = true;
    }, 5000);

    // A) Top-edge intent detection
    const handleMouseOut = (e: MouseEvent) => {
      if (shownRef.current || !isActive) return;
      
      // Detect cursor leaving through the top of the viewport
      if (!e.relatedTarget && e.clientY <= 10) {
        shownRef.current = true;
        localStorage.setItem(STORAGE_KEY, "true");
        setIsOpen(true);
      }
    };

    // B) Intercept internal navigation clicks
    const handleClick = (e: MouseEvent) => {
      if (shownRef.current || !isActive) return;

      // Find the anchor element
      let target = e.target as HTMLElement | null;
      let anchor: HTMLAnchorElement | null = null;
      
      while (target && target !== document.body) {
        if (target.tagName === 'A') {
          anchor = target as HTMLAnchorElement;
          break;
        }
        target = target.parentElement;
      }

      if (!anchor || !anchor.href) return;

      // Respect modifier keys (cmd+click, ctrl+click, middle-click)
      if (e.metaKey || e.ctrlKey || e.button === 1) return;

      const url = new URL(anchor.href, window.location.origin);
      const isExternal = url.origin !== window.location.origin;
      const linkTarget = anchor.target;

      if (isExternal) {
        // External link - show popup
        e.preventDefault();
        shownRef.current = true;
        localStorage.setItem(STORAGE_KEY, "true");
        setPendingNav({ href: anchor.href, target: linkTarget || undefined });
        setIsOpen(true);
      } else {
        // Internal link
        const pathname = url.pathname;
        
        // If it's a form route, allow navigation without popup
        if (isFormRoute(pathname)) {
          return;
        }

        // Non-form internal route - show popup
        e.preventDefault();
        shownRef.current = true;
        localStorage.setItem(STORAGE_KEY, "true");
        setPendingNav({ href: pathname, target: linkTarget || undefined });
        setIsOpen(true);
      }
    };

    // C) Browser-level exits (close tab, address bar change, etc.)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!shownRef.current && isActive) {
        e.preventDefault();
        e.returnValue = '';
        // Note: We can't show our custom modal here, only browser's native dialog
      }
    };

    window.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('click', handleClick, true); // Capture phase
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleDownload = () => {
    navigate("/download/rental-guide");
    setIsOpen(false);
    setPendingNav(null);
  };

  const handleContinue = () => {
    if (pendingNav) {
      if (pendingNav.target === '_blank') {
        window.open(pendingNav.href, '_blank');
      } else if (pendingNav.href.startsWith('http')) {
        // External URL
        window.location.href = pendingNav.href;
      } else {
        // Internal route
        navigate(pendingNav.href);
      }
    }
    setIsOpen(false);
    setPendingNav(null);
  };

  const handleNoThanks = () => {
    setIsOpen(false);
    setPendingNav(null);
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
            {pendingNav && (
              <Button 
                variant="outline" 
                onClick={handleContinue}
                className="w-full"
              >
                Continue to page
              </Button>
            )}
            <Button 
              variant="ghost" 
              onClick={handleNoThanks}
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
