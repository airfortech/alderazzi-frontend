import { EditableKeyGiverDropsList } from "../../components/EditableKeyGiverDropsList/EditableKeyGiverDropsList";
import classes from "./EditableKeyGiverDropsView.module.css";

export const EditableKeyGiverDropsView = () => {
  return (
    <div className={classes.EditableKeyGiverDropsView}>
      <EditableKeyGiverDropsList />
    </div>
  );
};
