import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { AddItemsForm } from "./AddItemsForm";
import { Icon } from "../../Icon/Icon";

export const AddItems = () => {
  const [openAddItems, setOpenAddItems] = useState(false);

  return (
    <>
      <Icon
        icon="crossedSwords"
        color="success"
        size="xl"
        type="button"
        onClick={() => setOpenAddItems(true)}
      />
      <Modal
        title="Dodaj przedmioty:"
        open={openAddItems}
        onClose={() => setOpenAddItems(false)}
        closeOnBackdropClick={false}
      >
        <AddItemsForm />
      </Modal>
    </>
  );
};
