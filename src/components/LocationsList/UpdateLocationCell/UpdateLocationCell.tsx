import { useEffect, useState } from "react";
import { Prompt } from "../../Prompt/Prompt";
import { Button } from "../../Button/Button";
import { useLocations } from "../../../hooks/useLocations";
import { Modal } from "../../Modal/Modal";
import { UpdateLocation } from "../UpdateLocation/UpdateLocation";

interface Props {
  id: string;
}

export const UpdateLocationCell = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const { data: locations } = useLocations();

  useEffect(() => {
    setOpen(false);
  }, [locations]);

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
        title="Edytuj lokację:"
        open={open}
        onClose={() => setOpen(false)}
        closeOnBackdropClick={false}
      >
        <UpdateLocation id={id} />
      </Modal>
    </>
  );
};
