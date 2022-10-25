import { messages } from "../../types/responseMessages";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import { useAuth } from "../../hooks/useAuth";
import { EnemyItem } from "./EnemyItem/EnemyItem";
import { AddEnemy } from "./AddEnemy/AddEnemy";
import { Loader } from "../Loader/Loader";
import { getEnemies } from "../../api/enemies";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { UserRole } from "../../types/UserRole";
import classes from "./EnemiesList.module.css";

export const EnemiesList = () => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();
  const {
    data: enemies,
    isError,
    isLoading,
  } = useQuery(["enemies"], getEnemies, {
    select: data => data.data.enemies,
  });

  console.log(enemies);

  return (
    <div className={classes.EnemiesList}>
      {isRoleAllowed(
        [UserRole.caporegime, UserRole.consigliore],
        auth?.role
      ) && <AddEnemy error={"error"} />}
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
          {enemies?.map(({ id, name }) => (
            <EnemyItem key={id} id={id} name={name} />
          ))}
        </List>
      )}
    </div>
  );
};
