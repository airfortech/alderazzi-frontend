import { Dispatch, SetStateAction } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import classes from "./Filter.module.css";

interface Props {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export const Filter = ({ filter, setFilter }: Props) => {
  return (
    <div className={classes.Filter}>
      <input
        className={classes.input}
        type="text"
        placeholder="Filter..."
        onChange={e => setFilter(e.target.value)}
        value={filter}
      />
      <button className={classes.clear} onClick={() => setFilter("")}>
        <CancelIcon className={classes.icon} />
      </button>
    </div>
  );
};
