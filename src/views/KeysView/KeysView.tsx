import { useKeyGivers } from "../../hooks/useKeyGivers";
import {
  columns,
  columns2,
  rows,
} from "../../components/KeyGiversList/dataKeyGiversList";
import { Table } from "../../components/Table/Table";
import { Table2 } from "../../components/Table/Table2";
import classes from "./KeysView.module.css";

export const KeysView = () => {
  const { data, isLoading } = useKeyGivers();

  return (
    <div className={classes.KeysView}>
      {!isLoading && data && (
        <Table2 data={rows(data)} columns={columns2} linkToId="" />
      )}
      <h2>Klucze</h2>
      {!isLoading && data && (
        <Table data={rows(data)} columns={columns} linkToId="/kluczodajki" />
      )}
    </div>
  );
};
