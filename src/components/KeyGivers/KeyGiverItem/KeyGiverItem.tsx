import { KeyGiver } from "../../../types/KeyGiver";
import { InfoText } from "../../InfoText/InfoText";
import { respawnTime } from "../../../utils/respawnTime";
import classes from "./KeyGiverItem.module.css";

interface Props {
  props: KeyGiver;
}

export const KeyGiverItem = ({ props }: Props) => {
  const { name, respawnTime } = props;

  // const { date: nextResp, type } = nextRespawnTime(nextRespawn);
  return (
    <li className={classes.KeyGiverItem}>
      <p className={classes.name}>{name}</p>
      <p className={classes.respawnTime}>{respawnTime}h</p>
      {/* <InfoText message={nextResp} type={type} /> */}
    </li>
  );
};
