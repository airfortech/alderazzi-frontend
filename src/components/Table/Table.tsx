import { Row, SortFunc, SortOption, ITable } from "../../types/Table";
import { useMemo, useState } from "react";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { tableSortFunc } from "./tableSortFn";
import classes from "./Table.module.css";

// todo: Nothing found message, translations, catching id's, sticky as option, expandableComponent, passing id as second arg
export const Table = <T extends Row>({
  columns,
  data,
  title,
  linkToId,
  initialSorting,
  isFilterable = false,
  onRowClick,
  expandableRowsComponent,
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

  const filteringSelectors = useMemo(
    () =>
      columns.filter(col => col.isFilterable === true).map(col => col.selector),
    [columns]
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

  const colSpan =
    columns.filter(
      ({ isVisible }) => isVisible === true || isVisible === undefined
    ).length + (expandableRowsComponent ? 1 : 0);

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
        colSpan={colSpan}
        expandableRowsComponent={expandableRowsComponent}
      />
      <TableBody
        columns={columns}
        bodyData={bodyData}
        linkToId={linkToId}
        onRowClick={onRowClick}
        filter={filter}
        filteringSelectors={filteringSelectors}
        colSpan={colSpan}
        expandableRowsComponent={expandableRowsComponent}
      />
    </table>
  );
};
