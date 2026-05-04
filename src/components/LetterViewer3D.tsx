import { useEffect, useRef, useState, useCallback } from 'react';

const BULBS_GLB = '/E_Letter_bulbs1.glb';
const NEON_GLB  = '/E_Letter_neon1.glb';

const COLOR_CYCLE: [number, number, number][] = [
  [1,   0,   0  ],
  [1,   0,   0.6],
  [1,   0.4, 0  ],
  [1,   1,   0  ],
  [0,   1,   0  ],
  [0,   1,   0.8],
  [0,   0.2, 1  ],
  [0.7, 0,   1  ],
];

const EMISSIVE_STRENGTH = 8;

type StyleMode = 'classic' | 'color' | 'neon';

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
        'tone-mapping'?: string;
        'environment-image'?: string;
        'skybox-height'?: string;
        'camera-orbit'?: string;
        style?: React.CSSProperties;
        ref?: React.Ref<HTMLElement>;
        onCameraChange?: (e: Event) => void;
      }, HTMLElement>;
    }
  }
}

export const LetterViewer3D = () => {
  const viewerRef   = useRef<HTMLElement>(null);
  const cycleRafRef = useRef<number | null>(null);
  const [mode, setMode]       = useState<StyleMode>('classic');
  const [autoRotate, setAutoRotate] = useState(true);
  const colorIdxRef = useRef(0);
  const lerpTRef    = useRef(0);
  const modeRef     = useRef<StyleMode>('classic');
  const [cameraOrbit, setCameraOrbit] = useState('0deg 75deg 105%');

  useEffect(() => { modeRef.current = mode; }, [mode]);

  const currentSrc = mode === 'neon' ? NEON_GLB : BULBS_GLB;

  // ── Material helpers ──────────────────────────────────────────────────────
  const setEmissive = useCallback((matName: string, rgb: [number, number, number], strength: number) => {
    const viewer = viewerRef.current as any;
    if (!viewer?.model) return;
    const mat = viewer.model.materials.find((m: any) => m.name === matName);
    if (!mat) return;
    mat.setEmissiveFactor([rgb[0], rgb[1], rgb[2]]);
    mat.pbrMetallicRoughness.setBaseColorFactor([rgb[0], rgb[1], rgb[2], 1]);
    try {
      if (mat.extensions?.KHR_materials_emissive_strength !== undefined) {
        mat.extensions.KHR_materials_emissive_strength.emissiveStrength = strength;
      }
    } catch (_) {}
  }, []);

  const applyClassic = useCallback(() => {
    const viewer = viewerRef.current as any;
    if (!viewer?.model) return;
    const mat = viewer.model.materials.find((m: any) => m.name === 'M_E_Bulb');
    if (!mat) return;
    mat.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
    mat.setEmissiveFactor([1, 0.92, 0.72]);
    try {
      if (mat.extensions?.KHR_materials_emissive_strength !== undefined) {
        mat.extensions.KHR_materials_emissive_strength.emissiveStrength = 5;
      }
    } catch (_) {}
  }, []);

  // ── Color cycling ─────────────────────────────────────────────────────────
  const stopCycle = useCallback(() => {
    if (cycleRafRef.current) { cancelAnimationFrame(cycleRafRef.current); cycleRafRef.current = null; }
  }, []);

  const startCycle = useCallback((targetMode: StyleMode) => {
    stopCycle();
    colorIdxRef.current = 0;
    lerpTRef.current    = 0;
    const matName = targetMode === 'neon' ? 'M_E_Neon' : 'M_E_Bulb';
    const STEP_MS = 900;
    let last = performance.now();

    const tick = (now: number) => {
      if (modeRef.current !== targetMode) return;
      const dt = now - last;
      last = now;
      lerpTRef.current += dt / STEP_MS;
      if (lerpTRef.current >= 1) {
        lerpTRef.current -= 1;
        colorIdxRef.current = (colorIdxRef.current + 1) % COLOR_CYCLE.length;
      }
      const t    = lerpTRef.current;
      const from = COLOR_CYCLE[colorIdxRef.current];
      const to   = COLOR_CYCLE[(colorIdxRef.current + 1) % COLOR_CYCLE.length];
      const rgb: [number, number, number] = [
        from[0] + (to[0] - from[0]) * t,
        from[1] + (to[1] - from[1]) * t,
        from[2] + (to[2] - from[2]) * t,
      ];
      setEmissive(matName, rgb, EMISSIVE_STRENGTH);
      cycleRafRef.current = requestAnimationFrame(tick);
    };

    cycleRafRef.current = requestAnimationFrame(tick);
  }, [stopCycle, setEmissive]);

  // ── Mode effect ───────────────────────────────────────────────────────────
  const waitForLoad = useCallback((cb: () => void) => {
    const v = viewerRef.current as any;
    if (!v) return;
    if (v.model) { cb(); return; }
    const onLoad = () => { v.removeEventListener('load', onLoad); cb(); };
    v.addEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    stopCycle();
    colorIdxRef.current = 0;
    lerpTRef.current    = 0;

    if (mode === 'classic') {
      waitForLoad(applyClassic);
    } else {
      waitForLoad(() => startCycle(mode));
    }

    return () => { stopCycle(); };
  }, [mode, applyClassic, startCycle, stopCycle, waitForLoad]);

  // Initial load
  useEffect(() => {
    waitForLoad(() => { if (modeRef.current === 'classic') applyClassic(); });
  }, [applyClassic, waitForLoad]);

  // ── Camera ────────────────────────────────────────────────────────────────
  const handleCameraChange = useCallback((e: Event) => {
    const ce = e as CustomEvent;
    if (ce.detail?.source === 'user-interaction') {
      setAutoRotate(false);
    }
  }, []);

  const handleModeSwitch = (newMode: StyleMode) => {
    if (newMode === mode) return;
    const frontOrbit = '0deg 75deg 105%';
    setCameraOrbit(frontOrbit);
    const viewer = viewerRef.current as any;
    if (viewer) {
      try {
        if (typeof viewer.resetTurntableRotation === 'function') viewer.resetTurntableRotation(0);
        viewer.setAttribute('camera-orbit', frontOrbit);
        viewer.cameraOrbit = frontOrbit;
      } catch (_) {}
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

        {/* Single clean model-viewer — no bloom overlay */}
        <div
          className="rounded-2xl overflow-hidden mx-auto"
          style={{
            background: 'linear-gradient(160deg, #c8bfaa 0%, #b8ae98 100%)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            maxWidth: 480,
            height: 340,
          }}
        >
          {/* @ts-ignore */}
          <model-viewer
            ref={viewerRef}
            src={currentSrc}
            alt="3D preview of a marquee letter E"
            shadow-intensity="0.28"
            exposure="1.25"
            tone-mapping="commerce"
            environment-image="neutral"
            skybox-height="0m"
            camera-orbit={cameraOrbit}
            auto-rotate={autoRotate ? '' : undefined}
            camera-controls=""
            style={{ width: '100%', height: '100%', display: 'block', background: 'transparent' }}
            onCameraChange={handleCameraChange}
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
