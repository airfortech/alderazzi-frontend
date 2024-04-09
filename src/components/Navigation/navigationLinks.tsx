import { UserRole } from "../../types/UserRole";
import { Icon } from "../Icon/Icon";

export const links = [
  {
    url: "/",
    name: "Home",
    icon: <Icon icon="tavernSign" size="normal" />,
    allowedRoles: null,
  },
  {
    url: "/wrogowie",
    name: "Wrogowie",
    icon: <Icon icon="crossedSwords" size="normal" />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/dropy/najblisze-respawny",
    name: "Dropy",
    icon: <Icon icon="chest" size="normal" />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/klucznicy",
    name: "Klucznicy",
    icon: <Icon icon="dwarf" size="normal" />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/klucze",
    name: "Klucze",
    icon: <Icon icon="keys" size="normal" />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/bronie/miecze",
    name: "Przedmioty",
    icon: <Icon icon="sword" size="normal" />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/lokacje",
    name: "Lokacje",
    icon: <Icon icon="map" size="normal" />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/ustawienia",
    name: "Ustawienia",
    icon: <Icon icon="settings" size="normal" />,
    allowedRoles: [UserRole.consigliore],
  },
];
