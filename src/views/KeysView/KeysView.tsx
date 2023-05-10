import * as yup from "yup";
import dayjs from "dayjs";
import { Form } from "../../components/Form/Form";
import { MobileWrapper } from "../../components/MobileWrapper/MobileWrapper";

import classes from "./KeysView.module.css";
import { toast } from "react-toastify";
import { FieldErrors } from "react-hook-form";

export interface FormData {
  name: string;
  age: number;
  description: string;
  birthDate: Date;
  select: string;
  autocomplete: { label: string; id: string };
}

const submit = (formData: FormData) => {
  console.log("submit:", formData);
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Podaj imie!")
    .min(3)
    .matches(/^[0-9]+$/, "Must be only digits"),
  age: yup
    .number()
    .typeError("Podaj liczbe!")
    .required("Podaj wiek!")
    .min(18, "minimum 18!"),
  description: yup.string().required("Podaj opis!").min(20, "Opis za krotki!"),
  birthDate: yup.date().typeError("Wybierz date!").required("Wybierz date!"),
  select: yup.string().required("Wybierz opcje w selekt!"),
  autocomplete: yup
    .object()
    .typeError("Autocomplete error!")
    .shape({
      value: yup
        .string()
        .typeError("Wybierz opcje autocomplete!")
        .required("Wybierz opcje autocomplete!"),
    }),
});

const errors = (errors: FieldErrors<FormData>) => {
  console.log("errors:", errors);
  // if (errors.select !== undefined) toast.dismiss();
  // if (errors.select !== undefined) toast.dismiss();
  // toast.error(errors?.select?.message);
  // toast.error(errors?.autocomplete?.message);
};

export const KeysView = () => {
  return (
    <div className={classes.KeysView}>
      <MobileWrapper>
        <h2>Klucze</h2>
        <br />
        <Form<FormData>
          items={[
            {
              type: "field",
              name: "name",
              placeholder: "Name",
              icon: "calendar",
            },
            {
              type: "field",
              name: "age",
              placeholder: "Age",
            },
            {
              type: "textarea",
              name: "description",
              placeholder: "Description",
              rows: 5,
            },
            { type: "datetime", name: "birthDate", placeholder: "Birth Date" },
            {
              type: "select",
              name: "select",
              options: [
                { value: "1", label: "1" },
                { value: "2", label: "2" },
              ],
              icon: "exit",
              placeholder: "select",
            },
            {
              type: "autocomplete",
              name: "autocomplete",
              options: [
                { value: "1", label: "1" },
                { value: "2", label: "2" },
              ],
              icon: "exit",
              placeholder: "autocomplete",
            },
            { type: "submit" },
          ]}
          submit={submit}
          errorsHandler={errors}
          validationSchema={validationSchema}
        />
      </MobileWrapper>
    </div>
  );
};
