import { KeysList } from "../../components/KeysList/KeysList";
import classes from "./KeysView.module.css";

export const KeysView = () => {
  return (
    <div className={classes.KeysView}>
      <KeysList />
    </div>
  );
};
