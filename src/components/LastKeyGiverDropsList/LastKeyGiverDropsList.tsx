import { useMemo } from "react";
import {
  columns,
  expandableRow,
  tableData,
} from "../KeyGiverDropsList/dataKeyGiverDrops";
import { useKeyGiverDrops } from "../../hooks/useKeyGiverDrops";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { options } from "./dataChooseDays";
import { useSelect } from "../Inputs/Select/useSelect";
import classes from "./LastKeyGiverDropsList.module.css";

export const LastKeyGiverDropsList = () => {
  const { value, Select } = useSelect("7");
  const { lastKeyGiverDrops, isLastKeyGiverDropsLoading } = useKeyGiverDrops(
    Number(value)
  );

  const keyGiverDropsData = useMemo(() => {
    if (lastKeyGiverDrops) return tableData(lastKeyGiverDrops);
    return [];
  }, [lastKeyGiverDrops]);

  return (
    <div className={classes.LastKeyGiverDropsList}>
      <MobileWrapper>
        <Select
          placeholder="Wyświetl dropy z ostatnich:"
          options={options}
          icon="calendar"
          className={classes.test}
        />
      </MobileWrapper>
      {isLastKeyGiverDropsLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={keyGiverDropsData}
          columns={columns}
          title="Ostatnie dropy"
          titleTag="h2"
          initialSorting={{ field: "dropDate", order: "desc" }}
          stickyHeaderPosition={100}
          expandableRowsComponent={expandableRow}
          expandableRowsComponentPaddingsDisabled
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
