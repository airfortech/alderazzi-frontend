import {
  Columns,
  ExpandableRowsComponent,
  OnRowClickFunc,
  Row,
} from "../../../types/Table";
import { TableRow } from "./TableRow/TableRow";

interface Props<T> {
  bodyData: T[];
  columns: Columns<T>;
  filter: string;
  filteringSelectors: Array<keyof T>;
  colSpan: number;
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
}

export const TableBody = <T extends Row>({
  bodyData,
  columns,
  filter,
  filteringSelectors,
  colSpan,
  onRowClick,
  expandableRowsComponent,
}: Props<T>) => {
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
