import { useEffect, useState } from "react";
import { useEnemies } from "../../../hooks/useEnemies";
import { Button } from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import { UpdateEnemy } from "../UpdateEnemy/UpdateEnemy";

interface Props {
  id: string;
}

export const UpdateEnemyCell = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const { data: enemies } = useEnemies();

  useEffect(() => {
    setOpen(false);
  }, [enemies]);

  return (
    <>
      <Button
        icon="feather"
        color="warning"
        variant="outlined"
        size="normal"
        onClick={() => setOpen(true)}
      >
        Edytuj
      </Button>
      <Modal
        title="Edytuj wroga:"
        open={open}
        onClose={() => setOpen(false)}
        closeOnBackdropClick={false}
      >
        <UpdateEnemy id={id} />
      </Modal>
    </>
  );
};
