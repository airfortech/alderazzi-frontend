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
  "npcPurchasePrice",
  "description",
  "comment",
  "armorClass",
  "armorHead",
  "armorLeftArm",
  "armorRightArm",
  "armorChest",
  "armorLegs",
  "armorFoots",
  "armorPiercingRes",
  "armorSlashingRes",
  "armorBluntRes",
  "slot",
];

export const itemsArmorOptions = (defaultValues: ItemResponse) =>
  itemsOptions(defaultValues).filter(
    field => field.type === "submit" || properties.includes(field.name)
  );
