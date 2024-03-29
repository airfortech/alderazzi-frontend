import { ItemTypes } from "../../../types/ItemTypes";
import { OthersListOption } from "../../../types/ItemsList";

export const othersOptions = [
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

export const othersListOptions: OthersListOption[] = [
  {
    type: ItemTypes.cloth,
    path: "ubrania",
    endpoint: "cloth",
    selectPlaceholder: "Rodzaj ubrań:",
    icon: "dress",
    buttonLabel: "Dodaj ubranie",
    tableTitle: "Ubrania",
    defaultOption: 0,
  },
  {
    type: ItemTypes.jewellery,
    path: "bizuteria",
    endpoint: "jewellery",
    selectPlaceholder: "Rodzaj biżuterii:",
    icon: "gem2",
    buttonLabel: "Dodaj biżuterię",
    tableTitle: "Biżuteria",
    defaultOption: 0,
  },
  {
    type: ItemTypes.stone,
    path: "kamienie",
    endpoint: "stone",
    selectPlaceholder: "Rodzaj kamieni:",
    icon: "gem",
    buttonLabel: "Dodaj kamień",
    tableTitle: "Kamienie",
    defaultOption: 2,
  },
  {
    type: ItemTypes.potion,
    path: "mikstury",
    endpoint: "potion",
    selectPlaceholder: "Rodzaj mikstur:",
    icon: "potion",
    buttonLabel: "Dodaj miksturę",
    tableTitle: "Mikstury",
    defaultOption: 2,
  },
  {
    type: ItemTypes.other,
    path: "inne",
    endpoint: "other",
    selectPlaceholder: "Rodzaj przedmiotów:",
    icon: "purse",
    buttonLabel: "Dodaj przedmiot",
    tableTitle: "Inne przedmioty",
    defaultOption: 2,
  },
];
