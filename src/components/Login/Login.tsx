import { UserRole } from "../../types/UserRole";

import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Loader } from "../Loader/Loader";
import { useAuth } from "../../hooks/useAuth";
import { validationSchema } from "./dataLogin";
import { FormData } from "./dataLogin";
import classes from "./Login.module.css";

export const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const { loginUserMutation, isLoading } = useAuth();

  const onSubmit: SubmitHandler<FormData> = async formData => {
    await loginUserMutation(formData);
  };

  useEffect(() => {
    console.log(errors.password);

    if (errors.password !== undefined) toast.dismiss();
    toast.error(errors?.password?.message);
  }, [errors.password]);

  return (
    <div className={classes.Login}>
      <p>Buongiorno! Zaloguj się by uzyskać uprawnienia</p>
      <FormControl
        component="form"
        className={classes.form}
        fullWidth
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLabel>Poziom uprawnień</InputLabel>
        <Controller
          name="role"
          control={control}
          defaultValue={UserRole.soldato}
          render={({ field: { onChange, value } }) => (
            <Select value={value} label="Poziom uprawnień" onChange={onChange}>
              {Object.values(UserRole).map(userRole => (
                <MenuItem key={userRole} value={userRole}>
                  {userRole}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Hasło"
              type="password"
              variant="outlined"
              autoComplete="current-password"
            />
          )}
        />
        <div className={classes.row}>
          <Loader size="small" isLoading={isLoading} />
          <Button
            className={classes.submit}
            type="submit"
            variant="contained"
            size="large"
            disabled={!isValid}
          >
            Zaloguj się
          </Button>
        </div>
      </FormControl>
    </div>
  );
};
