import {
  Align,
  Columns,
  ExpandableRowsComponent,
  Row,
} from "../../../types/Table";
import { Fragment, MouseEventHandler, ReactElement, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import classes from "../Table.module.css";
import { TableRow } from "./TableRow/TableRow";

interface Props<T> {
  bodyData: T[];
  columns: Columns<T>;
  linkToId?: string;
  filter: string;
  filteringSelectors: Array<keyof T>;
  colSpan: number;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
}

export const TableBody = <T,>({
  bodyData,
  columns,
  linkToId,
  filter,
  filteringSelectors,
  colSpan,
  expandableRowsComponent,
}: Props<T>) => {
  const navigate = useNavigate();

  return (
    <tbody>
      {bodyData
        .filter(row => {
          for (let selector of filteringSelectors) {
            if (
              row[selector]
                ?.toString()
                .toLowerCase()
                .includes(filter.toLowerCase())
            )
              return true;
          }
          return false;
        })
        .map((row, index) => (
          <TableRow
            columns={columns}
            linkToId={linkToId}
            row={row}
            colSpan={colSpan}
            expandableRowsComponent={expandableRowsComponent}
          />
        ))}
    </tbody>
  );
};
