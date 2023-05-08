import InputLabel from "@mui/material/InputLabel";
import { Control, Controller, FieldValues } from "react-hook-form";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ISelect } from "../../../types/Form";

interface Props<T> extends Omit<ISelect<T>, "type"> {
  control: Control<FieldValues, any>;
}

export const Select = <T,>({
  control,
  name,
  options,
  placeholder,
}: Props<T>) => {
  return (
    <>
      <InputLabel>{placeholder}</InputLabel>
      <Controller
        name={name as string}
        control={control}
        // dla liczb by brak domyslnie wybranego elementu dzialal trzeba dodac typ number | ""
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          // label musi miec taka sama nazwe jak InputLabel
          <MuiSelect value={value} label={placeholder} onChange={onChange}>
            {options.map(({ value, label }, i) => (
              <MenuItem value={value} key={value + "-" + i}>
                {label}
              </MenuItem>
            ))}
          </MuiSelect>
        )}
      />
    </>
  );
};
