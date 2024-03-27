import { ArmorsListOption } from "../../../types/ItemsList";

export const armorsOptions = [
  {
    value: "magic",
    label: "Magiczne",
    searchOptions: {
      isMagic: true,
    },
  },
  {
    value: "normal",
    label: "Zwykłe",
    searchOptions: {
      isMagic: false,
    },
  },
  {
    value: "all",
    label: "Wszystkie",
    searchOptions: {},
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
