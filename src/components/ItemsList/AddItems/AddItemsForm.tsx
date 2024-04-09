import { Form } from "../../Form/Form";
import { convertTextToItems } from "./convertTextToItems";
import { ItemAddItemsRequest, items } from "./dataAddItems";
import { filterItems } from "./filterItems";
import classes from "./AddItems.module.css";

export const AddItemsForm = () => {
  const submit = (formData: ItemAddItemsRequest) => {
    const data: ItemAddItemsRequest = { ...formData };
    const task = data.task;
    const finalItems = filterItems(convertTextToItems(data.data));
    console.log("task", task);
    console.table(finalItems);
  };
  return (
    <div className={classes.Form}>
      <Form<ItemAddItemsRequest> items={items} submit={submit} />
    </div>
  );
};
