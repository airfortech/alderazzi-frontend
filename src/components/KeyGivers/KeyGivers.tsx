import { useKeyGivers } from "../../hooks/useKeyGivers";
import { columns, handleDetails, rows } from "./dataKeyGiversList";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";

import classes from "./KeyGivers.module.css";

export const KeyGivers = () => {
  const { data: keyGivers, isError, isLoading } = useKeyGivers();

  return (
    <div className={classes.KeyGivers}>
      {isLoading ? (
        <Loader isLoading />
      ) : keyGivers?.length === 0 || isError ? (
        <p>{"Lista jest pusta"}</p>
      ) : (
        <p>Keygivers</p>
      )}
    </div>
  );
};
