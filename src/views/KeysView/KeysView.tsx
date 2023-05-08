import * as yup from "yup";
import { Form } from "../../components/Form/Form";
import { MobileWrapper } from "../../components/MobileWrapper/MobileWrapper";

import classes from "./KeysView.module.css";
import { toast } from "react-toastify";
import { FieldErrors } from "react-hook-form";

export interface FormData {
  select: number;
  autocomplete: { label: string; id: number };
}

const submit = (formData: FormData) => {
  console.log("submit:", formData);
  // FIXME: submit returns formData.select not formData.select.value
};

const validationSchema = yup.object().shape({
  select: yup.string().required("Podaj select!"),
  autocomplete: yup.object().nullable().required("Podaj autocomplete!"),
});

const errors = (errors: FieldErrors<FormData>) => {
  console.log("errors:", errors);
  if (errors.select !== undefined) toast.dismiss();
  if (errors.select !== undefined) toast.dismiss();
  toast.error(errors?.select?.message);
  toast.error(errors?.autocomplete?.message);
  // toast.error(errors?.role?.message);
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
              name: "select",
              placeholder: "select",
              options: [
                { label: "test", value: 1 },
                { label: "test2", value: 2 },
              ],
              // defaultValue: 2,
            },
            {
              type: "autocomplete",
              name: "autocomplete",
              placeholder: "autocomplete",
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
