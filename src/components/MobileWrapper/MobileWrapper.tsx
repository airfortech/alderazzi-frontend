import { ReactNode } from "react";
import classes from "./MobileWrapper.module.css";

interface Props {
  children: ReactNode;
}

export const MobileWrapper = ({ children }: Props) => {
  return <div className={classes.MobileWrapper}>{children}</div>;
};
