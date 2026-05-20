import { createElement, useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, Ref } from 'react';

const MODEL_VIEWER_SCRIPT_ID = 'google-model-viewer-script';
const MODEL_VIEWER_SRC = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';

type ModelMaterial = {
  name: string;
  setEmissiveFactor?: (rgb: [number, number, number]) => void;
  pbrMetallicRoughness?: {
    setBaseColorFactor?: (rgba: [number, number, number, number]) => void;
  };
  extensions?: {
    KHR_materials_emissive_strength?: {
      emissiveStrength: number;
    };
  };
};

type ModelViewerElement = HTMLElement & {
  model?: {
    materials: ModelMaterial[];
  };
  resetTurntableRotation?: (value: number) => void;
  cameraOrbit?: string;
  jumpCameraToGoal?: () => void;
};

type ModelViewerProps = {
  ref: Ref<ModelViewerElement>;
  src: string;
  alt: string;
  'shadow-intensity': string;
  exposure: string;
  'tone-mapping': string;
  'environment-image': string;
  'skybox-height': string;
  'camera-orbit': string;
  'auto-rotate'?: string;
  'camera-controls': string;
  style: CSSProperties;
  onCameraChange: (event: Event) => void;
  onLoad: () => void;
};

const loadModelViewer = () => {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.customElements?.get('model-viewer')) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(MODEL_VIEWER_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Unable to load model-viewer')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = MODEL_VIEWER_SCRIPT_ID;
    script.type = 'module';
    script.src = MODEL_VIEWER_SRC;
    script.onload = () => {
      window.customElements.whenDefined('model-viewer').then(() => resolve()).catch(reject);
    };
    script.onerror = () => reject(new Error('Unable to load model-viewer'));
    document.head.appendChild(script);
  });
};

const getMaterial = (viewer: ModelViewerElement | null, materialName: string) => {
  return viewer?.model?.materials.find((material) => material.name === materialName);
};

// Three separate baked/emissive GLB models
const CLASSIC_GLB = '/E_Letter_bulbs_bake_light_5.glb';
const BULBS_GLB = '/E_Letter_bulbs_7.glb';
const NEON_GLB = '/E_Letter_neon_colorchange.glb';

// Color cycle: red → pink → orange → yellow → green → teal → blue → purple
const COLOR_CYCLE: [number, number, number][] = [
  [1, 0, 0],
  [1, 0, 0.6],
  [1, 0.4, 0],
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 0.8],
  [0, 0.2, 1],
  [0.7, 0, 1],
];

const EMISSIVE_STRENGTH = 40;
const BODY_EMISSIVE: [number, number, number] = [0.08, 0.08, 0.08]; // 8% white tint for color bounce

type StyleMode = 'classic' | 'color' | 'neon';

