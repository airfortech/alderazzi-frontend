import { ITableHead, Row } from "../../../types/Table";
import {
  thClasses,
  thSpanClasses,
  thead,
  theadTrTh,
  theadTrThSwitcher,
} from "../TableCss";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const TableHead = <T extends Row>({
  title,
  isFilterable,
  columns,
  sortOption,
  handleSort,
  stickyColumn,
  expandableRowsComponent,
  theadRef,
  isAllExpanded,
  handleAllExpandTrigger,
}: ITableHead<T>) => {
  return (
    <thead ref={theadRef} className={thead(title, isFilterable)}>
      <tr>
        {expandableRowsComponent && (
          <th
            className={theadTrThSwitcher(stickyColumn)}
            onClick={handleAllExpandTrigger}
          >
            {isAllExpanded ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </th>
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
