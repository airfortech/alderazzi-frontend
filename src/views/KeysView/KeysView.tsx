import * as yup from "yup";
import { Form } from "../../components/Form/Form";
import { MobileWrapper } from "../../components/MobileWrapper/MobileWrapper";

import classes from "./KeysView.module.css";
import { toast } from "react-toastify";
import { FieldErrors } from "react-hook-form";

export interface FormData {
  role: number;
  test: { label: string; value: number };
  password: { label: string; id: number };
}

const submit = (formData: FormData) => {
  console.log("submit:", formData);
};

const validationSchema = yup.object().shape({
  role: yup.string().required(),
  password: yup.object().nullable().required("Podaj hasło!"),
});

const errors = (errors: FieldErrors<FormData>) => {
  console.log("errors:", errors);
  if (errors.password?.id !== undefined) toast.dismiss();
  if (errors.password !== undefined) toast.dismiss();
  toast.error(errors?.password?.id?.message);
  toast.error(errors?.password?.message);
  toast.error(errors?.role?.message);
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
              type: "select",
              name: "role",
              placeholder: "test",
              options: [
                { label: "test", value: "test" },
                { label: "test2", value: "test2" },
              ],
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
