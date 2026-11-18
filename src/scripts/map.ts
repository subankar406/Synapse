/**
 * Neighbourhood map: zoom (buttons, ctrl/⌘ + wheel, pinch), drag-to-pan,
 * and the clinic pin toggle. Ported 1:1 from the design's map logic.
 *
 * The street layer (`[data-map-inner]`) is sized to W×H of the viewport
 * and offset so that the normalised point (cx, cy) sits at the centre.
 */

const MAX_ZOOM = 8;
const ASPECT_SVG = 0.7601; // 800 / 1052, the street SVG's width/height
const SVG_WIDTH = 800;

interface Defaults {
  zoom: number;
  cx: number;
  cy: number;
  strokeScale: number;
  /** Viewport aspect ratio (width/height) of the map box. */
  aspect: number;
  fallbackWidth: number;
}

const DESKTOP: Defaults = { zoom: 2, cx: 0.555, cy: 0.68, strokeScale: 1, aspect: 1.6, fallbackWidth: 1120 };
const MOBILE: Defaults = { zoom: 3.4, cx: 0.51, cy: 0.665, strokeScale: 0.65, aspect: 1, fallbackWidth: 358 };

interface State {
  zoom: number | null;
  cx: number | null;
  cy: number | null;
}

interface Frame {
  W: number;
  H: number;
  cx: number;
  cy: number;
  zoom: number;
  minZoom: number;
}

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

export function initMap(root: HTMLElement): void {
  const map = root.querySelector<HTMLElement>('[data-map]');
  const inner = root.querySelector<HTMLElement>('[data-map-inner]');
  if (!map || !inner) return;

  const mobileQuery = window.matchMedia('(max-width: 767px)');
  const state: State = { zoom: null, cx: null, cy: null };
  let frame: Frame | null = null;

  const render = () => {
    const mobile = mobileQuery.matches;
    const d = mobile ? MOBILE : DESKTOP;
    const zoom = state.zoom ?? d.zoom;
    const W = zoom;
    const H = (zoom * d.aspect) / ASPECT_SVG;
    const width = map.clientWidth || d.fallbackWidth;

    const cx = W <= 1 ? 0.5 : clamp(state.cx ?? d.cx, 0.5 / W, 1 - 0.5 / W);
    const cy = H <= 1 ? 0.5 : clamp(state.cy ?? d.cy, 0.5 / H, 1 - 0.5 / H);
    frame = { W, H, cx, cy, zoom, minZoom: ASPECT_SVG / d.aspect };

    Object.assign(inner.style, {
      left: `${(0.5 - cx * W) * 100}%`,
      top: `${(0.5 - cy * H) * 100}%`,
      width: `${W * 100}%`,
      height: `${H * 100}%`,
    });
    inner.style.setProperty('--z', String(zoom));
    inner.style.setProperty('--sw', String(d.strokeScale));
    inner.style.setProperty('--k', String(SVG_WIDTH / (W * width)));

    map.dataset.far = (mobile ? W < 4.2 : W < 1.7) ? '1' : '0';
    map.dataset.fars = (mobile ? W < 3.3 : W < 1.7) ? '1' : '0';
    map.dataset.tiny = mobile && zoom < 2.1 ? '1' : '0';
    map.style.touchAction = mobile ? 'pan-y' : 'none';
    map.style.cursor = W > 1.01 ? 'grab' : 'default';
  };

  const set = (next: Partial<State>) => {
    Object.assign(state, next);
    render();
  };

  const setZoom = (z: number) => {
    const f = frame;
    set({ zoom: clamp(z, f?.minZoom ?? 0.6, MAX_ZOOM), cx: f?.cx ?? null, cy: f?.cy ?? null });
  };

  // ---- Buttons ----
  root.querySelectorAll<HTMLButtonElement>('[data-zoom]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const zoom = frame?.zoom ?? DESKTOP.zoom;
      if (btn.dataset.zoom === 'in') setZoom(zoom * 1.5);
      else if (btn.dataset.zoom === 'out') setZoom(zoom / 1.5);
      else set({ zoom: null, cx: null, cy: null });
    });
  });

  const clinic = root.querySelector<HTMLElement>('[data-clinic]');
  root.querySelector('[data-clinic-toggle]')?.addEventListener('click', () => {
    if (clinic) clinic.dataset.on = clinic.dataset.on === '1' ? '0' : '1';
  });

  // ---- Wheel (only with ctrl/⌘ so page scroll isn't hijacked) ----
  map.addEventListener(
    'wheel',
    (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      setZoom((frame?.zoom ?? 2) * (e.deltaY < 0 ? 1.2 : 1 / 1.2));
    },
    { passive: false },
  );

  // ---- Drag & pinch ----
  const pointers = new Map<number, { x: number; y: number }>();
  let last: { x: number; y: number } | null = null;
  let pinch: { d: number; z: number; mx: number; my: number } | null = null;

  map.addEventListener('pointerdown', (e) => {
    if ((e.target as HTMLElement).closest('button, a')) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) last = { x: e.clientX, y: e.clientY };
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), z: frame?.zoom ?? 2, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
    }
  });

  const end = (e: PointerEvent) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) last = null;
  };
  map.addEventListener('pointerup', end);
  map.addEventListener('pointercancel', end);
  map.addEventListener('pointerleave', end);

  map.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId) || !frame) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const f = frame;
    const w = map.clientWidth || 1;
    const h = map.clientHeight || 1;

    if (pinch && pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const nz = clamp(pinch.d > 0 ? (pinch.z * d) / pinch.d : f.zoom, f.minZoom, MAX_ZOOM);
      const k = nz / f.zoom;
      set({ zoom: nz, cx: f.cx - (mx - pinch.mx) / (f.W * k * w), cy: f.cy - (my - pinch.my) / (f.H * k * h) });
      pinch.mx = mx;
      pinch.my = my;
      return;
    }

    if (!last || (f.W <= 1.01 && f.H <= 1.01)) return;
    const dx = e.clientX - last.x;
    const dy = e.clientY - last.y;
    last = { x: e.clientX, y: e.clientY };
    set({ cx: f.cx - dx / (f.W * w), cy: f.cy - dy / (f.H * h) });
  });

  // ---- Responsive ----
  new ResizeObserver(render).observe(map);
  mobileQuery.addEventListener('change', render);
  render();
}
