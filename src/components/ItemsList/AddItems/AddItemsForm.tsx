import { Form } from "../../Form/Form";
import { ItemAddItemsRequest, items } from "./dataAddItems";
import { ConvertedItem } from "../../../types/ConvertTextToItems";
import { useItemsMutations } from "../../../hooks/useItems";
import { toast } from "react-toastify";
import { validateItems } from "./validateItems";
import classes from "./AddItems.module.css";

interface Props {
  convertedItems: ConvertedItem[];
}

export const AddItemsForm = ({ convertedItems }: Props) => {
  const { addMultipleItemsMutation, isAddingMultipleItems } =
    useItemsMutations();

  const submit = (formData: ItemAddItemsRequest) => {
    const task = formData.task;
    if (convertedItems.length === 0) {
      toast.error("Nie ma żadnych przedmiotów do dodania");
      return;
    }
    if (validateItems(convertedItems) === false) return;
    addMultipleItemsMutation({ task, items: convertedItems });
  };

  return (
    <div className={classes.Form}>
      <Form<ItemAddItemsRequest> items={items} submit={submit} />
    </div>
  );
};
