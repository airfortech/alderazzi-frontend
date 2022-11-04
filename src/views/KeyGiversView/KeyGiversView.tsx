import { KeyGivers } from "../../components/KeyGivers/KeyGivers";
import classes from "./KeyGiversView.module.css";

export const KeyGiversView = () => {
  return (
    <div className={classes.KeyGiversView}>
      <KeyGivers />
    </div>
  );
};
