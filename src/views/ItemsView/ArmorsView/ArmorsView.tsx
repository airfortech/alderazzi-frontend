import { ArmorsList } from "../../../components/ItemsList/ArmorsList/ArmorsList";
import { ArmorsListOption } from "../../../types/ItemsList";
import classes from "../ItemsView.module.css";

export const ArmorsView = (props: ArmorsListOption) => {
  return (
    <div key={props.path} className={classes.ItemsWeaponsView}>
      <ArmorsList {...props} />
    </div>
  );
};
