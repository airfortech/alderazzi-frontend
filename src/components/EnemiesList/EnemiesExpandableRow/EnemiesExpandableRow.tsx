import { List, ListItem, ListItemText } from "@mui/material";
import { EnemyResponse } from "../../../types/Enemy";
import { DeleteEnemyCell } from "../DeleteEnemyCell/DeleteEnemyCell";
import classes from "./EnemiesExpandableRow.module.css";
import { Icon } from "../../Icon/Icon";

interface Props {
  data: EnemyResponse;
}

export const EnemiesExpandableRow = ({ data }: Props) => {
  const { id, name, level, profession, race, weapon, comment } = data;
  return (
    <div className={classes.EnemiesExpandableRow}>
      <div className={classes.container}>
        <List dense disablePadding>
          <ListItem disablePadding>
            <ListItemText primary="Rasa:" secondary={race} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Poziom:" secondary={level} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Zawód:" secondary={profession} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Broń:" secondary={weapon} />
          </ListItem>
        </List>
        {/* <ul className={classes.info}>
          <li>Rasa: {race}</li>
          <li>Poziom: {level}</li>
          <li>Zawód: {profession}</li>
          <li>Broń: {weapon}</li>
        </ul> */}
        <div className={classes.actions}>
          <DeleteEnemyCell id={id} name={name} />
          <DeleteEnemyCell id={id} name={name} />
        </div>
      </div>
      <ListItem dense disablePadding>
        <ListItemText primary="Komentarz:" secondary={comment} />
      </ListItem>
    </div>
  );
};
