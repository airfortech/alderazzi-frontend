import classes from "./Filter.module.css";

interface Props {}

export const Filter = ({}: Props) => {
  return (
    <input className={classes.Filter} type="text" placeholder="Filter..." />
  );
};
