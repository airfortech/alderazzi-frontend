import { Domain } from "../../../types/Domain";
import { Fields } from "../../../types/Form";
import { KeyGiverAddRequest } from "../../../types/KeyGiver";
import { LocationResponse } from "../../../types/Location";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Podaj nazwę!")
    .trim()
    .max(30, "Za długa nazwa (max 30 znaków)"),
  short: yup
    .string()
    .required("Podaj short!")
    .trim()
    .max(50, "Za długi short (max 50 znaków)"),
  respawnTime: yup
    .number()
    .typeError("Podaj liczbę godzin")
    .min(0, "Liczba musi być dodatnia lub 0")
    .integer("Liczba musi być całkowita")
    // INFO: nullable with transform allow empty field, which is returned as null
    .nullable()
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  domain: yup.string().required("Wybierz domenę"),
  playersToComplete: yup
    .number()
    .min(0, "Liczba musi być dodatnia")
    .max(20, "Maksymalna liczba to 20")
    .integer("Liczba musi być całkowita")
    .typeError("Podaj liczbę graczy")
    .nullable()
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  description: yup.string().trim().max(4000, "Za długi opis (max 4000 znaków)"),
  comment: yup
    .string()
    .trim()
    .max(4000, "Za długi komentarz (max 4000 znaków)"),
});

export const items = (
  locations: LocationResponse[]
): Fields<KeyGiverAddRequest> => {
  const locationsOptions =
    locations.map(({ id, locationId, name, domain }) => {
      return {
        label: locationId + " - " + name + " (" + domain + ")",
        value: id,
      };
    }) || [];
  return [
    { type: "field", name: "name", placeholder: "Nazwa" },
    { type: "field", name: "short", placeholder: "Szort" },
    {
      type: "field",
      name: "respawnTime",
      unit: "godzin",
      placeholder: "Czas odrodzenia",
    },
    {
      type: "field",
      name: "playersToComplete",
      placeholder: "Liczba potrzebnych graczy",
    },
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
      type: "multiautocomplete",
      name: "locations",
      placeholder: "Lokacje",
      options: locationsOptions,
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
      title: "Dodaj klucznika",
    },
  ];
};
