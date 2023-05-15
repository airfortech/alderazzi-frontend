import { Columns, ExpandableRowsComponent } from "../../types/Table";
import { UserRole } from "../../types/UserRole";
import { EnemyResponse } from "../../types/Enemy";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { DeleteEnemyCell } from "./DeleteEnemyCell/DeleteEnemyCell";
import { EnemiesExpandableRow } from "./EnemiesExpandableRow/EnemiesExpandableRow";

export const expandableRow: ExpandableRowsComponent<EnemyResponse> = data => (
  <EnemiesExpandableRow data={data} />
);

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
  // {
  //   selector: "id",
  //   align: "right",
  //   isVisible: isRoleAllowed(
  //     [UserRole.caporegime, UserRole.consigliore],
  //     currentRole
  //   ),
  //   // cell: (id, props) => (
  //   //   <DeleteEnemyCell id={id as string} name={props.name} />
  //   // ),
  // },
];
