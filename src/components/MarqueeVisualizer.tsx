import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Letter images imports
import ACutout from '@/assets/A_cutout.png';
import BCutout from '@/assets/B_cutout.png';
import CCutout from '@/assets/C_cutout.png';
import DCutout from '@/assets/D_cutout.png';
import ECutout from '@/assets/E_cutout.png';
import FCutout from '@/assets/F_cutout.png';
import GCutout from '@/assets/G_cutout.png';
import HCutout from '@/assets/H_cutout.png';
import ICutout from '@/assets/I_cutout.png';
import JCutout from '@/assets/J_cutout.png';
import KCutout from '@/assets/K_cutout.png';
import LCutout from '@/assets/L_cutout.png';
import MCutout from '@/assets/M_cutout.png';
import NCutout from '@/assets/N_cutout.png';
import OCutout from '@/assets/O_cutout.png';
import PCutout from '@/assets/P_cutout.png';
import QCutout from '@/assets/Q_cutout.png';
import RCutout from '@/assets/R_cutout.png';
import SCutout from '@/assets/S_cutout.png';
import TCutout from '@/assets/T_cutout.png';
import UCutout from '@/assets/U_cutout.png';
import VCutout from '@/assets/V_cutout.png';
import WCutout from '@/assets/W_cutout.png';
import XCutout from '@/assets/X_cutout.png';
import YCutout from '@/assets/Y_cutout.png';
import ZCutout from '@/assets/Z_cutout.png';
import Number0 from '@/assets/0_lights_on.png';
import Number1 from '@/assets/1_lights_on.png';
import Number2 from '@/assets/2_lights_on.png';
import Number3 from '@/assets/3_lights_on.png';
import Number4 from '@/assets/4_lights_on.png';
import Number5 from '@/assets/5_lights_on.png';
import Number6 from '@/assets/6_lights_on.png';
import Number7 from '@/assets/7_lights_on.png';
import Number8 from '@/assets/8_lights_on.png';
import Number9 from '@/assets/9_lights_on.png';
import AmpersandLights from '@/assets/ampersand_lights_on.png';
import BackgroundImage from '@/assets/black_wall_background_image_4.png';

// Letter images map
const letterImages: Record<string, string> = {
  'A': ACutout, 'B': BCutout, 'C': CCutout, 'D': DCutout,
  'E': ECutout, 'F': FCutout, 'G': GCutout, 'H': HCutout,
  'I': ICutout, 'J': JCutout, 'K': KCutout, 'L': LCutout,
  'M': MCutout, 'N': NCutout, 'O': OCutout, 'P': PCutout,
  'Q': QCutout, 'R': RCutout, 'S': SCutout, 'T': TCutout,
  'U': UCutout, 'V': VCutout, 'W': WCutout, 'X': XCutout,
  'Y': YCutout, 'Z': ZCutout, '&': AmpersandLights,
  '0': Number0, '1': Number1, '2': Number2, '3': Number3,
  '4': Number4, '5': Number5, '6': Number6, '7': Number7,
  '8': Number8, '9': Number9
};

interface LetterElementProps {
  character: string;
  isTopper: boolean;
  letterCount: number;
  index: number;
  letterSize: string;
  currentScale: number;
}

