import { Row, SortFunc, SortOption, ITable } from "../../types/Table";
import { useMemo, useState } from "react";
import { tableSortFunc } from "./tableSortFn";
import { TableRender } from "./TableRender";

export const Table = <T extends Row>({
  columns,
  data,
  title,
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
    <TableRender
      bodyData={bodyData}
      columns={columns}
      colSpan={colSpan}
      title={title}
      sortOption={sortOption}
      handleSort={handleSort}
      isFilterable={isFilterable}
      filter={filter}
      setFilter={setFilter}
      filteringSelectors={filteringSelectors}
      onRowClick={onRowClick}
      expandableRowsComponent={expandableRowsComponent}
    />
  );
};
