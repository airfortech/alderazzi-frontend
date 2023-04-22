import {
  Align,
  Columns,
  ExpandableRowsComponent,
  Row,
  SortFunc,
  SortOption,
} from "../../../types/Table";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import clsx from "clsx";
import classes from "../Table.module.css";
import { theadTrTh, theadTrThSwitcher } from "../TableCss";

interface Props<T> {
  columns: Columns<T>;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
  stickyColumn: "switcher" | "first column" | "none";
  expandableRowsComponent?: ExpandableRowsComponent<T>;
  theadRef: React.RefObject<HTMLTableSectionElement>;
}

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
}: Props<T>) => {
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
