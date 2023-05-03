import { CSSProperties, MouseEventHandler } from "react";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import { GiCrossedSwords } from "react-icons/gi";
import { GiExitDoor } from "react-icons/gi";
import { GiKeyring } from "react-icons/gi";
import { GiOpenTreasureChest } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { GiTavernSign } from "react-icons/gi";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
  icon:
    | "cancel"
    | "chest"
    | "close"
    | "crossedSwords"
    | "description"
    | "down"
    | "exit"
    | "keys"
    | "settings"
    | "tavernSign"
    | "up";
  type?: "icon" | "button";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "inherit";
  size?: "sm" | "normal" | "lg" | "xl" | "xxl" | "inherit";
  ariaLabel?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const iconColors = {
  primary: "var(--color-10)",
  secondary: "var(--color-2)",
  success: "var(--color-23)",
  danger: "var(--color-20)",
  warning: "var(--color-28)",
  info: "var(--color-26)",
  inherit: "inherit",
};

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
  style,
  onClick,
}: Props) => {
  const iconStyle = {
    color: iconColors[color],
    fontSize: iconSizes[size],
    ...style,
  };
  const iconComponent = {
    cancel: <CancelIcon style={iconStyle} />,
    chest: <GiOpenTreasureChest style={iconStyle} />,
    close: <CloseIcon style={iconStyle} />,
    crossedSwords: <GiCrossedSwords style={iconStyle} />,
    description: <DescriptionIcon style={iconStyle} />,
    down: <KeyboardArrowDownIcon style={iconStyle} />,
    exit: <GiExitDoor style={iconStyle} />,
    keys: <GiKeyring style={iconStyle} />,
    settings: <MdSettings style={iconStyle} />,
    tavernSign: <GiTavernSign style={iconStyle} />,
    up: <KeyboardArrowUpIcon style={iconStyle} />,
  };

  return type === "button" ? (
    <IconButton
      aria-label={ariaLabel}
      onClick={onClick}
      style={{ fontSize: iconSizes[size], ...style }}
    >
      {iconComponent[icon as keyof typeof iconComponent]}
    </IconButton>
  ) : (
    iconComponent[icon as keyof typeof iconComponent]
  );
};
