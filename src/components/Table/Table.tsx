import { useTable, useSortBy, Column, Row, ColumnInstance } from "react-table";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { clsx } from "clsx";
import classes from "./Table.module.css";
import { useNavigate } from "react-router-dom";

interface Props {
  columns?: any;
  data?: any;
  linkToId?: string;
}

interface CustomColumnInstance extends ColumnInstance {
  align: "left" | "right" | "center";
  accessor: string;
  show: boolean;
}

type Align = "left" | "right" | "center";

export const Table = ({ columns, data, linkToId }: Props) => {
  const navigate = useNavigate();
  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
    useTable(
      {
        columns,
        data,
        disableSortRemove: true,
        initialState: {
          sortBy: [{ id: "nextRespawn" }],
          hiddenColumns: (columns as ColumnInstance[])
            .filter(col => col.show === false)
            .map(col => col.accessor),
        },
      },
      useSortBy
    );

  const handleLinkToId = (id: string, name: string) => {
    if (!linkToId) return;
    navigate({
      pathname: `${linkToId}/${id}-${name.split(" ").join("-")}`,
    });
  };

  const thClasses = (align: Align) => {
    return clsx(
      align === "right" && classes.alignRight,
      align === "center" && classes.alignCenter
    );
  };

  const tdClasses = (align: Align) => {
    return clsx(
      align === "right" && classes.alignRight,
      align === "center" && classes.alignCenter
    );
  };

  const spanClasses = (align: Align) => {
    return clsx(align === "right" && classes.spanLeft);
  };

  const rowClasses = () => {
    return clsx(linkToId && classes.row);
  };

  return (
    <table className={classes.Table} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <p className={thClasses(column["align"])}>
                  {column.render("Header")}
                  <span className={spanClasses(column["align"])}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <SouthIcon />
                      ) : (
                        <NorthIcon />
                      )
                    ) : (
                      <SwapVertIcon className={classes.inactiveSortIcon} />
                    )}
                  </span>
                </p>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              className={rowClasses()}
              {...row.getRowProps()}
              onClick={() =>
                handleLinkToId(row.values["id"], row.values["name"])
              }
            >
              {row.cells.map(cell => {
                return (
                  <td
                    className={tdClasses(cell.column.align)}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
