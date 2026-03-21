interface BodyProps {
  children: React.ReactNode;
}
export function Body(props: BodyProps) {
  return <div className="w-full h-full flex flex-col">{props.children}</div>;
}
