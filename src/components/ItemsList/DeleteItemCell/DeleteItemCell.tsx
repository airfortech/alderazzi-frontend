import { useState } from "react";
import { Prompt } from "../../Prompt/Prompt";
import { Button } from "../../Button/Button";
import { UseMutationResult } from "@tanstack/react-query";
import { ApiResponse } from "../../../types/responseMessages";

interface Props {
  id: string;
  short: string;
  deleteItemMutation?: UseMutationResult<ApiResponse, unknown, string, unknown>;
}

export const DeleteItemCell = ({ id, short, deleteItemMutation }: Props) => {
  const [open, setOpen] = useState(false);

  const handleDeleteItem = (itemId: string) => {
    if (!deleteItemMutation) return;
    deleteItemMutation.mutate(itemId);
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
        title={`Czy na pewno chcesz usunąć przedmiot: ${short}?`}
        open={open}
        onClose={() => setOpen(false)}
        onAccept={() => handleDeleteItem(id)}
      />
    </>
  );
};
