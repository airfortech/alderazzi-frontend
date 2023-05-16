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

export const items = (
  defaultEnemyValues: EnemyRequest
): Fields<EnemyRequest> => {
  const { name, short, guild, race, level, profession, weapon, comment } =
    defaultEnemyValues;
  return [
    { type: "field", name: "name", placeholder: "Imię", defaultValue: name },
    { type: "field", name: "short", placeholder: "Opis", defaultValue: short },
    {
      type: "select",
      name: "guild",
      placeholder: "Stowarzyszenie",
      options: Object.values(Guild).map(guild => {
        return {
          label: guild,
          value: guild,
        };
      }),
      defaultValue: guild,
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
      defaultValue: race,
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
      defaultValue: level,
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
      defaultValue: profession,
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
      defaultValue: weapon,
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
      title: "Edytuj wroga",
    },
  ];
};
