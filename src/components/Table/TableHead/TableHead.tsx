import { Align, Columns, SortFunc, SortOption } from "../../../types/Table";
import { Dispatch, SetStateAction, useEffect } from "react";
import clsx from "clsx";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Filter } from "../Filter/Filter";
import classes from "../Table.module.css";

interface Props<T> {
  columns: Columns<T>;
  title: string | undefined;
  isFilterable: boolean;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const headerClasses = (title: string | undefined) => {
  return clsx(classes.header, !title && null);
};

const thClasses = (align: Align, isSortable: boolean) => {
  return clsx(classes["align-" + align], isSortable && classes.cursorPointer);
};

const thSpanClasses = (align: Align) => {
  return clsx(align === "right" && classes.spanLeft);
};

export const TableHead = <T,>({
  columns,
  title,
  isFilterable,
  sortOption,
  handleSort,
  filter,
  setFilter,
}: Props<T>) => {
  const colSpan = columns.filter(
    ({ isVisible }) => isVisible === true || isVisible === undefined
  ).length;

  return (
    <thead>
      {(title || isFilterable) && (
        <tr>
          <th colSpan={colSpan}>
            <div className={headerClasses(title)}>
              {title && <p className={classes.title}>{title}</p>}
              {isFilterable && <Filter filter={filter} setFilter={setFilter} />}
            </div>
          </th>
        </tr>
      )}
      <tr>
        {columns.map(
          (
            {
              isVisible = true,
              header,
              selector,
              isSortable = false,
              align = "left",
              sortFunc,
            },
            index
          ) =>
            isVisible && (
              <th
                key={(selector as string) + index}
                onClick={
                  isSortable
                    ? () => handleSort(selector as string, sortFunc)
                    : undefined
                }
              >
                <p className={thClasses(align, isSortable)}>
                  {header}
                  {isSortable && (
                    <span className={thSpanClasses(align)}>
                      {sortOption?.field === selector ? (
                        sortOption.order === "asc" ? (
                          <NorthIcon />
                        ) : (
                          <SouthIcon />
                        )
                      ) : (
                        <SwapVertIcon />
                      )}
                    </span>
                  )}
                </p>
              </th>
            )
        )}
      </tr>
    </thead>
  );
};
