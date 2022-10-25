import { ApiResponse } from "../../types/responseMessages";
import { UserRole } from "../../types/UserRole";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../../hooks/useAuth";
import { InfoText } from "../InfoText/InfoText";
import { Loader } from "../Loader/Loader";
import { validationSchema } from "./dataLogin";
import { login } from "../../api/auth";
import { FormData } from "./dataLogin";
import classes from "./Login.module.css";
import { Toast } from "../Toast/Toast";
import { toast } from "react-toastify";

export const Login = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const [info, setInfo] = useState<ApiResponse | undefined>(undefined);
  const [isFetching, setIsFetching] = useState(false);
  const { setAuth } = useAuth();

  const onSubmit: SubmitHandler<FormData> = async formData => {
    setIsFetching(true);
    const response = await login(formData);
    setIsFetching(false);
    if (!response) return;
    const { status, message, data } = response;
    setInfo({ status, message });
    // toast.warning(message);
    setAuth(data);
  };

  useEffect(() => {
    setInfo(undefined);
  }, [watch("password")]);

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
        <InfoText
          type={info?.status || "error"}
          message={errors.password?.message || info?.message}
        />
        <div className={classes.row}>
          <Loader size="small" isLoading={isFetching} />
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
