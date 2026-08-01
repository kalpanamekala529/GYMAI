/**
 * The "AI pulse" — a slow-breathing gradient mesh used behind hero/CTA
 * sections. It's the site's one recurring signature: energy radiating
 * outward, like a heartbeat readout for the workout it's about to build.
 */
const GradientOrb = ({ className = "", size = "w-[560px] h-[560px]" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 ${size} ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/40 via-fuchsia-500/25 to-transparent blur-[100px] animate-pulse-slow" />
      <div className="absolute inset-0 rounded-full border border-violet-400/10 animate-spin-slow" />
    </div>
  );
};

export default GradientOrb;
