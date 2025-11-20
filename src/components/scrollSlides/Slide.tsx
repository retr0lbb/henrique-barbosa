import { useTransform, motion } from "framer-motion";

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
  // Calcula quando este slide específico está visível
  const slideStart = index / totalSlides;
  const slideEnd = (index + 1) / totalSlides;

  // Animação do ano
  const yearOpacity = useTransform(
    scrollYProgress,
    [slideStart - 0.1, slideStart + 0.1, slideEnd - 0.1, slideEnd + 0.1],
    [0, 1, 1, 0],
  );

  const yearY = useTransform(
    scrollYProgress,
    [slideStart - 0.1, slideStart + 0.1, slideEnd - 0.1, slideEnd + 0.1],
    [50, 0, 0, -50],
  );

  return (
    <div className="flex shrink-0 w-dvw h-dvh items-center justify-center px-8 relative bg-zinc-950">
      <div className="top-7 absolute flex w-full h-full flex-col">
        <motion.h1
          style={{
            opacity: yearOpacity,
            y: yearY,
          }}
          className="text-8xl px-10 text-zinc-200 pb-4"
        >
          {year}
        </motion.h1>
      </div>

      <div>
        <motion.p
          style={{ opacity: yearOpacity }}
          className="text-zinc-200 text-xl max-w-2xl text-center"
        >
          Evento importante que aconteceu em {year}
        </motion.p>
      </div>
    </div>
  );
}
