import { UserRole } from "../../types/UserRole";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useLocations } from "../../hooks/useLocations";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";
import { AddLocation } from "./AddLocation/AddLocation";
import { columns, expandableRow } from "./dataLocationsList";
import classes from "./LocationsList.module.css";

export const LocationsList = () => {
  const { auth } = useAuth();
  const { data: locations, isError, isLoading } = useLocations();
  const [openAddLocation, setOpenAddLocation] = useState(false);

  useEffect(() => {
    setOpenAddLocation(false);
  }, [locations]);

  return (
    <div className={classes.LocationsList}>
      {isRoleAllowed(
        [UserRole.caporegime, UserRole.consigliore],
        auth?.role
      ) && (
        <MobileWrapper>
          <Button
            variant="contained"
            color="info"
            size="lg"
            icon="map"
            onClick={() => setOpenAddLocation(true)}
          >
            Dodaj lokację
          </Button>
          <Modal
            title="Dodaj lokację:"
            open={openAddLocation}
            onClose={() => setOpenAddLocation(false)}
            closeOnBackdropClick={false}
          >
            <AddLocation />
          </Modal>
        </MobileWrapper>
      )}
      {isLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={locations || []}
          columns={columns}
          title="Lista Lokacji"
          titleTag="h2"
          initialSorting={{ field: "locationId", order: "asc" }}
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
