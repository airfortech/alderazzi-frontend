import { IFilter, Row } from "../../../types/Table";
import CancelIcon from "@mui/icons-material/Cancel";
import classes from "../Table.module.css";

export const Filter = <T extends Row>({ filter, setFilter }: IFilter<T>) => {
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
