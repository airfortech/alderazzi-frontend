import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useAuth } from "../../hooks/useAuth";
import { useRouteMatch } from "../../hooks/useRouteMatch";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { links } from "./navigationLinks";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  const { auth } = useAuth();

  const currentTab = useRouteMatch(links.map(({ url }) => url));

  return (
    <nav className={classes.Navigation}>
      <Tabs
        value={currentTab}
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
