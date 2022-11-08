import { Row, SortOption, Table } from "../../types/Table";
import { useState } from "react";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import classes from "./Table.module.css";

const sortFunc = <T,>(data: T[], sortOption: SortOption<T>): T[] => {
  const { field, order } = sortOption;
  return [...data].sort((a, b) => {
    const aField = a[field] as string;
    const bField = b[field] as string;
    if (aField === null) return 1;
    if (bField === null) return -1;
    if (aField === null && bField === null) return 0;
    return (
      aField.toString().localeCompare(bField.toString(), "en", {
        numeric: true,
      }) * (order === "asc" ? 1 : -1)
    );
  });
};

export const Table2 = <T extends Row>({
  columns,
  data,
  linkToId,
}: Table<T>) => {
  const [bodyData, setBodyData] = useState(data);
  const [sortOption, setSortOption] = useState<SortOption<T> | undefined>(
    undefined
  );

  const handleSort = (selector: string) => {
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
    setBodyData(sortFunc(bodyData, newSortOption));
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
