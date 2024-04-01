import * as yup from "yup";

export function EmptyNumber(/* typeErrorMessage = "Please enter a valid number" */) {
  return yup
    .number()
    .transform(function (value, originalValue) {
      if (this.isType(value)) return value;
      if (!originalValue || !originalValue.trim()) {
        return null;
      }
      return originalValue;
    })
    .nullable(true);
  // .typeError(typeErrorMessage);
}
