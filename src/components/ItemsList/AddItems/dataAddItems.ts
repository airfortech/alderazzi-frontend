import { Fields } from "../../../types/Form";

export interface ItemAddItemsRequest {
  task: "addNew" | "updateAll" | "updateInfosOnly" | "updateValuesOnly";
  data: string;
}

export const items: Fields<ItemAddItemsRequest> = [
  {
    type: "toggleButton",
    name: "task",
    orientation: "vertical",
    options: [
      { label: "Dodaj tylko nowe przedmioty", value: "addNew" },
      {
        label: "Nowe + aktualizuj powtarzające się przedmioty",
        value: "updateAll",
      },
      {
        label: "Nowe +  aktualizuj tylko informacje bez statystyk",
        value: "updateInfosOnly",
      },
      {
        label: "Nowe + aktualizuj tylko wartości statystyk",
        value: "updateValuesOnly",
      },
    ],
    defaultOption: "addNew",
    placeholder: "Sposób aktualizacji przedmiotów",
  },
  {
    type: "submit",
    title: "Dodaj przedmioty",
    align: "right",
  },
];
