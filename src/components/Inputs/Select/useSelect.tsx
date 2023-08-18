import { Icon as IIcon, IconColor } from "../../../types/Icons";
import { ChangeEventHandler, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import clsx from "clsx";
import { Icon } from "../../Icon/Icon";
import classes from "./Select.module.css";

interface Props {
  placeholder?: string;
  options: { value: string; label: string }[];
  icon?: IIcon;
  iconColor?: IconColor;
  defaultValue?: string;
  className?: string;
}

export const useSelect = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    setValue(e.target.value);
  };

  const Select = ({
    options,
    icon,
    iconColor,
    placeholder,
    className,
  }: Props) => {
    const selectClass = () => clsx(classes.Select, className && className);

    return (
      <div className={selectClass()}>
        <TextField
          value={value}
          label={placeholder}
          onChange={handleChange}
          select
          fullWidth
          InputProps={{
            startAdornment: icon && (
              <InputAdornment position="start">
                <Icon icon={icon} size="lg" color={iconColor} />
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
      </div>
    );
  };

  return { value, Select };
};
