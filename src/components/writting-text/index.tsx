export function WritingText() {
  return (
    <div className="relative overflow-hidden w-auto">
      <h1 className="text-6xl font-black font-mono text-zinc-200">
        Contact Me!
      </h1>
      <div className="absolute inset-0 w-full animated-write bg-zinc-950">
        <div className="h-full bg-red-400 w-[30px]"></div>
      </div>
    </div>
  );
}
