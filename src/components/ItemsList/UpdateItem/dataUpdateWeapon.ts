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
  "weaponHand",
  "weaponSlashingDamage",
  "weaponPiercingDamage",
  "weaponBluntDamage",
  "weaponEffectiveness",
  "weaponBalance",
  "isWeaponSilver",
  "slot",
];

export const itemsWeaponOptions = (defaultValues: ItemResponse) =>
  itemsOptions(defaultValues).filter(
    field => field.type === "submit" || properties.includes(field.name)
  );
