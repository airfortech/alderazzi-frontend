import { Row, SortFunc, SortOption, ITable } from "../../types/Table";
import { useState } from "react";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { tableSortFunc } from "./tableSortFn";
import classes from "./Table.module.css";

// todo: initialSorting, title, filtering
export const Table = <T extends Row>({
  columns,
  data,
  linkToId,
}: ITable<T>) => {
  const [bodyData, setBodyData] = useState(data);
  const [sortOption, setSortOption] = useState<SortOption<T> | undefined>(
    undefined
  );

  const handleSort = (selector: string, sortFunc: SortFunc | undefined) => {
    const newSortOption: SortOption<T> = {
      field: selector as keyof T,
      order:
        sortOption?.field === selector
          ? sortOption.order === "asc"
            ? "desc"
            : "asc"
          : "asc",
    };
    setSortOption(newSortOption);
    setBodyData(tableSortFunc(bodyData, newSortOption, sortFunc));
  };

  return (
    <table className={classes.Table}>
      <TableHead
        columns={columns}
        sortOption={sortOption}
        handleSort={handleSort}
      />
      <TableBody columns={columns} bodyData={bodyData} linkToId={linkToId} />
    </table>
  );
};
