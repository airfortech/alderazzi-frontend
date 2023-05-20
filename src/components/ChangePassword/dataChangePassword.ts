import { ChangePasswordForm } from "../../types/User";
import { Fields } from "../../types/Form";
import { UserRole } from "../../types/UserRole";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  role: yup.string().required("Wybierz rolę!"),
  password: yup.string().min(5, "Hasło musi składać się z conajmniej 5 znaków"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Hasło się nie zgadza"),
});

export const items: Fields<ChangePasswordForm> = [
  {
    type: "select",
    name: "role",
    placeholder: "Wybierz rolę",
    icon: "assassin",
    options: Object.values(UserRole).map(userRole => {
      return {
        label: userRole,
        value: userRole,
      };
    }),
    defaultValue: UserRole.soldato,
  },
  {
    type: "field",
    fieldType: "password",
    name: "password",
    placeholder: "Nowe hasło",
    icon: "skeletonKey",
  },
  {
    type: "field",
    fieldType: "password",
    name: "confirmPassword",
    placeholder: "Powtórz hasło",
    icon: "skeletonKey",
  },
  {
    type: "submit",
    title: "Zmień hasło",
  },
];
