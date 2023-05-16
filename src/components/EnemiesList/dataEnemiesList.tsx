import { Columns, ExpandableRowsComponent } from "../../types/Table";
import { UserRole } from "../../types/UserRole";
import { EnemyResponse } from "../../types/Enemy";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { DeleteEnemyCell } from "./DeleteEnemyCell/DeleteEnemyCell";
import { TableRowDetails } from "../TableRowDetails/TableRowDetails";

export const expandableRow =
  (currentRole: UserRole | undefined): ExpandableRowsComponent<EnemyResponse> =>
  data => {
    const { id, name, race, level, profession, weapon, comment } = data;
    return (
      <TableRowDetails
        details={[
          { title: "Rasa:", value: race },
          { title: "Poziom:", value: level },
          { title: "Zawód:", value: profession },
          { title: "Broń:", value: weapon },
        ]}
        longDetails={[{ title: "Komentarz:", value: comment || "brak" }]}
        actions={[
          isRoleAllowed(
            [UserRole.caporegime, UserRole.consigliore],
            currentRole
          ) && <DeleteEnemyCell id={id} name={name} />,
        ]}
      />
    );
  };

// INFO: role depending Table columns rendering
export const columns = (
  currentRole: UserRole | undefined
): Columns<EnemyResponse> => [
  {
    selector: "name",
    header: "Imię",
    isFilterable: true,
    isSortable: true,
    color: "var(--color-20)",
    bold: true,
  },
  {
    selector: "short",
    header: "Opis",
    isFilterable: true,
    isSortable: true,
    align: "right",
  },
  {
    selector: "profession",
    isFilterable: true,
    isVisible: false,
  },
  {
    selector: "guild",
    header: "Stow.",
    isFilterable: true,
    isSortable: true,
    align: "right",

    cell: value => value.toString().toUpperCase(),
  },
];
