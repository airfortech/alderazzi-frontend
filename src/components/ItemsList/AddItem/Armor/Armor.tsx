import { ItemAddArmorRequest } from "../../../../types/Item";
import { ItemWeapon } from "../../../../types/ItemWeapon";
import { useItems } from "../../../../hooks/useItems";
import { Form } from "../../../Form/Form";
import { items } from "./dataArmor";
import { validationSchema } from "../dataAddItemValidationOptions";
import classes from "../AddItem.module.css";
import { ItemArmorClass } from "../../../../types/ItemArmorClass";
import { formDataValidator } from "../../../../utils/formDataValidatr";

interface Props {
  armorClass: ItemArmorClass;
  params: string;
}

export const Armor = ({ armorClass, params }: Props) => {
  const { addArmorMutation, isAddingArmor } = useItems(params);

  const submit = (formData: ItemAddArmorRequest) => {
    const data: ItemAddArmorRequest = { ...formData, armorClass };

    const validatedData = formDataValidator<ItemAddArmorRequest>(data);
    addArmorMutation(validatedData);
  };

  return (
    <div className={classes.AddItem}>
      <Form<ItemAddArmorRequest>
        items={items}
        validationSchema={validationSchema([
          "armorBluntRes",
          "armorPiercingRes",
          "armorSlashingRes",
        ])}
        submit={submit}
        isLoading={isAddingArmor}
      />
    </div>
  );
};
