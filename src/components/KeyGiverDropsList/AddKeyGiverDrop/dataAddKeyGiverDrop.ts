import { Fields } from "../../../types/Form";
import { KeyGiverDropAddRequest } from "../../../types/KeyGiverDrop";
import { KeyGiverResponse } from "../../../types/KeyGiver";
import { KeyResponse } from "../../../types/Key";
import dayjs from "dayjs";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  keyGiver: yup
    .object()
    .required("Wybierz klucznika!")
    .typeError("Wybierz klucznika!"),
  dropDate: yup.date().nullable().required("Wprowadź datę pacnięcia"),
});

export const items = (
  keyGivers: KeyGiverResponse[],
  keys: KeyResponse[],
  config: {
    maxAddTime: number;
  }
): Fields<KeyGiverDropAddRequest> => {
  const keyGiversOptions = keyGivers.map(({ id, name, short }) => {
    return {
      label: name + " (" + short + ")",
      value: id,
    };
  });
  const keysOptions = keys.map(({ id, name }) => {
    return {
      label: name,
      value: id,
    };
  });
  return [
    {
      type: "autocomplete",
      name: "keyGiver",
      placeholder: "Klucznik",
      options: keyGiversOptions,
    },
    {
      type: "autocomplete",
      name: "drop",
      placeholder: "Klucz",
      options: keysOptions,
    },
    {
      type: "datetime",
      name: "dropDate",
      defaultValue: dayjs(),
    },
    {
      type: "submit",
      title: "Dodaj drop",
    },
  ];
};
