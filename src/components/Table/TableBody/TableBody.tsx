import { ITableBody, Row } from "../../../types/Table";
import { TableRow } from "./TableRow/TableRow";
import classes from "../Table.module.css";

export const TableBody = <T extends Row>({
  bodyData,
  columns,
  colSpan,
  stickyColumn,
  onRowClick,
  expandableRowsComponent,
  expandableRowsComponentPaddingsDisabled,
  isAllExpanded,
  initialExpandableRowsState,
}: ITableBody<T>) => {
  return (
    <tbody>
      {bodyData.length > 0 ? (
        bodyData.map((row, index) => (
          <TableRow
            columns={columns}
            row={row}
            colSpan={colSpan}
            key={row.id}
            index={index}
            stickyColumn={stickyColumn}
            onRowClick={onRowClick}
            expandableRowsComponent={expandableRowsComponent}
            expandableRowsComponentPaddingsDisabled={
              expandableRowsComponentPaddingsDisabled
            }
            isAllExpanded={isAllExpanded}
            initialExpandableRowsState={initialExpandableRowsState}
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
