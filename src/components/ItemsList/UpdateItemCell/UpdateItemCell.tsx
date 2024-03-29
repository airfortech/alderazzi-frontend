import { ItemResponse } from "../../../types/Item";
import { useEffect, useState } from "react";
import { useItemsMutations } from "../../../hooks/useItems";
import { Button } from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import { UpdateItem } from "../UpdateItem/UpdateItem";

interface Props {
  data: ItemResponse;
}

export const UpdateItemCell = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const { updateItemSuccess } = useItemsMutations();

  useEffect(() => {
    setOpen(false);
  }, [updateItemSuccess]);

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
        title="Edytuj przedmiot:"
        open={open}
        onClose={() => setOpen(false)}
        closeOnBackdropClick={false}
      >
        <UpdateItem data={data} />
      </Modal>
    </>
  );
};
