import { Fields } from "../../../types/Form";
import { ItemAddFormRequest } from "../../../types/Item";
import { ItemDurability } from "../../../types/ItemDurability";
import { ItemWeaponHand } from "../../../types/ItemWeaponHand";

const options = [
  {
    label: "Tak",
    value: "true",
  },
  {
    label: "Nie",
    value: "false",
  },
  {
    label: "Brak danych",
    value: "null",
  },
];

export const itemsOptions: Fields<ItemAddFormRequest> = [
  { type: "field", name: "name", placeholder: "Nazwa" },
  {
    type: "field",
    name: "short",
    placeholder: "Szort",
  },
  {
    type: "toggleButton",
    name: "isMagic",
    placeholder: "Przedmiot magiczny",
    options,
    defaultOption: "null",
  },
  {
    type: "select",
    name: "durability",
    placeholder: "Trwałość",
    options: [
      {
        label: "brak danych",
        value: "null",
      },
      ...Object.values(ItemDurability).map(domain => {
        return {
          label: domain,
          value: domain,
        };
      }),
    ],
    defaultValue: "null",
  },
  {
    type: "toggleButton",
    name: "isWeaponSilver",
    placeholder: "Srebrna broń",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "slot",
    placeholder: "Slot",
    options,
    defaultOption: "null",
  },
  {
    type: "select",
    name: "weaponHand",
    placeholder: "Chwyt",
    options: [
      {
        label: "brak danych",
        value: "null",
      },
      ...Object.values(ItemWeaponHand).map(weaponHand => {
        return {
          label: weaponHand,
          value: weaponHand,
        };
      }),
    ],
    defaultValue: "null",
  },
  {
    type: "field",
    name: "weaponEffectiveness",
    fieldType: "number",
    placeholder: "Skuteczność",
  },
  {
    type: "field",
    name: "weaponBalance",
    fieldType: "number",
    placeholder: "Wyważenie",
  },
  {
    type: "toggleButton",
    name: "weaponSlashingDamage",
    placeholder: "Obrażenia cięte",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "weaponPiercingDamage",
    placeholder: "Obrażenia kłute",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "weaponBluntDamage",
    placeholder: "Obrażenia obuchowe",
    options,
    defaultOption: "null",
  },
  {
    type: "field",
    name: "shieldParry",
    fieldType: "number",
    placeholder: "Parowanie",
  },
  {
    type: "field",
    name: "armorSlashingRes",
    fieldType: "number",
    placeholder: "Odporność na obrażenia cięte",
  },
  {
    type: "field",
    name: "armorPiercingRes",
    fieldType: "number",
    placeholder: "Odporność na obrażenia kłute",
  },
  {
    type: "field",
    name: "armorBluntRes",
    fieldType: "number",
    placeholder: "Odporność na obrażenia obuchowe",
  },
  {
    type: "toggleButton",
    name: "armorHead",
    placeholder: "Ochrona głowy",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "armorChest",
    placeholder: "Ochrona korpusu",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "armorLegs",
    placeholder: "Ochrona nóg",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "armorLeftArm",
    placeholder: "Ochrona lewej ręki",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "armorRightArm",
    placeholder: "Ochrona prawej ręki",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "armorHands",
    placeholder: "Ochrona rąk",
    options,
    defaultOption: "null",
  },
  {
    type: "toggleButton",
    name: "armorFoots",
    placeholder: "Ochrona stóp",
    options,
    defaultOption: "null",
  },
  {
    type: "field",
    name: "specialBonus",
    placeholder: "Specjalne właściwości",
    defaultValue: "",
  },
  {
    type: "field",
    name: "weight",
    fieldType: "number",
    placeholder: "Waga",
    unit: "gramów",
  },
  {
    type: "field",
    name: "volume",
    fieldType: "number",
    placeholder: "Objętość",
    unit: "mililitrów",
  },
  {
    type: "field",
    name: "cost",
    fieldType: "number",
    placeholder: "Wartość sprzedaży",
    unit: "złota",
  },
  {
    type: "field",
    name: "vendorCost",
    fieldType: "number",
    placeholder: "Wartość zlecenia",
    unit: "złota",
  },
  {
    type: "field",
    name: "occurrence",
    placeholder: "Występowanie",
  },
  {
    type: "textarea",
    name: "description",
    placeholder: "Opis",
    rows: 4,
  },
  {
    type: "textarea",
    name: "comment",
    placeholder: "Komentarz",
    rows: 4,
  },
  {
    type: "submit",
    title: "Dodaj przedmiot",
  },
];
