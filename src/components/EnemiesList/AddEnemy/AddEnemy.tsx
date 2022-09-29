import { useState } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import classes from "./AddEnemy.module.css";

interface Props {
  handleAddEnemy: (
    event: React.FormEvent<HTMLFormElement>,
    name: string
  ) => void;
}

export const AddEnemy = ({ handleAddEnemy }: Props) => {
  const [input, setInput] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  return (
    <FormControl
      variant="outlined"
      component="form"
      className={classes.AddEnemy}
      onSubmit={event => {
        handleAddEnemy(event, input);
        setInput("");
      }}
    >
      <InputLabel htmlFor="outlined-adornment-password">Dodaj wroga</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={"text"}
        value={input}
        onChange={handleChangeInput}
        required
        endAdornment={
          <InputAdornment position="end">
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
              type="submit"
            >
              <DirectionsIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};
