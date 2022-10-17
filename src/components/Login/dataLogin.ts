import * as yup from "yup";

export interface FormData {
  role: string;
  password: string;
}

export const validationSchema = yup.object().shape({
  role: yup.string().required(),
  password: yup.string().required("Podaj hasło!"),
});
