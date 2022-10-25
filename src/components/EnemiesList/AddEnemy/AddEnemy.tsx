import { useState } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import classes from "./AddEnemy.module.css";
import { InfoText } from "../../InfoText/InfoText";

interface Props {
  error: string;
}

export const AddEnemy = ({ error }: Props) => {
  const [input, setInput] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const handleAddEnemy = async (
    event: React.FormEvent<HTMLFormElement>,
    name: string
  ) => {
    event.preventDefault();
    // if (enemiesList.find(enemy => enemy.name === name)) {
    // console.log(name);
    // setError(name + " już jest na liście!");
    // return;
    // }
    if (name.trim() === "") return;
    console.log("add enemy");
  };

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
      <InputLabel htmlFor="outlined-adornment-name">Dodaj wroga</InputLabel>
      <OutlinedInput
        id="outlined-adornment-name"
        type={"text"}
        value={input}
        autoComplete="off"
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
        label="Dodaj wroga"
      />
      <InfoText type="error" size="small" message={error} />
    </FormControl>
  );
};
