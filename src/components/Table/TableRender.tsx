import { Row, ITableRender } from "../../types/Table";
import { useEffect, useRef } from "react";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import clsx from "clsx";
import classes from "./Table.module.css";

export const TableRender = <T extends Row>({
  bodyData,
  columns,
  colSpan,
  title,
  sortOption,
  handleSort,
  isFilterable,
  filter,
  setFilter,
  filteringSelectors,
  onRowClick,
  expandableRowsComponent,
}: ITableRender<T>) => {
  const tableWrapperRef = useRef<HTMLDivElement>(null);

  const tableWrapperClasses = () => {
    return clsx(classes.TableWrapper, classes.scrollBottom);
  };

  useEffect(() => {
    if (tableWrapperRef.current) {
      console.log("tableWrapperRef:", tableWrapperRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="tableContainer">
      <TableHeader
        title={title}
        isFilterable={isFilterable}
        filter={filter}
        setFilter={setFilter}
      />
      <div className={tableWrapperClasses()} ref={tableWrapperRef}>
        <table className={classes.Table}>
          <TableHead
            columns={columns}
            colSpan={colSpan}
            sortOption={sortOption}
            handleSort={handleSort}
            expandableRowsComponent={expandableRowsComponent}
          />
          <TableBody
            columns={columns}
            bodyData={bodyData}
            onRowClick={onRowClick}
            filter={filter}
            filteringSelectors={filteringSelectors}
            colSpan={colSpan}
            expandableRowsComponent={expandableRowsComponent}
          />
        </table>
      </div>
    </div>
  );
};
