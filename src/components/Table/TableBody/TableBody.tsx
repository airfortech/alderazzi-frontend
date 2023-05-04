import { ITableBody, Row } from "../../../types/Table";
import { TableRow } from "./TableRow/TableRow";
import classes from "../Table.module.css";

export const TableBody = <T extends Row>({
  bodyData,
  columns,
  filter,
  filteringSelectors,
  colSpan,
  stickyColumn,
  onRowClick,
  expandableRowsComponent,
  isAllExpanded,
  initialExpandableRowsState,
}: ITableBody<T>) => {
  const data =
    filteringSelectors.length === 0
      ? bodyData
      : bodyData.filter(row => {
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
