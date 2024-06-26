import { IDateTime, IFieldHookProps } from "../../../types/Form";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import utc from "dayjs/plugin/utc";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { Icon } from "../../Icon/Icon";
import classes from "./DateTime.module.css";
dayjs.extend(utc);

interface Props<T> extends Omit<IDateTime<T> & IFieldHookProps, "type"> {}

export const DateTime = <T,>({
  control,
  errors,
  name,
  placeholder,
  defaultValue,
  minDate,
  maxDate,
  hideToolbar = false,
  showIcon = true,
  iconColor = "inherit",
}: Props<T>) => {
  const isError = !!errors[name as string];

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
            format="DD.MM.YYYY HH:mm"
            label={placeholder}
            ampm={false}
            slotProps={{
              toolbar: { toolbarFormat: "DD MMMM", hidden: hideToolbar },
              actionBar: { actions: ["clear", "cancel", "accept"] },
              field: {
                InputProps: {
                  startAdornment: showIcon && (
                    <div className={classes.iconWrapper}>
                      <Icon
                        icon="clock"
                        size="lg"
                        color={isError ? "danger" : iconColor}
                      />
                    </div>
                  ),
                },
              },
              textField: {
                error: isError,
                helperText: errors[name as string] ? (
                  (errors[name as string]?.message as React.ReactNode)
                ) : (
                  <br />
                ),
              },
            }}
            value={value}
            minDateTime={minDate ? dayjs(minDate) : null}
            maxDateTime={maxDate ? dayjs(maxDate) : null}
            onChange={onChange}
            className={classes.DateTime}
          />
        </LocalizationProvider>
      )}
    />
  );
};
