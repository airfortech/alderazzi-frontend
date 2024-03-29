import { ItemTypes } from "../../../types/ItemTypes";
import { ItemResponse, ItemUpdateRequest } from "../../../types/Item";
import { useItemsMutations } from "../../../hooks/useItems";
import { Form } from "../../Form/Form";
import { validationSchema } from "../AddItem/dataAddItemValidationOptions";
import { formDataValidator } from "../../../utils/formDataValidatr";
import { itemsWeaponOptions } from "./dataUpdateWeapon";
import { itemsArmorOptions } from "./dataUpdateArmor";
import classes from "../AddItem/AddItem.module.css";
import { itemsShieldOptions } from "./dataUpdateShield";

interface Props {
  data: ItemResponse;
}

export const UpdateItem = ({ data }: Props) => {
  const { updateItemMutation, isUpdatingItem } = useItemsMutations();

  if (!data) return null;

  const submit = (formData: ItemUpdateRequest) => {
    const validatedData = formDataValidator<ItemUpdateRequest>({
      ...data,
      ...formData,
    });
    updateItemMutation({ id: data.id, item: validatedData });
  };

  const { type } = data;
  const validation = validationSchema(
    type === ItemTypes.armor
      ? ["armorBluntRes", "armorPiercingRes", "armorSlashingRes"]
      : type === ItemTypes.shield
      ? ["armorBluntRes", "armorPiercingRes", "armorSlashingRes", "shieldParry"]
      : type === ItemTypes.weapon
      ? ["weaponEffectiveness", "weaponBalance"]
      : []
  );
  const itemsOptions =
    type === ItemTypes.weapon
      ? itemsWeaponOptions
      : type === ItemTypes.armor
      ? itemsArmorOptions
      : itemsShieldOptions;

  return (
    <div className={classes.AddItem}>
      <Form<ItemUpdateRequest>
        items={itemsOptions(data)}
        validationSchema={validation}
        submit={submit}
        isLoading={isUpdatingItem}
      />
    </div>
  );
};