export const LetterViewer3D = () => {
  const viewerRef = useRef<ModelViewerElement>(null);
  const cycleRafRef = useRef<number | null>(null);
  const [mode, setMode] = useState<StyleMode>('classic');
  const [autoRotate, setAutoRotate] = useState(true);
  const colorIdxRef = useRef(0);
  const lerpTRef = useRef(0);
  const modeRef = useRef<StyleMode>('classic');
  const [cameraOrbit, setCameraOrbit] = useState('0deg 75deg 105%');
  const [isViewerReady, setIsViewerReady] = useState(false);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    let isMounted = true;
    loadModelViewer()
      .then(() => {
        if (isMounted) setIsViewerReady(true);
      })
      .catch(() => {
        if (isMounted) setIsViewerReady(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Each mode loads its own dedicated GLB
  const currentSrc = mode === 'classic' ? CLASSIC_GLB : mode === 'neon' ? NEON_GLB : BULBS_GLB;

  // ── Material helpers ──────────────────────────────────────────────────────
  const setEmissive = useCallback((matName: string, rgb: [number, number, number], strength: number) => {
    const mat = getMaterial(viewerRef.current, matName);
    if (!mat) return;

    mat.setEmissiveFactor?.([rgb[0], rgb[1], rgb[2]]);
    mat.pbrMetallicRoughness?.setBaseColorFactor?.([rgb[0], rgb[1], rgb[2], 1]);

    if (mat.extensions?.KHR_materials_emissive_strength !== undefined) {
      mat.extensions.KHR_materials_emissive_strength.emissiveStrength = strength;
    }
  }, []);

  // Apply 5% white emissive tint to letter body for color bounce
  const applyBodyTint = useCallback((bodyMatName: string) => {
    const mat = getMaterial(viewerRef.current, bodyMatName);
    mat?.setEmissiveFactor?.(BODY_EMISSIVE);
  }, []);

  // ── Color cycling ─────────────────────────────────────────────────────────
  const stopCycle = useCallback(() => {
    if (cycleRafRef.current) {
      cancelAnimationFrame(cycleRafRef.current);
      cycleRafRef.current = null;
    }
  }, []);

  const startCycle = useCallback((targetMode: StyleMode) => {
    stopCycle();
    colorIdxRef.current = 0;
    lerpTRef.current = 0;
    const bulbMat = targetMode === 'neon' ? 'M_E_Neon' : 'M_E_Bulb';
    const bodyMat = targetMode === 'neon' ? 'M_E_letter_Neon' : 'M_E_letter';
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
      const t = lerpTRef.current;
      const from = COLOR_CYCLE[colorIdxRef.current];
      const to = COLOR_CYCLE[(colorIdxRef.current + 1) % COLOR_CYCLE.length];
      const rgb: [number, number, number] = [
        from[0] + (to[0] - from[0]) * t,
        from[1] + (to[1] - from[1]) * t,
        from[2] + (to[2] - from[2]) * t,
      ];
      setEmissive(bulbMat, rgb, EMISSIVE_STRENGTH);

      // Subtle body tint follows the color for a bounce-light feel
      const bodyRgb: [number, number, number] = [rgb[0] * 0.05, rgb[1] * 0.05, rgb[2] * 0.05];
      const mat = getMaterial(viewerRef.current, bodyMat);
      mat?.setEmissiveFactor?.(bodyRgb);

      cycleRafRef.current = requestAnimationFrame(tick);
    };

    cycleRafRef.current = requestAnimationFrame(tick);
  }, [stopCycle, setEmissive]);

  // ── Mode effect ───────────────────────────────────────────────────────────
  const waitForLoad = useCallback((cb: () => void) => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const run = () => {
      // Defer one frame so model-viewer finishes swapping materials
      requestAnimationFrame(() => cb());
    };
    const onLoad = () => {
      viewer.removeEventListener('load', onLoad);
      run();
    };
    viewer.addEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    stopCycle();
    colorIdxRef.current = 0;
    lerpTRef.current = 0;

    if (!isViewerReady) return undefined;

    if (mode === 'classic') {
      // Classic White: baked GLB but boost bulb warmth slightly via JS
      waitForLoad(() => {
        const mat = getMaterial(viewerRef.current, 'M_E_Bulb');
        if (mat) {
          // Classic tungsten: brighter, warmer bulb face with stronger glow
          mat.setEmissiveFactor?.([1, 0.58, 0.2]);
          mat.pbrMetallicRoughness?.setBaseColorFactor?.([1, 0.72, 0.32, 1]);
          if (mat.extensions?.KHR_materials_emissive_strength !== undefined) {
            mat.extensions.KHR_materials_emissive_strength.emissiveStrength = 320;
          }
        }
        applyBodyTint('M_E_letter');
      });
    } else {
      waitForLoad(() => startCycle(mode));
    }

    return () => {
      stopCycle();
    };
  }, [mode, applyBodyTint, startCycle, stopCycle, waitForLoad, isViewerReady]);

  // ── Camera ────────────────────────────────────────────────────────────────
  const handleCameraChange = useCallback((e: Event) => {
    const ce = e as CustomEvent;
    if (ce.detail?.source === 'user-interaction') {
      setAutoRotate(false);
    }
  }, []);

  const resetCameraToFront = () => {
    const frontOrbit = '0deg 75deg 105%';
    setCameraOrbit(frontOrbit);
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.resetTurntableRotation?.(0);
    viewer.setAttribute('camera-orbit', frontOrbit);
    viewer.cameraOrbit = frontOrbit;
    viewer.jumpCameraToGoal?.();
  };

  const handleModeSwitch = (newMode: StyleMode) => {
    if (newMode === mode) return;
    setAutoRotate(true);
    resetCameraToFront();
    setMode(newMode);
  };

  const handleModelLoad = () => {
    resetCameraToFront();
  };

  // ── Styles ────────────────────────────────────────────────────────────────
  const buttonBase = 'relative px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 cursor-pointer';
  const activeBtn = 'bg-[#2a7f8f] border-[#2a7f8f] text-white shadow-md';
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

        {/* Model viewer */}
        <div
          className="rounded-2xl overflow-hidden mx-auto"
          style={{
            background: 'linear-gradient(160deg, #c8bfaa 0%, #b8ae98 100%)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            maxWidth: 480,
            height: 340,
          }}
        >
          {isViewerReady ? (
            createElement('model-viewer', {
              ref: viewerRef,
              src: currentSrc,
              alt: '3D preview of a marquee letter E',
              'shadow-intensity': '0.35',
              exposure: mode === 'classic' ? '0.95' : '1.35',
              'tone-mapping': 'aces',
              'environment-image': 'legacy',
              'skybox-height': '0m',
              'camera-orbit': cameraOrbit,
              'auto-rotate': autoRotate ? '' : undefined,
              'camera-controls': '',
              style: { width: '100%', height: '100%', display: 'block', background: 'transparent' },
              onCameraChange: handleCameraChange,
              onLoad: handleModelLoad,
            } satisfies ModelViewerProps)
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-medium text-[#2a7f8f]">
              Loading 3D preview...
            </div>
          )}
        </div>

        {/* Style buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            className={`${buttonBase} ${mode === 'classic' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('classic')}
          >
            Classic - Standard Bulbs
          </button>
          <button
            className={`${buttonBase} ${mode === 'color' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('color')}
          >
            Color-Changing Bulbs
            <span
              className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: mode === 'color' ? 'rgba(255,255,255,0.25)' : '#2a7f8f', color: '#fff' }}
            >
              Upgrade
            </span>
          </button>
          <button
            className={`${buttonBase} ${mode === 'neon' ? activeBtn : inactiveBtn}`}
            onClick={() => handleModeSwitch('neon')}
          >
            LED Neon
            <span
              className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: mode === 'neon' ? 'rgba(255,255,255,0.25)' : '#2a7f8f', color: '#fff' }}
            >
              Upgrade
            </span>
          </button>
        </div>

        {/* Contextual label */}
        <p className="text-xs text-gray-400 mt-3 italic">
          {mode === 'classic' && 'Standard warm white incandescent bulbs — the classic marquee look.'}
          {mode === 'color' && 'LED color-changing bulbs cycle through the full spectrum automatically.'}
          {mode === 'neon' && 'LED neon rope replaces the bulbs — bright, modern, and sleek.'}
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
