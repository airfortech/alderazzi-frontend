import { UserRole } from "../../types/UserRole";
import { GiCrossedSwords } from "react-icons/gi";
import { GiTavernSign } from "react-icons/gi";
import { GiKeyring } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { GiOpenTreasureChest } from "react-icons/gi";

export const links = [
  { url: "/", name: "Home", icon: <GiTavernSign />, allowedRoles: null },
  {
    url: "/wrogowie",
    name: "Wrogowie",
    icon: <GiCrossedSwords />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/kluczodajki",
    name: "Kluczodajki",
    icon: <GiOpenTreasureChest />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/klucze",
    name: "Klucze",
    icon: <GiKeyring />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/ustawienia",
    name: "Ustawienia",
    icon: <MdSettings />,
    allowedRoles: [UserRole.consigliore],
  },
];
