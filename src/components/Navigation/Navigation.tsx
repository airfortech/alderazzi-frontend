import { NavLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import classes from "./Navigation.module.css";

const urls = [
  { url: "/", name: "Home", icon: <HomeIcon /> },
  {
    url: "/wrogowie",
    name: "Wrogowie",
    icon: <SentimentVeryDissatisfiedIcon />,
  },
  { url: "/kluczodajki", name: "Kluczodajki", icon: <VpnKeyIcon /> },
];

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.Navigation}>
      {urls.map(({ url, name, icon }, i) => (
        <NavLink key={i} to={url}>
          <Button
            variant={pathname === url ? "contained" : "outlined"}
            startIcon={icon}
          >
            {name}
          </Button>
        </NavLink>
      ))}
    </nav>
  );
};
