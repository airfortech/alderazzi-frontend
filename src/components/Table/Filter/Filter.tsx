import { IFilter } from "../../../types/Table";
import CancelIcon from "@mui/icons-material/Cancel";
import classes from "./Filter.module.css";

export const Filter = ({ filter, setFilter }: IFilter) => {
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
