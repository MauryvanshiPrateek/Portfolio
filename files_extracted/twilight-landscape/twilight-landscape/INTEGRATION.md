# Twilight landscape: integration notes

## What this is
A modular SVG illustration of the banyan grove reference, with a scroll-scrubbed
transition (GSAP ScrollTrigger) and idle motion (CSS keyframes). Every major object is its own
component, and all positions live in `src/config/landscape.config.ts`.

## Integrating into the portfolio
1. Copy `src/` into your project (merge `components/landscape`, `config`, `hooks`, `lib`, `styles`, `types`).
2. Install dependencies: `npm i gsap` (ScrollTrigger ships in the gsap package). React 18+ or 19.
3. Render the hero at the top of your landing page:

   ```tsx
   import { TwilightLandscape } from "@/components/landscape/TwilightLandscape";
   <TwilightLandscape brandHref="/" monogram="A" />
   ```

4. Give the first content section the `tl-next` class so it slides up over the pinned scene:

   ```tsx
   <section id="grove" className="tl-next">…</section>
   ```

   (Already done in `components/portfolio/PortfolioHero.tsx`. Replace the placeholder with real content.)

5. The bundled CSS is imported by `TwilightLandscape`. If your bundler disallows CSS imports
   from components, import `styles/landscape.css` once in your global entry instead.

## Environment notes
- Debug overlay: set `NEXT_PUBLIC_LANDSCAPE_DEBUG=true` (Next.js) or change `DEBUG` in
  `landscape.config.ts` to read `import.meta.env.VITE_…` for Vite. Off by default.
- `brandHref` makes the monogram a real link with a focus ring. Omit it for a decorative mark.
- The repo has no Next.js, Tailwind, or 21st.dev setup, so none of them are used. Everything is plain React + TypeScript + GSAP.

## Tuning
| To change | Edit |
|---|---|
| Object position / scale | `OBJECTS` in `landscape.config.ts` (banyan, hut, temple, cattle, trees) |
| Ground line shape | `GROUND_PATH` (line and terrain share it, so they stay attached) |
| Parallax depth and timing | `TRANSITION.layers` (`parallax`, `from`, `to`) and `travel` |
| Scroll length | `TRANSITION.pinScreens` (viewport heights of pinned scroll) |
| Leaf wind strength / period | `WIND.zones` (rotation degrees, pixel displacement, period seconds) |
| Share of leaves that move | `WIND.zones.*.share` |
| Star count / twinkle | `STARS` |
| Palette | `COLORS` (all become CSS variables via `paletteVars()`) |
| Mobile / tablet crop | `MOBILE_VIEWBOX`, `TABLET_VIEWBOX`, `TABLET_PORTRAIT_VIEWBOX` |

Object origins are documented at the top of each component. Scale is applied around that origin,
so moving an object only requires editing its entry in `OBJECTS`.

## Motion behaviour
- Desktop (≥768px): the stage pins for `pinScreens` viewport heights. Each depth group translates
  by its parallax factor inside its own progress window. Reversing scroll rebuilds the state.
- Mobile (<768px): no pin. Shorter, slower travel.
- Reduced motion: no pin, no idle animation, normal page flow.
- Idle motion pauses when the stage is off-screen or the tab is hidden, and once the transition completes.
- Only about 10% of canopy clusters sway (inner/outer zones). Twig clusters are animated too.

## Remaining differences from the reference
- The canopy is built from blobby lobes plus leaf clusters. It reads well, but has less leaf-level
  detail and a flatter top edge than the reference.
- Cattle are simplified zebu silhouettes. The reference's horns and hump are more pronounced.
- The temple is a clean stepped shikhara with fewer tiers than the reference.
- The right-middle tree is a palm-like star crown rather than the reference's broad-leaf tree.
- The left broad tree is a blob canopy and reads more like a stylised tree than the reference's.
- The village hut is smaller and simpler (no thatch texture).
- The reference is not reproduced as an image. Every object is vector and animatable.
