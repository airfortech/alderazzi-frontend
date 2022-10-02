import { UserRole } from "../../types/UserRoles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./Login.module.css";

interface FormData {
  role: string;
  password: string;
}

const validationSchema = yup.object().shape({
  role: yup.string().required(),
  password: yup.string().required("Podaj hasło!"),
});

export const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = data =>
    console.log("data submitted: ", data);

  return (
    <div className={classes.Login}>
      <p>Zaloguj się by uzyskać uprawnienia</p>
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
        <p className={classes.error}>{errors.password?.message}</p>
        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          size="large"
          disabled={!isValid}
        >
          Zaloguj się
        </Button>
      </FormControl>
    </div>
  );
};
