import { ItemAddWeaponRequest } from "../../../../types/Item";
import { ItemWeapon } from "../../../../types/ItemWeapon";
import { useItemsMutations, useItems } from "../../../../hooks/useItems";
import { Form } from "../../../Form/Form";
import { formDataValidator } from "../../../../utils/formDataValidatr";
import { items } from "./dataWeapon";
import { validationSchema } from "../dataAddItemValidationOptions";
import classes from "../AddItem.module.css";

interface Props {
  weaponType: ItemWeapon;
  params: string;
}

export const Weapon = ({ weaponType, params }: Props) => {
  const { addWeaponMutation, isAddingWeapon } = useItemsMutations();

  const submit = (formData: ItemAddWeaponRequest) => {
    const data: ItemAddWeaponRequest = { ...formData, weaponType };

    const validatedData = formDataValidator<ItemAddWeaponRequest>(data);
    addWeaponMutation(validatedData);
  };

  return (
    <div className={classes.AddItem}>
      <Form<ItemAddWeaponRequest>
        items={items}
        validationSchema={validationSchema([
          "weaponEffectiveness",
          "weaponBalance",
        ])}
        submit={submit}
        isLoading={isAddingWeapon}
      />
    </div>
  );
};
