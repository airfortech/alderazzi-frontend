import { UserRole } from "../../types/UserRole";

export const itemsArmorsLinks = [
  {
    url: "/przedmioty/zbroje/lekkie",
    match: "/przedmioty/zbroje/lekkie",
    name: "Lekkie",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/zbroje/srednie",
    match: "/przedmioty/zbroje/srednie",
    name: "Średnie",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/zbroje/ciezkie",
    match: "/przedmioty/zbroje/ciezkie",
    name: "Ciężkie",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
];
