import { useState } from "react";
import { useKeyGivers } from "../../../hooks/useKeyGivers";
import { Prompt } from "../../Prompt/Prompt";
import { Button } from "../../Button/Button";

interface Props {
  id: string;
  name: string;
}

export const DeleteKeyGiverCell = ({ id, name }: Props) => {
  const [open, setOpen] = useState(false);
  const { deleteKeyGiverMutation } = useKeyGivers();

  const handleDeleteKeyGiver = (keyGiverId: string) => {
    deleteKeyGiverMutation.mutate(keyGiverId);
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
        title={`Czy na pewno chcesz usunąć klucznika: ${name}?`}
        open={open}
        onClose={() => setOpen(false)}
        onAccept={() => handleDeleteKeyGiver(id)}
      />
    </>
  );
};
