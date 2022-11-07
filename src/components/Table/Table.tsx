import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { clsx } from "clsx";
import classes from "./Table.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// export type CustomColumn = Column & {
//   align?: "left" | "right" | "center";
//   accessor: string;
//   show?: boolean;
// };

interface Props {
  columns: any;
  data: any;
  linkToId?: string;
}

// interface HeaderGroup<D extends object = {}> extends ColumnInstance<D>, UseTableHeaderGroupProps<D> {}

type Align = "left" | "right" | "center";

export const Table = ({ columns, data, linkToId }: Props) => {
  const navigate = useNavigate();
  // const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
  //   useReactTable(
  //     {
  //       columns,
  //       data,
  //       disableSortRemove: true,
  //       initialState: {
  //         sortBy: [{ id: "nextRespawn" }],
  //         hiddenColumns: (columns as CustomColumn[])
  //           .filter(col => col.show === false)
  //           .map(col => col.accessor),
  //       },
  //     },
  //     useSortBy
  //   );
  const [sorting, setSorting] = useState<SortingState>([]);
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility: { id: false },
    },
    enableSortingRemoval: false,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

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
    <table className={classes.Table}>
      <thead>
        <tr>
          <th>test</th>
          <th colSpan={getHeaderGroups.length}>szukaj</th>
        </tr>
        {getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <p onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort()
                      ? {
                          asc: <NorthIcon />,
                          desc: <SouthIcon />,
                        }[header.column.getIsSorted() as string] ?? (
                          <SwapVertIcon />
                        )
                      : null}
                  </p>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
