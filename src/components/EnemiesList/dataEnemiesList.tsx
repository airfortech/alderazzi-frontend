import { Columns } from "../../types/Table";
import { UserRole } from "../../types/UserRole";
import { Enemy } from "../../types/Enemy";
import { Button } from "../Button/Button";
import { useEnemies } from "../../hooks/useEnemies";
import { isRoleAllowed } from "../../utils/isRoleAllowed";

const DeleteEnemy = ({ id }: { id: string }) => {
  const { deleteEnemyMutation } = useEnemies();
  const handleDeleteEnemy = async (enemyId: string) => {
    deleteEnemyMutation.mutate(enemyId);
  };
  return (
    <Button
      icon="basket"
      color="danger"
      variant="outlined"
      size="normal"
      onClick={() => handleDeleteEnemy(id)}
    >
      Usuń
    </Button>
  );
};

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
    cell: id => <DeleteEnemy id={id as string} />,
  },
];
