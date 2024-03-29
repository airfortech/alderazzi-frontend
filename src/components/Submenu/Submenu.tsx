import { UserRole } from "../../types/UserRole";
import { CSSProperties } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { useAuth } from "../../hooks/useAuth";
import { useRouteMatch } from "../../hooks/useRouteMatch";
import classes from "./Submenu.module.css";

interface Props {
  links: {
    url: string;
    match: string;
    name: string;
    allowedRoles: null | UserRole[];
  }[];
  level: 1 | 2 | 3;
  style?: CSSProperties;
}

const submenuClasses = (level: 1 | 2 | 3) => {
  return clsx(classes.Submenu, level === 3 && classes.level3);
};

export const Submenu = ({ links, level, style }: Props) => {
  const { auth } = useAuth();
  const { pathname } = useLocation();

  const availableLinks = links.filter(({ allowedRoles }) =>
    isRoleAllowed(allowedRoles, auth?.role)
  );

  const matches = availableLinks.filter(
    ({ match }) => pathname.includes(match) !== false
  );
  const currentTab = useRouteMatch(
    availableLinks.map(({ url }) => url),
    level
  );
  if (matches.length === 0) return null;

  return (
    <nav className={submenuClasses(level)} style={style}>
      <Tabs
        value={currentTab}
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
