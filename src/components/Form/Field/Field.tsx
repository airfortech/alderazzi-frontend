import InputLabel from "@mui/material/InputLabel";
import { Control, Controller, FieldValues } from "react-hook-form";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IField, ISelect } from "../../../types/Form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

interface Props<T> extends Omit<IField<T>, "type"> {
  control: Control<FieldValues, any>;
}

export const Field = <T,>({
  control,
  fieldType = "text",
  name,
  placeholder,
  unit,
  unitAlign = "right",
  defaultValue,
}: Props<T>) => {
  return (
    <Controller
      name={name as string}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <TextField
          // {...field}
          onChange={onChange}
          value={value}
          label={placeholder}
          type={fieldType}
          variant="outlined"
          // InputLabelProps={{ shrink: true }}
          // autoComplete="current-password"
          InputProps={{
            startAdornment:
              unit && unitAlign === "left" ? (
                <InputAdornment position="start">{unit}</InputAdornment>
              ) : undefined,
            endAdornment:
              unit && unitAlign === "right" ? (
                <InputAdornment position="end">{unit}</InputAdornment>
              ) : undefined,
          }}
        />
      )}
    />
  );
};
