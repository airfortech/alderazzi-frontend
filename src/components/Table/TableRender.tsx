import { Row, ITableRender } from "../../types/Table";
import { useEffect, useRef } from "react";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import clsx from "clsx";
import classes from "./Table.module.css";

const tableWrapperClasses = (horizontalScroll: "top" | "bottom") => {
  return clsx(
    classes.TableWrapper,
    classes.scrollBottom,
    horizontalScroll === "top" && classes.scrollHidden
  );
};

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
  horizontalScroll,
}: ITableRender<T>) => {
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const scrollTopRef = useRef<HTMLTableCellElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const theadRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    const tableWrapper = tableWrapperRef.current;
    const scrollTop = scrollTopRef.current;
    const tableContainer = tableContainerRef.current;
    const thead = theadRef.current;

    const scrollTopListener = () => {
      if (!tableWrapper || !scrollTop) return;
      tableWrapper.scrollLeft = scrollTop.scrollLeft;
    };

    if (tableWrapper && scrollTop && tableContainer && thead) {
      const tableWidth = tableContainer.offsetWidth;
      const tableRowsWidth = tableWrapper.querySelector("table")?.offsetWidth;
      const scrollTopContent = scrollTop.querySelector("div");
      scrollTop.style.bottom = -thead.offsetHeight + "px";

      if (scrollTopContent)
        scrollTopContent.style.width = tableRowsWidth + "px";

      scrollTop.addEventListener("scroll", scrollTopListener);
    }

    return () => {
      if (!tableWrapper || !scrollTop) return;
      scrollTop.removeEventListener("scroll", scrollTopListener);
    };
  }, [filter]);

  return (
    <div
      className="tableContainer"
      ref={tableContainerRef}
      style={{ position: "relative" }}
    >
      <TableHeader
        title={title}
        isFilterable={isFilterable}
        filter={filter}
        setFilter={setFilter}
        scrollTopRef={scrollTopRef}
        horizontalScroll={horizontalScroll}
      />
      <div
        className={tableWrapperClasses(horizontalScroll)}
        ref={tableWrapperRef}
      >
        <table className={classes.Table}>
          <TableHead
            columns={columns}
            sortOption={sortOption}
            handleSort={handleSort}
            expandableRowsComponent={expandableRowsComponent}
            theadRef={theadRef}
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
