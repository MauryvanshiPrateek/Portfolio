export function ScrollCue({ label = "Walk down to the grove" }: { label?: string }) {
  return (
    <div className="tl-cue" data-cue>
      <span>{label}</span>
      <svg viewBox="0 0 12 16" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6 1V14M1.5 9.5L6 14L10.5 9.5" /></svg>
    </div>
  );
}
