import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Calendar, CreditCard } from "lucide-react";

// ============================================================
// IMAGES — Replace with your own CDN URLs if desired
// ============================================================
const IMAGES = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459706891/BhNBecSWNTTouAH6gAL2gG/drewiahill_185af040.jpeg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459706891/BhNBecSWNTTouAH6gAL2gG/lockwoods_0da524de.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459706891/BhNBecSWNTTouAH6gAL2gG/maria_ad860f6a.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459706891/BhNBecSWNTTouAH6gAL2gG/1969_4d61ab3d.webp",
];

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toLocaleString()}`;
}

function formatMonths(n: number): string {
  if (n <= 0) return "< 1 month";
  if (n < 12) return `${Math.ceil(n)} months`;
  const years = Math.floor(n / 12);
  const months = Math.ceil(n % 12);
  if (months === 0) return `${years} year${years > 1 ? "s" : ""}`;
  return `${years}yr ${months}mo`;
}

// ============================================================
// ANIMATED NUMBER HOOK
// ============================================================
function useAnimatedNumber(value: number): number {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    const duration = 600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    prevRef.current = value;
  }, [value]);

  return display;
}

// ============================================================
// LABELED SLIDER COMPONENT
// ============================================================
interface LabeledSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  hint?: string;
}

function LabeledSlider({ label, value, min, max, step, onChange, format, hint }: LabeledSliderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-bold text-primary">{format(value)}</span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(vals) => onChange(vals[0])}
      />
      {hint && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
    </div>
  );
}

// ============================================================
// STAT CARD COMPONENT
// ============================================================
interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
  icon?: React.ReactNode;
}

function StatCard({ label, value, sub, highlight, icon }: StatCardProps) {
  return (
    <Card className={highlight ? "border-primary bg-primary/5" : ""}>
      <CardContent className="p-4 text-center">
        {icon && <div className="flex justify-center mb-2 text-primary">{icon}</div>}
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
        <p className={`text-2xl font-bold mt-1 ${highlight ? "text-primary" : "text-foreground"}`}>{value}</p>
        {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
      </CardContent>
    </Card>
  );
}

// ============================================================
// MAIN CALCULATOR PAGE
// ============================================================
const RoiCalculator = () => {
  const navigate = useNavigate();

  // Package selection
  const [pkg, setPkg] = useState<"pro" | "elite">("elite");
  const packageCost = pkg === "elite" ? 34800 : 19800;

  // Input state
  const [pricePerLetter, setPricePerLetter] = useState(95);
  const [lettersPerEvent, setLettersPerEvent] = useState(6);
  const [deliveryFee, setDeliveryFee] = useState(150);
  const [eventsPerWeek, setEventsPerWeek] = useState(2);
  const [weeksPerYear, setWeeksPerYear] = useState(40);
  const [shopPayMonths, setShopPayMonths] = useState(0);

  // Calculations
  const calc = useMemo(() => {
    const revenuePerEvent = pricePerLetter * lettersPerEvent + deliveryFee;
    const eventsPerYear = eventsPerWeek * weeksPerYear;
    const annualRevenue = revenuePerEvent * eventsPerYear;
    const monthlyRevenue = annualRevenue / 12;
    const monthsToPayoff = packageCost / monthlyRevenue;
    const year1Profit = annualRevenue - packageCost;
    const year2Profit = annualRevenue;
    const shopPayMonthly = shopPayMonths > 0 ? packageCost / shopPayMonths : 0;
    const shopPayCoveredByEvents = shopPayMonths > 0 ? Math.ceil(shopPayMonthly / revenuePerEvent) : 0;

    return { revenuePerEvent, eventsPerYear, annualRevenue, monthlyRevenue, monthsToPayoff, year1Profit, year2Profit, shopPayMonthly, shopPayCoveredByEvents };
  }, [pricePerLetter, lettersPerEvent, deliveryFee, eventsPerWeek, weeksPerYear, packageCost, shopPayMonths]);

  // Animated values
  const animPerEvent = useAnimatedNumber(Math.round(calc.revenuePerEvent));
  const animMonthly = useAnimatedNumber(Math.round(calc.monthlyRevenue));
  const animAnnual = useAnimatedNumber(Math.round(calc.annualRevenue));
  const animYear1 = useAnimatedNumber(Math.round(Math.max(0, calc.year1Profit)));

  // Rotating hero image
  const [activeImg, setActiveImg] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveImg((i) => (i + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ROI Calculator — Marquee Letter Rental Fleet | Vintage Marquee Lights</title>
        <meta name="description" content="Calculate your return on investment for a marquee letter rental fleet. See how quickly your Pro or Elite package pays for itself based on your local market pricing." />
        <meta property="og:url" content="https://inventory.vintagemarqueelights.com/roi-calculator" />
      </Helmet>
      <Navigation />

      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Marquee letter rental setup"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === activeImg ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
              Rental Fleet ROI Calculator
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              How quickly can your fleet pay for itself?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* LEFT: Inputs (3 cols) */}
          <div className="lg:col-span-3 space-y-8">

            {/* Step 1: Package */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">Step 1 — Choose Your Fleet Package</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(["pro", "elite"] as const).map((p) => (
                  <Card
                    key={p}
                    className={`cursor-pointer transition-all ${pkg === p ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "hover:border-muted-foreground/30"}`}
                    onClick={() => setPkg(p)}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-foreground">{p === "pro" ? "Pro Package" : "Elite Package"}</span>
                        {pkg === p && <Badge variant="default">Selected</Badge>}
                      </div>
                      <p className="text-xl font-bold text-primary">{p === "pro" ? "$19,800" : "$34,800"}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {p === "pro" ? "66 pieces · 2 setups/weekend" : "112 pieces · 3+ setups/weekend"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Step 2: Pricing */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">Step 2 — Your Rental Pricing</h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <LabeledSlider label="Price Per Letter" value={pricePerLetter} min={50} max={200} step={5} onChange={setPricePerLetter} format={(v) => `$${v}`} hint="Industry range: $75–$125/letter. Your market may vary." />
                  <LabeledSlider label="Letters Per Event" value={lettersPerEvent} min={2} max={15} step={1} onChange={setLettersPerEvent} format={(v) => `${v} letters`} hint='E.g., "MR & MRS" = 6 letters. "LOVE" = 4 letters.' />
                  <LabeledSlider label="Delivery Fee" value={deliveryFee} min={0} max={500} step={25} onChange={setDeliveryFee} format={(v) => `$${v}`} hint="Typical range: $50–$250 per event." />
                </CardContent>
              </Card>
            </div>

            {/* Step 3: Volume */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">Step 3 — Your Event Volume</h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <LabeledSlider label="Events Per Week" value={eventsPerWeek} min={1} max={7} step={1} onChange={setEventsPerWeek} format={(v) => `${v} event${v > 1 ? "s" : ""}`} hint="Pro Package: ideal for 1–2/week. Elite: 3+/week." />
                  <LabeledSlider label="Active Weeks Per Year" value={weeksPerYear} min={10} max={52} step={1} onChange={setWeeksPerYear} format={(v) => `${v} weeks`} hint="Account for slow seasons, holidays, and ramp-up time." />
                </CardContent>
              </Card>
            </div>

            {/* Step 4: Shop Pay */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">Step 4 — Financing (Optional)</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-foreground">Shop Pay Installments</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Finance your fleet through Shopify's Shop Pay Installments. See how many events cover your monthly payment.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {[0, 6, 12, 24].map((m) => (
                      <Button
                        key={m}
                        variant={shopPayMonths === m ? "default" : "outline"}
                        size="sm"
                        onClick={() => setShopPayMonths(m)}
                      >
                        {m === 0 ? "Pay Full" : `${m} mo`}
                      </Button>
                    ))}
                  </div>
                  {shopPayMonths > 0 && (
                    <div className="mt-4 p-4 rounded-md bg-muted">
                      <p className="text-sm font-medium text-foreground">Monthly Shop Pay Payment</p>
                      <p className="text-2xl font-bold text-primary">{formatCurrency(calc.shopPayMonthly)}/mo</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Covered by just {calc.shopPayCoveredByEvents} event{calc.shopPayCoveredByEvents !== 1 ? "s" : ""} per month at your pricing.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* RIGHT: Results (2 cols) */}
          <div className="lg:col-span-2">
            <div className="sticky top-16 space-y-6">
              <Card className="border-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Your Projection</CardTitle>
                  <p className="text-sm text-muted-foreground">Revenue at a Glance</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-md bg-muted">
                      <p className="text-xs font-medium text-muted-foreground">Per Event</p>
                      <p className="text-xl font-bold text-foreground">{formatCurrency(animPerEvent)}</p>
                    </div>
                    <div className="text-center p-3 rounded-md bg-muted">
                      <p className="text-xs font-medium text-muted-foreground">Per Month</p>
                      <p className="text-xl font-bold text-foreground">{formatCurrency(animMonthly)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <StatCard
                label="Annual Revenue"
                value={formatCurrency(animAnnual)}
                sub={`${calc.eventsPerYear} events/year`}
                icon={<TrendingUp className="h-5 w-5" />}
              />
              <StatCard
                label="Year 1 Profit"
                value={formatCurrency(animYear1)}
                sub={`After ${pkg === "pro" ? "$19.8K" : "$34.8K"} investment`}
                highlight
                icon={<DollarSign className="h-5 w-5" />}
              />
              <StatCard
                label="Payoff Timeline"
                value={formatMonths(calc.monthsToPayoff)}
                sub="Until your fleet is fully paid off"
                icon={<Calendar className="h-5 w-5" />}
              />
              <StatCard
                label="Year 2+ Revenue"
                value={formatCurrency(calc.year2Profit)}
                sub="Pure profit — no equipment cost"
                icon={<TrendingUp className="h-5 w-5" />}
              />

              <p className="text-xs text-muted-foreground">
                * Projections are estimates based on your inputs. Actual results depend on local market rates, booking consistency, and operational costs.
              </p>

              <Button
                className="w-full"
                size="lg"
                onClick={() => navigate("/quote/rental-inventory")}
              >
                Ready to Start? View Fleet Packages →
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RoiCalculator;
