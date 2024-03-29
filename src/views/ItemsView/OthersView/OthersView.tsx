import { OthersListOption } from "../../../types/ItemsList";
import { OthersList } from "../../../components/ItemsList/OthersList/OthersList";
import classes from "../ItemsView.module.css";

export const OthersView = (props: OthersListOption) => {
  return (
    <div key={props.path} className={classes.ItemsView}>
      <OthersList {...props} />
    </div>
  );
};
