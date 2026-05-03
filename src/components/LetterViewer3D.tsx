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
        style?: React.CSSProperties;
        ref?: React.Ref<HTMLElement>;
        onCameraChange?: (e: Event) => void;
      }, HTMLElement>;
    }
  }
}

export const LetterViewer3D = () => {
  const viewerRef        = useRef<HTMLElement>(null);
  const bloomCanvasRef   = useRef<HTMLCanvasElement>(null);
  const offscreenRef     = useRef<HTMLCanvasElement | null>(null);
  const bloomRafRef      = useRef<number | null>(null);
  const cycleRafRef      = useRef<number | null>(null);
  const [mode, setMode]  = useState<StyleMode>('classic');
  const [autoRotate, setAutoRotate] = useState(true);
  const colorIdxRef      = useRef(0);
  const lerpTRef         = useRef(0);
  const cameraStoppedRef = useRef(false);
  const modeRef          = useRef<StyleMode>('classic');

  useEffect(() => { modeRef.current = mode; }, [mode]);

  const currentSrc = mode === 'neon' ? NEON_GLB : BULBS_GLB;

  // ── Bloom loop: reads model-viewer's WebGL canvas, blurs it, composites on top ──
  const startBloomLoop = useCallback(() => {
    if (bloomRafRef.current) cancelAnimationFrame(bloomRafRef.current);

    const loop = () => {
      const viewer = viewerRef.current as any;
      const bloomCanvas = bloomCanvasRef.current;
      if (!viewer || !bloomCanvas) {
        bloomRafRef.current = requestAnimationFrame(loop);
        return;
      }

      // Find the WebGL canvas inside model-viewer's shadow DOM
      const mvCanvas: HTMLCanvasElement | null =
        viewer.shadowRoot?.querySelector('canvas') ??
        viewer.querySelector('canvas');

      if (!mvCanvas || mvCanvas.width === 0) {
        bloomRafRef.current = requestAnimationFrame(loop);
        return;
      }

      const w = mvCanvas.width;
      const h = mvCanvas.height;

      // Sync bloom canvas size to match
      if (bloomCanvas.width !== w || bloomCanvas.height !== h) {
        bloomCanvas.width  = w;
        bloomCanvas.height = h;
      }

      // Use an offscreen canvas to draw the source frame, then composite
      if (!offscreenRef.current) offscreenRef.current = document.createElement('canvas');
      const off = offscreenRef.current;
      if (off.width !== w || off.height !== h) { off.width = w; off.height = h; }

      const offCtx = off.getContext('2d');
      if (!offCtx) { bloomRafRef.current = requestAnimationFrame(loop); return; }

      try {
        offCtx.clearRect(0, 0, w, h);
        offCtx.drawImage(mvCanvas, 0, 0);
      } catch (_) {
        // Cross-origin or tainted canvas — skip this frame
        bloomRafRef.current = requestAnimationFrame(loop);
        return;
      }

      // Draw the blurred copy onto the bloom canvas with screen blend
      const ctx = bloomCanvas.getContext('2d');
      if (!ctx) { bloomRafRef.current = requestAnimationFrame(loop); return; }
      ctx.clearRect(0, 0, w, h);

      // Draw multiple passes with increasing blur for a soft bloom spread
      const passes = [
        { blur: 8,  alpha: 0.55 },
        { blur: 18, alpha: 0.40 },
        { blur: 32, alpha: 0.25 },
      ];

      passes.forEach(({ blur, alpha }) => {
        ctx.save();
        ctx.filter = `blur(${blur}px)`;
        ctx.globalAlpha = alpha;
        ctx.drawImage(off, 0, 0);
        ctx.restore();
      });

      bloomRafRef.current = requestAnimationFrame(loop);
    };

    bloomRafRef.current = requestAnimationFrame(loop);
  }, []);

  const stopBloomLoop = useCallback(() => {
    if (bloomRafRef.current) { cancelAnimationFrame(bloomRafRef.current); bloomRafRef.current = null; }
  }, []);

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
    mat.setEmissiveFactor([1, 0.75, 0.25]);
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
  useEffect(() => {
    stopCycle();
    colorIdxRef.current = 0;
    lerpTRef.current    = 0;
    const viewer = viewerRef.current as any;

    const run = () => {
      if (mode === 'classic') applyClassic();
      else startCycle(mode);
    };

    if (viewer?.model) run();
    else {
      const onLoad = () => { viewer?.removeEventListener('load', onLoad); run(); };
      viewer?.addEventListener('load', onLoad);
    }

    return () => { stopCycle(); };
  }, [mode, applyClassic, startCycle, stopCycle]);

  // Initial load
  useEffect(() => {
    const viewer = viewerRef.current as any;
    if (!viewer) return;
    const onLoad = () => { if (modeRef.current === 'classic') applyClassic(); };
    viewer.addEventListener('load', onLoad);
    return () => viewer.removeEventListener('load', onLoad);
  }, [applyClassic]);

  // Start/stop bloom loop with component
  useEffect(() => {
    startBloomLoop();
    return () => stopBloomLoop();
  }, [startBloomLoop, stopBloomLoop]);

  // ── Camera ────────────────────────────────────────────────────────────────
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

  // ── Render ────────────────────────────────────────────────────────────────
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

        {/* Wrapper: position relative so bloom canvas overlays model-viewer */}
        <div
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
            shadow-intensity="0.28"
            exposure="1.25"
            tone-mapping="commerce"
            environment-image="neutral"
            skybox-height="0m"
            style={{ width: '100%', height: 340, display: 'block' }}
            onCameraChange={handleCameraChange}
          />
          {/* Bloom overlay — reads actual rendered pixels from model-viewer's WebGL canvas */}
          <canvas
            ref={bloomCanvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              mixBlendMode: 'screen',
              opacity: 0.75,
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
