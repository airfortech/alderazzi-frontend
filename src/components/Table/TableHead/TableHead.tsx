import {
  Align,
  Columns,
  ExpandableRowsComponent,
  Row,
  SortFunc,
  SortOption,
} from "../../../types/Table";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Filter } from "../Filter/Filter";
import classes from "../Table.module.css";
import { relative } from "path";

interface Props<T> {
  columns: Columns<T>;
  colSpan: number;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
}

const headerClasses = (title: string | undefined) => {
  return clsx(classes.header, !title && null);
};

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
  colSpan,
  sortOption,
  handleSort,
  expandableRowsComponent,
}: Props<T>) => {
  return (
    <thead style={{ position: "relative" }}>
      <tr>
        {expandableRowsComponent && <th></th>}
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
      <tr>
        <th colSpan={colSpan} className={classes.scrollTop}>
          <div className={classes.scrollTopContent}></div>
        </th>
      </tr>
    </thead>
  );
};
