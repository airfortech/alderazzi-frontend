import List from "@mui/material/List";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import { useAuth } from "../../hooks/useAuth";
import { useEnemies } from "../../hooks/useEnemies";
import { EnemyItem } from "./EnemyItem/EnemyItem";
import { AddEnemy } from "./AddEnemy/AddEnemy";
import { Loader } from "../Loader/Loader";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { UserRole } from "../../types/UserRole";
import classes from "./EnemiesList.module.css";

export const EnemiesList = () => {
  const { auth } = useAuth();
  const { data: enemies, isError, isLoading } = useEnemies();

  return (
    <div className={classes.EnemiesList}>
      {isRoleAllowed(
        [UserRole.caporegime, UserRole.consigliore],
        auth?.role
      ) && <AddEnemy />}
      <a href="/data/enemies.txt" target="_blank">
        <Button size="large" startIcon={<DescriptionIcon />}>
          Podgląd pliku
        </Button>
      </a>
      <h2>Lista Wrogów:</h2>
      {isLoading ? (
        <Loader isLoading />
      ) : enemies?.length === 0 || isError ? (
        <p>{"Lista jest pusta"}</p>
      ) : (
        <List component="ul" aria-labelledby="nested-list-subheader">
          {enemies?.map(({ id, name }: { id: string; name: string }) => (
            <EnemyItem key={id} id={id} name={name} />
          ))}
        </List>
      )}
    </div>
  );
};
