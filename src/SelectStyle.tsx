import "./SelectStyle.css";
import cn from "classnames";

type Props = {
  mode: "light" | "dark";
};

export default function SelectStyle({ mode }: Props) {
  return (
    <div className={cn("box", mode === "light" ? "light" : "dark")}>
      Hello, World!
    </div>
  );
}
