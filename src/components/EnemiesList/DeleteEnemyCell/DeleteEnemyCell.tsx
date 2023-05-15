import { useState } from "react";
import { Button } from "../../Button/Button";
import { EnemyResponse } from "../../../types/Enemy";
import { Prompt } from "../../Prompt/Prompt";
import { useEnemies } from "../../../hooks/useEnemies";

export const DeleteEnemyCell = ({ id, name }: EnemyResponse) => {
  const [open, setOpen] = useState(false);
  const { deleteEnemyMutation } = useEnemies();

  const handleDeleteEnemy = async (enemyId: string) => {
    deleteEnemyMutation.mutate(enemyId);
  };

  return (
    <>
      <Button
        icon="basket"
        color="danger"
        variant="outlined"
        size="normal"
        onClick={() => setOpen(true)}
      >
        Usuń
      </Button>
      <Prompt
        title={`Czy na pewno chcesz usunąć wroga: ${name}?`}
        open={open}
        onClose={() => setOpen(false)}
        onAccept={() => handleDeleteEnemy(id)}
      />
    </>
  );
};
