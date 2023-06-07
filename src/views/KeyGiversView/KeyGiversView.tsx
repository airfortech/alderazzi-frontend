import { KeyGiversList } from "../../components/KeyGiversList/KeyGiversList";
import classes from "./KeyGiversView.module.css";

export const KeyGiversView = () => {
  return (
    <div className={classes.KeyGiversView}>
      <KeyGiversList />
    </div>
  );
};
