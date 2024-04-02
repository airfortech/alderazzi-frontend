import { Form } from "../../Form/Form";
import { convertTextToItems } from "./convertTextToItems";
import { ItemAddItemsRequest, items } from "./dataAddItems";
import classes from "./AddItems.module.css";

export const AddItemsForm = () => {
  const submit = (formData: ItemAddItemsRequest) => {
    const data: ItemAddItemsRequest = { ...formData };
    console.table(convertTextToItems(data.data));
  };
  return (
    <div className={classes.AddItems}>
      <Form<ItemAddItemsRequest> items={items} submit={submit} />
    </div>
  );
};
