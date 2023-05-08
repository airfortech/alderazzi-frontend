import { IAutocomplete } from "../../../types/Form";
import { Control, Controller, FieldValues } from "react-hook-form";
import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface Props<T> extends Omit<IAutocomplete<T>, "type"> {
  control: Control<FieldValues, any>;
}

export const Autocomplete = <T,>({
  control,
  name,
  options,
  placeholder,
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
            // to bedzie wyswietlane
            getOptionLabel={option => {
              return option.label;
            }}
            // porownanie wybranej wartosci
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            renderInput={params => (
              <TextField {...params} label={placeholder} />
            )}
            onChange={(e, data) => onChange(data)}
          />
        )}
      />
    </>
  );
};
