import { Login } from "../../components/Login/Login";
import { useAuth } from "../../hooks/useAuth";
import { UserPrivileges } from "../../components/UserPrivileges/UserPrivileges";

import classes from "./HomeView.module.css";

export const HomeView = () => {
  const { auth } = useAuth();

  return (
    <div className={classes.HomeView}>
      {!auth && <Login />}
      {auth && (
        <>
          <UserPrivileges role={auth.role} />
        </>
      )}
    </div>
  );
};
