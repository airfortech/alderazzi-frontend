import { ItemResponse } from "../../../types/Item";
import { itemsOptions } from "./dataUpdateItemFields";

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

export const itemsShieldOptions = (defaultValues: ItemResponse) =>
  itemsOptions(defaultValues).filter(
    field => field.type === "submit" || properties.includes(field.name)
  );
