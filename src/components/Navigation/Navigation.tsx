import { NavLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import classes from "./Navigation.module.css";

const urls = [
  { url: "/", name: "Home", icon: <HomeIcon /> },
  { url: "/wrogowie", name: "Wrogowie", icon: <MoodBadIcon /> },
];

export const Navigation = () => {
  const { pathname } = useLocation();
  console.log("url: " + pathname);

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
