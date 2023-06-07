import { IFieldHookProps, IMultiAutocomplete } from "../../../types/Form";
import {
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "../../Icon/Icon";

type IError = (
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined
) & {
  value: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

interface Props<T>
  extends Omit<IMultiAutocomplete<T> & IFieldHookProps, "type"> {}

export const MultiAutocomplete = <T,>({
  control,
  errors,
  name,
  options,
  placeholder,
  icon,
  iconColor = "inherit",
  defaultOptions,
}: Props<T>) => {
  const newError = errors[name as string] as IError;
  const error = newError?.value?.message || newError?.message;
  const isError = !!error;

  return (
    <>
      <Controller
        name={name as string}
        control={control}
        defaultValue={defaultOptions}
        render={({ field: { onChange, value } }) => (
          <MuiAutocomplete
            multiple
            value={value || []}
            options={options}
            getOptionLabel={option => {
              return option.label;
            }}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            filterSelectedOptions
            renderInput={params => (
              <TextField
                {...params}
                label={placeholder}
                error={isError}
                helperText={(error as React.ReactNode) || <br />}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: icon ? (
                    <>
                      <InputAdornment position="start">
                        <Icon
                          icon={icon}
                          size="lg"
                          color={isError ? "danger" : iconColor}
                        />
                      </InputAdornment>
                      {params.InputProps.startAdornment}
                    </>
                  ) : (
                    params.InputProps.startAdornment
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
