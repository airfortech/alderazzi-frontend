import { Columns, OnRowClickFunc, SortFunc } from "../../types/Table";

import { Enemy } from "../../types/Enemy";
import { Button } from "../Button/Button";
import { useEnemies } from "../../hooks/useEnemies";

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

export const columns: Columns<Enemy> = [
  { selector: "name", header: "Imię", isFilterable: true, isSortable: true },
  {
    selector: "id",
    align: "right",
    cell: id => <DeleteEnemy id={id as string} />,
  },
];
