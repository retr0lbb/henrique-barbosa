export function Slide({
  year,
  index,
  totalSlides,
  scrollYProgress,
  children,
}: {
  year: string;
  index: number;
  totalSlides: number;
  scrollYProgress: any;
  children: React.ReactNode;
}) {
  return (
    <div className="flex shrink-0 w-dvw h-dvh items-center justify-center px-8 relative bg-zinc-950">
      <div className="top-7 absolute flex w-full h-full flex-col">
        <h1 className="text-8xl px-10 text-zinc-200 pb-4">{year}</h1>
      </div>

      <div>
        <p className="text-zinc-200 text-xl max-w-2xl text-center">
          Evento importante que aconteceu em {year}
        </p>
      </div>
    </div>
  );
}
