import { Control, FieldValues } from "react-hook-form";
import { ITextArea } from "../../../types/Form";
import { Field } from "../Field/Field";

interface Props<T> extends Omit<ITextArea<T>, "type"> {
  control: Control<FieldValues, any>;
}

export const TextArea = <T,>({
  control,
  name,
  placeholder,
  defaultValue,
  rows,
  minRows,
  maxRows,
}: Props<T>) => {
  return (
    <Field
      control={control}
      name={name as string}
      placeholder={placeholder}
      defaultValue={defaultValue}
      rows={rows}
      minRows={minRows}
      maxRows={maxRows}
      multiline={true}
    />
  );
};
