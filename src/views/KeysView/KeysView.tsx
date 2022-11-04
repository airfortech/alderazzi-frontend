import { useMemo } from "react";

import { Table } from "../../components/Table/Table";
import { useKeyGivers } from "../../hooks/useKeyGivers";
import {
  columns,
  rows,
} from "../../components/KeyGiversList/dataKeyGiversList";
import classes from "./KeysView.module.css";

export const KeysView = () => {
  const { data, isLoading } = useKeyGivers();
  const cols = useMemo(() => columns, []);

  return (
    <div className={classes.KeysView}>
      <h2>Klucze</h2>
      {!isLoading && (
        <Table data={rows(data)} columns={cols} linkToId="/kluczodajki" />
      )}
    </div>
  );
};
