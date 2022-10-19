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
