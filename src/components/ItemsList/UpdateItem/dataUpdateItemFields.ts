import { Fields } from "../../../types/Form";
import {
  ItemAddFormRequest,
  ItemResponse,
  ItemUpdateRequest,
} from "../../../types/Item";
import { ItemDurability } from "../../../types/ItemDurability";
import { ItemWeapon } from "../../../types/ItemWeapon";
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

export const itemsOptions = (
  defaultValues: ItemResponse
): Fields<ItemUpdateRequest> => {
  const {
    name,
    short,
    isMagic,
    durability,
    isWeaponSilver,
    slot,
    weaponHand,
    weaponEffectiveness,
    weaponBalance,
    weaponSlashingDamage,
    weaponPiercingDamage,
    weaponBluntDamage,
    shieldParry,
    armorSlashingRes,
    armorPiercingRes,
    armorBluntRes,
    armorHead,
    armorChest,
    armorLegs,
    armorLeftArm,
    armorRightArm,
    armorHands,
    armorFoots,
    specialBonus,
    weight,
    volume,
    cost,
    vendorCost,
    npcPurchasePrice,
    occurrence,
    description,
    comment,
  } = defaultValues;
  return [
    { type: "field", name: "name", placeholder: "Nazwa", defaultValue: name },
    {
      type: "field",
      name: "short",
      placeholder: "Szort",
      defaultValue: short,
    },
    {
      type: "toggleButton",
      name: "isMagic",
      placeholder: "Przedmiot magiczny",
      options,
      defaultOption:
        isMagic === true ? "true" : isMagic === false ? "false" : "null",
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
      defaultValue: durability || "null",
    },
    {
      type: "toggleButton",
      name: "isWeaponSilver",
      placeholder: "Srebrna broń",
      options,
      defaultOption:
        isWeaponSilver === true
          ? "true"
          : isWeaponSilver === false
          ? "false"
          : "null",
    },
    {
      type: "toggleButton",
      name: "slot",
      placeholder: "Slot",
      options,
      defaultOption: slot === true ? "true" : slot === false ? "false" : "null",
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
      defaultValue: weaponHand || "null",
    },
    {
      type: "field",
      name: "weaponEffectiveness",
      fieldType: "number",
      placeholder: "Skuteczność",
      defaultValue: weaponEffectiveness,
    },
    {
      type: "field",
      name: "weaponBalance",
      fieldType: "number",
      placeholder: "Wyważenie",
      defaultValue: weaponBalance,
    },
    {
      type: "toggleButton",
      name: "weaponSlashingDamage",
      placeholder: "Obrażenia cięte",
      options,
      defaultOption:
        weaponSlashingDamage === true
          ? "true"
          : weaponSlashingDamage === false
          ? "false"
          : "null",
    },
    {
      type: "toggleButton",
      name: "weaponPiercingDamage",
      placeholder: "Obrażenia kłute",
      options,
      defaultOption: weaponPiercingDamage
        ? "true"
        : weaponPiercingDamage === false
        ? "false"
        : "null",
    },
    {
      type: "toggleButton",
      name: "weaponBluntDamage",
      placeholder: "Obrażenia obuchowe",
      options,
      defaultOption:
        weaponBluntDamage === true
          ? "true"
          : weaponBluntDamage === false
          ? "false"
          : "null",
    },
    {
      type: "field",
      name: "shieldParry",
      fieldType: "number",
      placeholder: "Parowanie",
      defaultValue: shieldParry,
    },
    {
      type: "field",
      name: "armorSlashingRes",
      fieldType: "number",
      placeholder: "Odporność na obrażenia cięte",
      defaultValue: armorSlashingRes,
    },
    {
      type: "field",
      name: "armorPiercingRes",
      fieldType: "number",
      placeholder: "Odporność na obrażenia kłute",
      defaultValue: armorPiercingRes,
    },
    {
      type: "field",
      name: "armorBluntRes",
      fieldType: "number",
      placeholder: "Odporność na obrażenia obuchowe",
      defaultValue: armorBluntRes,
    },
    {
      type: "toggleButton",
      name: "armorHead",
      placeholder: "Ochrona głowy",
      options,
      defaultOption:
        armorHead === true ? "true" : armorHead === false ? "false" : "null",
    },
    {
      type: "toggleButton",
      name: "armorChest",
      placeholder: "Ochrona korpusu",
      options,
      defaultOption:
        armorChest === true ? "true" : armorChest === false ? "false" : "null",
    },
    {
      type: "toggleButton",
      name: "armorLegs",
      placeholder: "Ochrona nóg",
      options,
      defaultOption:
        armorLegs === true ? "true" : armorLegs === false ? "false" : "null",
    },
    {
      type: "toggleButton",
      name: "armorLeftArm",
      placeholder: "Ochrona lewej ręki",
      options,
      defaultOption:
        armorLeftArm === true
          ? "true"
          : armorLeftArm === false
          ? "false"
          : "null",
    },
    {
      type: "toggleButton",
      name: "armorRightArm",
      placeholder: "Ochrona prawej ręki",
      options,
      defaultOption:
        armorRightArm === true
          ? "true"
          : armorRightArm === false
          ? "false"
          : "null",
    },
    {
      type: "toggleButton",
      name: "armorHands",
      placeholder: "Ochrona dłoni",
      options,
      defaultOption:
        armorHands === true ? "true" : armorHands === false ? "false" : "null",
    },
    {
      type: "toggleButton",
      name: "armorFoots",
      placeholder: "Ochrona stóp",
      options,
      defaultOption:
        armorFoots === true ? "true" : armorFoots === false ? "false" : "null",
    },
    {
      type: "field",
      name: "specialBonus",
      placeholder: "Specjalne właściwości",
      defaultValue: specialBonus,
    },
    {
      type: "field",
      name: "weight",
      fieldType: "number",
      placeholder: "Waga",
      unit: "gramów",
      defaultValue: weight,
    },
    {
      type: "field",
      name: "volume",
      fieldType: "number",
      placeholder: "Objętość",
      unit: "mililitrów",
      defaultValue: volume,
    },
    {
      type: "field",
      name: "cost",
      fieldType: "number",
      placeholder: "Wartość sprzedaży",
      unit: "złota",
      defaultValue: cost,
    },
    {
      type: "field",
      name: "vendorCost",
      fieldType: "number",
      placeholder: "Wartość zlecenia",
      unit: "złota",
      defaultValue: vendorCost,
    },
    {
      type: "field",
      name: "npcPurchasePrice",
      fieldType: "number",
      placeholder: "Cena zakupu u NPC",
      unit: "złota",
      defaultValue: npcPurchasePrice,
    },
    {
      type: "field",
      name: "occurrence",
      placeholder: "Występowanie",
      defaultValue: occurrence,
    },
    {
      type: "textarea",
      name: "description",
      placeholder: "Opis",
      rows: 4,
      defaultValue: description,
    },
    {
      type: "textarea",
      name: "comment",
      placeholder: "Komentarz",
      rows: 4,
      defaultValue: comment,
    },
    {
      type: "submit",
      title: "Zaktualizuj przedmiot",
    },
  ];
};
