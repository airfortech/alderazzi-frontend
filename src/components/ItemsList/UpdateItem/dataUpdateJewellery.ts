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
  "slot",
];

export const itemsJewelleryOptions = (defaultValues: ItemResponse) =>
  itemsOptions(defaultValues).filter(
    field => field.type === "submit" || properties.includes(field.name)
  );
