import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import * as yup from "yup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Loader } from "../Loader/Loader";

import classes from "./Form.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
import { Key, useEffect } from "react";
import { toast } from "react-toastify";
import { Select } from "./Select/Select";
import { Autocomplete } from "./Autocomplete/Autocomplete";
import { Submit } from "./Submit/Submit";
import { IForm } from "../../types/Form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Field } from "./Field/Field";
import { DateTime } from "./DateTime/DateTime";
import { TextArea } from "./TextArea/TextArea";

export interface FormData {
  role: number;
  test: { label: string; id: number };
  password: { label: string; id: number };
}

export const Form = <T,>({
  submit,
  items,
  validationSchema,
  errorsHandler,
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
                isLoading={true}
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
