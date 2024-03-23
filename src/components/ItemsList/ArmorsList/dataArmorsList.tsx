import { ArmorsListOption } from "../../../types/ItemsList";
import { ItemArmorClass } from "../../../types/ItemArmorClass";

export const armorsOptions = (armorClass: keyof typeof ItemArmorClass) => [
  {
    value: `armor&armorClass=${armorClass}&isMagic=true`,
    label: "Magiczne",
  },
  {
    value: `armor&armorClass=${armorClass}&isMagic=false`,
    label: "Zwykłe",
  },
  {
    value: `armor&armorClass=${armorClass}`,
    label: "Wszystkie",
  },
];

export const armorsListOptions: ArmorsListOption[] = [
  {
    armorClass: "medium",
    path: "srednie",
    selectPlaceholder: "Rodzaj średnich zbroi:",
    icon: "chainmail",
    buttonLabel: "Dodaj średnią zbroję",
    tableTitle: "Średnie zbroje",
  },
  {
    armorClass: "light",
    path: "lekkie",
    selectPlaceholder: "Rodzaj lekkich zbroi:",
    icon: "lightArmor",
    buttonLabel: "Dodaj lekką zbroję",
    tableTitle: "Lekkie zbroje",
  },
  {
    armorClass: "heavy",
    path: "ciezkie",
    selectPlaceholder: "Rodzaj ciężkich zbroi:",
    icon: "plate",
    buttonLabel: "Dodaj ciężką zbroję",
    tableTitle: "Ciężkie zbroje",
  },
];
