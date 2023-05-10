import { Fields } from "../../types/Form";
import { UserRole } from "../../types/UserRole";
import * as yup from "yup";

export interface FormData {
  role: UserRole;
  password: string;
}

export const validationSchema = yup.object().shape({
  role: yup.string().required(),
  password: yup.string().required("Podaj hasło!"),
});

export const fields: Fields<FormData> = [
  {
    type: "select",
    name: "role",
    options: Object.values(UserRole).map(userRole => {
      return { value: userRole, label: userRole };
    }),
    defaultValue: UserRole.soldato,
    placeholder: "Poziom uprawnień",
    icon: "assassin",
  },
  {
    type: "field",
    name: "password",
    placeholder: "Hasło",
    icon: "skeletonKey",
  },
  { type: "submit", align: "left", title: "Zaloguj się" },
];
