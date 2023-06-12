import { useEffect, useState } from "react";
import { useKeyGivers } from "../../../hooks/useKeyGivers";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../Button/Button";
import { UpdateKeyGiver } from "../UpdateKeyGiver/UpdateKeyGiver";

interface Props {
  id: string;
}

export const UpdateKeyGiverCell = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const { updateKeyGiverSuccess } = useKeyGivers();

  useEffect(() => {
    setOpen(false);
  }, [updateKeyGiverSuccess]);

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
        title="Edytuj klucznika:"
        open={open}
        onClose={() => setOpen(false)}
        closeOnBackdropClick={false}
      >
        <UpdateKeyGiver id={id} />
      </Modal>
    </>
  );
};
