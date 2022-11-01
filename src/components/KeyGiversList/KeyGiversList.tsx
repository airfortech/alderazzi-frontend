import List from "@mui/material/List";
import { useKeyGivers } from "../../hooks/useKeyGivers";
import { KeyGiver } from "../../types/KeyGiver";
import { Loader } from "../Loader/Loader";
import { KeyGiverItem } from "./KeyGiverItem/KeyGiverItem";
import classes from "./KeyGiversList.module.css";

export const KeyGiversList = () => {
  const { data: keyGivers, isError, isLoading } = useKeyGivers();

  return (
    <div className={classes.KeyGiversList}>
      <h2>Lista Kluczodajek:</h2>
      {isLoading ? (
        <Loader isLoading />
      ) : keyGivers?.length === 0 || isError ? (
        <p>{"Lista jest pusta"}</p>
      ) : (
        <List component="ul" aria-labelledby="nested-list-subheader">
          {keyGivers?.map((keyGiver: KeyGiver) => (
            <KeyGiverItem key={keyGiver.id} props={keyGiver} />
          ))}
        </List>
      )}
    </div>
  );
};
