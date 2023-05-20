import { useState } from "react";
import { useEnemies } from "../../../hooks/useEnemies";
import { Button } from "../../Button/Button";
import { Prompt } from "../../Prompt/Prompt";

interface Props {
  id: string;
  name: string;
}

export const DeleteEnemyCell = ({ id, name }: Props) => {
  const [open, setOpen] = useState(false);
  const { deleteEnemyMutation } = useEnemies();

  const handleDeleteEnemy = (enemyId: string) => {
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
