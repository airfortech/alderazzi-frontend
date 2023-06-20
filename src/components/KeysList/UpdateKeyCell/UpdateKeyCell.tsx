import { useEffect, useState } from "react";
import { useKeys } from "../../../hooks/useKeys";
import { Modal } from "../../Modal/Modal";
import { UpdateKey } from "../UpdateKey/UpdateKey";
import { Button } from "../../Button/Button";

interface Props {
  id: string;
}

export const UpdateKeyCell = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const { updateKeySuccess } = useKeys();

  useEffect(() => {
    setOpen(false);
  }, [updateKeySuccess]);

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
        title="Edytuj klucz:"
        open={open}
        onClose={() => setOpen(false)}
        closeOnBackdropClick={false}
      >
        <UpdateKey id={id} />
      </Modal>
    </>
  );
};
