import { Fields } from "../../../../types/Form";
import { ItemAddRequest } from "../../../../types/Item";
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
  "slot",
];

export const items: Fields<ItemAddRequest> = itemsOptions.filter(
  field => field.type === "submit" || properties.includes(field.name)
);
