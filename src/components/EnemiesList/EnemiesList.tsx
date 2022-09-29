import { useState } from "react";
import List from "@mui/material/List";
import { EnemyItem } from "./EnemyItem/EnemyItem";
import classes from "./EnemiesList.module.css";

const startingEnemiesList = [
  {
    id: "232533245",
    name: "Joe",
  },
  {
    id: "9897978",
    name: "Jane",
  },
];

export const EnemiesList = () => {
  const [enemiesList, setEnemiesList] = useState(startingEnemiesList);

  const handleDeleteEnemy = (
    event: React.MouseEvent<HTMLElement>,
    enemyId: string
  ) =>
    setEnemiesList(prevState => prevState.filter(({ id }) => enemyId !== id));

  return (
    <div className={classes.EnemiesList}>
      <h2>Lista Wrogów:</h2>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="ul"
        aria-labelledby="nested-list-subheader"
      >
        {enemiesList.map(({ id, name }) => (
          <EnemyItem
            key={id}
            id={id}
            name={name}
            handleDeleteEnemy={handleDeleteEnemy}
          />
        ))}
      </List>
    </div>
  );
};
