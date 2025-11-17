interface TagsProps extends React.ComponentProps<"span"> {
  colored:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "magenta"
    | "pink"
    | "white"
    | "black";
  text: string;
}

export function Tags(props: TagsProps) {
  return (
    <span
      className={`px-4 py-1.5 rounded-2xl bg-${props.colored}-500/10 border border-${props.colored}-500/20 text-${props.colored}-300 text-sm`}
    >
      {props.text}
    </span>
  );
}
