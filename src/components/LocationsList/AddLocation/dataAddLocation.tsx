import { Domain } from "../../../types/Domain";
import { Fields } from "../../../types/Form";
import { LocationAddRequest } from "../../../types/Location";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  locationId: yup
    .number()
    .min(0, "Liczba musi być dodatnia")
    .max(99999, "Maksymalna liczba to 99999")
    .integer("Liczba musi być całkowita")
    .typeError("Podaj numer lokacji"),
  internalId: yup
    .string()
    .trim()
    .max(10, "Za długi Internal Id (max 10 znaków)"),
  name: yup.string().trim().max(50, "Za długa nazwa (max 50 znaków)"),
  domain: yup.string(),
  description: yup.string().trim().max(4000, "Za długi opis (max 4000 znaków)"),
  comment: yup
    .string()
    .trim()
    .max(4000, "Za długi komentarz (max 4000 znaków)"),
});

export const items: Fields<LocationAddRequest> = [
  { type: "field", name: "locationId", placeholder: "Numer lokacji" },
  {
    type: "field",
    name: "internalId",
    placeholder: "Internal Id",
  },
  { type: "field", name: "name", placeholder: "Nazwa" },
  {
    type: "select",
    name: "domain",
    placeholder: "Domena",
    options: Object.values(Domain).map(domain => {
      return {
        label: domain,
        value: domain,
      };
    }),
    defaultValue: Domain.unknown,
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
    title: "Dodaj lokację",
  },
];
