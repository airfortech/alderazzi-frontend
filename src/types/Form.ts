import dayjs from "dayjs";
import { FieldErrors, FieldValues, Control } from "react-hook-form";
import { Icon, IconColor } from "./Icons";

export interface IForm<T> {
  label?: string;
  labelAlign?: "left" | "center" | "right";
  items: Fields<T>;
  submit?: (formData: T) => void;
  // TODO: how to type it?
  validationSchema?: any;
  errorsHandler?: (errors: FieldErrors<FieldValues>) => void;
  isLoading?: boolean;
}

export type Field<T> =
  | ISelect<T>
  | IAutocomplete<T>
  | IMultiAutocomplete<T>
  | IField<T>
  | ITextArea<T>
  | IDateTime<T>
  | ISubmit;

export type FieldForSubmit<T> = Exclude<Field<T>, ISubmit>;

export type Fields<T> = Field<T>[];

export interface IField<T> {
  type: "field";
  fieldType?: "text" | "number" | "password" | "email";
  name: keyof T;
  placeholder?: string;
  unit?: string;
  icon?: Icon;
  iconColor?: IconColor;
  defaultValue?: string | number | null;
}

export interface IFieldHookProps {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
}

export interface ITextArea<T>
  extends Omit<
    IField<T>,
    "type" | "fieldType" | "unit" | "icon" | "iconColor"
  > {
  type: "textarea";
  rows?: number;
  minRows?: number;
  maxRows?: number;
}

export interface ISelect<T> {
  type: "select";
  name: keyof T;
  placeholder?: string;
  options: { value: string; label: string }[];
  icon?: Icon;
  iconColor?: IconColor;
  defaultValue?: string;
}

export interface IAutocomplete<T> {
  type: "autocomplete";
  name: keyof T;
  placeholder?: string;
  icon?: Icon;
  iconColor?: IconColor;
  options: { value: string; label: string }[];
  defaultOption?: { value: string; label: string };
}

export interface IMultiAutocomplete<T>
  extends Omit<IAutocomplete<T>, "type" | "defaultOption"> {
  type: "multiautocomplete";
  defaultOptions?: { value: string; label: string }[];
}

export interface IDateTime<T> {
  type: "datetime";
  name: keyof T;
  placeholder?: string;
  defaultValue?: Date | dayjs.Dayjs | null;
  minDate?: Date | dayjs.Dayjs | null;
  maxDate?: Date | dayjs.Dayjs | null;
  hideToolbar?: boolean;
  showIcon?: boolean;
  iconColor?: IconColor;
}

export interface ISubmit {
  type: "submit";
  title?: string;
  icon?: Icon;
  iconAlign?: "left" | "right";
  align?: "left" | "right";
  disableIfInvalid?: boolean;
}
