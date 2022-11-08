import { Align, Columns, SortFunc, SortOption } from "../../../types/Table";
import clsx from "clsx";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import classes from "../Table.module.css";

interface Props<T> {
  columns: Columns<T>;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
}

const thClasses = (align: Align, isSortable: boolean) => {
  return clsx(classes["align-" + align], isSortable && classes.cursorPointer);
};

const thSpanClasses = (align: Align) => {
  return clsx(align === "right" && classes.spanLeft);
};

export const TableHead = <T,>({
  columns,
  sortOption,
  handleSort,
}: Props<T>) => {
  return (
    <thead>
      <tr>
        {columns.map(
          ({
            isVisible = true,
            header,
            selector,
            isSortable = false,
            align = "left",
            sortFunc,
          }) =>
            isVisible && (
              <th
                key={selector as string}
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
