import { Fields } from "../../../types/Form";
import {
  KeyGiverDropResponse,
  KeyGiverDropUpdateRequest,
} from "../../../types/KeyGiverDrop";
import { KeyGiverResponse } from "../../../types/KeyGiver";
import { KeyResponse } from "../../../types/Key";
import dayjs from "dayjs";
import * as yup from "yup";
import { ItemShortResponse } from "../../../types/Item";

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
  magicItems: ItemShortResponse[],
  defaultKeyGiverDropValues: KeyGiverDropResponse
): Fields<KeyGiverDropUpdateRequest> => {
  const {
    keyGiver,
    drop,
    dropDate,
    magicDrops: defaultMagicDrops,
  } = defaultKeyGiverDropValues;
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
  const magicItemsOptions = magicItems.map(({ id, name, short }) => {
    return {
      label: name ? `${short} (${name})` : short,
      value: id,
    };
  });
  return [
    {
      type: "autocomplete",
      name: "keyGiver",
      placeholder: "Klucznik",
      options: keyGiversOptions,
      defaultOption: keyGiversOptions.find(
        ({ value }) => value === keyGiver.id
      ),
    },
    {
      type: "autocomplete",
      name: "drop",
      placeholder: "Klucz",
      options: keysOptions,
      defaultOption: keysOptions.find(({ value }) => value === drop?.id),
    },
    {
      type: "multiautocomplete",
      name: "magicDrops",
      placeholder: "Magiki",
      options: magicItemsOptions,
      defaultOptions: magicItemsOptions.filter(({ value }) =>
        defaultMagicDrops.some(({ id }) => id === value)
      ),
    },
    {
      type: "datetime",
      name: "dropDate",
      defaultValue: dayjs.unix(dropDate),
    },
    {
      type: "submit",
      title: "Edytuj drop",
    },
  ];
};
