import {
  Align,
  Columns,
  ExpandableRowsComponent,
  OnRowClickFunc,
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
  onRowClick?: OnRowClickFunc;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
}

export const TableBody = <T extends Row>({
  bodyData,
  columns,
  linkToId,
  filter,
  filteringSelectors,
  colSpan,
  onRowClick,
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
            key={row.id}
            index={index}
            onRowClick={onRowClick}
            expandableRowsComponent={expandableRowsComponent}
          />
        ))}
    </tbody>
  );
};
