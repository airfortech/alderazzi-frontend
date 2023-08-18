import { LastKeyGiverDropsList } from "../../components/LastKeyGiverDropsList/LastKeyGiverDropsList";
import classes from "./LastKeyGiverDropsView.module.css";

export const LastKeyGiverDropsView = () => {
  return (
    <div className={classes.LastKeyGiverDropsView}>
      <LastKeyGiverDropsList />
    </div>
  );
};
