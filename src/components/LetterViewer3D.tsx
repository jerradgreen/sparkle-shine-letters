import { useEffect, useRef, useState, useCallback } from 'react';

// Paths to GLB models served from /public
const BULBS_GLB = '/E_Letter_bulbs1.glb';
const NEON_GLB  = '/E_Letter_neon1.glb';

// Fully saturated colors — max values so model-viewer renders them at full intensity
// [r, g, b] in linear 0-1 range passed to setEmissiveFactor / setBaseColorFactor
const COLOR_CYCLE: [number, number, number][] = [
  [1,   0,   0  ],  // red
  [1,   0,   0.6],  // hot pink
  [1,   0.4, 0  ],  // orange
  [1,   1,   0  ],  // yellow
  [0,   1,   0  ],  // green
  [0,   1,   0.8],  // teal
  [0,   0.2, 1  ],  // blue
  [0.7, 0,   1  ],  // purple
];

// Emissive strength multiplier — model-viewer 3.x supports KHR_materials_emissive_strength
// Values > 1 push beyond SDR and create a genuine glow/bloom in the renderer
const EMISSIVE_STRENGTH = 6;

type StyleMode = 'classic' | 'color' | 'neon';

// CSS bloom color strings matching COLOR_CYCLE for the overlay glow effect
const BLOOM_COLORS = [
  'rgba(255,0,0,',
  'rgba(255,0,153,',
  'rgba(255,102,0,',
  'rgba(255,255,0,',
  'rgba(0,255,0,',
  'rgba(0,255,204,',
  'rgba(0,51,255,',
  'rgba(178,0,255,',
];

// TypeScript declaration for the model-viewer custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        'shadow-intensity'?: string;
        exposure?: string;
        style?: React.CSSProperties;
        ref?: React.Ref<HTMLElement>;
        onCameraChange?: (e: Event) => void;
      }, HTMLElement>;
    }
  }
}

