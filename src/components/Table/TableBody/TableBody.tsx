import {
  Columns,
  ExpandableRowsComponent,
  OnRowClickFunc,
  Row,
} from "../../../types/Table";
import { TableRow } from "./TableRow/TableRow";
import classes from "../Table.module.css";

interface Props<T> {
  bodyData: T[];
  columns: Columns<T>;
  filter: string;
  filteringSelectors: Array<keyof T>;
  colSpan: number;
  onRowClick?: OnRowClickFunc<T>;
  stickyColumn: "switcher" | "first column" | "none";
  expandableRowsComponent?: ExpandableRowsComponent<T>;
}

export const TableBody = <T extends Row>({
  bodyData,
  columns,
  filter,
  filteringSelectors,
  colSpan,
  stickyColumn,
  onRowClick,
  expandableRowsComponent,
}: Props<T>) => {
  const data = bodyData.filter(row => {
    for (let selector of filteringSelectors) {
      if (
        row[selector]?.toString().toLowerCase().includes(filter.toLowerCase())
      )
        return true;
    }
    return false;
  });
  return (
    <tbody>
      {data.length > 0 ? (
        data.map((row, index) => (
          <TableRow
            columns={columns}
            row={row}
            colSpan={colSpan}
            key={row.id}
            index={index}
            stickyColumn={stickyColumn}
            onRowClick={onRowClick}
            expandableRowsComponent={expandableRowsComponent}
          />
        ))
      ) : (
        <tr>
          <td colSpan={colSpan} className={classes.noData}>
            No data found
          </td>
        </tr>
      )}
    </tbody>
  );
};
