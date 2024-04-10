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
];

export const itemsOtherOptions = (defaultValues: ItemResponse) =>
  itemsOptions(defaultValues).filter(
    field => field.type === "submit" || properties.includes(field.name)
  );
