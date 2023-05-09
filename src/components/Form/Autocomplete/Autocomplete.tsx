import { IAutocomplete } from "../../../types/Form";
import { Control, Controller, FieldValues } from "react-hook-form";
import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "../../Icon/Icon";

interface Props<T> extends Omit<IAutocomplete<T>, "type"> {
  control: Control<FieldValues, any>;
}

export const Autocomplete = <T,>({
  control,
  name,
  options,
  placeholder,
  icon,
  iconColor = "inherit",
  defaultOption,
}: Props<T>) => {
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
                InputProps={{
                  ...params.InputProps,
                  startAdornment: icon && (
                    <InputAdornment position="start">
                      <Icon icon={icon} size="lg" color={iconColor} />
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
