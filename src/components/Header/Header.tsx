import { useAuth } from "../../hooks/useAuth";
import { User } from "./User/User";
import classes from "./Header.module.css";

export const Header = () => {
  const { auth } = useAuth();
  return (
    <header className={classes.Header}>
      <h1>Alderazzi</h1>
      {auth && <User role={auth.role} />}
    </header>
  );
};
