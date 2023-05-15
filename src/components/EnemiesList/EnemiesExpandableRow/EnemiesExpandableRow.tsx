import { EnemyResponse } from "../../../types/Enemy";
import classes from "./EnemiesExpandableRow.module.css";

interface Props {
  data: EnemyResponse;
}

export const EnemiesExpandableRow = ({ data }: Props) => {
  return <div className={classes.EnemiesExpandableRow}>{data.name}</div>;
};
