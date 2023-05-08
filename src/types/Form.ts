import { FieldErrors, FieldValues } from "react-hook-form";
import { Icon } from "./Icons";

export interface IForm<T> {
  items: Field<T>[];
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
export type Field<T> = ISelect<T> | ISubmit;

export type Fields<T> = [ISubmit, ...Field<T>[]] | [...Field<T>[], ISubmit];

export interface IInput {
  type: "input";
  // unique
  name: string;
  placeholder?: string | number;
  required?: boolean;
}

export interface ISelect<T> {
  type: "select";
  name: keyof T;
  placeholder?: string;
  options: { value: string | number; label: string }[];
}

export interface ISubmit {
  type: "submit";
  title?: string;
  icon?: Icon;
  iconAlign?: "left" | "right";
  align?: "left" | "right";
}

interface FormData {
  role: number;
  test: { label: string; id: number };
  password: { label: string; id: number };
}

const test: Fields<FormData> = [
  { type: "select", name: "role", options: [{ label: "test", value: "das" }] },
  { type: "submit" },
];

// const test2: Fields = [{ type: "input", name: "test" }, { type: "submit" }];

// const test3: Fields = [{ type: "submit" }, { type: "input", name: "test" }];

// const test4: Fields = [
//   { type: "input", name: "input" },
//   { type: "submit" },
//   { type: "input", name: "test" },
// ];
