import { UserRole } from "../../types/UserRole";

export const itemsLinks = [
  {
    url: "/przedmioty/bronie",
    match: "/przedmioty/bronie",
    name: "Bronie",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/zbroje",
    match: "/przedmioty/zbroje",
    name: "Zbroje",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/tarcze",
    match: "/przedmioty/tarcze",
    name: "Tarcze",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/ubrania",
    match: "/przedmioty/ubrania",
    name: "Ubrania",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/bizuteria",
    match: "/przedmioty/bizuteria",
    name: "Biżuteria",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/kamienie",
    match: "/przedmioty/kamienie",
    name: "Kamienie",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/mikstury",
    match: "/przedmioty/mikstury",
    name: "Mikstury",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/przedmioty/inne",
    match: "/przedmioty/inne",
    name: "Inne",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
];
