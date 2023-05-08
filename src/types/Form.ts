import { FieldErrors, FieldValues } from "react-hook-form";
import { Icon } from "./Icons";

export interface IForm<T> {
  items: Fields<T>;
  // form_action="/path/to/form/submit"
  // form_method="POST"
  // task_id={12} // Used to submit a hidden variable with the id to the form from the database.
  // answer_data={JSON_ANSWERS} // Answer data, only used if loading a pre-existing form with values.
  // authenticity_token={AUTH_TOKEN} // If using Rails and need an auth token to submit form.
  // data={JSON_QUESTION_DATA} // Question data
  submit?: (formData: T) => void;
  // TODO: how to type it?
  validationSchema?: any;
  errorsHandler?: (errors: FieldErrors<FieldValues>) => void;
}

// export type Field = Input | "password" | "textarea" | Select | "datetime";
export type Field<T> = ISelect<T> | IAutocomplete<T> | ISubmit;

export type Fields<T> = [ISubmit, ...Field<T>[]] | [...Field<T>[], ISubmit];

export interface IInput {
  type: "input";
  name: string;
  placeholder?: string | number;
  required?: boolean;
}

export interface ISelect<T> {
  type: "select";
  name: keyof T;
  placeholder?: string;
  options: { value: string | number; label: string }[];
  defaultValue?: string | number;
}

export interface IAutocomplete<T> {
  type: "autocomplete";
  name: keyof T;
  placeholder?: string;
  options: { value: string | number; label: string }[];
  defaultOption?: { value: string | number; label: string };
}

export interface ISubmit {
  type: "submit";
  title?: string;
  icon?: Icon;
  iconAlign?: "left" | "right";
  align?: "left" | "right";
  disableIfInvalid?: boolean;
}

interface FormData {
  role: string;
  test: number;
  password: string;
}

const test: Fields<FormData> = [
  {
    type: "select",
    name: "role",
    options: [{ label: "test", value: "23" }],
  },
  { type: "submit" },
];
