import { WeaponsList } from "../../../components/ItemsList/WeaponsList/WeaponsList";
import { WeaponsListOption } from "../../../types/ItemsList";
import classes from "../ItemsView.module.css";

export const WeaponsView = (props: WeaponsListOption) => {
  return (
    <div key={props.path} className={classes.ItemsWeaponsView}>
      <WeaponsList {...props} />
    </div>
  );
};
