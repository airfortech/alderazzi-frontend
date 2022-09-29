import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "@mui/material/List";
import { EnemyItem } from "./EnemyItem/EnemyItem";
import { AddEnemy } from "./AddEnemy/AddEnemy";
import classes from "./EnemiesList.module.css";

interface Enemy {
  id: string;
  name: string;
}

const startingEnemiesList: Enemy[] = [
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

  const handleAddEnemy = (
    event: React.FormEvent<HTMLFormElement>,
    name: string
  ) => {
    event.preventDefault();
    if (enemiesList.find(enemy => enemy.name === name)) {
      console.log(name);
      return;
    }
    const id = uuidv4();
    setEnemiesList(prevState => [...prevState, { id, name }]);
  };

  return (
    <div className={classes.EnemiesList}>
      <AddEnemy handleAddEnemy={handleAddEnemy} />
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
