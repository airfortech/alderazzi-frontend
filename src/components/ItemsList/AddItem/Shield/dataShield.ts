import { Fields } from "../../../../types/Form";
import { ItemAddShieldRequest } from "../../../../types/Item";
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
  "armorPiercingRes",
  "armorSlashingRes",
  "armorBluntRes",
  "shieldParry",
];

export const items: Fields<ItemAddShieldRequest> = itemsOptions.filter(
  field => field.type === "submit" || properties.includes(field.name)
);
