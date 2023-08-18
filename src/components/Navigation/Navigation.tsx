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

  // INFO: https://github.com/mui/material-ui/issues/32749 fixed
  const availableLinks = links.filter(({ allowedRoles }) =>
    isRoleAllowed(allowedRoles, auth?.role)
  );
  const currentTab = useRouteMatch(availableLinks.map(({ url }) => url));

  return (
    <nav className={classes.Navigation}>
      <Tabs
        value={currentTab}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        selectionFollowsFocus
        className={classes.tabs}
        textColor="inherit"
      >
        {availableLinks.map(({ url, name, icon, allowedRoles }) => (
          <Tab
            value={url}
            key={name}
            label={name}
            icon={icon}
            iconPosition="start"
            component={Link}
            to={url}
          />
        ))}
      </Tabs>
    </nav>
  );
};
