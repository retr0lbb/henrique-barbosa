interface BodyProps {
  children: React.ReactNode;
}
export function Body(props: BodyProps) {
  return (
    <div className="w-full h-full flex-1 grid grid-cols-1 md:grid-cols-2">
      {props.children}
    </div>
  );
}
