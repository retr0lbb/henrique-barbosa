export function BackgroundAnimation() {
  return (
    <div className="absolute -z-10 inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(39 39 42) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(39 39 42) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgb(9 9 11) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
