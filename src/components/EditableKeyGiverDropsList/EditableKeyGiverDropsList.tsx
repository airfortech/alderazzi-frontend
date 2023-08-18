import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useKeyGiverDrops } from "../../hooks/useKeyGiverDrops";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { Button } from "../Button/Button";
import {
  columns,
  expandableRow,
  tableData,
} from "./dataEditableKeyGiverDropsList";
import classes from "./EditableKeyGiverDropsList.module.css";

export const EditableKeyGiverDropsList = () => {
  const {
    editableKeyGiverDrops,
    isEditableKeyGiverDropsError,
    isEditableKeyGiverDropsLoading,
  } = useKeyGiverDrops();

  const editableKeyGiverDropsData = useMemo(() => {
    if (editableKeyGiverDrops) return tableData(editableKeyGiverDrops);
    return [];
  }, [editableKeyGiverDrops]);

  return (
    <div className={classes.EditableKeyGiverDropsList}>
      {isEditableKeyGiverDropsLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={editableKeyGiverDropsData}
          columns={columns}
          title="Lista Dropów do Edycji"
          titleTag="h2"
          initialSorting={{ field: "createdAt", order: "desc" }}
          stickyHeaderPosition={100}
          expandableRowsComponent={expandableRow}
          expandableRowsComponentPaddingsDisabled
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
