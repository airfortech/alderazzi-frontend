import { Domain } from "../../../types/Domain";
import { Fields } from "../../../types/Form";
import {
  LocationResponse,
  LocationUpdateRequest,
} from "../../../types/Location";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  locationId: yup
    .number()
    .min(0, "Liczba musi być dodatnia")
    .max(99999, "Maksymalna liczba to 99999")
    .integer("Liczba musi być całkowita")
    .typeError("Podaj numer lokacji"),
  name: yup.string().trim().max(50, "Za długa nazwa (max 50 znaków)"),
  domain: yup.string(),
  description: yup.string().trim().max(4000, "Za długi opis (max 4000 znaków)"),
  comment: yup
    .string()
    .trim()
    .max(4000, "Za długi komentarz (max 4000 znaków)"),
});

export const items = (
  defaultLocationValues: LocationResponse
): Fields<LocationUpdateRequest> => {
  const { locationId, name, domain, description, comment } =
    defaultLocationValues;
  return [
    {
      type: "field",
      name: "locationId",
      placeholder: "Numer lokacji",
      defaultValue: locationId,
    },
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
      title: "Edytuj lokację",
    },
  ];
};
