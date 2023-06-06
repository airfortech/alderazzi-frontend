import { Domain } from "../../../types/Domain";
import { Fields } from "../../../types/Form";
import { KeyUpdateRequest } from "../../../types/Key";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Podaj nazwę!")
    .trim()
    .max(50, "Za długa nazwa (max 50 znaków)"),
  domain: yup.string().required("Wybierz domenę"),
  description: yup.string().trim().max(4000, "Za długi opis (max 4000 znaków)"),
  comment: yup
    .string()
    .trim()
    .max(4000, "Za długi komentarz (max 4000 znaków)"),
});

export const items = (
  defaultKeyValues: KeyUpdateRequest
): Fields<KeyUpdateRequest> => {
  const { name, treasury, domain, description, comment } = defaultKeyValues;
  return [
    { type: "field", name: "name", placeholder: "Nazwa", defaultValue: name },
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
      defaultValue: domain,
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
      title: "Edytuj klucz",
    },
  ];
};
