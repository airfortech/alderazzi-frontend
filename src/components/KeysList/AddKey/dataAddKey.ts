import { Domain } from "../../../types/Domain";
import { Fields } from "../../../types/Form";
import { KeyAddRequest } from "../../../types/Key";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Podaj nazwę!")
    .trim()
    .max(80, "Za długa nazwa (max 80 znaków)"),
  domain: yup.string().required("Wybierz domenę"),
  description: yup.string().trim().max(4000, "Za długi opis (max 4000 znaków)"),
  comment: yup
    .string()
    .trim()
    .max(4000, "Za długi komentarz (max 4000 znaków)"),
});

export const items: Fields<KeyAddRequest> = [
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
    title: "Dodaj klucz",
  },
];
