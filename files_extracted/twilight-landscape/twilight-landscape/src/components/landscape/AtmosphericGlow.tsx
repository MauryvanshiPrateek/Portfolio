export function AtmosphericGlow({ x = 52, y = 78, opacity = 0.26 }: { x?: number; y?: number; opacity?: number }) {
  return <div className="tl-fill" style={{ opacity, background: `radial-gradient(ellipse 48% 34% at ${x}% ${y}%, var(--skyGlow), transparent 70%)` }} />;
}
