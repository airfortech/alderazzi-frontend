import { Columns, ExpandableRowsComponent } from "../../types/Table";
import { LocationResponse } from "../../types/Location";
import { UserRole } from "../../types/UserRole";
import { TableRowDetails } from "../TableRowDetails/TableRowDetails";
import { DeleteLocationCell } from "./DeleteLocationCell/DeleteLocationCell";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import classes from "./LocationsList.module.css";
import { UpdateLocationCell } from "./UpdateLocationCell/UpdateLocationCell";

export const expandableRow =
  (
    currentRole: UserRole | undefined
  ): ExpandableRowsComponent<LocationResponse> =>
  data => {
    const { id, name, description, comment, binds } = data;
    return (
      <TableRowDetails
        longDetails={[
          { title: "Opis:", value: description || "brak" },
          { title: "Komentarz:", value: comment || "brak" },
          {
            title: "Bindy:",
            value: (
              <div>
                {binds.length > 0 ? (
                  binds.map((bind, i) => <p key={i}>{bind}</p>)
                ) : (
                  <p>Brak</p>
                )}
              </div>
            ),
          },
        ]}
        actions={[
          <div className={classes.actions}>
            {isRoleAllowed(
              [UserRole.caporegime, UserRole.consigliore],
              currentRole
            ) && <UpdateLocationCell id={id} />}
            {isRoleAllowed([UserRole.consigliore], currentRole) && (
              <DeleteLocationCell id={id} name={name} />
            )}
          </div>,
        ]}
      />
    );
  };

export const columns: Columns<LocationResponse> = [
  {
    selector: "locationId",
    header: "Id",
    isFilterable: true,
    isSortable: true,
    bold: true,
  },
  {
    selector: "internalId",
    header: "Internal Id",
    isFilterable: true,
    isSortable: true,
    align: "left",
  },
  {
    selector: "name",
    header: "Nazwa",
    isFilterable: true,
    isSortable: true,
  },
  {
    selector: "domain",
    header: "Domena",
    isFilterable: true,
    isSortable: true,
    align: "right",
  },
];
