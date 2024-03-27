import { useAuth } from "../../hooks/useAuth";
import { User } from "./User/User";
import clsx from "clsx";

import { logo } from "./logo";
import classes from "./Header.module.css";

const headerClasses = (isUserLogged: boolean) =>
  clsx(classes.Header, !isUserLogged && classes.center);

export const Header = () => {
  const { auth } = useAuth();

  return (
    <header className={headerClasses(!!auth?.role)}>
      <h1>Alderazzi</h1>
      <pre className={classes.logo} aria-hidden>
        {logo}
      </pre>
      {auth?.role && <User role={auth.role} />}
    </header>
  );
};
