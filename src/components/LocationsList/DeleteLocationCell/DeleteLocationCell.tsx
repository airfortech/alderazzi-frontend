import { useState } from "react";
import { Prompt } from "../../Prompt/Prompt";
import { Button } from "../../Button/Button";
import { useLocations } from "../../../hooks/useLocations";

interface Props {
  id: string;
  name: string;
}

export const DeleteLocationCell = ({ id, name }: Props) => {
  const [open, setOpen] = useState(false);
  const { deleteLocationMutation } = useLocations();

  const handleDeleteLocation = (locationId: string) => {
    deleteLocationMutation.mutate(locationId);
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
        title={`Czy na pewno chcesz usunąć lokację: ${name}?`}
        open={open}
        onClose={() => setOpen(false)}
        onAccept={() => handleDeleteLocation(id)}
      />
    </>
  );
};
