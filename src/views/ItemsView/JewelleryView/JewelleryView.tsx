import { JewelleryList } from "../../../components/ItemsList/JewelleryList/JewelleryList";
import classes from "../ItemsView.module.css";

export const JewelleryView = () => {
  return (
    <div className={classes.ItemsView}>
      <JewelleryList />
    </div>
  );
};
