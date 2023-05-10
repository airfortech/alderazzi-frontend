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
  // select: string;
  // autocomplete: { label: string; id: string };
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
  birthDate: yup.date().required("Wybierz date!"),
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
              // defaultValue: 27,
            },
            {
              type: "textarea",
              name: "description",
              placeholder: "Description",
              rows: 5,
            },
            { type: "datetime", name: "birthDate", placeholder: "Birth Date" },
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
