import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import classes from "../Table.module.css";
import { Filter } from "../Filter/Filter";

interface Props {
  title: string | undefined;
  isFilterable: boolean;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export const TableHeader = ({
  title,
  isFilterable,
  filter,
  setFilter,
}: Props) => {
  return (
    <header>
      {(title || isFilterable) && (
        <div className={classes.headerWrapper}>
          {title && <p className={classes.headerTitle}>{title}</p>}
          {isFilterable && <Filter filter={filter} setFilter={setFilter} />}
        </div>
      )}
      <div className="scroll">
        <div className="scrollContent"></div>
      </div>
    </header>
  );
};
