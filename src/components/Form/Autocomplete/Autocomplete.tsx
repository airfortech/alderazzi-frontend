import { Controller } from "react-hook-form";
import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface Props {
  control: any;
}

export const Autocomplete = ({ control }: Props) => {
  return (
    <>
      <Controller
        name="password"
        control={control}
        // defaultValue={{ label: "Pulp Fiction", id: 2 }}
        render={({ field: { onChange } }) => (
          <MuiAutocomplete
            // defaultValue={{ label: "Pulp Fiction", id: 2 }}
            options={[
              { label: "The Godfather", id: 1 },
              { label: "Pulp Fiction", id: 2 },
            ]}
            // to bedzie wyswietlane
            getOptionLabel={option => {
              return option.label;
            }}
            // porownanie wybranej wartosci
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={params => <TextField {...params} label="Movie" />}
            onChange={(e, data) => onChange(data)}
          />
        )}
      />
    </>
  );
};
