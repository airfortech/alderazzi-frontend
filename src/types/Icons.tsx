// https://react-icons.github.io/react-icons

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import { GiArmoredPants } from "react-icons/gi";
import { GiBattleAxe } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiBreastplate } from "react-icons/gi";
import { GiBrutalHelm } from "react-icons/gi";
import { GiChainMail } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";
import { GiClawHammer } from "react-icons/gi";
import { GiCutDiamond } from "react-icons/gi";
import { GiDaggers } from "react-icons/gi";
import { GiFireGem } from "react-icons/gi";
import { GiFireShield } from "react-icons/gi";
import { GiFlail } from "react-icons/gi";
import { GiGemPendant } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";
import { GiLegArmor } from "react-icons/gi";
import { GiLifeJacket } from "react-icons/gi";
import { GiTwoCoins } from "react-icons/gi";
import { GiCrossedSwords } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import { GiDwarfHelmet } from "react-icons/gi";
import { GiExitDoor } from "react-icons/gi";
import { GiFeather } from "react-icons/gi";
import { GiHoodedAssassin } from "react-icons/gi";
import { GiKeyring } from "react-icons/gi";
import { GiOpenTreasureChest } from "react-icons/gi";
import { GiShardSword } from "react-icons/gi";
import { GiShinyPurse } from "react-icons/gi";
import { GiSkeletonKey } from "react-icons/gi";
import { GiSpearFeather } from "react-icons/gi";
import { GiStandingPotion } from "react-icons/gi";
import { GiTravelDress } from "react-icons/gi";
import { GiTavernSign } from "react-icons/gi";
import { GiTreasureMap } from "react-icons/gi";
// FIXME: change to other add user icon
import { GrUserAdd } from "react-icons/gr";
import { GiWoodClub } from "react-icons/gi";
import { GiWomanElfFace } from "react-icons/gi";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { MdSettings } from "react-icons/md";
import { CSSProperties } from "react";

export type Icon =
  | "addUser"
  | "armoredPants"
  | "assassin"
  | "axe"
  | "basket"
  | "calendar"
  | "cancel"
  | "chainmail"
  | "checkmark"
  | "chest"
  | "clock"
  | "close"
  | "club"
  | "coins"
  | "crossedSwords"
  | "crossmark"
  | "daggers"
  | "diamond"
  | "down"
  | "dress"
  | "dwarf"
  | "exit"
  | "feather"
  | "file"
  | "flail"
  | "gem"
  | "gem2"
  | "gloves"
  | "hammer"
  | "helm"
  | "keys"
  | "legArmor"
  | "lightArmor"
  | "map"
  | "plate"
  | "potion"
  | "purse"
  | "ring"
  | "settings"
  | "shield"
  | "skeletonKey"
  | "spear"
  | "sword"
  | "tavernSign"
  | "up"
  | "womanElfFace";

export const iconComponentDefs = (iconStyle: CSSProperties) => {
  return {
    addUser: <GrUserAdd style={iconStyle} />,
    armoredPants: <GiArmoredPants style={iconStyle} />,
    assassin: <GiHoodedAssassin style={iconStyle} />,
    axe: <GiBattleAxe style={iconStyle} />,
    basket: <DeleteIcon style={iconStyle} />,
    calendar: <InsertInvitationIcon style={iconStyle} />,
    cancel: <CancelIcon style={iconStyle} />,
    chainmail: <GiChainMail style={iconStyle} />,
    checkmark: <GiCheckMark style={iconStyle} />,
    chest: <GiOpenTreasureChest style={iconStyle} />,
    clock: <AccessTimeIcon style={iconStyle} />,
    close: <CloseIcon style={iconStyle} />,
    club: <GiWoodClub style={iconStyle} />,
    coins: <GiTwoCoins style={iconStyle} />,
    crossedSwords: <GiCrossedSwords style={iconStyle} />,
    crossmark: <GiCrossMark style={iconStyle} />,
    daggers: <GiDaggers style={iconStyle} />,
    diamond: <GiCutDiamond style={iconStyle} />,
    down: <KeyboardArrowDownIcon style={iconStyle} />,
    dress: <GiTravelDress style={iconStyle} />,
    dwarf: <GiDwarfHelmet style={iconStyle} />,
    exit: <GiExitDoor style={iconStyle} />,
    feather: <GiFeather style={iconStyle} />,
    file: <DescriptionIcon style={iconStyle} />,
    flail: <GiFlail style={iconStyle} />,
    gem: <GiFireGem style={iconStyle} />,
    gem2: <GiGemPendant style={iconStyle} />,
    gloves: <GiGloves style={iconStyle} />,
    hammer: <GiClawHammer style={iconStyle} />,
    helm: <GiBrutalHelm style={iconStyle} />,
    keys: <GiKeyring style={iconStyle} />,
    legArmor: <GiLegArmor style={iconStyle} />,
    lightArmor: <GiLifeJacket style={iconStyle} />,
    map: <GiTreasureMap style={iconStyle} />,
    plate: <GiBreastplate style={iconStyle} />,
    potion: <GiStandingPotion style={iconStyle} />,
    purse: <GiShinyPurse style={iconStyle} />,
    ring: <GiBigDiamondRing style={iconStyle} />,
    settings: <MdSettings style={iconStyle} />,
    shield: <GiFireShield style={iconStyle} />,
    skeletonKey: <GiSkeletonKey style={iconStyle} />,
    spear: <GiSpearFeather style={iconStyle} />,
    sword: <GiShardSword style={iconStyle} />,
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
