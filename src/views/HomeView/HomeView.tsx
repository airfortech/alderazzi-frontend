import { Login } from "../../components/Login/Login";
import classes from "./HomeView.module.css";

export const HomeView = () => {
  return (
    <div className={classes.HomeView}>
      <Login />
    </div>
  );
};
