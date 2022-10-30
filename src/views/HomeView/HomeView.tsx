import { Login } from "../../components/Login/Login";
import { useAuth } from "../../hooks/useAuth";
import classes from "./HomeView.module.css";

export const HomeView = () => {
  const { auth } = useAuth();

  return <div className={classes.HomeView}>{!auth && <Login />}</div>;
};
