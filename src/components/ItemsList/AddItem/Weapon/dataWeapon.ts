import { Fields } from "../../../../types/Form";
import { ItemAddWeaponRequest } from "../../../../types/Item";
import { itemsOptions } from "../dataAddItemFields";

const properties = [
  "name",
  "short",
  "isMagic",
  "weight",
  "volume",
  "durability",
  "specialBonus",
  "occurrence",
  "cost",
  "vendorCost",
  "description",
  "comment",
  "weaponHand",
  "weaponSlashingDamage",
  "weaponPiercingDamage",
  "weaponBluntDamage",
  "weaponEffectiveness",
  "weaponBalance",
  "isWeaponSilver",
  "slot",
];

export const items: Fields<ItemAddWeaponRequest> = itemsOptions.filter(
  field => field.type === "submit" || properties.includes(field.name)
);