const LetterElement = ({ character, isTopper, letterCount, index, letterSize, currentScale }: LetterElementProps) => {
  const [loaded, setLoaded] = useState(false);
  
  if (character === ' ') {
    const scale = getScale(isTopper, letterCount, letterSize, currentScale);
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

  const scale = getScale(isTopper, letterCount, letterSize, currentScale);
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

const getScale = (isTopper: boolean, letterCount: number, letterSize: string, currentScale: number) => {
  const isMobile = window.innerWidth <= 767;
  const baseScales = { '15': 0.45, '36': 0.9, '48': 0.9 };
  const baseScalesMobile = { '15': 0.22, '36': 0.38, '48': 0.38 };

  let mainScale = isMobile ? baseScalesMobile[letterSize as keyof typeof baseScalesMobile] : baseScales[letterSize as keyof typeof baseScales];

  if (!isTopper) {
    const threshold = 10;
    if (letterCount > threshold) {
      const ratio = threshold / letterCount;
      mainScale *= Math.pow(ratio, 0.4);
    }
    const floor = isMobile ? 0.32 : 0.5;
    return Math.max(mainScale, floor);
  } else {
    let topperScale = currentScale * (letterSize === '48' ? 0.35 : 0.43);
    return Math.max(topperScale, isMobile ? 0.18 : 0.2);
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
  
  const previewRef = useRef<HTMLDivElement>(null);
  const letterDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
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
    const entry: Record<string, string> = {};
    
    if (topperOption !== 'NONE') {
      entry.Topper = topperOption === 'CUSTOM' ? customTopper : topperOption;
    }
    entry.MainTextSize = letterSize === '48' ? '48"' : '36"';
    entry.MainTextLettersNumbersSymbols = mainText.toUpperCase();
    
    window.open(`${base}?entry=${encodeURIComponent(JSON.stringify(entry))}`, '_blank');
  };

  const mainLetters = filterValidText(mainText);
  const topperLetters = getTopperText();

  return (
    <div className="marquee-visualizer relative overflow-visible bg-background text-foreground">
      {/* Background */}
      <div 
        className="marquee-background absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: 'center 50%'
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
      <div className="content-container relative z-10 w-full max-w-7xl mx-auto p-8">
        <div className="md:flex md:justify-center md:scale-85 md:origin-top">
          <Card className="marquee-card bg-card/90 backdrop-blur-sm border-border/50 shadow-lg mb-8 relative z-10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2 uppercase">
                STAND-UP MARQUEE VISUALIZER-TYPE IT OUT!
              </CardTitle>
              <CardDescription>
                Commercial, self-standing, powder coated steel marquee letters for any event or celebration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="letterSize">Choose Letter Size</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="topperOption">Select A Topper (if needed)</Label>
                  <Select value={topperOption} onValueChange={setTopperOption}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
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
                  <div className="space-y-2">
                    <Label htmlFor="customTopper">Custom Topper Text</Label>
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

              <div className="mt-4 space-y-2">
                <Label htmlFor="mainText">Type Your Main Text Here</Label>
                <div className="flex gap-4 items-stretch max-md:flex-col">
                  <Input
                    id="mainText"
                    value={mainText}
                    onChange={(e) => setMainText(e.target.value)}
                    placeholder="Type Your Main Text Here"
                    className="text-lg flex-1"
                  />
                  <Button 
                    onClick={openQuoteForm}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 whitespace-nowrap"
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
        className={`preview-container relative z-30 w-full box-border transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          height: '45vh',
          maxHeight: '480px',
          minHeight: '300px',
          overflow: 'visible'
        }}
      >
        {/* Mobile quote button */}
        <div className="mobile-quote-wrapper hidden max-md:block absolute bottom-48 left-0 right-0 text-center z-40">
          <Button 
            onClick={openQuoteForm}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
          >
            Get Quote in Under 5 min
          </Button>
        </div>
      </div>

      {/* Letter Display */}
      <div 
        ref={letterDisplayRef}
        className="letter-positioning absolute top-[480px] left-1/2 transform -translate-x-1/2 z-[9999] flex flex-col items-center justify-end pointer-events-none min-w-full overflow-visible"
      >
        {/* Topper Line */}
        {topperLetters.length > 0 && (
          <div className="topper-line letter-line flex justify-center flex-nowrap items-end overflow-visible px-8">
            {topperLetters.map((char, index) => (
              <LetterElement
                key={`topper-${index}`}
                character={char}
                isTopper={true}
                letterCount={mainLetters.length}
                index={index}
                letterSize={letterSize}
                currentScale={currentScale}
              />
            ))}
          </div>
        )}

        {/* Main Line */}
        <div className="main-line letter-line flex justify-center flex-nowrap items-end overflow-visible px-8">
          {mainLetters.length > 0 ? (
            mainLetters.map((char, index) => (
              <LetterElement
                key={`main-${index}`}
                character={char}
                isTopper={false}
                letterCount={mainLetters.length}
                index={index}
                letterSize={letterSize}
                currentScale={currentScale}
              />
            ))
          ) : (
            <p className="placeholder-text text-muted-foreground">
              Enter text to see your marquee letters
            </p>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section text-center mt-12 px-4">
        <h3 className="text-3xl font-semibold tracking-wide mb-3" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          Commercial Quality Marquee Letters, Numbers and Symbols
        </h3>
        <p className="text-muted-foreground text-lg font-light mb-8">
          Available in 36" and 48" sizes with 15" toppers • Perfect for any celebration
        </p>
        <Button 
          onClick={openQuoteForm}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
        >
          Get Quote in Under 5 min
        </Button>
      </div>
    </div>
  );
};