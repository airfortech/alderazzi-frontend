import { EnemiesList } from "../../components/EnemiesList/EnemiesList";
import classes from "./EnemiesView.module.css";

export const EnemiesView = () => {
  return (
    <div className={classes.EnemiesView}>
      <EnemiesList />
    </div>
  );
};
