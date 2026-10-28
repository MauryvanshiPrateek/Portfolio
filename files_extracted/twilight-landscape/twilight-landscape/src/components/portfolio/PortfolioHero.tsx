import { TwilightLandscape } from "../landscape/TwilightLandscape";

/** Landscape hero followed by the first real content section (replace the placeholder). */
export function PortfolioHero() {
  return (
    <>
      <TwilightLandscape brandHref="/" monogram="A" />
      <section id="grove" className="tl-next" style={{ minHeight: "100svh", background: "var(--shadow, #0A0B16)", color: "#F3EAF8", display: "grid", placeItems: "center", padding: "6rem 1.5rem" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>The grove</h2>
      </section>
    </>
  );
}
