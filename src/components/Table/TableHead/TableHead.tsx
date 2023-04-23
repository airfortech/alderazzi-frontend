import { Align, ITableHead, Row } from "../../../types/Table";
import { theadTrTh, theadTrThSwitcher } from "../TableCss";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import clsx from "clsx";
import classes from "../Table.module.css";

const thClasses = (align: Align, isSortable: boolean) => {
  return clsx(classes["align-" + align], isSortable && classes.cursorPointer);
};

const thSpanClasses = (align: Align, isActive: boolean) => {
  return clsx(
    align === "right" && classes.spanLeft,
    isActive && classes.activeSort
  );
};

export const TableHead = <T extends Row>({
  columns,
  sortOption,
  handleSort,
  stickyColumn,
  expandableRowsComponent,
  theadRef,
}: ITableHead<T>) => {
  return (
    <thead ref={theadRef}>
      <tr>
        {expandableRowsComponent && (
          <th className={theadTrThSwitcher(stickyColumn)}></th>
        )}
        {columns
          .filter(({ isVisible = true }) => isVisible === true)
          .map(
            (
              {
                header,
                selector,
                isSortable = false,
                align = "left",
                sortFunc,
              },
              index
            ) => (
              <th
                key={(selector as string) + index}
                onClick={
                  isSortable
                    ? () => handleSort(selector as string, sortFunc)
                    : undefined
                }
                className={theadTrTh(index, stickyColumn)}
              >
                <p className={thClasses(align, isSortable)}>
                  {header}
                  {isSortable && (
                    <span
                      className={thSpanClasses(
                        align,
                        sortOption?.field === selector
                      )}
                    >
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
