import { IForm } from "../../types/Form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import { yupResolver } from "@hookform/resolvers/yup";
import { Key, useEffect } from "react";
import { Select } from "./Select/Select";
import { Autocomplete } from "./Autocomplete/Autocomplete";
import { Submit } from "./Submit/Submit";
import { Field } from "./Field/Field";
import { DateTime } from "./DateTime/DateTime";
import { TextArea } from "./TextArea/TextArea";
import clsx from "clsx";

import classes from "./Form.module.css";

export interface FormData {
  role: number;
  test: { label: string; id: number };
  password: { label: string; id: number };
}

const labelClasses = (align: "left" | "center" | "right") =>
  clsx(
    classes.label,
    align === "center" && classes.center,
    align === "right" && classes.right
  );

export const Form = <T,>({
  label,
  labelAlign = "left",
  submit,
  items,
  validationSchema,
  errorsHandler,
  isLoading = false,
}: IForm<T>) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  const onSubmit: SubmitHandler<FieldValues> = async formData => {
    if (!submit) return;
    const form = formData as T;
    submit(form);
  };

  useEffect(() => {
    if (!errorsHandler) return;
    errorsHandler(errors);
  }, [errors]);

  return (
    <div className={classes.Form}>
      <FormControl
        component="form"
        className={classes.form}
        fullWidth
        onSubmit={handleSubmit(onSubmit)}
      >
        {label && <label className={labelClasses(labelAlign)}>{label}</label>}
        {items.map((item, i) => {
          if (item.type === "select")
            return (
              <Select
                control={control}
                errors={errors}
                name={item.name as never}
                options={item.options}
                defaultValue={item.defaultValue}
                placeholder={item.placeholder}
                icon={item.icon}
                iconColor={item.iconColor}
                key={item.name as Key}
              />
            );
          else if (item.type === "autocomplete")
            return (
              <Autocomplete
                control={control}
                errors={errors}
                name={item.name as never}
                options={item.options}
                placeholder={item.placeholder}
                icon={item.icon}
                iconColor={item.iconColor}
                key={item.name as Key}
              />
            );
          else if (item.type === "submit")
            return (
              <Submit
                title={item.title}
                icon={item.icon}
                iconAlign={item.iconAlign}
                align={item.align}
                disableIfInvalid={item.disableIfInvalid}
                isValid={isValid}
                isLoading={isLoading}
                key={i}
              />
            );
          else if (item.type === "field")
            return (
              <Field
                control={control}
                errors={errors}
                name={item.name}
                fieldType={item.fieldType}
                placeholder={item.placeholder}
                unit={item.unit}
                icon={item.icon}
                iconColor={item.iconColor}
                defaultValue={item.defaultValue}
                key={item.name as Key}
              />
            );
          else if (item.type === "textarea")
            return (
              <TextArea
                control={control}
                errors={errors}
                name={item.name}
                placeholder={item.placeholder}
                defaultValue={item.defaultValue}
                rows={item.rows}
                minRows={item.minRows}
                maxRows={item.maxRows}
                key={item.name as Key}
              />
            );
          else if (item.type === "datetime")
            return (
              <DateTime
                control={control}
                errors={errors}
                name={item.name}
                placeholder={item.placeholder}
                defaultValue={item.defaultValue}
                minDate={item.minDate}
                maxDate={item.maxDate}
                hideToolbar={item.hideToolbar}
                showIcon={item.showIcon}
                iconColor={item.iconColor}
                key={item.name as Key}
              />
            );
        })}
      </FormControl>
    </div>
  );
};
