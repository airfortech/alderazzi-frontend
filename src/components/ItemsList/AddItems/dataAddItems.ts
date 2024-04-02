import { Fields } from "../../../types/Form";

export interface ItemAddItemsRequest {
  data: string;
}

export const items: Fields<ItemAddItemsRequest> = [
  {
    type: "textarea",
    name: "data",
    minRows: 9,
    maxRows: 18,
    placeholder: "Wklej opisy przedmiotów z komendy /sprzet mudletu",
  },
  {
    type: "submit",
    title: "Dodaj przedmioty",
  },
];
