import InputLabel from "@mui/material/InputLabel";
import { Control, Controller, FieldValues } from "react-hook-form";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IField, ISelect } from "../../../types/Form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "../../Icon/Icon";
import classes from "../Form.module.css";

interface Props<T> extends Omit<IField<T>, "type"> {
  control: Control<FieldValues, any>;
}

export const Field = <T,>({
  control,
  fieldType = "text",
  name,
  placeholder,
  unit,
  icon,
  iconColor = "inherit",
  defaultValue,
}: Props<T>) => {
  return (
    <Controller
      name={name as string}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label={placeholder}
          type={fieldType}
          variant="outlined"
          // autoComplete="current-password"
          InputProps={{
            startAdornment: icon ? (
              <InputAdornment position="start">
                <Icon icon={icon} size="lg" color={iconColor} />
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
