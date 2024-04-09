import { Form } from "../../Form/Form";
import { ItemAddItemsRequest, items } from "./dataAddItems";
import { ConvertedItem } from "../../../types/ConvertTextToItems";
import classes from "./AddItems.module.css";

interface Props {
  convertedItems: ConvertedItem[];
}

export const AddItemsForm = ({ convertedItems }: Props) => {
  const submit = (formData: ItemAddItemsRequest) => {
    const data: ItemAddItemsRequest = { ...formData };
    const task = data.task;
    console.log("task", task);
    console.table(convertedItems);
  };
  return (
    <div className={classes.Form}>
      <Form<ItemAddItemsRequest> items={items} submit={submit} />
    </div>
  );
};
