import clsx from "clsx";
import classes from "./Code.module.css";

type TagName = "pre" | "code";

interface Props {
  type: TagName;
  children: string;
}

const spanClasses = (type: TagName) => clsx(classes.Code);

export const Code = ({ type, children }: Props) => {
  const TagName = type;
  return <TagName className={spanClasses(type)}>{children}</TagName>;
};
