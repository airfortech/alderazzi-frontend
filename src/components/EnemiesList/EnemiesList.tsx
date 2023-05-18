import { UserRole } from "../../types/UserRole";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useEnemies } from "../../hooks/useEnemies";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { Table } from "../Table/Table";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { columns, expandableRow } from "./dataEnemiesList";

import classes from "./EnemiesList.module.css";
import { Modal } from "../Modal/Modal";
import { AddEnemy } from "./AddEnemy/AddEnemy";

export const EnemiesList = () => {
  const { auth } = useAuth();
  const { data: enemies, isError, isLoading, isAddingEnemy } = useEnemies();
  const [openAddEnemy, setOpenAddEnemy] = useState(false);

  // INFO: closes modal after fetched new data (happens after new data is added)
  useEffect(() => {
    setOpenAddEnemy(false);
  }, [enemies]);

  return (
    <div className={classes.EnemiesList}>
      <MobileWrapper>
        {isRoleAllowed(
          [UserRole.caporegime, UserRole.consigliore],
          auth?.role
        ) && (
          <>
            <Button
              variant="contained"
              color="danger"
              size="lg"
              icon="womanElfFace"
              onClick={() => setOpenAddEnemy(true)}
            >
              Dodaj Wroga
            </Button>
            <Modal
              title="Dodaj wroga:"
              open={openAddEnemy}
              onClose={() => setOpenAddEnemy(false)}
              closeOnBackdropClick={false}
            >
              <AddEnemy />
            </Modal>
          </>
        )}
      </MobileWrapper>
      {isLoading ? (
        <Loader isLoading />
      ) : enemies?.length === 0 || isError ? (
        <p>{"Lista jest pusta"}</p>
      ) : (
        <Table
          data={enemies}
          columns={columns(auth?.role)}
          title="Lista Wrogów"
          titleTag="h2"
          initialSorting={{ field: "name", order: "asc" }}
          stickyHeaderPosition={50}
          expandableRowsComponent={expandableRow(auth?.role)}
          expandableRowsComponentPaddingsDisabled
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
