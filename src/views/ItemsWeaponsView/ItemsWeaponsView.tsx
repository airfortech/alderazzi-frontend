import { ItemsWeaponsList } from "../../components/ItemsWeaponsList/ItemsWeaponsList";
import classes from "./ItemsWeaponsView.module.css";

export const ItemsWeaponsView = () => {
  return (
    <div className={classes.ItemsWeaponsView}>
      <ItemsWeaponsList />
    </div>
  );
};
