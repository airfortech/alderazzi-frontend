import { useMemo } from "react";
import { useKeyGiverDrops } from "../../hooks/useKeyGiverDrops";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";
import { columns, expandableRow, tableData } from "./dataKeyGiverDrops";
import classes from "./KeyGiverDropsList.module.css";

interface Props {}

export const KeyGiverDropsList = ({}: Props) => {
  const { data, isError, isLoading } = useKeyGiverDrops();

  const keyGiverDrops = useMemo(() => {
    if (data) return tableData(data);
    return [];
  }, [data]);

  return (
    <div className={classes.KeyGiverDropsList}>
      {isLoading ? (
        <Loader isLoading />
      ) : keyGiverDrops?.length === 0 || isError ? (
        <p>{"Lista jest pusta"}</p>
      ) : (
        <Table
          data={keyGiverDrops}
          columns={columns}
          title="Lista Dropów"
          titleTag="h2"
          initialSorting={{ field: "nextRespawnDate", order: "asc" }}
          stickyHeaderPosition={50}
          expandableRowsComponent={expandableRow}
          expandableRowsComponentPaddingsDisabled
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
