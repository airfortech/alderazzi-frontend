import { Fields } from "../../../types/Form";
import { SettingsRequest, SettingsResponse } from "../../../types/Settings";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  backupKeepMonths: yup
    .number()
    .min(2, "Liczba musi być większa niż 1")
    .max(99, "Maksymalna liczba to 99")
    .integer("Liczba musi być całkowita")
    .typeError("Podaj liczbę miesięcy"),
});

const daysOfWeek = [
  { label: "Niedziela", value: "0" },
  { label: "Poniedziałek", value: "1" },
  { label: "Wtorek", value: "2" },
  { label: "Środa", value: "3" },
  { label: "Czwartek", value: "4" },
  { label: "Piątek", value: "5" },
  { label: "Sobota", value: "6" },
];

export const items = (
  defaultValues: SettingsResponse
): Fields<SettingsRequest> => {
  const { autoDeleteBackup, backupDays, backupKeepMonths } = defaultValues;
  const defaultBackupDays = daysOfWeek.filter(({ value }) =>
    backupDays.includes(Number(value))
  );
  return [
    {
      type: "field",
      name: "backupKeepMonths",
      placeholder: "Liczba miesięcy utrzymywania backupów",
      defaultValue: backupKeepMonths,
    },
    {
      type: "select",
      name: "autoDeleteBackup",
      placeholder: "Automatyczne usuwanie starszych backupów",
      options: [
        { label: "Tak", value: "true" },
        { label: "Nie", value: "false" },
      ],
      defaultValue: JSON.stringify(autoDeleteBackup),
    },
    {
      type: "multiautocomplete",
      name: "backupDays",
      placeholder: "Dni tworzenia backupu",
      options: daysOfWeek,
      defaultOptions: defaultBackupDays,
    },
    {
      type: "submit",
      title: "Uaktualnij opcje",
    },
  ];
};
