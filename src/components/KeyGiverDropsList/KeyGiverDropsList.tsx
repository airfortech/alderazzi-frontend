import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useKeyGiverDrops } from "../../hooks/useKeyGiverDrops";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { columns, expandableRow, tableData } from "./dataKeyGiverDrops";
import { AddKeyGiverDrop } from "./AddKeyGiverDrop/AddKeyGiverDrop";
import classes from "./KeyGiverDropsList.module.css";

interface Props {}

export const KeyGiverDropsList = ({}: Props) => {
  const { keyGiverDrops, isKeyGiverDropsLoading, addKeyGiverDropSuccess } =
    useKeyGiverDrops();
  const [openAddKeyGiverDrop, setOpenAddKeyGiverDrop] = useState(false);

  const keyGiverDropsData = useMemo(() => {
    if (keyGiverDrops) return tableData(keyGiverDrops);
    return [];
  }, [keyGiverDrops]);

  useEffect(() => {
    setOpenAddKeyGiverDrop(false);
  }, [addKeyGiverDropSuccess]);

  return (
    <div className={classes.KeyGiverDropsList}>
      <MobileWrapper>
        <div className={classes.actions}>
          <Button
            variant="contained"
            color="info"
            size="lg"
            icon="chest"
            onClick={() => setOpenAddKeyGiverDrop(true)}
          >
            Dodaj drop
          </Button>
        </div>
        <Modal
          title="Dodaj drop:"
          open={openAddKeyGiverDrop}
          onClose={() => setOpenAddKeyGiverDrop(false)}
          closeOnBackdropClick={false}
        >
          <AddKeyGiverDrop />
        </Modal>
      </MobileWrapper>
      {isKeyGiverDropsLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={keyGiverDropsData}
          columns={columns}
          title="Najbliższe respawny"
          titleTag="h2"
          initialSorting={{ field: "nextRespawnDate", order: "asc" }}
          stickyHeaderPosition={100}
          expandableRowsComponent={expandableRow}
          expandableRowsComponentPaddingsDisabled
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
