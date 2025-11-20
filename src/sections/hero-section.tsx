export function HeroSection() {
  return (
    <main className="bg-zinc-950 w-full min-h-dvh flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-zinc-200 font-bold text-center">
          HENRIQUE BARBOSA SAMPAIO
        </h1>
        <div className="w-full h-px md:h-0.5 bg-zinc-400 drop-shadow-sm drop-shadow-zinc-50" />
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-400 rounded-lg">
          Fullstack Web Developer
        </p>
      </div>
    </main>
  );
}
