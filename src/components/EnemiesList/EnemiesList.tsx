import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import { EnemyItem } from "./EnemyItem/EnemyItem";
import { AddEnemy } from "./AddEnemy/AddEnemy";
import { Loader } from "../Loader/Loader";
import { getEnemies } from "../../api/enemies";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { UserRole } from "../../types/UserRole";
import { useAuth } from "../../hooks/useAuth";
import classes from "./EnemiesList.module.css";
import { messages } from "../../types/responseMessages";

export const EnemiesList = () => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();
  const {
    data: enemies,
    error,
    isError,
    isLoading,
  } = useQuery(["enemies"], getEnemies, {
    select: data => data.data.enemies,
    onError: error => {
      const message = (error as any)?.response?.data.message;
      console.log(message ? message : "Later.");
      toast.error(message ? message : messages.default);
    },
    // onSuccess: data => console.log(data.message);
  });

  console.log(error);

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
      ) : enemies?.length === 0 ? (
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
