import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { useAuth } from "../../hooks/useAuth";
import { useEnemies } from "../../hooks/useEnemies";
import { EnemyItem } from "./EnemyItem/EnemyItem";
import { AddEnemy } from "./AddEnemy/AddEnemy";
import { Loader } from "../Loader/Loader";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { UserRole } from "../../types/UserRole";
import classes from "./EnemiesList.module.css";
import { Icon } from "../Icon/Icon";
import { Table } from "../Table/Table";
import { columns } from "./dataEnemiesList";

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
        <Button size="large" startIcon={<Icon icon="file" size="lg" />}>
          Podgląd pliku
        </Button>
      </a>
      {isLoading ? (
        <Loader isLoading />
      ) : enemies?.length === 0 || isError ? (
        <p>{"Lista jest pusta"}</p>
      ) : (
        <Table
          data={enemies}
          columns={columns(auth?.role)}
          title="Lista Wrogów"
          titleTag="h2"
          initialSorting={{ field: "name", order: "asc" }}
          stickyHeaderPosition={50}
        />
      )}
    </div>
  );
};
