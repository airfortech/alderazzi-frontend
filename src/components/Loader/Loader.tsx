import classes from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={classes.Loader}>
      <div className={classes.spinner}></div>
    </div>
  );
};
