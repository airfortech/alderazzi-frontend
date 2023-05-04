import { Columns } from "../../types/Table";
import { UserRole } from "../../types/UserRole";
import { Enemy } from "../../types/Enemy";
import { isRoleAllowed } from "../../utils/isRoleAllowed";
import { DeleteEnemyCell } from "./DeleteEnemyCell/DeleteEnemyCell";

// INFO: role depending Table columns rendering
export const columns = (currentRole: UserRole | undefined): Columns<Enemy> => [
  { selector: "name", header: "Imię", isFilterable: true, isSortable: true },
  {
    selector: "id",
    align: "right",
    isVisible: isRoleAllowed(
      [UserRole.caporegime, UserRole.consigliore],
      currentRole
    ),
    cell: (id, props) => (
      <DeleteEnemyCell id={id as string} name={props.name} />
    ),
  },
];
