import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <NavLink to={"/"}>
        <Button variant="outlined" startIcon={<HomeIcon />}>
          Home
        </Button>
      </NavLink>
      <NavLink to={"/wrogowie"} end>
        <Button variant="outlined" startIcon={<MoodBadIcon />}>
          Wrogowie
        </Button>
      </NavLink>
    </nav>
  );
};
