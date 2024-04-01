import { ItemAddRequest } from "../../../../types/Item";
import { ItemTypes } from "../../../../types/ItemTypes";
import { useItemsMutations } from "../../../../hooks/useItems";
import { Form } from "../../../Form/Form";
import { formDataValidator } from "../../../../utils/formDataValidatr";
import { items } from "./dataJewellery";
import { validationSchema } from "../dataAddItemValidationOptions";
import classes from "../AddItem.module.css";

export const Jewellery = () => {
  const { addOtherMutation, isAddingOther } = useItemsMutations();

  const submit = (formData: ItemAddRequest) => {
    const data: ItemAddRequest = { ...formData };

    const validatedData = formDataValidator<ItemAddRequest>(data);
    addOtherMutation([validatedData, "jewellery"]);
  };

  return (
    <div className={classes.AddItem}>
      <Form<ItemAddRequest>
        items={items}
        validationSchema={validationSchema([])}
        submit={submit}
        isLoading={isAddingOther}
      />
    </div>
  );
};
