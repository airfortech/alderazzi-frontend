import { WeaponsList } from "../../../components/ItemsList/WeaponsList/WeaponsList";
import classes from "../ItemsView.module.css";

export const WeaponsView = () => {
  return (
    <div className={classes.ItemsWeaponsView}>
      <WeaponsList />
    </div>
  );
};
