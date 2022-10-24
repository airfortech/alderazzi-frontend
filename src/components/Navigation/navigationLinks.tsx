import { UserRole } from "../../types/UserRole";
import HomeIcon from "@mui/icons-material/Home";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ManIcon from "@mui/icons-material/Man";

export const links = [
  { url: "/", name: "Home", icon: <HomeIcon />, allowedRoles: null },
  {
    url: "/wrogowie",
    name: "Wrogowie",
    icon: <SentimentVeryDissatisfiedIcon />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/kluczodajki",
    name: "Kluczodajki",
    icon: <ManIcon />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/klucze",
    name: "Klucze",
    icon: <VpnKeyIcon />,
    allowedRoles: [UserRole.caporegime, UserRole.consigliore, UserRole.soldato],
  },
  {
    url: "/ustawienia",
    name: "Ustawienia",
    icon: <VpnKeyIcon />,
    allowedRoles: [UserRole.consigliore],
  },
];
