import { NavLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "../../hooks/useAuth";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { links } from "./navigationLinks";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  const { pathname } = useLocation();
  const { auth } = useAuth();

  return (
    <nav className={classes.Navigation}>
      {links.map(({ url, name, icon, allowedRoles }, i) =>
        isRoleAllowed(allowedRoles, auth?.role) ? (
          <NavLink key={i} to={url}>
            <Button
              variant={pathname === url ? "contained" : "outlined"}
              startIcon={icon}
              className={classes.button}
            >
              <p>{name}</p>
            </Button>
          </NavLink>
        ) : null
      )}
    </nav>
  );
};
