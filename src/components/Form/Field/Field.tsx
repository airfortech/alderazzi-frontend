import { IField, IFieldHookProps } from "../../../types/Form";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "../../Icon/Icon";

interface Props<T> extends Omit<IField<T> & IFieldHookProps, "type"> {
  multiline?: boolean;
  rows?: number;
  minRows?: number;
  maxRows?: number;
}

export const Field = <T,>({
  control,
  errors,
  fieldType = "text",
  name,
  placeholder,
  unit,
  icon,
  iconColor = "inherit",
  defaultValue,
  multiline = false,
  rows = undefined,
  minRows = undefined,
  maxRows = undefined,
}: Props<T>) => {
  const isError = !!errors[name as string];

  return (
    <Controller
      name={name as string}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          error={isError}
          helperText={
            errors[name as string]
              ? (errors[name as string]?.message as React.ReactNode)
              : ""
          }
          value={value}
          label={placeholder}
          type={fieldType}
          variant="outlined"
          multiline={multiline}
          rows={rows}
          minRows={minRows}
          maxRows={maxRows}
          // autoComplete="current-password"
          InputProps={{
            startAdornment: icon ? (
              <InputAdornment position="start">
                <Icon
                  icon={icon}
                  size="lg"
                  color={isError ? "danger" : iconColor}
                />
              </InputAdornment>
            ) : undefined,
            endAdornment: unit && (
              <InputAdornment position="end">{unit}</InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
