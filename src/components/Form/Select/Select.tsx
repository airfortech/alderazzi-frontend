import { Controller } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import { IFieldHookProps, ISelect } from "../../../types/Form";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "../../Icon/Icon";

interface Props<T> extends Omit<ISelect<T> & IFieldHookProps, "type"> {}

export const Select = <T,>({
  control,
  errors,
  name,
  options,
  defaultValue,
  icon,
  iconColor = "inherit",
  placeholder,
}: Props<T>) => {
  const isError = !!errors[name as string];

  return (
    <>
      <Controller
        name={name as string}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field: { onChange, value } }) => (
          <TextField
            value={value}
            label={placeholder}
            onChange={onChange}
            error={isError}
            helperText={
              errors[name as string]
                ? (errors[name as string]?.message as React.ReactNode)
                : ""
            }
            select
            InputProps={{
              startAdornment: icon && (
                <InputAdornment position="start">
                  <Icon
                    icon={icon}
                    size="lg"
                    color={isError ? "danger" : iconColor}
                  />
                </InputAdornment>
              ),
            }}
          >
            {options.map(({ value, label }, i) => (
              <MenuItem value={value as string | number} key={value + "-" + i}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </>
  );
};
