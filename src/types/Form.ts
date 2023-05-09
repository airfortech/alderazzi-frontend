import dayjs from "dayjs";
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

export type Field<T> =
  | ISelect<T>
  | IAutocomplete<T>
  | IField<T>
  | IDateTime<T>
  | ISubmit;

// export type Fields<T> = [ISubmit, ...Field<T>[]] | [...Field<T>[], ISubmit];
export type Fields<T> = Field<T>[];

export interface IField<T> {
  type: "field";
  fieldType?: "text" | "number" | "password" | "email";
  name: keyof T;
  placeholder: string;
  unit?: string;
  unitAlign?: "left" | "right";
  defaultValue?: string | number;
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

export interface IDateTime<T> {
  type: "datetime";
  name: keyof T;
  placeholder?: string;
  defaultValue?: Date | dayjs.Dayjs | null;
  hideToolbar?: boolean;
}

export interface ISubmit {
  type: "submit";
  title?: string;
  icon?: Icon;
  iconAlign?: "left" | "right";
  align?: "left" | "right";
  disableIfInvalid?: boolean;
}
