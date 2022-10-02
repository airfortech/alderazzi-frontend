import { UserRole } from "../../types/UserRoles";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./Login.module.css";

export const Login = () => {
  const [role, setRole] = useState(UserRole.soldato);

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as unknown as UserRole);
  };

  return (
    <div className={classes.Login}>
      <p>Zaloguj się by uzyskać uprawnienia</p>
      <FormControl component="form" className={classes.form} fullWidth>
        <InputLabel>Poziom uprawnień</InputLabel>
        <Select
          id="demo-simple-select"
          value={role}
          label="Poziom dostępu"
          onChange={handleChange}
        >
          {Object.values(UserRole).map(userRole => (
            <MenuItem key={userRole} value={userRole}>
              {userRole}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="outlined-basic"
          label="Hasło"
          type="password"
          variant="outlined"
          autoComplete="current-password"
        />
        <p className={classes.error}>{"Error"}</p>
        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          size="large"
        >
          Zaloguj się
        </Button>
      </FormControl>
    </div>
  );
};
