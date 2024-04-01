import { ShieldsList } from "../../../components/ItemsList/ShieldsList/ShieldsList";
import classes from "../ItemsView.module.css";

export const ShieldsView = () => {
  return (
    <div className={classes.ItemsView}>
      <ShieldsList />
    </div>
  );
};
