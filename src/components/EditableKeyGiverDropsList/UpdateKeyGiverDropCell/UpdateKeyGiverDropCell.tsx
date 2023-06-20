import { useEffect, useState } from "react";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import { useKeyGiverDrops } from "../../../hooks/useKeyGiverDrops";
import { UpdateKeyGiverDrop } from "../UpdateKeyGiverDrop/UpdateKeyGiverDrop";

interface Props {
  id: string;
}

export const UpdateKeyGiverDropCell = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const { updateKeyGiverDropSuccess } = useKeyGiverDrops();

  useEffect(() => {
    setOpen(false);
  }, [updateKeyGiverDropSuccess]);

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
        title="Edytuj drop:"
        open={open}
        onClose={() => setOpen(false)}
        closeOnBackdropClick={false}
      >
        <UpdateKeyGiverDrop id={id} />
      </Modal>
    </>
  );
};
