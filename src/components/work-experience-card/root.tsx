import { CiCalendar } from "react-icons/ci";

interface RootProps {
  children: React.ReactNode;
  job_function: string;
  company_or_person: string;
  model_of_contract: string;
  duration: string;
}

export function Root(props: RootProps) {
  return (
    <div className="w-full h-auto p-3 md:p-4 bg-zinc-200/10 border border-white/25 backdrop-blur-2xl space-y-4">
      <div className="flex items-baseline justify-between gap-2 md:gap-5 lg:gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-zinc-200 md:text-xl font-semibold md:font-bold">
            {props.job_function}
          </p>
          <p className="text-zinc-300 text-sm">
            {props.company_or_person} | {props.model_of_contract}
          </p>
        </div>

        <div className="flex items-center gap-2 justify-center">
          <CiCalendar className="text-zinc-400 size-6 md:size-8" />
          <p className="text-zinc-300 text-xs md:text-sm whitespace-nowrap">
            {props.duration}
          </p>
        </div>
      </div>

      <div className="space-y-4">{props.children}</div>
    </div>
  );
}
