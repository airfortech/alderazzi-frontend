import { UserRole } from "../../types/UserRole";
import { useAuth } from "../../hooks/useAuth";
import { useEnemies } from "../../hooks/useEnemies";
import { AddEnemy } from "./AddEnemy/AddEnemy";
import Button from "@mui/material/Button";
import { Loader } from "../Loader/Loader";
import { Icon } from "../Icon/Icon";
import { Table } from "../Table/Table";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { columns, expandableRow } from "./dataEnemiesList";

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
          expandableRowsComponent={expandableRow}
        />
      )}
    </div>
  );
};
