import { Icon as IIcon } from "../../types/Icons";
import { CSSProperties, MouseEventHandler } from "react";
import MuiButton from "@mui/material/Button";
import clsx from "clsx";
import { Icon } from "../Icon/Icon";

import classes from "./Button.module.css";

type Color =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "inherit";

interface Props {
  children: string | JSX.Element;
  type?: "button" | "submit";
  icon?: IIcon;
  iconAlign?: "left" | "right";
  color?: Color;
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "normal" | "lg";
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const sizes = {
  sm: "small",
  normal: "medium",
  lg: "large",
};

const buttonClasses = (
  color: Color,
  variant: "text" | "contained" | "outlined",
  size: "sm" | "normal" | "lg"
) =>
  clsx(
    classes.Button,
    classes[color],
    size === "sm" && classes.small,
    variant === "outlined" && classes.outlined,
    variant === "contained" && classes.contained
  );

export const Button = ({
  children,
  type = "button",
  size = "normal",
  variant = "text",
  color = "inherit",
  icon,
  iconAlign = "left",
  disabled = false,
  style,
  onClick,
}: Props) => {
  return (
    <MuiButton
      className={buttonClasses(color, variant, size)}
      type={type}
      size={sizes[size] as "small" | "medium" | "large"}
      variant={variant}
      disabled={disabled}
      style={style}
      onClick={onClick}
      startIcon={
        icon && iconAlign === "left" && <Icon icon={icon} size={size} />
      }
      endIcon={
        icon && iconAlign === "right" && <Icon icon={icon} size={size} />
      }
    >
      {children}
    </MuiButton>
  );
};
