import { Controller } from "react-hook-form";
import { IFieldHookProps, IToggleButton } from "../../../types/Form";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButtonMUI from "@mui/material/ToggleButton";
import { Icon } from "../../Icon/Icon";
import classes from "./ToggleButton.module.css";

interface Props<T> extends Omit<IToggleButton<T> & IFieldHookProps, "type"> {}

export const ToggleButton = <T,>({
  control,
  name,
  options,
  defaultOption,
  placeholder,
  icon,
  iconColor,
}: Props<T>) => {
  return (
    <>
      <Controller
        name={name as string}
        control={control}
        defaultValue={defaultOption}
        render={({ field: { onChange, value } }) => (
          <div className={classes.toggleButton}>
            <p>
              {icon && <Icon icon={icon} size="lg" color={iconColor} />}
              {placeholder}
            </p>
            <ToggleButtonGroup
              value={value}
              exclusive
              onChange={onChange}
              color="primary"
              defaultValue={defaultOption}
            >
              {options.map(({ value, label }, i) => (
                <ToggleButtonMUI value={value} aria-label="right" key={i}>
                  {label}
                </ToggleButtonMUI>
              ))}
            </ToggleButtonGroup>
          </div>
        )}
      />
    </>
  );
};
