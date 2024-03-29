import { ItemAddShieldRequest } from "../../../../types/Item";
import { useItemsMutations } from "../../../../hooks/useItems";
import { Form } from "../../../Form/Form";
import { formDataValidator } from "../../../../utils/formDataValidatr";
import { items } from "./dataShield";
import { validationSchema } from "../dataAddItemValidationOptions";
import classes from "../AddItem.module.css";

export const Shield = () => {
  const { addShieldMutation, isAddingShield } = useItemsMutations();

  const submit = (formData: ItemAddShieldRequest) => {
    const data: ItemAddShieldRequest = { ...formData };

    const validatedData = formDataValidator<ItemAddShieldRequest>(data);
    addShieldMutation(validatedData);
  };

  return (
    <div className={classes.AddItem}>
      <Form<ItemAddShieldRequest>
        items={items}
        validationSchema={validationSchema([
          "armorBluntRes",
          "armorPiercingRes",
          "armorSlashingRes",
          "shieldParry",
        ])}
        submit={submit}
        isLoading={isAddingShield}
      />
    </div>
  );
};
