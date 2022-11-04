import { useKeyGivers } from "../../hooks/useKeyGivers";
import { columns, rows } from "../KeyGiversList/dataKeyGiversList";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";

import classes from "./KeyGivers.module.css";

export const KeyGivers = () => {
  const { data: keyGivers, isError, isLoading } = useKeyGivers();

  return (
    <div className={classes.KeyGivers}>
      <h2>Lista Kluczodajek:</h2>
      {isLoading ? (
        <Loader isLoading />
      ) : keyGivers?.length === 0 || isError ? (
        <p>{"Lista jest pusta"}</p>
      ) : (
        <Table data={rows(keyGivers)} columns={columns} />
      )}
    </div>
  );
};
