// https://react-icons.github.io/react-icons

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import { GiCrossedSwords } from "react-icons/gi";
import { GiExitDoor } from "react-icons/gi";
import { GiFeather } from "react-icons/gi";
import { GiHoodedAssassin } from "react-icons/gi";
import { GiKeyring } from "react-icons/gi";
import { GiOpenTreasureChest } from "react-icons/gi";
import { GiSkeletonKey } from "react-icons/gi";
import { GiTavernSign } from "react-icons/gi";
// FIXME: change to other add user icon
import { GrUserAdd } from "react-icons/gr";
import { GiWomanElfFace } from "react-icons/gi";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { MdSettings } from "react-icons/md";
import { CSSProperties } from "react";

export type Icon =
  | "addUser"
  | "assassin"
  | "basket"
  | "calendar"
  | "cancel"
  | "chest"
  | "clock"
  | "close"
  | "crossedSwords"
  | "feather"
  | "file"
  | "down"
  | "exit"
  | "keys"
  | "settings"
  | "skeletonKey"
  | "tavernSign"
  | "up"
  | "womanElfFace";

export const iconComponentDefs = (iconStyle: CSSProperties) => {
  return {
    addUser: <GrUserAdd style={iconStyle} />,
    assassin: <GiHoodedAssassin style={iconStyle} />,
    basket: <DeleteIcon style={iconStyle} />,
    calendar: <InsertInvitationIcon style={iconStyle} />,
    cancel: <CancelIcon style={iconStyle} />,
    chest: <GiOpenTreasureChest style={iconStyle} />,
    clock: <AccessTimeIcon style={iconStyle} />,
    close: <CloseIcon style={iconStyle} />,
    crossedSwords: <GiCrossedSwords style={iconStyle} />,
    feather: <GiFeather style={iconStyle} />,
    file: <DescriptionIcon style={iconStyle} />,
    down: <KeyboardArrowDownIcon style={iconStyle} />,
    exit: <GiExitDoor style={iconStyle} />,
    keys: <GiKeyring style={iconStyle} />,
    settings: <MdSettings style={iconStyle} />,
    skeletonKey: <GiSkeletonKey style={iconStyle} />,
    tavernSign: <GiTavernSign style={iconStyle} />,
    up: <KeyboardArrowUpIcon style={iconStyle} />,
    womanElfFace: <GiWomanElfFace style={iconStyle} />,
  };
};

export type IconColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "inherit";

export const iconColors = {
  primary: "var(--color-10)",
  secondary: "var(--color-2)",
  success: "var(--color-23)",
  danger: "var(--color-20)",
  warning: "var(--color-28)",
  info: "var(--color-26)",
  inherit: "inherit",
};
