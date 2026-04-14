export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="animate-pulse text-center">
        <div className="font-display text-2xl text-ink">BioVision</div>
        <div className="mt-2 text-body-sm text-ink-muted">Loading...</div>
      </div>
    </div>
  );
}
