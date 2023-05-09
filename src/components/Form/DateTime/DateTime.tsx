import dayjs from "dayjs";
import "dayjs/locale/pl";
import { Control, Controller, FieldValues } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { Icon } from "../../Icon/Icon";
import classes from "./DateTime.module.css";
import { IDateTime } from "../../../types/Form";

interface Props<T> extends Omit<IDateTime<T>, "type"> {
  control: Control<FieldValues, any>;
}

export const DateTime = <T,>({
  control,
  name,
  placeholder,
  defaultValue,
  hideToolbar = false,
  showIcon = true,
  iconColor = "inherit",
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name as string}
      defaultValue={defaultValue ? dayjs(defaultValue) : null}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="pl"
          localeText={{
            okButtonLabel: "OK",
          }}
        >
          <MobileDateTimePicker
            label={placeholder}
            ampm={false}
            slotProps={{
              toolbar: { toolbarFormat: "DD MMM", hidden: hideToolbar },
              actionBar: { actions: ["clear", "cancel", "accept"] },
              field: {
                InputProps: {
                  startAdornment: showIcon && (
                    <div className={classes.iconWrapper}>
                      <Icon icon="clock" size="lg" color={iconColor} />
                    </div>
                  ),
                },
              },
            }}
            value={value}
            onChange={onChange}
            className={classes.DateTime}
          />
        </LocalizationProvider>
      )}
    />
  );
};
