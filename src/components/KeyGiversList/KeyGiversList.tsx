import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useKeyGivers } from "../../hooks/useKeyGivers";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";
import { columns, expandableRow } from "./dataKeyGiversList";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { UserRole } from "../../types/UserRole";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { AddKeyGiver } from "./AddKeyGiver/AddKeyGiver";
import classes from "./KeyGiversList.module.css";

interface Props {}

export const KeyGiversList = ({}: Props) => {
  const { auth } = useAuth();
  const { data: keyGivers, isError, isLoading } = useKeyGivers();
  const [openAddKeyGiver, setOpenAddKeyGiver] = useState(false);

  useEffect(() => {
    setOpenAddKeyGiver(false);
  }, [keyGivers]);

  return (
    <div className={classes.KeyGiversList}>
      {isRoleAllowed(
        [UserRole.caporegime, UserRole.consigliore],
        auth?.role
      ) && (
        <MobileWrapper>
          <Button
            variant="contained"
            color="info"
            size="lg"
            icon="dwarf"
            onClick={() => setOpenAddKeyGiver(true)}
          >
            Dodaj klucznika
          </Button>
          <Modal
            title="Dodaj klucznika:"
            open={openAddKeyGiver}
            onClose={() => setOpenAddKeyGiver(false)}
            closeOnBackdropClick={false}
          >
            <AddKeyGiver />
          </Modal>
        </MobileWrapper>
      )}
      {isLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={keyGivers || []}
          columns={columns}
          title="Lista Kluczników"
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
