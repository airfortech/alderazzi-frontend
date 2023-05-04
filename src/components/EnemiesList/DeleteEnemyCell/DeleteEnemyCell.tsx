import { Enemy } from "../../../types/Enemy";
import { useState } from "react";
import { Button } from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import { useEnemies } from "../../../hooks/useEnemies";

import classes from "./DeleteEnemyCell.module.css";

export const DeleteEnemyCell = ({ id, name }: Enemy) => {
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
      <Modal
        title={`Czy na pewno chcesz usunąć wroga: ${name}?`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={classes.prompt}>
          <Button
            size="lg"
            variant="outlined"
            color="success"
            onClick={() => handleDeleteEnemy(id)}
          >
            Tak
          </Button>
          <Button
            size="lg"
            color="danger"
            variant="outlined"
            onClick={() => setOpen(false)}
          >
            Nie
          </Button>
        </div>
      </Modal>
    </>
  );
};
