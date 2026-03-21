interface ScrollerProps {
  children: React.ReactNode;
}

export function Scroller(props: ScrollerProps) {
  return <div className="w-full min-h-dvh relative">{props.children}</div>;
}
