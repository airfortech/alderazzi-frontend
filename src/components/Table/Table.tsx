import { Row, SortFunc, SortOption, ITable } from "../../types/Table";
import { useState } from "react";
import clsx from "clsx";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { tableSortFunc } from "./tableSortFn";
import classes from "./Table.module.css";

// todo: title, filtering
export const Table = <T extends Row>({
  columns,
  data,
  title,
  linkToId,
  initialSorting,
  isFilterable = false,
}: ITable<T>) => {
  const initialBodyData = initialSorting
    ? tableSortFunc(
        data,
        initialSorting,
        columns.find(({ selector }) => selector === initialSorting.field)
          ?.sortFunc
      )
    : data;
  const [bodyData, setBodyData] = useState(initialBodyData);
  const [sortOption, setSortOption] = useState<SortOption<T> | undefined>(
    initialSorting || undefined
  );
  const [filter, setFilter] = useState<string>("");

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
        title={title}
        isFilterable={isFilterable}
        filter={filter}
        setFilter={setFilter}
      />
      <TableBody
        columns={columns}
        bodyData={bodyData}
        linkToId={linkToId}
        filter={filter}
      />
    </table>
  );
};
