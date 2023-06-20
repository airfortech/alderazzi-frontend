import { KeyGiverDropsList } from "../../components/KeyGiverDropsList/KeyGiverDropsList";
import classes from "./KeyGiverDropsView.module.css";

export const KeyGiverDropsView = () => {
  return (
    <div className={classes.KeyGiverDropsView}>
      <KeyGiverDropsList />
    </div>
  );
};
