import { clsx } from "clsx";
import classes from "./InfoText.module.css";

interface Props {
  size?: "small" | "normal";
  type: "info" | "error";
  message: string | undefined;
}

export const InfoText = ({ size = "normal", type, message }: Props) => {
  const pClasses = clsx(
    classes.InfoText,
    type === "info" && classes.info,
    type === "error" && classes.error,
    size === "small" && classes.small
  );

  return <p className={pClasses}>{message}</p>;
};
