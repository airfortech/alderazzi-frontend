import { Fields } from "../../../../types/Form";
import { ItemAddArmorRequest } from "../../../../types/Item";
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

export const items: Fields<ItemAddArmorRequest> = itemsOptions.filter(
  field => field.type === "submit" || properties.includes(field.name)
);
