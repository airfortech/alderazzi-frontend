import { AddItems } from "../../../components/ItemsList/AddItems/AddItems";
import classes from "../ItemsView.module.css";

export const AddItemsView = () => {
  return (
    <div className={classes.ItemsView}>
      <AddItems />
    </div>
  );
};
