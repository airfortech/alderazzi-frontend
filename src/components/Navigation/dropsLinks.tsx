import { UserRole } from "../../types/UserRole";

export const dropsLinks = [
  {
    url: "/dropy",
    match: "/dropy",
    name: "Najbliższe respawny",
    allowedRoles: null,
  },
  {
    url: "/dropy/ostatnie",
    match: "/dropy/ostatnie",
    name: "Ostatnie dropy",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/dropy/statystyki",
    match: "/dropy/statystyki",
    name: "Statystyki",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/dropy/edycja",
    match: "/dropy/edycja",
    name: "Edycja",
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
];
