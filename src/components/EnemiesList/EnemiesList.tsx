import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import { EnemyItem } from "./EnemyItem/EnemyItem";
import { AddEnemy } from "./AddEnemy/AddEnemy";
import { Loader } from "../Loader/Loader";
import { getEnemies } from "../../api/getEnemies";
import { saveEnemies as fetchSaveEnemies } from "../../api/saveEnemies";
import classes from "./EnemiesList.module.css";

interface Enemy {
  id: string;
  name: string;
}

export const EnemiesList = () => {
  const [enemiesList, setEnemiesList] = useState<Enemy[]>([]);
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  const handleDeleteEnemy = async (
    event: React.MouseEvent<HTMLElement>,
    enemyId: string
  ) => {
    const newEnemiesList = enemiesList.filter(({ id }) => enemyId !== id);
    setEnemiesList(newEnemiesList);
    const { status } = await fetchSaveEnemies(newEnemiesList);
    if (status === "success") setRefresh(prevState => prevState + 1);
  };

  const handleAddEnemy = async (
    event: React.FormEvent<HTMLFormElement>,
    name: string
  ) => {
    event.preventDefault();
    if (enemiesList.find(enemy => enemy.name === name)) {
      console.log(name);
      setError(name + " już jest na liście!");
      return;
    }
    if (name.trim() === "") return;
    const id = uuidv4();
    const newEnemiesList = [...enemiesList, { id, name: name.trim() }];
    setEnemiesList(newEnemiesList);
    setError("");
    const { status } = await fetchSaveEnemies(newEnemiesList);
    if (status === "success") setRefresh(prevState => prevState + 1);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getEnemies();
        setEnemiesList(data);
        setIsLoading(false);
      } catch (e) {
        setApiError("Coś poszło nie tak. Spróbuj później.");
        setIsLoading(false);
      }
    })();
  }, [refresh]);

  return (
    <div className={classes.EnemiesList}>
      <AddEnemy error={error} handleAddEnemy={handleAddEnemy} />
      <a href="/data/enemies.txt" target="_blank">
        <Button size="large" startIcon={<DescriptionIcon />}>
          Podgląd pliku
        </Button>
      </a>
      <h2>Lista Wrogów:</h2>
      {isLoading ? (
        <Loader isLoading />
      ) : enemiesList.length === 0 ? (
        <p>{apiError || "Lista jest pusta"}</p>
      ) : (
        <List component="ul" aria-labelledby="nested-list-subheader">
          {enemiesList.map(({ id, name }) => (
            <EnemyItem
              key={id}
              id={id}
              name={name}
              handleDeleteEnemy={handleDeleteEnemy}
            />
          ))}
        </List>
      )}
    </div>
  );
};
