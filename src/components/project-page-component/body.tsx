interface BodyProps {
  children: React.ReactNode;
}
export function Body(props: BodyProps) {
  return <div className="w-full h-auto grid grid-cols-2">{props.children}</div>;
}
