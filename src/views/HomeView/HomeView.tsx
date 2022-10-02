import { Login } from "../../components/Login/Login";
import classes from "./HomeView.module.css";

export const HomeView = () => {
  return (
    <div className={classes.HomeView}>
      {/* <h2>Home</h2> */}
      <Login />
    </div>
  );
};
