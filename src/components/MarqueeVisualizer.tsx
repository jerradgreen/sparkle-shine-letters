import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Shopify CDN base URL
const SHOPIFY_CDN_BASE = 'https://cdn.shopify.com/s/files/1/1403/8315/files';

// Helper function to generate Shopify CDN URL
const getShopifyImageUrl = (filename: string) => `${SHOPIFY_CDN_BASE}/${filename}.webp`;

// Letter images map - using Shopify CDN .webp files
const letterImages: Record<string, string> = {
  'A': getShopifyImageUrl('A_cutout'),
  'B': getShopifyImageUrl('B_cutout'),
  'C': getShopifyImageUrl('C_cutout'),
  'D': getShopifyImageUrl('D_cutout'),
  'E': getShopifyImageUrl('E_cutout'),
  'F': getShopifyImageUrl('F_cutout'),
  'G': getShopifyImageUrl('G_cutout'),
  'H': getShopifyImageUrl('H_cutout'),
  'I': getShopifyImageUrl('I_cutout'),
  'J': getShopifyImageUrl('J_cutout'),
  'K': getShopifyImageUrl('K_cutout'),
  'L': getShopifyImageUrl('L_cutout'),
  'M': getShopifyImageUrl('M_cutout'),
  'N': getShopifyImageUrl('N_cutout'),
  'O': getShopifyImageUrl('O_cutout'),
  'P': getShopifyImageUrl('P_cutout'),
  'Q': getShopifyImageUrl('Q_cutout'),
  'R': getShopifyImageUrl('R_cutout'),
  'S': getShopifyImageUrl('S_cutout'),
  'T': getShopifyImageUrl('T_cutout'),
  'U': getShopifyImageUrl('U_cutout'),
  'V': getShopifyImageUrl('V_cutout'),
  'W': getShopifyImageUrl('W_cutout'),
  'X': getShopifyImageUrl('X_cutout'),
  'Y': getShopifyImageUrl('Y_cutout'),
  'Z': getShopifyImageUrl('Z_cutout'),
  '&': getShopifyImageUrl('ampersand_lights_on'),
  '0': getShopifyImageUrl('0_lights_on'),
  '1': getShopifyImageUrl('1_lights_on'),
  '2': getShopifyImageUrl('2_lights_on'),
  '3': getShopifyImageUrl('3_lights_on'),
  '4': getShopifyImageUrl('4_lights_on'),
  '5': getShopifyImageUrl('5_lights_on'),
  '6': getShopifyImageUrl('6_lights_on'),
  '7': getShopifyImageUrl('7_lights_on'),
  '8': getShopifyImageUrl('8_lights_on'),
  '9': getShopifyImageUrl('9_lights_on')
};

// Background image from Shopify CDN
const BackgroundImage = getShopifyImageUrl('black_wall_background_image_4');

interface LetterElementProps {
  character: string;
  isTopper: boolean;
  letterCount: number;
  index: number;
  letterSize: string;
  currentScale: number;
  scaleOverride?: number;
}

