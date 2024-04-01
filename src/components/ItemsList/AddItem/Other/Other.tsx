import { ItemAddRequest } from "../../../../types/Item";
import { ItemTypes } from "../../../../types/ItemTypes";
import { useItemsMutations } from "../../../../hooks/useItems";
import { Form } from "../../../Form/Form";
import { formDataValidator } from "../../../../utils/formDataValidatr";
import { items } from "./dataOther";
import { validationSchema } from "../dataAddItemValidationOptions";
import classes from "../AddItem.module.css";

interface Props {
  endpoint: keyof typeof ItemTypes;
}

export const Other = ({ endpoint }: Props) => {
  const { addOtherMutation, isAddingOther } = useItemsMutations();

  const submit = (formData: ItemAddRequest) => {
    const data: ItemAddRequest = { ...formData };

    const validatedData = formDataValidator<ItemAddRequest>(data);
    addOtherMutation([validatedData, endpoint]);
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
