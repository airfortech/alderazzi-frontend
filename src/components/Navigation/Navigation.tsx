import { Link, useLocation, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useAuth } from "../../hooks/useAuth";
import { useRouteMatch } from "../../hooks/useRouteMatch";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { links } from "./navigationLinks";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  const { auth } = useAuth();
  const { pathname } = useLocation();

  const routeMatch = useRouteMatch(links.map(({ url }) => url));
  const currentTab = routeMatch?.pathnameBase;
  // const currentTab = routeMatch?.pattern?.path;
  console.log(pathname);

  return (
    <nav className={classes.Navigation}>
      <Tabs
        // value={currentTab}
        value={pathname}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        selectionFollowsFocus
        className={classes.tabs}
      >
        {links.map(({ url, name, icon, allowedRoles }, i) =>
          isRoleAllowed(allowedRoles, auth?.role) ? (
            <Tab
              value={url}
              key={name}
              label={name}
              icon={icon}
              iconPosition="start"
              component={Link}
              to={url}
            />
          ) : null
        )}
      </Tabs>
    </nav>
  );
};
