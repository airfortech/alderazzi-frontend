import * as yup from "yup";
import { EmptyNumber } from "../../../utils/yupHelpers";

export const validationSchema = (
  keys: (
    | "weaponEffectiveness"
    | "weaponBalance"
    | "armorSlashingRes"
    | "armorPiercingRes"
    | "armorBluntRes"
    | "shieldParry"
  )[]
) =>
  yup.object().shape({
    name: yup.string().trim().max(50, "Za długa nazwa (max 50 znaków)"),
    short: yup
      .string()
      .trim()
      .required("Short jest wymagany!")
      .max(50, "Za długi short (max 50 znaków)"),
    ...(keys.includes("weaponEffectiveness") && {
      weaponEffectiveness: EmptyNumber()
        .integer("Wartość musi być liczbą całkowitą")
        .min(1, "Wartość minimalna to 1")
        .max(14, "Wartość maksymalna to 14"),
    }),
    ...(keys.includes("weaponBalance") && {
      weaponBalance: EmptyNumber()
        .integer("Wartość musi być liczbą całkowitą")
        .min(1, "Wartość minimalna to 1")
        .max(14, "Wartość maksymalna to 14"),
    }),
    ...(keys.includes("armorPiercingRes") && {
      armorPiercingRes: EmptyNumber()
        .integer("Wartość musi być liczbą całkowitą")
        .min(1, "Wartość minimalna to 1")
        .max(12, "Wartość maksymalna to 12"),
    }),
    ...(keys.includes("armorSlashingRes") && {
      armorSlashingRes: EmptyNumber()
        .integer("Wartość musi być liczbą całkowitą")
        .min(1, "Wartość minimalna to 1")
        .max(12, "Wartość maksymalna to 12"),
    }),
    ...(keys.includes("armorBluntRes") && {
      armorBluntRes: EmptyNumber()
        .integer("Wartość musi być liczbą całkowitą")
        .min(1, "Wartość minimalna to 1")
        .max(12, "Wartość maksymalna to 12"),
    }),
    ...(keys.includes("shieldParry") && {
      shieldParry: EmptyNumber()
        .integer("Wartość musi być liczbą całkowitą")
        .min(1, "Wartość minimalna to 1")
        .max(14, "Wartość maksymalna to 14"),
    }),
    weight: EmptyNumber()
      .integer("Wartość musi być liczbą całkowitą")
      .min(1, "Wartość minimalna to 1")
      .max(1000000, "Wartość maksymalna to 1 000 000"),
    volume: EmptyNumber()
      .integer("Wartość musi być liczbą całkowitą")
      .min(1, "Wartość minimalna to 1")
      .max(1000000, "Wartość maksymalna to 1 000 000"),
    specialBonus: yup.string().max(200, "Maksymalnie 200 znaków)"),
    occurrence: yup.string().max(200, "Maksymalnie 200 znaków)").nullable(),
    cost: EmptyNumber()
      .min(0, "Wartość minimalna to 0")
      .max(10000, "Wartość maksymalna to 10 000"),
    vendorCost: EmptyNumber()
      .min(0, "Wartość minimalna to 0")
      .max(10000, "Wartość maksymalna to 10 000"),
    description: yup.string().max(4000, "Za długi opis (max 4000 znaków)"),
    comment: yup.string().max(4000, "Za długi komentarz (max 4000 znaków)"),
  });