const LetterElement = ({ character, isTopper, letterCount, index, letterSize, currentScale, scaleOverride }: LetterElementProps) => {
  const [loaded, setLoaded] = useState(false);
  
  if (character === ' ') {
    const scale = scaleOverride ?? getScale(isTopper, letterCount, letterSize, currentScale);
    return (
      <div 
        className="letter-space inline-block"
        style={{ 
          width: `${240 * scale * 0.4}px`, 
          height: `${240 * scale}px` 
        }}
      />
    );
  }

  const src = letterImages[character];
  if (!src) {
    return (
      <div className="text-sm text-muted-foreground">
        {character}
      </div>
    );
  }

  const scale = scaleOverride ?? getScale(isTopper, letterCount, letterSize, currentScale);
  const height = 240 * scale;
  const kerning = getKerning(isTopper, letterCount);

  return (
    <div 
      className={`marquee-letter relative transition-all duration-500 transform-gpu inline-block ${
        loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ 
        marginLeft: index > 0 ? `${kerning}px` : '0',
        transformOrigin: 'bottom center'
      }}
    >
      <img
        src={src}
        alt={character}
        className="letter-image block w-auto object-contain"
        style={{ height: `${height}px` }}
        onLoad={() => setLoaded(true)}
      />
      <div 
        className="letter-glow absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--marquee-glow) / 0.2) 0%, transparent 60%)'
        }}
      />
    </div>
  );
};

const getScale = (isTopper: boolean, letterCount: number, letterSize: string, currentScale: number, isMobilePortrait?: boolean) => {
  const isMobile = window.innerWidth <= 767;
  const isPortrait = window.innerHeight > window.innerWidth;
  const mobilePortrait = isMobile && isPortrait;
  
  // Use the same scale for both 36" and 48" to keep it simple
  const baseScales = { '15': 0.45, '36': 0.9, '48': 0.9 };
  const baseScalesMobile = { '15': 0.22, '36': 0.38, '48': 0.38 };

  // Continuous scaling that reacts on every character (1 -> 20+)
  const mainBase = isMobile ? baseScalesMobile['36'] : baseScales['36'];
  const k = isMobile ? 0.018 : 0.02; // per-character reduction
  const dynamicFactor = Math.max(1 - k * Math.max(letterCount - 1, 0), 0.6);

  if (!isTopper) {
    const floor = isMobile ? 0.32 : 0.5;
    return Math.max(mainBase * dynamicFactor, floor);
  } else {
    const mainFloor = isMobile ? 0.32 : 0.5;
    const finalMainScale = Math.max(mainBase * dynamicFactor, mainFloor);

    // Mobile portrait: topper scales more aggressively to stay proportional
    const topperAdjust = mobilePortrait ? 0.50 : isMobile ? 0.65 : 0.55;
    const topperScale = finalMainScale * topperAdjust;

    return Math.max(topperScale, isMobile ? 0.06 : 0.08);
  }
};

const getKerning = (isTopper: boolean, letterCount: number) => {
  const isMobile = window.innerWidth <= 767;
  let kerning = isTopper ? (isMobile ? 3 : 8) : (isMobile ? 4 : 12);
  if (!isTopper && letterCount > 6) {
    kerning *= 6 / letterCount;
  }
  return Math.max(kerning, isMobile ? 1 : 2);
};

export const MarqueeVisualizer = () => {
  const [letterSize, setLetterSize] = useState('36');
  const [topperOption, setTopperOption] = useState('NONE');
  const [customTopper, setCustomTopper] = useState('');
  const [mainText, setMainText] = useState('ENTER TEXT');
  const [currentScale, setCurrentScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [viewportW, setViewportW] = useState(window.innerWidth);
  
  const previewRef = useRef<HTMLDivElement>(null);
  const letterDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  // Mobile-only viewport tracking for orientation changes
  useEffect(() => {
    if (window.innerWidth <= 767) {
      const handleResize = () => setViewportW(window.innerWidth);
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    }
  }, []);

  const filterValidText = (text: string) => {
    return text.toUpperCase().split('').filter(ch => /[A-Z0-9&\s]/.test(ch));
  };

  const getTopperText = () => {
    if (topperOption === 'NONE') return [];
    if (topperOption === 'CUSTOM') {
      return filterValidText(customTopper);
    }
    return filterValidText(topperOption);
  };

  const updateCurrentScale = useCallback(() => {
    const mainLetters = filterValidText(mainText);
    const scale = getScale(false, mainLetters.length, letterSize, currentScale);
    setCurrentScale(scale);
  }, [mainText, letterSize, currentScale]);

  useEffect(() => {
    updateCurrentScale();
  }, [mainText, letterSize, updateCurrentScale]);

  const openQuoteForm = () => {
    const base = 'https://www.cognitoforms.com/VintageMarqueeLights/EventStyleLettersQuoteForm';

    const noMainTextEntered = mainText.trim().toUpperCase() === 'ENTER TEXT';
    const noTopperEntered = topperOption === 'NONE' || (topperOption === 'CUSTOM' && customTopper.trim() === '');

    // Build entry object - always include Topper field (blank if none) so it shows on the form
    const entry: Record<string, string> = {
      Topper: '' // Always include Topper field, even if blank, to make it visible
    };
    
    // Add topper value if one is selected
    if (!noTopperEntered && topperOption !== 'NONE') {
      entry.Topper = topperOption === 'CUSTOM' ? customTopper : topperOption;
    }
    
    // Add main text if entered
    if (!noMainTextEntered) {
      entry.MainTextLettersNumbersSymbols = mainText.toUpperCase();
      entry.MainTextSize = letterSize === '48' ? '48"' : '36"';
    }

    const url = `${base}?entry=${encodeURIComponent(JSON.stringify(entry))}`;
    window.open(url, '_blank');
  };

const mainLetters = filterValidText(mainText);
const topperLetters = getTopperText();
const isMobile = window.innerWidth <= 767;
const isPortrait = window.innerHeight > window.innerWidth;
const mobilePortrait = isMobile && isPortrait;

const computedMainScale = getScale(false, mainLetters.length, letterSize, currentScale, mobilePortrait);
const computedTopperScale = getScale(true, topperLetters.length, '15', currentScale, mobilePortrait);

// Dynamic gap for mobile portrait - creates visual connection between topper and main
const mainLetterPx = 240 * computedMainScale;
const topperGapPx = mobilePortrait ? -Math.max(4, Math.round(mainLetterPx * 0.06)) : 0;

// More space between card and letters
const bottomOffsetPx = isMobile ? 40 : 28;

  return (
    <div className="marquee-visualizer relative overflow-visible bg-background text-foreground">
      {/* Background */}
      <div 
        className="marquee-background absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: window.innerWidth >= 768 ? 'center 50%' : window.innerWidth > window.innerHeight ? 'center 30%' : 'center 10%'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              hsl(var(--marquee-wood) / 0.2) 0%, 
              transparent 50%, 
              hsl(var(--marquee-concrete) / 0.4) 100%)`
          }}
        />
      </div>

      {/* Mobile note */}
      <p className="mobile-note hidden max-md:block text-center text-sm text-muted-foreground my-2 italic">
        📱 For longer words/phrases, turn phone sideways.
      </p>

      {/* Main Content */}
      <div className="content-container relative z-10 w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="md:flex md:justify-center md:scale-85 md:origin-top">
          <Card className="marquee-card bg-card/90 backdrop-blur-sm border-border/50 shadow-lg mb-4 md:mb-8 relative z-10">
            <CardHeader className="text-center p-4 md:p-6">
              <CardTitle className="text-base md:text-3xl font-bold mb-1 md:mb-2 uppercase">
                MARQUEE VISUALIZER
              </CardTitle>
              <CardDescription className="text-xs md:text-sm hidden md:block">
                Commercial, self-standing, powder coated steel marquee letters for any event or celebration.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="letterSize" className="text-xs md:text-sm">Choose Letter Size</Label>
                  <Select value={letterSize} onValueChange={setLetterSize}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="36">36 inches</SelectItem>
                      <SelectItem value="48">48 inches</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="topperOption" className="text-xs md:text-sm">Select a topper if needed (15" tall connected letters that set on top of the main text)</Label>
                  <Select value={topperOption} onValueChange={setTopperOption}>
                    <SelectTrigger className="z-[10000]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="z-[10000]">
                      <SelectItem value="NONE">No Topper</SelectItem>
                      <SelectItem value="THE">THE</SelectItem>
                      <SelectItem value="CLASS OF">CLASS OF</SelectItem>
                      <SelectItem value="BABY">BABY</SelectItem>
                      <SelectItem value="MR&MRS">MR&MRS</SelectItem>
                      <SelectItem value="CUSTOM">Custom Text</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {topperOption === 'CUSTOM' && (
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="customTopper" className="text-xs md:text-sm">Custom Topper Text</Label>
                    <Input
                      id="customTopper"
                      value={customTopper}
                      onChange={(e) => setCustomTopper(e.target.value)}
                      placeholder="Enter custom text"
                      maxLength={20}
                    />
                  </div>
                )}
              </div>

              <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2">
                <Label htmlFor="mainText" className="text-xs md:text-sm">Type Your Main Text Here</Label>
                <div className="flex gap-4 items-stretch max-md:flex-col">
                  <Input
                    id="mainText"
                    value={mainText}
                    onChange={(e) => setMainText(e.target.value)}
                    onFocus={() => {
                      if (mainText === 'ENTER TEXT') {
                        setMainText('');
                      }
                    }}
                    placeholder="Type Your Main Text Here"
                    className="text-lg flex-1"
                  />
                  <Button 
                    onClick={openQuoteForm}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 md:whitespace-nowrap whitespace-normal h-auto py-3 leading-tight"
                  >
                    Get Quote in Under 5 min
                  </Button>
                </div>
              </div>

              <p className="mobile-note hidden max-md:block text-center text-sm text-muted-foreground mt-2 italic">
                📱 For longer words/phrases, turn phone sideways.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Preview Container */}
      <div 
        ref={previewRef}
        className={`preview-container relative z-0 w-full box-border transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          height: window.innerWidth >= 768 ? '35vh' : '18vh',
          maxHeight: window.innerWidth >= 768 ? '380px' : '180px',
          minHeight: '120px',
          overflow: 'hidden'
        }}
      >
      </div>

      {/* Letter Display - Anchored to bottom of container */}
      <div 
        ref={letterDisplayRef}
        className="letter-positioning absolute left-1/2 transform -translate-x-1/2 z-0 flex flex-col items-center pointer-events-none min-w-full overflow-visible"
style={{
          bottom: `${bottomOffsetPx}px`
        }}
      >
        {/* Topper Line */}
        {topperLetters.length > 0 && (
          <div className="topper-line letter-line relative z-30 flex justify-center flex-nowrap items-end overflow-visible px-8" style={{ marginBottom: `${topperGapPx}px` }}>
            {topperLetters.map((char, index) => (
              <LetterElement
                key={`topper-${index}`}
                character={char}
                isTopper={true}
                letterCount={topperLetters.length}
                index={index}
                letterSize="36"
                currentScale={currentScale}
                scaleOverride={computedTopperScale}
              />
            ))}
          </div>
        )}

        {/* Main Line */}
        <div className="main-line letter-line relative z-20 flex justify-center flex-nowrap items-end overflow-visible px-8">
          {mainLetters.length > 0 ? (
            mainLetters.map((char, index) => (
              <LetterElement
                key={`main-${index}`}
                character={char}
                isTopper={false}
                letterCount={mainLetters.length}
                index={index}
                letterSize="36"
                currentScale={currentScale}
                scaleOverride={computedMainScale}
              />
            ))
          ) : (
            <p className="placeholder-text text-muted-foreground">
              Enter text to see your marquee letters
            </p>
          )}
        </div>
      </div>
    </div>
  );
};