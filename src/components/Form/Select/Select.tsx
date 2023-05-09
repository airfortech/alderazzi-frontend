import InputLabel from "@mui/material/InputLabel";
import { Control, Controller, FieldValues } from "react-hook-form";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ISelect } from "../../../types/Form";

import classes from "./Select.module.css";
import TextField from "@mui/material/TextField";

interface Props<T> extends Omit<ISelect<T>, "type"> {
  control: Control<FieldValues, any>;
}

export const Select = <T,>({
  control,
  name,
  options,
  defaultValue,
  placeholder,
}: Props<T>) => {
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
            select
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
