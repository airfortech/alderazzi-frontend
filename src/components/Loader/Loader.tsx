import { clsx } from "clsx";
import classes from "./Loader.module.css";

interface Props {
  size?: "normal" | "small";
  center?: boolean;
  isLoading?: boolean;
}

export const Loader = ({
  size = "normal",
  center = false,
  isLoading = true,
}: Props) => {
  const loaderClasses = clsx(
    classes.Loader,
    center && classes.center,
    !isLoading && classes.hidden
  );
  const spinnerClasses = clsx(
    classes.spinner,
    size === "small" && classes.small
  );

  return (
    <div className={loaderClasses}>
      <div className={spinnerClasses}></div>
    </div>
  );
};
