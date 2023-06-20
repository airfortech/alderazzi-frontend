import { useState } from "react";
import { useKeys } from "../../../hooks/useKeys";
import { Prompt } from "../../Prompt/Prompt";
import { Button } from "../../Button/Button";

interface Props {
  id: string;
  name: string;
}

export const DeleteKeyCell = ({ id, name }: Props) => {
  const [open, setOpen] = useState(false);
  const { deleteKeyMutation } = useKeys();

  const handleDeleteKey = (keyId: string) => {
    deleteKeyMutation.mutate(keyId);
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
        title={`Czy na pewno chcesz usunąć klucz: ${name}?`}
        open={open}
        onClose={() => setOpen(false)}
        onAccept={() => handleDeleteKey(id)}
      />
    </>
  );
};
