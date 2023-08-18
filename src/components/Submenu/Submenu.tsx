import { UserRole } from "../../types/UserRole";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchPath, useLocation } from "react-router-dom";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { useAuth } from "../../hooks/useAuth";
import classes from "./Submenu.module.css";

interface Props {
  links: {
    url: string;
    match: string;
    name: string;
    allowedRoles: null | UserRole[];
  }[];
}

export const Submenu = ({ links }: Props) => {
  const { auth } = useAuth();

  const availableLinks = links.filter(({ allowedRoles }) =>
    isRoleAllowed(allowedRoles, auth?.role)
  );

  const { pathname } = useLocation();
  const matches = availableLinks.filter(
    ({ match }) => matchPath({ path: match }, pathname) !== null
  );
  if (matches.length === 0) return null;

  return (
    <nav className={classes.Submenu}>
      <Tabs
        value={pathname}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        selectionFollowsFocus
        className={classes.tabs}
        textColor="inherit"
      >
        {availableLinks.map(({ url, name }, i) => (
          <Tab value={url} key={i} label={name} component={Link} to={url} />
        ))}
      </Tabs>
    </nav>
  );
};
