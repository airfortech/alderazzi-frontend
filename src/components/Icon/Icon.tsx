import {
  Icon as IIcon,
  IconColor,
  iconColors,
  iconComponentDefs,
} from "../../types/Icons";
import { CSSProperties, MouseEventHandler } from "react";
import IconButton from "@mui/material/IconButton";

interface Props {
  icon: IIcon;
  type?: "icon" | "button";
  color?: IconColor;

  size?: "sm" | "normal" | "lg" | "xl" | "xxl" | "inherit";
  ariaLabel?: string;
  edge?: "start" | "end";
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const iconSizes = {
  sm: "16px",
  normal: "20px",
  lg: "25px",
  xl: "30px",
  xxl: "40px",
  inherit: "inherit",
};

export const Icon = ({
  icon,
  type = "icon",
  color = "inherit",
  size = "inherit",
  ariaLabel,
  edge,
  style,
  onClick,
}: Props) => {
  const iconStyle = {
    color: iconColors[color],
    fontSize: iconSizes[size],
    ...style,
  };

  const iconComponent = iconComponentDefs(iconStyle);

  return type === "button" ? (
    <IconButton
      aria-label={ariaLabel}
      onClick={onClick}
      edge={edge}
      style={{ fontSize: iconSizes[size], color: iconColors[color], ...style }}
    >
      {iconComponent[icon as keyof typeof iconComponent]}
    </IconButton>
  ) : (
    iconComponent[icon as keyof typeof iconComponent]
  );
};