export const LetterViewer3D = () => {
  const viewerRef    = useRef<HTMLElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const [mode, setMode]           = useState<StyleMode>('classic');
  const [autoRotate, setAutoRotate] = useState(true);
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef       = useRef<number | null>(null);
  const colorIdxRef  = useRef(0);
  const lerpTRef     = useRef(0);
  const cameraStoppedRef = useRef(false);
  const currentColorRef  = useRef<[number, number, number]>([1, 0.75, 0.25]);
  const modeRef      = useRef<StyleMode>('classic');

  // Keep modeRef in sync
  useEffect(() => { modeRef.current = mode; }, [mode]);

  // Determine which GLB to load
  const currentSrc = mode === 'neon' ? NEON_GLB : BULBS_GLB;

  // ── Bloom overlay canvas ──────────────────────────────────────────────────
  // We draw radial glow spots at fixed positions that approximate bulb locations
  // on the letter E. These are normalised [0-1] coords within the viewer box.
  // Adjust these if the model position shifts.
  const BULB_POSITIONS = [
    // Top bar
    [0.28,0.12],[0.36,0.12],[0.44,0.12],[0.52,0.12],[0.60,0.12],[0.68,0.12],
    // Upper-mid bar
    [0.28,0.38],[0.36,0.38],[0.44,0.38],[0.52,0.38],
    // Middle bar
    [0.28,0.50],[0.36,0.50],[0.44,0.50],[0.52,0.50],[0.60,0.50],
    // Lower-mid bar
    [0.28,0.62],[0.36,0.62],[0.44,0.62],[0.52,0.62],
    // Bottom bar
    [0.28,0.88],[0.36,0.88],[0.44,0.88],[0.52,0.88],[0.60,0.88],[0.68,0.88],
    // Left spine
    [0.28,0.25],[0.28,0.50],[0.28,0.75],
  ];

  const drawBloom = useCallback((colorStr: string, alpha: number) => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const w = wrapper.clientWidth;
    const h = wrapper.clientHeight;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width  = w;
      canvas.height = h;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);

    const radius = Math.min(w, h) * 0.07;
    BULB_POSITIONS.forEach(([nx, ny]) => {
      const x = nx * w;
      const y = ny * h;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      grad.addColorStop(0,   colorStr + (alpha * 0.85) + ')');
      grad.addColorStop(0.4, colorStr + (alpha * 0.35) + ')');
      grad.addColorStop(1,   colorStr + '0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }, []);

  const clearBloom = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  // ── Material helpers ──────────────────────────────────────────────────────
  const setMaterial = useCallback((
    matName: string,
    rgb: [number, number, number],
    strength: number
  ) => {
    const viewer = viewerRef.current as any;
    if (!viewer?.model) return;
    const mat = viewer.model.materials.find((m: any) => m.name === matName);
    if (!mat) return;
    mat.setEmissiveFactor(rgb);
    mat.pbrMetallicRoughness.setBaseColorFactor([...rgb, 1]);
    // KHR_materials_emissive_strength — supported in model-viewer 3.x
    try {
      if (mat.extensions?.KHR_materials_emissive_strength) {
        mat.extensions.KHR_materials_emissive_strength.emissiveStrength = strength;
      }
    } catch (_) {}
  }, []);

  const applyClassic = useCallback(() => {
    const viewer = viewerRef.current as any;
    if (!viewer?.model) return;
    const mat = viewer.model.materials.find((m: any) => m.name === 'M_E_Bulb');
    if (mat) {
      mat.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
      mat.setEmissiveFactor([1, 0.75, 0.25]);
      try {
        if (mat.extensions?.KHR_materials_emissive_strength) {
          mat.extensions.KHR_materials_emissive_strength.emissiveStrength = 4;
        }
      } catch (_) {}
    }
    currentColorRef.current = [1, 0.75, 0.25];
    // Warm white bloom
    drawBloom('rgba(255,200,100,', 0.18);
  }, [drawBloom]);

  // ── Color cycling ─────────────────────────────────────────────────────────
  const stopCycle = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    if (rafRef.current)       { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
  }, []);

  const startCycle = useCallback((targetMode: StyleMode) => {
    stopCycle();
    colorIdxRef.current = 0;
    lerpTRef.current    = 0;

    const matName = targetMode === 'neon' ? 'M_E_Neon' : 'M_E_Bulb';
    const LERP_DURATION = 900; // ms per color step
    let lastTime = performance.now();

    const tick = (now: number) => {
      if (modeRef.current !== targetMode) return; // mode switched, stop
      const dt = now - lastTime;
      lastTime = now;
      lerpTRef.current += dt / LERP_DURATION;

      if (lerpTRef.current >= 1) {
        lerpTRef.current = 0;
        colorIdxRef.current = (colorIdxRef.current + 1) % COLOR_CYCLE.length;
      }

      const t    = lerpTRef.current;
      const from = COLOR_CYCLE[colorIdxRef.current];
      const to   = COLOR_CYCLE[(colorIdxRef.current + 1) % COLOR_CYCLE.length];
      const r = from[0] + (to[0] - from[0]) * t;
      const g = from[1] + (to[1] - from[1]) * t;
      const b = from[2] + (to[2] - from[2]) * t;
      const rgb: [number, number, number] = [r, g, b];

      currentColorRef.current = rgb;
      setMaterial(matName, rgb, EMISSIVE_STRENGTH);

      // Bloom overlay — lerp between two bloom color strings
      const fromBloom = BLOOM_COLORS[colorIdxRef.current];
      const toBloom   = BLOOM_COLORS[(colorIdxRef.current + 1) % BLOOM_COLORS.length];
      // Use the dominant channel to pick the bloom color (simple: use from until halfway)
      const bloomStr = t < 0.5 ? fromBloom : toBloom;
      drawBloom(bloomStr, 0.28);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [stopCycle, setMaterial, drawBloom]);

  // ── Mode effect ───────────────────────────────────────────────────────────
  useEffect(() => {
    stopCycle();
    colorIdxRef.current = 0;
    lerpTRef.current    = 0;

    const viewer = viewerRef.current as any;

    if (mode === 'classic') {
      clearBloom();
      if (viewer?.model) {
        applyClassic();
      } else {
        const onLoad = () => { viewer?.removeEventListener('load', onLoad); applyClassic(); };
        viewer?.addEventListener('load', onLoad);
      }
    } else {
      if (viewer?.model) {
        startCycle(mode);
      } else {
        const onLoad = () => { viewer?.removeEventListener('load', onLoad); startCycle(mode); };
        viewer?.addEventListener('load', onLoad);
      }
    }

    return () => { stopCycle(); };
  }, [mode, applyClassic, startCycle, stopCycle, clearBloom]);

  // Initial load — apply classic warm white
  useEffect(() => {
    const viewer = viewerRef.current as any;
    if (!viewer) return;
    const onLoad = () => { if (modeRef.current === 'classic') applyClassic(); };
    viewer.addEventListener('load', onLoad);
    return () => viewer.removeEventListener('load', onLoad);
  }, [applyClassic]);

  // ── Camera controls ───────────────────────────────────────────────────────
  const handleCameraChange = useCallback((e: Event) => {
    const ce = e as CustomEvent;
    if (ce.detail?.source === 'user-interaction' && !cameraStoppedRef.current) {
      cameraStoppedRef.current = true;
      setAutoRotate(false);
    }
  }, []);

  const handleModeSwitch = (newMode: StyleMode) => {
    if (newMode === mode) return;
    const viewer = viewerRef.current as any;
    const resetCamera = () => {
      try {
        if (typeof viewer.resetTurntableRotation === 'function') viewer.resetTurntableRotation(0);
        viewer.setAttribute('camera-orbit', '0deg 75deg 105%');
        viewer.setAttribute('camera-target', 'auto auto auto');
        viewer.cameraOrbit = '0deg 75deg 105%';
      } catch (_) {}
    };
    if (viewer && (mode === 'neon') !== (newMode === 'neon')) {
      const onLoad = () => { viewer.removeEventListener('load', onLoad); resetCamera(); };
      viewer.addEventListener('load', onLoad);
    } else {
      resetCamera();
    }
    setMode(newMode);
  };

  // ── Styles ────────────────────────────────────────────────────────────────
  const buttonBase  = 'relative px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 cursor-pointer';
  const activeBtn   = 'bg-[#2a7f8f] border-[#2a7f8f] text-white shadow-md';
  const inactiveBtn = 'bg-white border-[#2a7f8f] text-[#2a7f8f] hover:bg-[#2a7f8f]/10';

  return (
    <section className="py-10 px-4" style={{ backgroundColor: '#f5f0e8' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#2a7f8f' }}>
          See It In 3D — Explore Every Angle
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Drag to rotate &bull; Pinch to zoom &bull; Switch styles below
        </p>

        {/* Viewer wrapper — position:relative so bloom canvas overlays model-viewer */}
        <div
          ref={wrapperRef}
          className="rounded-2xl overflow-hidden mx-auto"
          style={{
            position: 'relative',
            background: 'linear-gradient(160deg, #c8bfaa 0%, #b8ae98 100%)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            maxWidth: 480,
          }}
        >
          {/* @ts-ignore */}
          <model-viewer
            ref={viewerRef}
            src={currentSrc}
            alt="3D preview of a marquee letter E"
            auto-rotate={autoRotate ? '' : undefined}
            camera-controls=""
            shadow-intensity="0.5"
            exposure="1.2"
            style={{ width: '100%', height: 340, display: 'block' }}
            onCameraChange={handleCameraChange}
          />
          {/* Bloom overlay canvas — pointer-events:none so drag-to-rotate still works */}
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              pointerEvents: 'none',
              mixBlendMode: 'screen',
            }}
          />
        </div>

        {/* Style buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            className={`${buttonBase} ${mode === 'classic' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('classic')}
          >
            Classic White
          </button>
          <button
            className={`${buttonBase} ${mode === 'color' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('color')}
          >
            Color-Changing Bulbs
            <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: mode === 'color' ? 'rgba(255,255,255,0.25)' : '#2a7f8f', color: '#fff' }}>
              +$100/letter
            </span>
          </button>
          <button
            className={`${buttonBase} ${mode === 'neon' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('neon')}
          >
            LED Neon
            <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: mode === 'neon' ? 'rgba(255,255,255,0.25)' : '#2a7f8f', color: '#fff' }}>
              +$100/letter
            </span>
          </button>
        </div>

        {/* Contextual label */}
        <p className="text-xs text-gray-400 mt-3 italic">
          {mode === 'classic' && 'Standard warm white incandescent bulbs — the classic marquee look.'}
          {mode === 'color'   && 'LED color-changing bulbs cycle through the full spectrum automatically.'}
          {mode === 'neon'    && 'LED neon rope replaces the bulbs — bright, modern, and sleek.'}
        </p>

        {/* Quote callout for premium styles */}
        {(mode === 'color' || mode === 'neon') && (
          <div
            className="mt-5 mx-auto rounded-xl px-5 py-4 text-sm max-w-sm"
            style={{
              background: 'rgba(42,127,143,0.10)',
              border: '1px solid rgba(42,127,143,0.30)',
              color: '#2a7f8f',
            }}
          >
            <span className="font-semibold">Love this look?</span>{' '}
            Mention{' '}
            <span className="font-semibold">
              {mode === 'color' ? '"Color-Changing Bulbs"' : '"LED Neon"'}
            </span>{' '}
            in your quote request and we&apos;ll price it out for you.
          </div>
        )}
      </div>
    </section>
  );
};
