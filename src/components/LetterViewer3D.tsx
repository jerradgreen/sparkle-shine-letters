import { useEffect, useRef, useState, useCallback } from 'react';

// Paths to GLB models served from /public
const BULBS_GLB = '/E_Letter_bulbs1.glb';
const NEON_GLB  = '/E_Letter_neon1.glb';

// Color cycle: red → pink → orange → yellow → green → teal → blue → purple
const COLOR_CYCLE: [number, number, number][] = [
  [1, 0.05, 0.05],   // red
  [1, 0.2,  0.5 ],   // pink
  [1, 0.45, 0.05],   // orange
  [1, 0.9,  0.05],   // yellow
  [0.05, 0.9, 0.1],  // green
  [0.05, 0.8, 0.7],  // teal
  [0.1,  0.3, 1   ], // blue
  [0.6,  0.05, 1  ], // purple
];

type StyleMode = 'classic' | 'color' | 'neon';

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
        'environment-image'?: string;
        exposure?: string;
        style?: React.CSSProperties;
        ref?: React.Ref<HTMLElement>;
        onCameraChange?: (e: Event) => void;
      }, HTMLElement>;
    }
  }
}

export const LetterViewer3D = () => {
  const viewerRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<StyleMode>('classic');
  const [autoRotate, setAutoRotate] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const colorIdxRef = useRef(0);
  const cameraStoppedRef = useRef(false);

  // Determine which GLB to load
  const currentSrc = mode === 'neon' ? NEON_GLB : BULBS_GLB;

  // Apply material overrides after model loads
  const applyMaterial = useCallback(async (targetMode: StyleMode) => {
    const viewer = viewerRef.current as any;
    if (!viewer) return;

    // Wait for model to be ready
    if (!viewer.model) {
      await new Promise<void>(resolve => {
        const onLoad = () => { viewer.removeEventListener('load', onLoad); resolve(); };
        viewer.addEventListener('load', onLoad);
      });
    }

    const model = viewer.model;
    if (!model) return;

    if (targetMode === 'classic') {
      // Warm white emissive on bulb material
      const mat = model.materials.find((m: any) => m.name === 'M_E_Bulb');
      if (mat) {
        mat.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
        mat.setEmissiveFactor([1, 0.75, 0.25]);
      }
    }
    // color and neon cycling is handled by the interval
  }, []);

  // Start color cycling interval
  const startCycle = useCallback((targetMode: StyleMode) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const matName = targetMode === 'neon' ? 'M_E_Neon' : 'M_E_Bulb';

    const tick = () => {
      const viewer = viewerRef.current as any;
      if (!viewer?.model) return;
      const mat = viewer.model.materials.find((m: any) => m.name === matName);
      if (!mat) return;

      const idx = colorIdxRef.current;
      const next = (idx + 1) % COLOR_CYCLE.length;
      const from = COLOR_CYCLE[idx];
      const to   = COLOR_CYCLE[next];

      // Lerp over ~800ms using 16 steps
      let step = 0;
      const steps = 16;
      const lerp = setInterval(() => {
        step++;
        const t = step / steps;
        const r = from[0] + (to[0] - from[0]) * t;
        const g = from[1] + (to[1] - from[1]) * t;
        const b = from[2] + (to[2] - from[2]) * t;
        const v = viewerRef.current as any;
        if (!v?.model) { clearInterval(lerp); return; }
        const m = v.model.materials.find((x: any) => x.name === matName);
        if (m) {
          m.setEmissiveFactor([r, g, b]);
          m.pbrMetallicRoughness.setBaseColorFactor([r, g, b, 1]);
        }
        if (step >= steps) clearInterval(lerp);
      }, 50);

      colorIdxRef.current = next;
    };

    intervalRef.current = setInterval(tick, 1400);
  }, []);

  // Stop cycling
  const stopCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // When mode changes, apply correct material behaviour
  useEffect(() => {
    stopCycle();
    colorIdxRef.current = 0;

    if (mode === 'classic') {
      applyMaterial('classic');
    } else {
      // For color/neon, wait for load then start cycle
      const viewer = viewerRef.current as any;
      if (viewer?.model) {
        startCycle(mode);
      } else {
        const onLoad = () => {
          viewer?.removeEventListener('load', onLoad);
          startCycle(mode);
        };
        viewer?.addEventListener('load', onLoad);
      }
    }

    return () => { stopCycle(); };
  }, [mode, applyMaterial, startCycle, stopCycle]);

  // On initial load for classic mode, apply warm white
  useEffect(() => {
    const viewer = viewerRef.current as any;
    if (!viewer) return;
    const onLoad = () => {
      if (mode === 'classic') applyMaterial('classic');
    };
    viewer.addEventListener('load', onLoad);
    return () => viewer.removeEventListener('load', onLoad);
  }, [applyMaterial, mode]);

  // Stop auto-rotate permanently when user grabs the model
  const handleCameraChange = useCallback((e: Event) => {
    const ce = e as CustomEvent;
    if (ce.detail?.source === 'user-interaction' && !cameraStoppedRef.current) {
      cameraStoppedRef.current = true;
      setAutoRotate(false);
    }
  }, []);

  // Reset camera to front-facing view on every style switch
  const handleModeSwitch = (newMode: StyleMode) => {
    if (newMode === mode) return;
    const viewer = viewerRef.current as any;
    // Reset to front view immediately (or after load for GLB swap)
    const resetCamera = () => {
      try {
        viewer.cameraOrbit = '0deg 75deg 105%';
        viewer.cameraTarget = 'auto auto auto';
      } catch (_) {}
    };
    if (viewer && (mode === 'neon') !== (newMode === 'neon')) {
      // GLB is swapping — reset after the new model loads
      const onLoad = () => {
        viewer.removeEventListener('load', onLoad);
        resetCamera();
      };
      viewer.addEventListener('load', onLoad);
    } else {
      // Same GLB, just material change — reset immediately
      resetCamera();
    }
    setMode(newMode);
  };

  const buttonBase =
    'relative px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 cursor-pointer';
  const activeBtn  = 'bg-[#2a7f8f] border-[#2a7f8f] text-white shadow-md';
  const inactiveBtn = 'bg-white border-[#2a7f8f] text-[#2a7f8f] hover:bg-[#2a7f8f]/10';

  return (
    <section className="py-10 px-4" style={{ backgroundColor: '#f5f0e8' }}>
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-xl md:text-2xl font-bold mb-1"
          style={{ color: '#2a7f8f' }}
        >
          See It In 3D — Explore Every Angle
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Drag to rotate &bull; Pinch to zoom &bull; Switch styles below
        </p>

        {/* model-viewer — dark background so white letters pop */}
        <div
          className="rounded-2xl overflow-hidden mx-auto"
          style={{
            background: 'linear-gradient(160deg, #1e1a16 0%, #2a2420 100%)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.40)',
            maxWidth: 480,
          }}
        >
          {/* @ts-ignore — model-viewer is a custom element loaded via CDN script */}
          <model-viewer
            ref={viewerRef}
            src={currentSrc}
            alt="3D preview of a marquee letter E"
            auto-rotate={autoRotate ? '' : undefined}
            camera-controls=""
            shadow-intensity="0.6"
            exposure="1.3"
            style={{ width: '100%', height: 340 }}
            onCameraChange={handleCameraChange}
          />
        </div>

        {/* Style buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {/* Classic White */}
          <button
            className={`${buttonBase} ${mode === 'classic' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('classic')}
          >
            Classic White
          </button>

          {/* Color-Changing Bulbs */}
          <button
            className={`${buttonBase} ${mode === 'color' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('color')}
          >
            Color-Changing Bulbs
            <span
              className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                background: mode === 'color' ? 'rgba(255,255,255,0.25)' : '#2a7f8f',
                color: '#fff',
              }}
            >
              +$100/letter
            </span>
          </button>

          {/* LED Neon */}
          <button
            className={`${buttonBase} ${mode === 'neon' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('neon')}
          >
            LED Neon
            <span
              className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                background: mode === 'neon' ? 'rgba(255,255,255,0.25)' : '#2a7f8f',
                color: '#fff',
              }}
            >
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

        {/* Phase 2: quote callout for premium styles */}
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
