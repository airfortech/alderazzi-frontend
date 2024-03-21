import { UserRole } from "../../types/UserRole";

export const itemsWeaponsLinks = [
  {
    url: "/przedmioty/bronie/miecze",
    match: "/przedmioty/bronie/miecze",
    name: "Miecze",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/bronie/topory",
    match: "/przedmioty/bronie/topory",
    name: "Topory",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/bronie/sztylety",
    match: "/przedmioty/bronie/sztylety",
    name: "Sztylety",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/bronie/mloty",
    match: "/przedmioty/bronie/mloty",
    name: "Młoty",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/bronie/maczugi",
    match: "/przedmioty/bronie/maczugi",
    name: "Maczugi",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/bronie/drzewce",
    match: "/przedmioty/bronie/drzewce",
    name: "Drzewce",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
];
