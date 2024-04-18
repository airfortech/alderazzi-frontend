import { Row, SortFunc, SortOption, ITable } from "../../types/Table";
import { useEffect, useMemo, useState } from "react";
import { tableSortFunc } from "./tableSortFn";
import { TableRender } from "./TableRender";

export const Table = <T extends Row>({
  columns,
  data,
  title,
  titleTag = "p",
  initialSorting,
  horizontalScroll = "bottom",
  stickyColumn = "none",
  stickyHeaderPosition,
  onRowClick,
  expandableRowsComponent,
  expandableRowsComponentPaddingsDisabled = false,
  initialExpandableRowsState = "hidden",
  counter = false,
  style,
}: ITable<T>) => {
  const initialBodyData = () => {
    return initialSorting
      ? tableSortFunc(
          data,
          initialSorting,
          columns.find(({ selector }) => selector === initialSorting.field)
            ?.sortFunc
        )
      : data;
  };
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

  useEffect(() => {
    setBodyData(initialBodyData());
  }, [data]);

  return (
    <TableRender
      bodyData={bodyData}
      columns={columns}
      colSpan={colSpan}
      title={title}
      titleTag={titleTag}
      sortOption={sortOption}
      handleSort={handleSort}
      filter={filter}
      setFilter={setFilter}
      filteringSelectors={filteringSelectors}
      onRowClick={onRowClick}
      expandableRowsComponent={expandableRowsComponent}
      expandableRowsComponentPaddingsDisabled={
        expandableRowsComponentPaddingsDisabled
      }
      initialExpandableRowsState={initialExpandableRowsState}
      horizontalScroll={horizontalScroll}
      stickyColumn={stickyColumn}
      stickyHeaderPosition={stickyHeaderPosition}
      counter={counter}
      style={style}
    />
  );
};
