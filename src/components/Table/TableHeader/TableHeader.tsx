import { Dispatch, SetStateAction } from "react";
import { Filter } from "../Filter/Filter";
import clsx from "clsx";
import classes from "../Table.module.css";

interface Props {
  title: string | undefined;
  isFilterable: boolean;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  scrollTopRef: React.RefObject<HTMLTableCellElement>;
  horizontalScroll: "top" | "bottom";
}

export const TableHeader = ({
  title,
  isFilterable,
  filter,
  setFilter,
  scrollTopRef,
  horizontalScroll,
}: Props) => {
  return (
    <header className={classes.TableHeader}>
      {(title || isFilterable) && (
        <div className={classes.headerWrapper}>
          {title && <p className={classes.headerTitle}>{title}</p>}
          {isFilterable && <Filter filter={filter} setFilter={setFilter} />}
        </div>
      )}
      {horizontalScroll === "top" && (
        <div className={classes.scrollTop} ref={scrollTopRef}>
          <div className={classes.scrollTopContent}></div>
        </div>
      )}
    </header>
  );
};
