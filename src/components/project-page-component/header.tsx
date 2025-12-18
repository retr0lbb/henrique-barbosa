interface HeaderProps {
  title: string;
  subtitle?: string;
}
export function Header(props: HeaderProps) {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-zinc-200 text-6xl font-bold">{props.title}</h1>
      {props.subtitle ? (
        <p className="text-xl text-zinc-400">{props.subtitle}</p>
      ) : (
        ""
      )}
    </div>
  );
}
