import { EnemyRequest } from "../../../types/Enemy";
import { Race } from "../../../types/Race";
import { Level } from "../../../types/Level";
import { Profession } from "../../../types/Profession";
import { Weapon } from "../../../types/Weapon";
import { Guild } from "../../../types/Guild";
import { Fields } from "../../../types/Form";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Podaj imię!")
    .max(30, "Za długie imię (max 30 znaków)"),
  short: yup.string().max(50, "Za długi opis (max 50 znaków)"),
  comment: yup.string().max(4000, "Za długi komentarz (max 4000 znaków)"),
});

export const items: Fields<EnemyRequest> = [
  { type: "field", name: "name", placeholder: "Imię" },
  { type: "field", name: "short", placeholder: "Opis" },
  {
    type: "select",
    name: "guild",
    placeholder: "Stowarzyszenie",
    options: Object.values(Guild).map(race => {
      return {
        label: race,
        value: race,
      };
    }),
    defaultValue: Guild.gp,
  },
  {
    type: "select",
    name: "race",
    placeholder: "Rasa",
    options: Object.values(Race).map(race => {
      return {
        label: race,
        value: race,
      };
    }),
    defaultValue: Race.unknown,
  },
  {
    type: "select",
    name: "level",
    placeholder: "Poziom",
    options: Object.values(Level).map(level => {
      return {
        label: level,
        value: level,
      };
    }),
    defaultValue: Level.unknown,
  },
  {
    type: "select",
    name: "profession",
    placeholder: "Zawód",
    options: Object.values(Profession).map(profession => {
      return {
        label: profession,
        value: profession,
      };
    }),
    defaultValue: Profession.unknown,
  },
  {
    type: "select",
    name: "weapon",
    placeholder: "Broń",
    options: Object.values(Weapon).map(weapon => {
      return {
        label: weapon,
        value: weapon,
      };
    }),
    defaultValue: Weapon.unknown,
  },
  {
    type: "textarea",
    name: "comment",
    placeholder: "Komentarz",
    rows: 4,
  },
  {
    type: "submit",
    title: "Dodaj wroga",
  },
];
