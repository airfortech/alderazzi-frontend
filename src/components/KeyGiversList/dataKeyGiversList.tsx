import { Columns, ExpandableRowsComponent } from "../../types/Table";
import { UserRole } from "../../types/UserRole";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { TableRowDetails } from "../TableRowDetails/TableRowDetails";
import { KeyGiverResponse } from "../../types/KeyGiver";
import { UpdateKeyGiverCell } from "./UpdateKeyGiverCell/UpdateKeyGiverCell";
import { DeleteKeyGiverCell } from "./DeleteKeyGiverCell/DeleteKeyGiverCell";
import classes from "./KeyGiversList.module.css";

export const expandableRow =
  (
    currentRole: UserRole | undefined
  ): ExpandableRowsComponent<KeyGiverResponse> =>
  data => {
    const {
      id,
      name,
      short,
      domain,
      playersToComplete,
      locations,
      description,
      comment,
    } = data;
    return (
      <TableRowDetails
        details={[
          { title: "Domena", value: domain },
          {
            title: "Potrzebni gracze",
            value: playersToComplete || "Brak danych",
          },
        ]}
        longDetails={[
          {
            title: "Lokacje:",
            value: (
              <div>
                {locations.length > 0 ? (
                  locations.map(({ id, locationId, name, domain }) => (
                    <p>
                      <span className={classes.locationId}>{locationId}</span>
                      {" - " + domain + (name && " - " + name)}
                    </p>
                  ))
                ) : (
                  <p>Brak</p>
                )}
              </div>
            ),
          },
          { title: "Opis:", value: description || "brak" },
          { title: "Komentarz:", value: comment || "brak" },
        ]}
        actions={[
          isRoleAllowed(
            [UserRole.caporegime, UserRole.consigliore],
            currentRole
          ) && <UpdateKeyGiverCell id={id} />,
          isRoleAllowed([UserRole.consigliore], currentRole) && (
            <DeleteKeyGiverCell id={id} name={name} />
          ),
        ]}
      />
    );
  };

export const columns: Columns<KeyGiverResponse> = [
  {
    selector: "name",
    header: "Nazwa",
    isFilterable: true,
    isSortable: true,
    bold: true,
  },
  {
    selector: "short",
    header: "Short",
    isFilterable: true,
    isSortable: true,
  },
  {
    selector: "respawnTime",
    header: "Czas odrodzenia (h)",
    isFilterable: true,
    isSortable: true,
    align: "right",
    cell: value => value || "brak danych",
  },
];
