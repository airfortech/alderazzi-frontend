import { IFieldHookProps, ITextArea } from "../../../types/Form";
import { Field } from "../Field/Field";

interface Props<T> extends Omit<ITextArea<T> & IFieldHookProps, "type"> {}

export const TextArea = <T,>({
  control,
  errors,
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
      errors={errors}
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
