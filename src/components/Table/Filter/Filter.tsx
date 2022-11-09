import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CancelIcon from "@mui/icons-material/Cancel";
import classes from "./Filter.module.css";

interface Props {}

export const Filter = ({}: Props) => {
  return (
    <div className={classes.Filter}>
      <input className={classes.input} type="text" placeholder="Filter..." />
      <button className={classes.clear}>
        <CancelIcon className={classes.icon} />
      </button>
    </div>
  );
};
