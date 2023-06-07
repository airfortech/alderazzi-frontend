import { useState } from "react";
import { useKeys } from "../../../hooks/useKeys";
import { Prompt } from "../../Prompt/Prompt";
import { Button } from "../../Button/Button";
import { useKeyGiverDrops } from "../../../hooks/useKeyGiverDrops";

interface Props {
  id: string;
}

export const DeleteKeyGiverDropCell = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const { deleteKeyGiverDropMutation } = useKeyGiverDrops();

  const handleDeleteKeyGiverDrop = (keyGiverDropId: string) => {
    deleteKeyGiverDropMutation.mutate(keyGiverDropId);
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
        title={`Czy na pewno chcesz usunąć drop:`}
        open={open}
        onClose={() => setOpen(false)}
        onAccept={() => handleDeleteKeyGiverDrop(id)}
      />
    </>
  );
};
