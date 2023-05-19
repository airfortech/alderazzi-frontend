import { Login } from "../../components/Login/Login";
import { useAuth } from "../../hooks/useAuth";
import { UserPrivilages } from "../../components/UserPrivilages/UserPrivilages";

import classes from "./HomeView.module.css";

export const HomeView = () => {
  const { auth } = useAuth();

  return (
    <div className={classes.HomeView}>
      {!auth && <Login />}
      {auth && (
        <>
          <UserPrivilages role={auth.role} />
        </>
      )}
    </div>
  );
};
