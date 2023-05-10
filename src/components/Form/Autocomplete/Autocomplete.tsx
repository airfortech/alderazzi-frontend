import { IAutocomplete, IFieldHookProps } from "../../../types/Form";
import { Controller } from "react-hook-form";
import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "../../Icon/Icon";

interface Props<T> extends Omit<IAutocomplete<T> & IFieldHookProps, "type"> {}

export const Autocomplete = <T,>({
  control,
  errors,
  name,
  options,
  placeholder,
  icon,
  iconColor = "inherit",
  defaultOption,
}: Props<T>) => {
  const isError = !!errors[name as string];

  return (
    <>
      <Controller
        name={name as string}
        control={control}
        defaultValue={defaultOption}
        render={({ field: { onChange } }) => (
          <MuiAutocomplete
            defaultValue={defaultOption}
            options={options}
            getOptionLabel={option => {
              return option.label;
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            renderInput={params => (
              <TextField
                {...params}
                label={placeholder}
                error={isError}
                helperText={
                  errors[name as string]
                    ? (errors[name as string]?.message as React.ReactNode)
                    : ""
                }
                InputProps={{
                  ...params.InputProps,
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
              />
            )}
            onChange={(e, data) => onChange(data)}
          />
        )}
      />
    </>
  );
};
