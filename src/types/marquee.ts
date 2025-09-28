export interface MarqueeSettings {
  // Kerning controls
  mainKerning: number;
  topperKerning: number;
  
  // Scaling controls
  topperSizeRatio: number;
  overlapFactor: number;
  perCharacterShrink: number;
  minMainScale: number;
  minTopperScale: number;
  
  // Position controls (desktop, mobile portrait, mobile landscape)
  verticalOffset: {
    desktop: number;
    mobilePortrait: number;
    mobileLandscape: number;
  };
}

export const DEFAULT_MARQUEE_SETTINGS: MarqueeSettings = {
  mainKerning: 8,
  topperKerning: 6,
  topperSizeRatio: 0.82,
  overlapFactor: 0.22,
  perCharacterShrink: 0.020,
  minMainScale: 0.35,
  minTopperScale: 0.30,
  verticalOffset: {
    desktop: 360,
    mobilePortrait: 620,
    mobileLandscape: 300
  }
};