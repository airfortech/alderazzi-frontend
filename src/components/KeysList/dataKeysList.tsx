import { Columns, ExpandableRowsComponent } from "../../types/Table";
import { KeyResponse } from "../../types/Key";
import { UserRole } from "../../types/UserRole";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { UpdateKeyCell } from "./UpdateKeyCell/UpdateKeyCell";
import { DeleteKeyCell } from "./DeleteKeyCell/DeleteKeyCell";
import { TableRowDetails } from "../TableRowDetails/TableRowDetails";
import classes from "./KeysList.module.css";

export const expandableRow =
  (currentRole: UserRole | undefined): ExpandableRowsComponent<KeyResponse> =>
  data => {
    const { id, name, description, comment } = data;
    return (
      <TableRowDetails
        longDetails={[
          { title: "Opis:", value: description || "brak" },
          { title: "Komentarz:", value: comment || "brak" },
        ]}
        actions={[
          <div className={classes.actions}>
            {isRoleAllowed(
              [UserRole.caporegime, UserRole.consigliore],
              currentRole
            ) && <UpdateKeyCell id={id} />}
            {isRoleAllowed([UserRole.consigliore], currentRole) && (
              <DeleteKeyCell id={id} name={name} />
            )}
          </div>,
        ]}
      />
    );
  };

export const columns: Columns<KeyResponse> = [
  {
    selector: "name",
    header: "Nazwa",
    isFilterable: true,
    isSortable: true,
    bold: true,
  },
  // {
  //   selector: "treasury",
  //   header: "Skarbiec",
  //   isFilterable: true,
  //   isSortable: true,
  //   align: "right",
  // },
  {
    selector: "domain",
    header: "Domena",
    isFilterable: true,
    isSortable: true,
    align: "right",
  },
];
