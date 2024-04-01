import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useKeys } from "../../hooks/useKeys";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";
import { columns, expandableRow } from "./dataKeysList";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { UserRole } from "../../types/UserRole";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { AddKey } from "./AddKey/AddKey";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import classes from "./KeysList.module.css";

export const KeysList = () => {
  const { auth } = useAuth();
  const { data: keys, isError, isLoading } = useKeys();
  const [openAddKey, setOpenAddKey] = useState(false);

  useEffect(() => {
    setOpenAddKey(false);
  }, [keys]);

  return (
    <div className={classes.KeysList}>
      {isRoleAllowed(
        [UserRole.caporegime, UserRole.consigliore],
        auth?.role
      ) && (
        <MobileWrapper>
          <Button
            variant="contained"
            color="info"
            size="lg"
            icon="skeletonKey"
            onClick={() => setOpenAddKey(true)}
          >
            Dodaj klucz
          </Button>
          <Modal
            title="Dodaj klucz:"
            open={openAddKey}
            onClose={() => setOpenAddKey(false)}
            closeOnBackdropClick={false}
          >
            <AddKey />
          </Modal>
        </MobileWrapper>
      )}
      {isLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={keys || []}
          columns={columns}
          title="Lista Kluczy"
          titleTag="h2"
          initialSorting={{ field: "name", order: "asc" }}
          stickyHeaderPosition={50}
          expandableRowsComponent={expandableRow(auth?.role)}
          expandableRowsComponentPaddingsDisabled
          horizontalScroll="top"
          counter
        />
      )}
    </div>
  );
};
